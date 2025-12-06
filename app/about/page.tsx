// app/about/page.tsx
import { AboutHero } from "@/components/about/AboutHero";
import { AboutLogisticsValue } from "@/components/about/AboutLogisticsValue";
import { AboutPillars } from "@/components/about/AboutPillars";
import { AboutServicesValue } from "@/components/about/AboutServicesValue";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SCM Supply FZCO | Global Industrial Procurement & MRO Experts",
  description:
    "SCM Supply Global Supplier of Tools, Valves, Fittings, Pumps, Seals, Electrical, Safety, Hose & Hydraulic Components, and MRO Products Trusted by Oil & Gas • Manufacturing • Marine • Facilities • Worldwide Shipping from USA & UAE via Leading Freight Networks",

  // Canonical URL
  alternates: {
    canonical: "https://scm-supply.com/about",
  },

  // OpenGraph for social sharing
  openGraph: {
    title: "About SCM Supply FZCO | Global Industrial Procurement Specialists",
    description:
      "Leading global supplier of industrial tools, MRO equipment, valves, pumps & safety solutions with operations in the UAE & USA.",
    url: "https://scm-supply.com/about",
    siteName: "SCM Supply FZCO",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SCM Supply FZCO Industrial Procurement",
      },
    ],
  },

  // Twitter cards
  twitter: {
    card: "summary_large_image",
    title: "About SCM Supply FZCO",
    description:
      "Global industrial procurement & MRO supply partner operating across the UAE & USA.",
    images: ["/logo.png"],
  },

  // Robots + Googlebot
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      notranslate: false,
      nosnippet: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};


export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-white text-slate-50">
      {/* Top & bottom accent bars */}
      <div
        className="absolute inset-x-0 top-0 h-2 bg-amber-400"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2 bg-amber-400"
        aria-hidden="true"
      />

      {/* BIG BACKGROUND WORD LIKE IN THE DESIGN */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center"
        aria-hidden="true"
      >
        <span className="text-[68px] md:text-[96px] font-extrabold tracking-[0.25em] uppercase text-amber-300/20 leading-none">
          Industry
        </span>
      </div>

      <div className="container relative py-16 md:py-24 space-y-16">
        <AboutHero />
        <AboutServicesValue />
        <AboutLogisticsValue />
        <AboutPillars />
      </div>
    </div>
  );
}
