import CallButton from "@/components/CallButton";
import ZaloButton from "@/components/ZaloButton";

/**
 * Thanh nút nổi cố định đáy màn hình — chỉ hiển thị trên mobile (US-13).
 * Ẩn ở >= md. Body có padding-bottom bù để không che nội dung cuối.
 */
export default function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/90 shadow-[0_-8px_30px_-12px_rgba(15,27,45,0.25)] backdrop-blur md:hidden">
      <div
        className="mx-auto flex max-w-md gap-2.5 px-3 py-2.5"
        style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
      >
        <CallButton
          className="flex-1 !min-h-[48px] !text-[15px]"
          showNumber={false}
        >
          Gọi ngay
        </CallButton>
        <ZaloButton
          className="flex-1 !min-h-[48px] !text-[15px]"
          variant="outline"
        />
      </div>
    </div>
  );
}
