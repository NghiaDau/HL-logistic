# User Stories — Landing Page Vận Chuyển Hàng Hoá (HLLogistic)

**Dựa trên:** `plan-landing-page-van-chuyen.md`
**Đối tượng chính:** Khách hàng cá nhân gửi hàng đi châu Âu/châu lục khác (đường hàng không)
**Ngày lập:** 06/09/2026

Quy ước: mỗi story theo mẫu "Là [vai trò], tôi muốn [nhu cầu], để [lợi ích]", kèm tiêu chí chấp nhận (Acceptance Criteria) và độ ưu tiên theo MoSCoW (Must/Should/Could). Hai vai trò chính xuất hiện xuyên suốt: **Khách hàng (Visitor)** — người xem trang để tìm dịch vụ gửi hàng, và **Chủ shop/Marketing (Admin)** — người vận hành trang và chạy quảng cáo.

---

## Epic 1: Hero & CTA chính

**US-01 — Nhìn thấy ngay lợi ích dịch vụ khi vào trang**
Là khách hàng, tôi muốn thấy ngay tiêu đề nêu rõ dịch vụ gửi hàng đi châu Âu/châu lục khác khi vừa vào trang, để tôi biết ngay đây có đúng là thứ mình cần tìm không.
*Acceptance Criteria:* Tiêu đề chính (H1) hiển thị trong 1 màn hình đầu tiên (above the fold) không cần cuộn; có subheadline mô tả dịch vụ hàng không quốc tế cho cá nhân.
*Ưu tiên:* Must

**US-02 — Gọi điện ngay từ Hero**
Là khách hàng, tôi muốn bấm vào số điện thoại ngay ở đầu trang để gọi được ngay lập tức, để tôi không mất công tìm cách liên hệ.
*Acceptance Criteria:* Số hotline dùng link `tel:`; nút bấm đủ lớn để thao tác bằng ngón tay trên di động; test trên iOS và Android đều mở được ứng dụng gọi điện.
*Ưu tiên:* Must

**US-03 — Nhắn Zalo ngay từ Hero**
Là khách hàng, tôi muốn bấm nút Zalo ở đầu trang để mở chat tư vấn ngay, để tôi có thể hỏi mà không cần gọi điện nếu đang bất tiện.
*Acceptance Criteria:* Nút Zalo trỏ thẳng tới Zalo OA/số Zalo chính thức; mở đúng app Zalo trên di động hoặc web Zalo trên desktop.
*Ưu tiên:* Must

---

## Epic 2: Thanh tin cậy nhanh (Trust bar)

**US-04 — Thấy số liệu uy tín ngay từ đầu**
Là khách hàng, tôi muốn thấy nhanh số năm hoạt động, số đơn đã gửi thành công, số quốc gia phục vụ, để tôi yên tâm hơn khi chưa từng dùng dịch vụ.
*Acceptance Criteria:* Trust bar hiển thị ngay sau Hero, tối đa 4 con số, không cần cuộn quá 1 màn hình.
*Ưu tiên:* Should

---

## Epic 3: Vấn đề & giải pháp

**US-05 — Nhận diện đúng nỗi lo của mình**
Là khách hàng, tôi muốn đọc thấy các lo lắng phổ biến của người gửi hàng cá nhân (mất hàng, giá không rõ ràng, không biết thủ tục hải quan) được nêu ra và giải đáp, để tôi cảm thấy dịch vụ hiểu đúng vấn đề của mình trước khi quyết định liên hệ.
*Acceptance Criteria:* Section liệt kê tối thiểu 3 vấn đề, mỗi vấn đề có câu trả lời/giải pháp tương ứng ngay bên cạnh hoặc bên dưới.
*Ưu tiên:* Should

---

## Epic 4: Quy trình gửi hàng

**US-06 — Hiểu quy trình gửi hàng trước khi liên hệ**
Là khách hàng, tôi muốn xem 4 bước gửi hàng đơn giản (liên hệ → đóng gói/giao hàng → vận chuyển → nhận hàng), để tôi biết mình cần làm gì và không ngại vì thiếu thông tin.
*Acceptance Criteria:* Hiển thị đúng 4 bước theo thứ tự, có icon/số thứ tự rõ ràng, đọc hiểu được trong dưới 15 giây.
*Ưu tiên:* Should

---

## Epic 5: Phạm vi tuyến đường phục vụ

