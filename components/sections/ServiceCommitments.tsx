import { site } from "@/content/site";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/icons";

export default function ServiceCommitments() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Cam kết dịch vụ</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Vì sao khách hàng chọn chúng tôi
          </h2>
          <p className="mt-3 text-muted">
            Những cam kết cụ thể đi cùng mỗi đơn hàng — không chỉ là lời hứa.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.commitments.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div className="card card-hover group h-full p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-light to-brand-100 text-brand-dark transition-colors group-hover:from-brand group-hover:to-brand-dark group-hover:text-white">
                  <Icon name={c.icon} width={24} height={24} />
                </span>
                <h3 className="mt-4 font-bold">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
