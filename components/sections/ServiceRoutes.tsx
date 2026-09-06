import { site } from "@/content/site";
import Reveal from "@/components/Reveal";
import CallButton from "@/components/CallButton";
import { Icon } from "@/components/icons";

export default function ServiceRoutes() {
  const { europe, others, estimates } = site.routes;

  return (
    <section id="tuyen-duong" className="section-pad bg-surface">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Tuyến đường</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Chúng tôi gửi hàng tới đâu?
          </h2>
          <p className="mt-3 text-muted">
            Nhận gửi hàng đi hầu hết các nước châu Âu và nhiều quốc gia ở các
            châu lục khác. Không thấy nơi bạn cần gửi? Gọi để hỏi thêm.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {[
            { title: "Châu Âu", list: europe, icon: "plane" as const },
            { title: "Châu lục khác", list: others, icon: "track" as const },
          ].map((group, gi) => (
            <Reveal key={group.title} delay={gi * 90}>
              <div className="card h-full p-6">
                <h3 className="flex items-center gap-2 font-bold text-brand-dark">
                  <span className="inline-flex rounded-lg bg-brand-light p-1.5">
                    <Icon name={group.icon} width={18} height={18} />
                  </span>
                  {group.title}
                  <span className="ml-auto text-sm font-semibold text-muted">
                    {group.list.length} quốc gia
                  </span>
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.list.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-line bg-surface-alt px-3 py-1 text-sm font-medium transition-colors hover:border-brand/40 hover:bg-brand-light"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="card overflow-hidden p-0">
            <div className="flex items-center gap-2 border-b border-line bg-surface-alt px-6 py-3 text-sm font-semibold text-muted">
              <Icon name="clock" width={16} height={16} />
              Thời gian vận chuyển ước tính (tính từ khi hàng rời kho)
            </div>
            <ul className="divide-y divide-line">
              {estimates.map((row) => (
                <li
                  key={row.region}
                  className="flex items-center justify-between gap-4 px-6 py-3.5 text-sm"
                >
                  <span>{row.region}</span>
                  <span className="shrink-0 rounded-full bg-brand-light px-3 py-1 font-bold text-brand-dark">
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <div className="flex flex-col items-start gap-3 rounded-2xl bg-brand-light p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-brand-dark">
              Cần gửi tới quốc gia khác hoặc muốn biết thời gian chính xác?
            </p>
            <CallButton className="!min-h-[46px] !px-5 !text-sm" showNumber={false} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
