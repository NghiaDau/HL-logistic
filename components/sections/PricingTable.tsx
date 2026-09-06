import { site } from "@/content/site";
import Reveal from "@/components/Reveal";
import CallButton from "@/components/CallButton";
import ZaloButton from "@/components/ZaloButton";
import { Icon } from "@/components/icons";

export default function PricingTable() {
  const { rows, note, ctaText } = site.pricing;
  const featured = Math.min(1, rows.length - 1);

  return (
    <section id="bang-gia" className="section-pad bg-surface-alt">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Bảng giá</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Giá tham khảo, minh bạch từ đầu
          </h2>
          <p className="mt-3 text-muted">
            Mức giá dưới đây để bạn hình dung chi phí. Giá chính xác phụ thuộc
            loại hàng, kích thước và điểm đến.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {rows.map((row, i) => {
            const isFeatured = i === featured;
            return (
              <Reveal key={row.weightRange} delay={i * 80}>
                <div
                  className={`card card-hover relative h-full p-6 text-center ${
                    isFeatured
                      ? "border-transparent bg-gradient-to-b from-brand to-brand-dark text-white shadow-[var(--shadow-card)]"
                      : ""
                  }`}
                >
                  {isFeatured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cta px-3 py-1 text-xs font-bold text-white shadow-[var(--shadow-cta)]">
                      Phổ biến nhất
                    </span>
                  )}
                  <div
                    className={`text-sm font-semibold ${
                      isFeatured ? "text-white/80" : "text-muted"
                    }`}
                  >
                    {row.weightRange}
                  </div>
                  <div
                    className={`mt-2 text-2xl font-extrabold ${
                      isFeatured ? "text-white" : "text-brand-dark"
                    }`}
                  >
                    {row.pricePerKg}
                  </div>
                  {row.note && (
                    <div
                      className={`mt-1 text-xs ${
                        isFeatured ? "text-white/80" : "text-cta-dark"
                      }`}
                    >
                      {row.note}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-4 text-xs text-muted">{note}</p>

        <Reveal className="mt-8">
          <div className="relative overflow-hidden rounded-3xl bg-brand-darker p-6 text-white md:p-8">
            <div
              aria-hidden
              className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(120%_120%_at_100%_0%,#000,transparent_75%)]"
            />
            <div className="relative flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-extrabold md:text-xl">{ctaText}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-white/75">
                  <Icon name="check" width={16} height={16} className="text-cta" />
                  {site.contact.responseTimePromise}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CallButton />
                <ZaloButton variant="ghost" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
