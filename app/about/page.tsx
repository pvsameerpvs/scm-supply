// app/about/page.tsx
import { AboutHero } from "@/components/about/AboutHero";
import { AboutLogisticsValue } from "@/components/about/AboutLogisticsValue";
import { AboutPillars } from "@/components/about/AboutPillars";
import { AboutServicesValue } from "@/components/about/AboutServicesValue";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SCM Supply FZCO | Industrial Procurement & Logistics Partner",
  description:
    "SCM Supply FZCO is an international procurement, logistics and industrial supply company based in USA and UAE (Dubai), supporting industrial, oil & gas and commercial operations worldwide.",
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