**US-07 — Kiểm tra quốc gia mình muốn gửi có được phục vụ không**
Là khách hàng, tôi muốn xem danh sách/bản đồ các quốc gia châu Âu và châu lục khác được phục vụ, để tôi biết chắc dịch vụ có gửi tới nơi người nhận của tôi đang ở hay không.
*Acceptance Criteria:* Liệt kê tối thiểu các nước châu Âu chính và các châu lục khác (Mỹ, Úc, Canada...); nếu có thời gian vận chuyển ước tính theo khu vực thì hiển thị kèm theo.
*Ưu tiên:* Must

---

## Epic 6: Bảng giá tham khảo

**US-08 — Có khái niệm về mức giá trước khi gọi điện**
Là khách hàng, tôi muốn thấy mức giá tham khảo theo khoảng cân nặng, để tôi ước lượng được chi phí trước khi quyết định gọi điện hỏi giá chính xác.
*Acceptance Criteria:* Hiển thị giá "từ ... đồng/kg" theo ít nhất 2-3 mức cân nặng; có câu dẫn CTA ngay cạnh bảng giá mời gọi điện để được báo giá chính xác.
*Ưu tiên:* Must

---

## Epic 7: Cam kết dịch vụ (USP)

**US-09 — Biết điểm khác biệt so với dịch vụ khác**
Là khách hàng, tôi muốn xem các cam kết cụ thể (đóng gói cẩn thận, bảo hiểm hàng hoá, hỗ trợ hải quan, theo dõi đơn hàng, tư vấn ngoài giờ), để tôi có lý do chọn dịch vụ này thay vì nơi khác.
*Acceptance Criteria:* Liệt kê 3-5 điểm khác biệt, mỗi điểm có icon và mô tả ngắn không quá 1-2 câu.
*Ưu tiên:* Should

---

## Epic 8: Đánh giá khách hàng (Testimonials)

**US-10 — Đọc trải nghiệm thật của người đã dùng dịch vụ**
Là khách hàng, tôi muốn đọc phản hồi thật từ người đã gửi hàng thành công (đặc biệt người đang sống ở nước ngoài), để tôi tin tưởng hơn vào chất lượng dịch vụ.
*Acceptance Criteria:* Hiển thị 3-6 testimonial thật kèm tên viết tắt/địa điểm; không dùng nội dung dàn dựng.
*Ưu tiên:* Should

---

## Epic 9: Câu hỏi thường gặp (FAQ)

**US-11 — Tự tìm câu trả lời trước khi gọi điện**
Là khách hàng, tôi muốn xem câu trả lời cho các câu hỏi thường gặp (hàng cấm, thời gian vận chuyển, cách tính cước, đóng gói hộ, thanh toán, bảo hiểm), để tôi đỡ phải gọi hỏi những điều cơ bản và tự tin liên hệ hơn.
*Acceptance Criteria:* Tối thiểu 6 câu hỏi/trả lời; dạng accordion (bấm để mở rộng) để không làm trang quá dài.
*Ưu tiên:* Should

---

## Epic 10: CTA cuối trang & thông tin liên hệ

**US-12 — Liên hệ lần cuối trước khi rời trang**
Là khách hàng, tôi muốn thấy lại đầy đủ thông tin liên hệ (hotline, Zalo, giờ làm việc, địa chỉ) ở cuối trang, để tôi có thể liên hệ ngay cả khi đã đọc hết nội dung mà chưa hành động ở các phần trên.
*Acceptance Criteria:* Section cuối có đủ: số hotline (click-to-call), nút Zalo, giờ làm việc, địa chỉ (nếu có); nhắc lại cam kết phản hồi nhanh.
*Ưu tiên:* Must

---

## Epic 11: Thanh nút nổi trên di động (Sticky bar)

**US-13 — Luôn thấy nút gọi/Zalo dù cuộn tới đâu**
Là khách hàng dùng điện thoại, tôi muốn luôn nhìn thấy nút "Gọi ngay" và "Nhắn Zalo" cố định ở cuối màn hình dù đang cuộn ở bất kỳ section nào, để tôi có thể liên hệ ngay tại thời điểm mình bị thuyết phục, không cần cuộn lại lên đầu hay xuống cuối trang.
*Acceptance Criteria:* Sticky bar hiển thị trên toàn bộ trang ở chế độ mobile; không che nội dung quan trọng; 2 nút bấm hoạt động đúng như US-02 và US-03.
*Ưu tiên:* Must

---

