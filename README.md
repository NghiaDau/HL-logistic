# Landing Page — Vận chuyển hàng không quốc tế (HLLogistic)

Landing page **một trang** cho khách cá nhân gửi hàng đi châu Âu / Mỹ / Úc bằng
đường hàng không. Mục tiêu duy nhất: khách **bấm gọi điện** hoặc **nhắn Zalo**.

- **Stack:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4
- **Xuất bản:** static export (`next build` → thư mục `out/`), deploy Vercel/bất kỳ static host
- Tài liệu gốc: [plan-landing-page-van-chuyen.md](plan-landing-page-van-chuyen.md),
  [user-stories-landing-page-hl.md](user-stories-landing-page-hl.md)

## Chạy dự án

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # sinh ra thư mục out/ (HTML tĩnh)
npm run lint
npm run typecheck
```

Xem thử bản build tĩnh:

```bash
npx serve out
```

## Sửa nội dung — chỉ 1 file

Toàn bộ nội dung nằm trong **[content/site.ts](content/site.ts)**. Không cần đụng
vào code giao diện để đổi:

| Muốn đổi | Sửa ở |
| --- | --- |
| Logo, tên công ty, slogan, tên pháp nhân | `brand.logo`, `brand.name`, `brand.tagline`, `brand.legalName`, `brand.since` |
| Số hotline (hiển thị + link gọi) | `contact.hotline`, `contact.hotlineTel` (E.164, ví dụ `+84901234567`) |
| Link Zalo | `contact.zaloLink` |
| Giờ làm việc, địa chỉ, cam kết phản hồi | `contact.*` |
| Con số uy tín (trust bar) | `trustBar[]` (tối đa 4) |
| Vấn đề & giải pháp | `problems[]` |
| 4 bước quy trình | `steps[]` |
| Danh sách quốc gia + thời gian vận chuyển | `routes.europe`, `routes.others`, `routes.estimates` |
| Bảng giá tham khảo | `pricing.rows`, `pricing.note` |
| Cam kết / điểm khác biệt | `commitments[]` (icon chọn trong danh sách `IconName`) |
| Đánh giá khách hàng | `testimonials[]` (phải là phản hồi thật, đã xin phép) |
| FAQ | `faq[]` |
| Tiêu đề SEO, mô tả, domain, ảnh OG | `seo.*` |

Đổi **màu thương hiệu**: sửa biến CSS trong [app/globals.css](app/globals.css)
khối `@theme` (`--color-brand`, `--color-cta`…).

Đổi **logo**: thay [public/images/logo.svg](public/images/logo.svg) bằng logo thật
(SVG hoặc PNG nền trong suốt, hình vuông ~48×48). Header hiển thị logo cạnh
`brand.name` + `brand.tagline`.

Đổi **ảnh**: thay file trong [public/images/](public/images/). Hiện là ảnh SVG
placeholder — nên thay `hero` bằng ảnh thật `.webp` đã nén và `og-image` bằng ảnh
`.jpg/.png` kích thước 1200×630, rồi cập nhật đường dẫn trong `hero.bgImage` /
`seo.ogImage`.

## Tracking (GTM + Facebook Pixel)

Điền ID trong `content/site.ts` → `tracking`:

```ts
tracking: {
  gtmId: "GTM-XXXXXXX",
  fbPixelId: "000000000000000",
  clarityId: "",            // Microsoft Clarity (tuỳ chọn, US-16)
}
```

Khi ID để trống thì không script nào được nạp (an toàn khi dev).

**Sự kiện bấm nút:** mỗi lần khách bấm "Gọi" hoặc "Zalo", trang đẩy vào
`dataLayer`:

```js
{ event: "contact_click", contact_method: "call" | "zalo", utm_source?, utm_medium?, ... }
```

Trong Google Tag Manager:

1. **Trigger** → *Custom Event*, tên sự kiện `contact_click`.
2. **Tag** GA4 Event (ví dụ tên `contact_click`) hoặc Facebook Pixel *Contact*,
   đọc biến `contact_method` và các `utm_*` từ Data Layer.
3. Kiểm tra bằng **GTM Preview** và **Facebook Events Manager → Test Events**
   trước khi chạy quảng cáo.

Pixel cũng tự bắn `fbq('track', 'Contact', { method })` trực tiếp nếu đã cấu hình
`fbPixelId`.

**UTM:** tham số `utm_*` trên URL quảng cáo được lưu vào `sessionStorage` khi tải
trang và đính kèm vào mọi sự kiện `contact_click` (US-15). Static export giữ
nguyên query string nên link `...?utm_source=fb&utm_campaign=...` hoạt động bình
thường.

## Deploy Vercel

- Import repo vào Vercel, framework tự nhận là **Next.js**.
- `next.config.mjs` đã đặt `output: "export"` → Vercel phục vụ HTML tĩnh trong `out/`.
- Trỏ domain/subdomain (ví dụ `guihangchauau.tencongty.com`) và cập nhật
  `seo.siteUrl` cho đúng.

## Checklist trước khi ra mắt

- [ ] `contact.hotline` / `hotlineTel` là số thật, bấm gọi được trên iOS + Android
- [ ] `contact.zaloLink` mở đúng chat, test trên điện thoại thật
- [ ] Trang hiển thị tốt và tải nhanh trên di động (ưu tiên số 1)
- [ ] Đã điền `tracking.gtmId` + `tracking.fbPixelId`; đã tạo trigger/tag
      `contact_click` và verify sự kiện bắn đúng
- [ ] Giá tham khảo, tuyến đường, FAQ đã được duyệt, không còn chữ "TODO"
- [ ] Testimonials là thật, đã xin phép sử dụng
- [ ] Đã thay ảnh placeholder (`hero`, `og-image`) bằng ảnh thật
- [ ] Kiểm tra chính tả và tính nhất quán (hotline, giờ làm việc…)
- [ ] Google PageSpeed Insights (mobile) ≥ 80
- [ ] Link quảng cáo gắn UTM hoạt động, tham số không bị mất khi tải trang

## Cấu trúc thư mục

```
app/            layout.tsx (SEO, font, header, footer, GTM noscript, sticky bar), page.tsx, globals.css, icon.svg
components/
  sections/     10 section theo thứ tự cuộn trang
  SiteHeader.tsx / SiteFooter.tsx   logo + tên công ty (header cố định) / chân trang
  CallButton.tsx / ZaloButton.tsx   nút CTA + bắn sự kiện tracking
  StickyContactBar.tsx              thanh nút nổi (chỉ mobile)
  Analytics.tsx                     nạp GTM / Pixel / Clarity
  icons.tsx                         bộ icon inline SVG
content/site.ts  toàn bộ nội dung + cấu hình
lib/tracking.ts  trackContactClick(), captureUtmParams()
public/images/   ảnh (đang là SVG placeholder)
```
