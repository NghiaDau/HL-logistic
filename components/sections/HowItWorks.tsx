import { site } from "@/content/site";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/icons";

const stepIcons = ["headset", "box", "plane", "check"] as const;

export default function HowItWorks() {
  return (
    <section className="section-pad bg-surface-alt">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Quy trình</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Gửi hàng chỉ với 4 bước
          </h2>
          <p className="mt-3 text-muted">
            Quy trình đơn giản, bạn không cần biết trước thủ tục logistics.
          </p>
        </Reveal>

        <ol className="relative mt-10 grid gap-6 md:grid-cols-4">
          {/* Đường nối ngang (desktop) */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-brand/25 md:block"
          />
          {site.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="relative">
              <div className="card card-hover h-full p-5">
                <div className="flex items-center gap-3">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-lg font-extrabold text-white shadow-[var(--shadow-cta)] shadow-brand/20">
                    {i + 1}
                  </span>
                  <Icon
                    name={stepIcons[i] ?? "box"}
                    width={22}
                    height={22}
                    className="text-brand"
                  />
                </div>
                <h3 className="mt-4 font-bold">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