## Epic 12: Đo lường & theo dõi hiệu quả quảng cáo

**US-14 — Đo được số lượt khách bấm gọi/Zalo**
Là chủ shop/marketing, tôi muốn biết chính xác có bao nhiêu lượt khách bấm nút gọi điện và bấm Zalo trên trang, để tôi đánh giá được hiệu quả và tối ưu chi phí quảng cáo.
*Acceptance Criteria:* Gắn Google Tag Manager và Facebook Pixel; thiết lập sự kiện (event) riêng cho lượt bấm "Gọi ngay" và "Nhắn Zalo"; xác nhận sự kiện bắn đúng qua GTM Preview/Facebook Events Manager trước khi ra mắt.
*Ưu tiên:* Must

**US-15 — Gắn UTM để biết khách đến từ kênh quảng cáo nào**
Là chủ shop/marketing, tôi muốn trang hỗ trợ nhận tham số UTM từ link quảng cáo, để tôi biết chiến dịch nào (Facebook, Google...) mang lại nhiều khách gọi điện nhất.
*Acceptance Criteria:* Trang không làm mất tham số UTM khi tải; tham số UTM được ghi nhận cùng sự kiện bấm gọi/Zalo trong Analytics.
*Ưu tiên:* Should

**US-16 — Xem hành vi khách trên trang bằng heatmap**
Là chủ shop/marketing, tôi muốn xem khách dừng lại ở section nào, rời trang ở đâu, để tôi biết phần nào cần chỉnh sửa để tăng tỷ lệ chuyển đổi.
*Acceptance Criteria:* Gắn công cụ heatmap/session recording (ví dụ Microsoft Clarity); có thể xem báo cáo sau khi trang chạy được ít nhất vài trăm lượt truy cập.
*Ưu tiên:* Could

---

## Epic 13: Hiệu năng & trải nghiệm di động

**US-17 — Trang tải nhanh trên mạng di động**
Là khách hàng dùng điện thoại (có thể mạng 4G không ổn định), tôi muốn trang tải nhanh, để tôi không thoát trang trước khi kịp đọc thông tin hoặc bấm gọi.
*Acceptance Criteria:* Điểm Google PageSpeed Insights (mobile) đạt tối thiểu 80 điểm; ảnh được nén và dùng định dạng tối ưu (WebP); không dùng thư viện JS nặng không cần thiết.
*Ưu tiên:* Must

**US-18 — Xem trang thoải mái trên mọi kích thước màn hình**
Là khách hàng, tôi muốn trang hiển thị đẹp và dễ đọc dù dùng điện thoại, máy tính bảng hay máy tính, để trải nghiệm không bị vỡ layout ở bất kỳ thiết bị nào.
*Acceptance Criteria:* Test responsive trên tối thiểu 3 kích thước màn hình (mobile, tablet, desktop); không có phần tử bị tràn/che khuất.
*Ưu tiên:* Must

---

## Epic 14: Vận hành & cập nhật nội dung sau ra mắt

**US-19 — Cập nhật giá tham khảo hoặc tuyến đường mới mà không cần sửa code phức tạp**
Là chủ shop/marketing, tôi muốn có thể cập nhật mức giá tham khảo hoặc thêm quốc gia mới vào danh sách tuyến đường một cách đơn giản, để tôi chủ động thay đổi nội dung khi có chính sách giá mới mà không phải phụ thuộc hoàn toàn vào lập trình viên.
*Acceptance Criteria:* Nội dung giá/tuyến đường được tách riêng khỏi code giao diện (ví dụ file JSON/config riêng), có hướng dẫn ngắn cách chỉnh sửa.
*Ưu tiên:* Could

---

## Tổng hợp ưu tiên (để lên sprint/backlog)

**Must have (làm trước, cần có để ra mắt):** US-01, US-02, US-03, US-07, US-08, US-12, US-13, US-14, US-17, US-18

**Should have (nên có, tăng tỷ lệ chuyển đổi):** US-04, US-05, US-06, US-09, US-10, US-11, US-15

**Could have (làm sau nếu còn thời gian):** US-16, US-19

---

*Tài liệu này bám sát cấu trúc landing page đã mô tả trong `plan-landing-page-van-chuyen.md`. Khi triển khai, mỗi US có thể tách nhỏ thêm thành task kỹ thuật (ví dụ US-14 tách thành: cài GTM, cấu hình Pixel, tạo custom event) tuỳ vào cách team quản lý công việc.*
