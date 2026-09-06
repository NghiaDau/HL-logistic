import { site } from "@/content/site";
import CallButton from "@/components/CallButton";
import ZaloButton from "@/components/ZaloButton";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/icons";

export default function FinalCta() {
  const { hotline, hotlineTel, zaloLink, workingHours, address, responseTimePromise } =
    site.contact;

  const details = [
    { icon: "headset" as const, label: "Hotline", value: hotline, href: `tel:${hotlineTel}` },
    { icon: "clock" as const, label: "Giờ làm việc", value: workingHours },
    { icon: "box" as const, label: "Zalo", value: "Nhắn tin tư vấn", href: zaloLink, external: true },
    { icon: "customs" as const, label: "Địa chỉ", value: address },
  ];

  return (
    <section
      id="lien-he"
      className="relative isolate overflow-hidden bg-brand-darker text-white"
    >
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <div
        aria-hidden
        className="glow -z-10 h-72 w-72 bg-cta/30"
        style={{ top: "-3rem", left: "50%" }}
      />

      <div className="container-page py-16 text-center md:py-24">
        <Reveal>
          <span className="eyebrow !bg-white/10 !text-white ring-1 ring-white/15">
            Liên hệ
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold md:text-4xl">
            Sẵn sàng gửi hàng? <span className="gradient-text">Gọi ngay</span> để
            được tư vấn miễn phí
          </h2>
          <p className="mt-3 text-white/80">
            {responseTimePromise}. Báo giá rõ ràng, không ràng buộc.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton />
            <ZaloButton variant="ghost">Nhắn Zalo</ZaloButton>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="mx-auto mt-12 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
            {details.map((d) => {
              const inner = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cta ring-1 ring-white/15">
                    <Icon name={d.icon} width={20} height={20} />
                  </span>
                  <span className="min-w-0">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-white/55">
                      {d.label}
                    </dt>
                    <dd className="truncate font-semibold">{d.value}</dd>
                  </span>
                </>
              );
              return d.href ? (
                <a
                  key={d.label}
                  href={d.href}
                  {...(d.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={d.label}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                >
                  {inner}
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
