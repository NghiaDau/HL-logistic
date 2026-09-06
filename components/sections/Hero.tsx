import { site } from "@/content/site";
import CallButton from "@/components/CallButton";
import ZaloButton from "@/components/ZaloButton";
import Reveal from "@/components/Reveal";
import { Icon, PhoneIcon } from "@/components/icons";

export default function Hero() {
  const { eyebrow, headline, subheadline, highlights, sampleRoute } = site.hero;

  return (
    <section className="relative isolate overflow-hidden bg-brand-darker text-white">
      {/* Nền trang trí */}
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(120%_90%_at_50%_0%,#000_35%,transparent_85%)]"
      />
      <div
        aria-hidden
        className="glow -z-10 h-72 w-72 bg-cta/40"
        style={{ top: "-4rem", right: "-3rem" }}
      />
      <div
        aria-hidden
        className="glow -z-10 h-80 w-80 bg-brand/50"
        style={{ bottom: "-6rem", left: "-4rem" }}
      />

      {/* Đường bay */}
      <svg
        aria-hidden
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60"
      >
        <path
          id="heroFlight"
          d="M-20 430 C 300 470, 520 120, 1220 60"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="2"
          className="flight-dash"
        />
        <circle r="4.5" fill="#fb8534">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            keyPoints="0.04;0.96;0.04"
            keyTimes="0;0.5;1"
            calcMode="spline"
            keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
          >
            <mpath href="#heroFlight" />
          </animateMotion>
        </circle>
      </svg>

      <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr]">
        {/* Cột nội dung */}
        <Reveal>
          <p className="eyebrow !bg-white/10 !text-white ring-1 ring-white/15">
            <Icon name="plane" width={15} height={15} />
            {eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] md:text-[3.25rem]">
            Gửi hàng đi{" "}
            <span className="gradient-text">châu Âu, Mỹ, Úc</span>
            <br className="hidden sm:block" /> nhanh chóng, an toàn, giá tốt
          </h1>
          <span className="sr-only">{headline}</span>

          <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
            {subheadline}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {highlights.map((h) => (
              <li
                key={h}
                className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-sm text-white/90 ring-1 ring-white/12"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cta text-white">
                  <Icon name="check" width={11} height={11} />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <ZaloButton variant="ghost">Nhắn Zalo nhận báo giá</ZaloButton>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
            <span className="text-cta">★★★★★</span>
            4.9/5 · {site.contact.responseTimePromise}
          </p>
        </Reveal>

        {/* Cột thẻ nổi */}
        <Reveal delay={120} className="hidden md:block">
          <div className="relative mx-auto max-w-sm">
            <div className="relative rounded-3xl bg-white p-5 text-ink shadow-[var(--shadow-float)]">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Tuyến mẫu</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                  <Icon name="check" width={12} height={12} /> Đã xác nhận
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="text-center">
                  <div className="text-lg font-extrabold">{sampleRoute.from}</div>
                  <div className="text-xs text-muted">Điểm gửi</div>
                </div>
                <div className="relative flex-1">
                  <div className="border-t-2 border-dashed border-brand/40" />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-light p-1 text-brand-dark">
                    <Icon name="plane" width={16} height={16} />
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-lg font-extrabold">{sampleRoute.to}</div>
                  <div className="text-xs text-muted">Điểm nhận</div>
                </div>
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-surface-alt p-3">
                  <dt className="text-xs text-muted">Thời gian</dt>
                  <dd className="mt-0.5 font-bold text-brand-dark">
                    {sampleRoute.time}
                  </dd>
                </div>
                <div className="rounded-xl bg-surface-alt p-3">
                  <dt className="text-xs text-muted">Cước tham khảo</dt>
                  <dd className="mt-0.5 font-bold text-brand-dark">
                    {sampleRoute.price}
                  </dd>
                </div>
              </dl>

              <div className="mt-4 flex items-center gap-2 rounded-xl bg-cta/10 px-3 py-2 text-sm font-semibold text-cta-dark">
                <PhoneIcon width={16} height={16} />
                Gọi {site.contact.hotline} để chốt lô hàng của bạn
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
