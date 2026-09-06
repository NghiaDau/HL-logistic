/* ==================================================================
   Đo lường lượt bấm Gọi / Zalo (US-14) + giữ tham số UTM (US-15).
   Sự kiện đẩy vào dataLayer của GTM với tên "contact_click".
   Trong GTM: tạo Trigger = Custom Event "contact_click", gắn Tag
   (GA4 event / Facebook Pixel "Contact") để đọc contact_method + utm_*.
================================================================== */

export type ContactMethod = "call" | "zalo";

type UtmParams = Partial<
  Record<
    | "utm_source"
    | "utm_medium"
    | "utm_campaign"
    | "utm_term"
    | "utm_content",
    string
  >
>;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const STORAGE_KEY = "hl_utm";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Đọc UTM từ URL hiện tại, lưu vào sessionStorage để dùng lại cho
 * mọi sự kiện trong phiên. Gọi 1 lần khi trang load (client).
 */
export function captureUtmParams(): void {
  if (typeof window === "undefined") return;
  try {
    const search = new URLSearchParams(window.location.search);
    const found: UtmParams = {};
    for (const key of UTM_KEYS) {
      const value = search.get(key);
      if (value) found[key] = value;
    }
    if (Object.keys(found).length > 0) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    }
  } catch {
    /* sessionStorage có thể bị chặn — bỏ qua */
  }
}

function readStoredUtm(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}

/**
 * Ghi nhận 1 lượt bấm nút liên hệ. Gọi trong onClick của nút
 * trước khi trình duyệt điều hướng sang tel:/Zalo.
 */
export function trackContactClick(method: ContactMethod): void {
  if (typeof window === "undefined") return;
  const utm = readStoredUtm();

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "contact_click",
    contact_method: method,
    ...utm,
  });

  // Bắn trực tiếp cho Facebook Pixel kể cả khi chưa cấu hình qua GTM
  if (typeof window.fbq === "function") {
    window.fbq("track", "Contact", { method, ...utm });
  }
}
