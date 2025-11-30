// app/products/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { ProductCategoriesGrid } from "./[slug]/_components/product-categories-grid";

export const metadata: Metadata = {
  title: "Product Categories | SCM Supply FZCO",
  description:
    "Browse the main product categories supplied by SCM Supply FZCO, including tools, MRO, safety, HVAC, pumps, electrical, plumbing, PPE, abrasives, office supplies and more.",
};

export default function ProductsIndexPage() {
  return (
    <div className="relative bg-white">
      {/* TOP FULL-WIDTH YELLOW LINE (unchanged) */}
      <div className="w-full h-1.5 bg-[#f7c948]" />

      {/* ⭐ HERO SECTION WITH PRODUCT BG IMAGE */}
      <section className="relative w-full overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[380px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/product-bgg.jpg" // <-- make sure this image exists in /public
            alt="Product categories background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Optional overlay to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        {/* Hero content (header) */}
        <div className="relative w-full">
          <div className="container py-10 md:py-14">
            <header className="space-y-4 max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-300">
                Product &amp; Catalogs
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
                Product Categories
              </h1>

              <p className="text-base md:text-lg text-gray-100">
                From tools and workshop equipment to HVAC, pumps, electrical,
                plumbing, safety, abrasives and specialized catalog sourcing,
                SCM Supply FZCO supports a wide range of industrial and
                commercial requirements.
              </p>
            </header>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT BELOW HERO */}
      <div className="container py-10 md:py-14 space-y-8">
        <ProductCategoriesGrid />
      </div>

      {/* BOTTOM FULL-WIDTH YELLOW LINE (unchanged) */}
      <div className="w-full h-1.5 bg-[#f7c948]" />
    </div>
  );
}
