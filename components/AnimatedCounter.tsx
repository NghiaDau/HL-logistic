"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

const fmt = (n: number, decimals: number) =>
  n.toLocaleString("vi-VN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/**
 * Hiển thị `value`; khi cuộn vào tầm nhìn thì "chạy số" từ 0 lên.
 *
 * An toàn: giá trị khởi tạo = số cuối cùng, nên SSR / khi chưa hydrate /
 * prefers-reduced-motion đều thấy đúng con số. Animation chỉ là điểm cộng.
 */
export default function AnimatedCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  durationMs = 1400,
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started.current) return;

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    let failsafe = 0;
    const animate = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(value * eased);
        if (t < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      setDisplay(0);
      requestAnimationFrame(tick);
      // Dự phòng: nếu rAF bị treo/tiết lưu, vẫn chốt về số cuối.
      failsafe = window.setTimeout(() => setDisplay(value), durationMs + 500);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          animate();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (failsafe) window.clearTimeout(failsafe);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref} className={`tnum ${className}`.trim()}>
      {prefix}
      {fmt(display, decimals)}
      {suffix}
    </span>
  );
}
