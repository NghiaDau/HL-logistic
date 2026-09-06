"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/content/site";
import CallButton from "@/components/CallButton";

const NAV = [
  { href: "#tuyen-duong", label: "Tuyến đường" },
  { href: "#bang-gia", label: "Bảng giá" },
  { href: "#faq", label: "Hỏi đáp" },
  { href: "#lien-he", label: "Liên hệ" },
];

/**
 * Header cố định: logo + tên công ty + menu nhanh. Đổ bóng khi cuộn.
 */
export default function SiteHeader() {
  const { logo, name, tagline } = site.brand;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-shadow ${
        scrolled
          ? "border-line bg-white/85 shadow-[0_6px_24px_-14px_rgba(15,27,45,0.35)] backdrop-blur"
          : "border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#"
          className="flex items-center gap-2.5"
          aria-label={`${name} — về đầu trang`}
        >
          <Image
            src={logo}
            alt={`Logo ${name}`}
            width={40}
            height={40}
            priority
            className="h-9 w-9 rounded-xl md:h-10 md:w-10"
          />
          <span className="leading-tight">
            <span className="block text-base font-extrabold text-ink md:text-lg">
              {name}
            </span>
            {tagline && (
              <span className="block text-[11px] text-muted md:text-xs">
                {tagline}
              </span>
            )}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-muted transition-colors hover:bg-brand-light hover:text-brand-dark"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <CallButton
          className="hidden !min-h-[42px] !px-4 !text-sm sm:inline-flex"
        />
      </div>
    </header>
  );
}
