import { site } from "@/content/site";
import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";

export default function TrustBar() {
  return (
    <section aria-label="Số liệu uy tín" className="relative bg-surface-alt">
      <div className="container-page">
        <Reveal className="relative z-10 -mt-10 md:-mt-14">
          <div className="card grid grid-cols-2 gap-y-6 rounded-3xl px-6 py-7 shadow-[var(--shadow-card)] md:grid-cols-4 md:divide-x md:divide-line md:py-8">
            {site.trustBar.slice(0, 4).map((stat) => (
              <div key={stat.label} className="px-2 text-center md:px-4">
                <div className="text-2xl font-extrabold text-brand-dark md:text-[2rem]">
                  <AnimatedCounter
                    value={stat.value}
                    decimals={stat.decimals ?? 0}
                    prefix={stat.prefix ?? ""}
                    suffix={stat.suffix ?? ""}
                  />
                </div>
                <div className="mt-1.5 text-sm leading-snug text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
