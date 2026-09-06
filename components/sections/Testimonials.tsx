import { site } from "@/content/site";
import Reveal from "@/components/Reveal";

const AVATAR_TINTS = [
  "bg-blue-100 text-blue-700",
  "bg-amber-100 text-amber-700",
  "bg-emerald-100 text-emerald-700",
  "bg-violet-100 text-violet-700",
  "bg-rose-100 text-rose-700",
  "bg-cyan-100 text-cyan-700",
];

function initials(name: string) {
  return name
    .replace(/^(Chị|Anh|Cô|Chú|Bác|Em|Ông|Bà)\s+/i, "")
    .split(/\s+/)
    .slice(-2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Testimonials() {
  return (
    <section className="section-pad bg-surface-alt">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Khách hàng</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Hàng chục nghìn kiện hàng đã đến tay người nhận
          </h2>
          <p className="mt-3 text-muted">
            Phản hồi từ những người đã gửi hàng cho gia đình ở nước ngoài.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {site.testimonials.map((t, i) => (
            <Reveal key={t.name + t.location} delay={i * 70}>
              <figure className="card card-hover relative h-full p-6">
                <span
                  aria-hidden
                  className="absolute right-5 top-3 font-serif text-6xl leading-none text-brand/12"
                >
                  &rdquo;
                </span>
                <div className="text-cta" aria-label="Đánh giá 5 sao">
                  ★★★★★
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      AVATAR_TINTS[i % AVATAR_TINTS.length]
                    }`}
                  >
                    {initials(t.name)}
                  </span>
                  <span className="text-sm">
                    <span className="block font-bold text-brand-dark">
                      {t.name}
                    </span>
                    <span className="text-muted">{t.location}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
