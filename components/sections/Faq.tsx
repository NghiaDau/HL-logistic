import { site } from "@/content/site";
import Reveal from "@/components/Reveal";
import CallButton from "@/components/CallButton";

/**
 * FAQ accordion dùng <details>/<summary> — mở/đóng được kể cả khi tắt JS.
 * Hiệu ứng mượt bằng grid-rows 0fr → 1fr (bỏ qua êm nếu trình duyệt cũ).
 */
export default function Faq() {
  return (
    <section id="faq" className="section-pad bg-surface">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <span className="eyebrow">Giải đáp</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Câu hỏi thường gặp
          </h2>
        </Reveal>

        <Reveal className="mt-8">
          <div className="card divide-y divide-line overflow-hidden p-0">
            {site.faq.map((item) => (
              <details key={item.q} className="group px-5 open:bg-surface-alt">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-ink transition-colors hover:text-brand-dark [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand transition-transform duration-300 group-open:rotate-45">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pb-4 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-6 text-center">
          <p className="text-sm text-muted">Còn thắc mắc khác chưa có ở đây?</p>
          <CallButton className="mt-3" />
        </Reveal>
      </div>
    </section>
  );
}
