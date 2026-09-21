import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { jsonLdGraph, seoKeywords, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pixel Pro Multimedia | Design, Video & AI Courses in Karnal",
    template: "%s | Pixel Pro Multimedia",
  },
  description: site.description,
  keywords: [...seoKeywords],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "education",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Pixel Pro Multimedia | Design, Video & Generative AI in Karnal",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Pro Multimedia | Design, Video & AI Courses in Karnal",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Karnal",
    "geo.position": "29.6857;76.9905",
    ICBM: "29.6857, 76.9905",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = jsonLdGraph();

  return (
    <html lang="en-IN" className={`${inter.variable} ${spaceGrotesk.variable}`} data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
