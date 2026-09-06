import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Thẻ bọc, mặc định <div> */
  as?: ElementType;
  /**
   * Trễ nhẹ để các phần tử hiện lần lượt. Hiện chỉ mang tính khai báo —
   * hiệu ứng scroll-driven đã tự lệch nhau theo vị trí phần tử.
   */
  delay?: number;
  className?: string;
};

/**
 * Bọc nội dung để nó trượt lên + mờ dần khi cuộn vào tầm nhìn.
 *
 * Hiệu ứng chạy hoàn toàn bằng CSS scroll-driven animation
 * (xem `[data-reveal]` trong globals.css) — KHÔNG cần JavaScript, nên
 * nội dung không bao giờ bị kẹt ẩn. Trình duyệt không hỗ trợ, hoặc bật
 * prefers-reduced-motion, sẽ thấy nội dung hiển thị bình thường.
 */
export default function Reveal({ children, as, className = "" }: Props) {
  const Tag = as ?? "div";
  return (
    <Tag data-reveal="" className={className || undefined}>
      {children}
    </Tag>
  );
}
