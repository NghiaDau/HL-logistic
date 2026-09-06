"use client";

import type { ReactNode } from "react";
import { site } from "@/content/site";
import { trackContactClick } from "@/lib/tracking";
import { ChatIcon } from "@/components/icons";

type Props = {
  variant?: "cta" | "outline" | "ghost";
  className?: string;
  children?: ReactNode;
};

const cls = {
  cta: "btn-cta",
  outline: "btn-outline",
  ghost: "btn-ghost",
} as const;

export default function ZaloButton({
  variant = "outline",
  className = "",
  children,
}: Props) {
  return (
    <a
      href={site.contact.zaloLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackContactClick("zalo")}
      className={`${cls[variant]} ${className}`.trim()}
      aria-label="Nhắn tin Zalo để được tư vấn"
      data-cta="zalo"
    >
      <ChatIcon width={20} height={20} />
      <span>{children ?? "Nhắn Zalo"}</span>
    </a>
  );
}
