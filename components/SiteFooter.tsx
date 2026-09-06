import Image from "next/image";
import { site } from "@/content/site";

const NAV = [
  { href: "#tuyen-duong", label: "Tuyến đường phục vụ" },
  { href: "#bang-gia", label: "Bảng giá tham khảo" },
  { href: "#faq", label: "Câu hỏi thường gặp" },
  { href: "#lien-he", label: "Liên hệ" },
];

export default function SiteFooter() {
  const { legalName, name, since, logo, tagline } = site.brand;
  const { hotline, hotlineTel, workingHours, address, zaloLink } = site.contact;
  const year = new Date().getFullYear();
  const range = since && since < year ? `${since}–${year}` : `${year}`;
  const hasAddress = address && !address.startsWith("TODO");

  return (
    <footer className="border-t border-white/10 bg-ink text-white/70">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src={logo}
              alt={`Logo ${name}`}
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg"
            />
            <span className="leading-tight">
              <span className="block font-extrabold text-white">{name}</span>
              {tagline && (
                <span className="block text-xs text-white/50">{tagline}</span>
              )}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm">
            Dịch vụ vận chuyển hàng không quốc tế cho cá nhân: gửi quà, đồ dùng,
            đặc sản đi châu Âu, Mỹ, Úc và nhiều quốc gia khác.
          </p>
        </div>

        <nav aria-label="Liên kết nhanh">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/40">
            Nội dung
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a className="transition-colors hover:text-white" href={n.href}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/40">
            Liên hệ
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              Hotline:{" "}
              <a className="font-semibold text-white" href={`tel:${hotlineTel}`}>
                {hotline}
              </a>
            </li>
            <li>
              Zalo:{" "}
              <a
                className="font-semibold text-white hover:underline"
                href={zaloLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Nhắn tin tư vấn
              </a>
            </li>
            <li>{workingHours}</li>
            {hasAddress && <li>{address}</li>}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/45">
          <p className="font-semibold text-white/70">{legalName}</p>
          <p className="mt-1">
            © {range} {name}. Đã đăng ký bản quyền.
          </p>
        </div>
      </div>
    </footer>
  );
}
