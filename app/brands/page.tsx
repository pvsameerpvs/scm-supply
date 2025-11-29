// app/brands/page.tsx

import Image from "next/image";
import { industrialBrands } from "@/data/brands";
import { IndustrialBrandsSection } from "@/components/brands/IndustrialBrandsSection";

export const metadata = {
  title: "Brands & Catalogs | SCM Supply FZCO",
  description:
    "Overview of key brands and catalogs SCM Supply FZCO sources from, including Grainger, McMaster-Carr, Uline and leading industrial manufacturers supplied across UAE and GCC.",
};

export default function BrandsPage() {
  return (
    <>
      {/* ⭐ FULL-WIDTH HERO WITH BACKGROUND IMAGE */}
      <section className="relative w-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex items-center justify-center overflow-hidden">
        {/* BG IMAGE */}
        <Image
          src="/product-bg.jpg" // <-- your background image
          alt="Brands background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark overlay (optional but recommended) */}
        <div className="absolute inset-0 bg-black/40" />

        {/* HERO CONTENT */}
        <div className="relative w-full">
          <div className="container py-5 md:py-5">
            <div className="space-y-4 max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-400">
                Brands & Catalogs
              </p>

              <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
                Brands &amp; Catalog Sourcing
              </h1>

              <p className="text-base md:text-lg text-gray-200 max-w-xl">
                SCM Supply FZCO works with hundreds of manufacturers, OEMs, and
                distributors worldwide including Grainger, McMaster-Carr, and
                Uline shipping across UAE, GCC and global regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow top line */}
      <div className="w-full h-1.5 bg-[#f7c948]" />

      <div className="container py-10 md:py-14 space-y-10">
        {/* INDUSTRIAL BRANDS */}
        <IndustrialBrandsSection brands={industrialBrands} />

        {/* CTA BOX */}
        <section className="bg-slate-900/5 border border-slate-200 rounded-2xl p-6 md:p-7 text-sm md:text-base text-slate-700 space-y-3">
          <h2 className="font-semibold text-lg text-slate-900">
            Can&apos;t Find a Specific Brand Listed?
          </h2>
          <p>
            We regularly add new brands based on your requirements. Share your
            manufacturer list or BOM and we will source, consolidate and ship to
            your destination.
          </p>
        </section>
      </div>

      {/* Yellow bottom line */}
      <div className="w-full h-1.5 bg-[#f7c948]" />
    </>
  );
}
