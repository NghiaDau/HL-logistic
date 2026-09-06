"use client";

import type { ReactNode } from "react";
import { site } from "@/content/site";
import { trackContactClick } from "@/lib/tracking";
import { PhoneIcon } from "@/components/icons";

type Props = {
  variant?: "cta" | "outline" | "ghost";
  className?: string;
  showNumber?: boolean;
  children?: ReactNode;
};

const cls = {
  cta: "btn-cta",
  outline: "btn-outline",
  ghost: "btn-ghost",
} as const;

export default function CallButton({
  variant = "cta",
  className = "",
  showNumber = true,
  children,
}: Props) {
  const label =
    children ?? (showNumber ? `Gọi ${site.contact.hotline}` : "Gọi ngay");
  return (
    <a
      href={`tel:${site.contact.hotlineTel}`}
      onClick={() => trackContactClick("call")}
      className={`${cls[variant]} ${className}`.trim()}
      aria-label={`Gọi hotline ${site.contact.hotline}`}
      data-cta="call"
    >
      <PhoneIcon width={20} height={20} />
      <span>{label}</span>
    </a>
  );
}
