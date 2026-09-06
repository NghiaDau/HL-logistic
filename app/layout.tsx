import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import Analytics from "@/components/Analytics";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyContactBar from "@/components/StickyContactBar";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: site.seo.siteUrl,
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: site.seo.ogImage, width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#073d73",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { gtmId } = site.tracking;
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body className="pb-20 md:pb-0">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="gtm"
            />
          </noscript>
        )}
        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyContactBar />
        <Analytics />
      </body>
    </html>
  );
}
