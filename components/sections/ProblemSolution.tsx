import { site } from "@/content/site";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/icons";

export default function ProblemSolution() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Nỗi lo &amp; giải pháp</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Gửi hàng ra nước ngoài — điều gì khiến bạn phân vân?
          </h2>
          <p className="mt-3 text-muted">
            Đây là những lo lắng thường gặp nhất, và cách chúng tôi xử lý từng
            việc để bạn yên tâm gửi hàng.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {site.problems.map((item, i) => (
            <Reveal key={item.problem} delay={i * 80}>
              <div className="card card-hover relative h-full overflow-hidden p-5 pl-6">
                <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-cta to-cta-dark" />
                <p className="flex items-start gap-2 font-bold text-ink">
                  <span className="mt-0.5 inline-flex shrink-0 rounded-lg bg-cta/12 p-1.5 text-cta-dark">
                    <Icon name="shield" width={18} height={18} />
                  </span>
                  {item.problem}
                </p>
                <p className="mt-3 flex gap-2 text-sm text-muted">
                  <Icon
                    name="check"
                    width={18}
                    height={18}
                    className="mt-0.5 shrink-0 text-brand"
                  />
                  <span>{item.solution}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
