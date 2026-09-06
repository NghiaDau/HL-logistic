/* ==================================================================
   NỘI DUNG & CẤU HÌNH LANDING PAGE
   ------------------------------------------------------------------
   Chỉ cần sửa file này để đổi số hotline, link Zalo, bảng giá,
   tuyến đường, testimonials, FAQ và ID tracking.
   Các chỗ đánh dấu "TODO" là placeholder — thay bằng dữ liệu thật
   trước khi ra mắt / chạy quảng cáo.
================================================================== */

export type TrustStat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};
export type ProblemSolution = { problem: string; solution: string };
export type Step = { title: string; desc: string };
export type RegionEstimate = { region: string; time: string };
export type PriceRow = { weightRange: string; pricePerKg: string; note?: string };
export type Commitment = { icon: IconName; title: string; desc: string };
export type Testimonial = { name: string; location: string; quote: string };
export type FaqItem = { q: string; a: string };

export type IconName =
  | "box"
  | "shield"
  | "clock"
  | "customs"
  | "track"
  | "headset"
  | "plane"
  | "check";

export const site = {
  /* ---------- Thương hiệu (logo + tên công ty) ---------- */
  brand: {
    /** Tên ngắn hiển thị cạnh logo trên header */
    name: "HL Logistic",
    /** Tên đầy đủ pháp nhân — dùng ở footer */
    legalName: "Công ty TNHH Vận chuyển Quốc tế HLLogistic", // TODO: tên công ty thật
    /** Slogan ngắn dưới tên (để trống "" nếu không dùng) */
    tagline: "Vận chuyển hàng không quốc tế",
    /** Đường dẫn file logo trong /public. Nên là SVG hoặc PNG nền trong suốt. */
    logo: "/images/logo.svg", // TODO: thay bằng logo thật
    /** Năm bắt đầu, hiển thị dòng bản quyền ở footer */
    since: 2017,
  },

  /* ---------- Thông tin liên hệ (dùng cho mọi nút CTA) ---------- */
  contact: {
    /** Số hiển thị cho người đọc */
    hotline: "0900 000 000", // TODO: số hotline thật
    /** Định dạng E.164 cho href="tel:" — bấm là gọi được ngay trên di động */
    hotlineTel: "+84900000000", // TODO: +84 + số (bỏ số 0 đầu)
    /** Link chat Zalo OA hoặc zalo.me/<số> */
    zaloLink: "https://zalo.me/0900000000", // TODO: link Zalo chính thức
    workingHours: "8:00 – 21:00 tất cả các ngày trong tuần",
    address: "TODO: địa chỉ văn phòng / điểm nhận hàng",
    responseTimePromise: "Phản hồi trong vòng 15 phút",
  },

  /* ---------- ID đo lường (để trống nếu chưa có) ---------- */
  tracking: {
    gtmId: "", // "GTM-XXXXXXX"
    fbPixelId: "", // "000000000000000"
    clarityId: "", // Microsoft Clarity project id (tuỳ chọn)
  },

  /* ---------- SEO / Open Graph ---------- */
  seo: {
    title: "Gửi hàng đi châu Âu, Mỹ, Úc — nhanh, an toàn, giá tốt | HLLogistic",
    description:
      "Dịch vụ vận chuyển hàng không quốc tế cho cá nhân: gửi quà, đồ dùng, đặc sản đi Đức, Pháp, Anh, Mỹ, Úc... Tư vấn & báo giá miễn phí qua điện thoại/Zalo.",
    siteUrl: "https://guihangquocte.example.com", // TODO: domain thật
    ogImage: "/images/og-image.svg", // TODO: thay bằng ảnh .jpg/.png 1200x630 thật
  },

  /* ---------- Section 1: Hero ---------- */
  hero: {
    eyebrow: "Vận chuyển hàng không quốc tế",
    headline: "Gửi hàng đi châu Âu, Mỹ, Úc — nhanh chóng, an toàn, giá tốt",
    subheadline:
      "Dịch vụ vận chuyển đường hàng không quốc tế dành cho cá nhân. Gửi quà cho người thân, đồ dùng khi đi du học – định cư, đặc sản Việt Nam ra nước ngoài.",
    bgImage: "/images/hero.svg", // TODO: thay bằng ảnh thật .webp đã nén
    highlights: [
      "Nhận hàng tận nơi tại nước ngoài",
      "Hỗ trợ đóng gói & khai báo hải quan",
      "Báo giá rõ ràng trước khi gửi",
    ],
    /** Thẻ tuyến mẫu nổi trong hero (chỉ trang trí, sửa cho khớp thực tế) */
    sampleRoute: {
      from: "Hà Nội",
      to: "Berlin, Đức",
      time: "3 – 5 ngày",
      price: "từ 280.000 đ/kg",
    },
  },

  /* ---------- Section 2: Trust bar (tối đa 4 con số) ---------- */
  trustBar: [
    { value: 8, suffix: "+", label: "năm kinh nghiệm vận chuyển quốc tế" },
    { value: 50000, suffix: "+", label: "đơn hàng đã gửi thành công" },
    { value: 30, suffix: "+", label: "quốc gia phục vụ" },
    {
      value: 4.9,
      decimals: 1,
      suffix: "/5",
      label: "đánh giá trung bình từ khách hàng",
    },
  ] as TrustStat[],

  /* ---------- Section 3: Vấn đề & giải pháp (>= 3) ---------- */
  problems: [
    {
      problem: "Sợ hàng bị thất lạc hoặc hư hỏng trên đường đi",
      solution:
        "Mỗi kiện hàng có mã theo dõi riêng, đóng gói chuẩn quốc tế và có bảo hiểm hàng hoá đi kèm.",
    },
    {
      problem: "Lo giá bị đội lên, phát sinh phí không rõ ràng",
      solution:
        "Báo giá trọn gói theo cân nặng và tuyến đường ngay từ đầu, xác nhận với bạn trước khi hàng rời kho.",
    },
    {
      problem: "Không biết thủ tục hải quan, giấy tờ cần những gì",
      solution:
        "Nhân viên hướng dẫn chuẩn bị giấy tờ và hỗ trợ khai báo hải quan cho cả đầu gửi lẫn đầu nhận.",
    },
    {
      problem: "Không rõ đóng gói thế nào cho đúng, hàng nào được gửi",
      solution:
        "Tư vấn cách đóng gói theo từng loại hàng và kiểm tra trước danh mục hàng hạn chế / cấm gửi.",
    },
  ] as ProblemSolution[],

  /* ---------- Section 4: Quy trình gửi hàng (đúng 4 bước) ---------- */
  steps: [
    {
      title: "Liên hệ tư vấn & nhận báo giá",
      desc: "Gọi điện hoặc nhắn Zalo, cung cấp loại hàng, cân nặng và địa chỉ nhận để được báo giá.",
    },
    {
      title: "Đóng gói & giao hàng",
      desc: "Bạn mang hàng đến điểm nhận hoặc nhân viên tới lấy tận nơi, hỗ trợ đóng gói nếu cần.",
    },
    {
      title: "Vận chuyển hàng không & cập nhật",
      desc: "Hàng được đưa lên chuyến bay quốc tế, bạn nhận thông tin trạng thái theo từng chặng.",
    },
    {
      title: "Người nhận nhận hàng tận nơi",
      desc: "Hàng được giao đến tận địa chỉ người nhận ở nước ngoài, có xác nhận khi giao thành công.",
    },
  ] as Step[],

  /* ---------- Section 5: Tuyến đường phục vụ ---------- */
  routes: {
    europe: [
      "Đức",
      "Pháp",
      "Anh",
      "Hà Lan",
      "Ba Lan",
      "Séc",
      "Bỉ",
      "Ý",
      "Tây Ban Nha",
      "Thuỵ Điển",
      "Na Uy",
      "Phần Lan",
    ],
    others: [
      "Mỹ",
      "Canada",
      "Úc",
      "New Zealand",
      "Nhật Bản",
      "Hàn Quốc",
      "Đài Loan",
      "Singapore",
    ],
    estimates: [
      { region: "Tây Âu (Đức, Pháp, Hà Lan, Bỉ)", time: "3 – 5 ngày" },
      { region: "Bắc & Đông Âu", time: "4 – 7 ngày" },
      { region: "Mỹ, Canada", time: "5 – 8 ngày" },
      { region: "Úc, New Zealand", time: "4 – 7 ngày" },
      { region: "Nhật, Hàn, Đài Loan, Singapore", time: "2 – 4 ngày" },
    ] as RegionEstimate[],
  },

  /* ---------- Section 6: Bảng giá tham khảo (2 – 3 mức) ---------- */
  pricing: {
    rows: [
      { weightRange: "0,5 – 5 kg", pricePerKg: "từ 350.000 đ/kg" },
      { weightRange: "5 – 20 kg", pricePerKg: "từ 280.000 đ/kg" },
      { weightRange: "trên 20 kg", pricePerKg: "từ 220.000 đ/kg", note: "giá tốt hơn cho hàng nặng" },
    ] as PriceRow[],
    note: "Giá tham khảo cho tuyến châu Âu, chưa gồm phụ phí hàng đặc biệt. TODO: cập nhật theo bảng giá thật.",
    ctaText: "Gọi ngay để được báo giá chính xác theo lô hàng của bạn",
  },

  /* ---------- Section 7: Cam kết dịch vụ / USP (3 – 5) ---------- */
  commitments: [
    {
      icon: "box",
      title: "Đóng gói cẩn thận",
      desc: "Đóng gói theo chuẩn hàng không, gia cố hàng dễ vỡ, chống ẩm cho thực phẩm.",
    },
    {
      icon: "shield",
      title: "Bảo hiểm hàng hoá",
      desc: "Hàng hoá được bảo hiểm, bồi thường theo giá trị khai báo nếu xảy ra sự cố.",
    },
    {
      icon: "customs",
      title: "Hỗ trợ khai báo hải quan",
      desc: "Hướng dẫn giấy tờ và khai báo cho cả đầu gửi và đầu nhận, hạn chế rủi ro giữ hàng.",
    },
    {
      icon: "track",
      title: "Theo dõi đơn hàng",
      desc: "Mỗi đơn có mã tra cứu, cập nhật trạng thái theo từng chặng đến khi giao xong.",
    },
    {
      icon: "headset",
      title: "Tư vấn ngoài giờ hành chính",
      desc: "Hỗ trợ cả buổi tối và cuối tuần, phù hợp với người thân đang lệch múi giờ ở nước ngoài.",
    },
  ] as Commitment[],

  /* ---------- Section 8: Testimonials (3 – 6, phải là thật) ---------- */
  testimonials: [
    {
      name: "Chị Lan",
      location: "hiện sống tại Đức",
      quote:
        "Mình gửi đồ khô và thuốc cho gia đình bên Đức, 4 ngày là nhận được, đóng gói chắc chắn, không móp méo gì.",
    },
    {
      name: "Anh Hùng",
      location: "gửi hàng đi Mỹ",
      quote:
        "Lần đầu gửi hàng đi Mỹ nên khá lo, nhân viên tư vấn kỹ từng bước, báo giá đúng như lúc đầu, không phát sinh.",
    },
    {
      name: "Chị Mai",
      location: "du học sinh tại Úc",
      quote:
        "Chuyển đồ cá nhân sang Úc khi đi du học, được hỗ trợ khai báo hải quan nên nhận hàng rất nhanh.",
    },
    {
      name: "Cô Bình",
      location: "hiện sống tại Pháp",
      quote:
        "Gửi đặc sản Tết cho con cháu bên Pháp, hàng thực phẩm được bọc hút chân không kỹ, sang tới nơi vẫn còn tươi ngon.",
    },
  ] as Testimonial[],

  /* ---------- Section 9: FAQ (>= 6) ---------- */
  faq: [
    {
      q: "Những mặt hàng nào không được gửi đi nước ngoài?",
      a: "Các mặt hàng cấm gồm chất lỏng dễ cháy, pin rời, vũ khí, chất cấm, tiền mặt, đồ có giá trị quá cao không khai báo. Một số nước hạn chế thực phẩm tươi sống, hạt giống, thịt. Bạn gửi danh sách hàng để được kiểm tra trước.",
    },
    {
      q: "Thời gian vận chuyển thực tế là bao lâu?",
      a: "Tuỳ tuyến đường: 3 – 5 ngày tới Tây Âu, 5 – 8 ngày tới Mỹ/Canada, 2 – 4 ngày tới Nhật/Hàn. Thời gian tính từ khi hàng rời kho, chưa gồm thời gian thông quan bất thường.",
    },
    {
      q: "Cước phí được tính như thế nào?",
      a: "Cước tính theo cân nặng thực tế hoặc trọng lượng quy đổi thể tích (lấy số lớn hơn), cộng phụ phí nếu là hàng đặc biệt. Bạn sẽ được báo giá trọn gói trước khi gửi.",
    },
    {
      q: "Bên bạn có nhận đóng gói hộ không?",
      a: "Có. Chúng tôi hỗ trợ đóng gói theo chuẩn hàng không, gia cố hàng dễ vỡ và hút chân không cho thực phẩm. Phí đóng gói được báo trước.",
    },
    {
      q: "Thanh toán vào lúc nào?",
      a: "Thanh toán sau khi chốt bảng cân và báo giá cuối cùng, trước khi hàng lên chuyến bay. Hỗ trợ chuyển khoản hoặc tiền mặt tại điểm nhận.",
    },
    {
      q: "Hàng hoá có được bảo hiểm không?",
      a: "Có. Hàng được bảo hiểm theo giá trị khai báo. Nếu xảy ra mất mát hoặc hư hỏng do vận chuyển, bạn được bồi thường theo mức đã khai báo và quy định bảo hiểm.",
    },
    {
      q: "Người nhận ở nước ngoài có phải ra bưu điện lấy hàng không?",
      a: "Không. Hàng được giao đến tận địa chỉ người nhận. Với một số khu vực xa trung tâm, thời gian giao chặng cuối có thể lâu hơn 1 – 2 ngày.",
    },
  ] as FaqItem[],
};

export type Site = typeof site;
