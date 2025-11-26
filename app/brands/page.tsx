// app/brands/page.tsx

import Image from "next/image";
import { brands, industrialBrandNames } from "@/data/brands";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndustrialBrandsSection } from "@/components/brands/IndustrialBrandsSection";

export const metadata = {
  title: "Brands & Catalogs | SCM Supply FZCO",
  description:
    "Overview of key brands and catalogs SCM Supply FZCO sources from, including Grainger, McMaster-Carr, Uline and leading industrial manufacturers supplied across UAE and GCC.",
};

// Optional logo paths for the main catalog brands
const brandLogos: Record<string, string> = {
  grainger: "/grainger.png",
  "mcmaster-carr": "/McMaster-Carr.png",
  uline: "/uline.png",
};
export const brandColors: Record<string, string> = {
  "mcmaster-carr": "#2E5A2C", // Dark green
  grainger: "#C8102E", // Red
  uline: "#00509E", // Blue
};

export default function BrandsPage() {
  return (
    <div className="container py-10 md:py-14 space-y-10">
      {/* HEADER */}
      <header className="space-y-4 max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-500">
          Brands & Catalogs
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
          Brands &amp; Catalog Sourcing
        </h1>
        <p className="text-base md:text-lg text-slate-600">
          SCM Supply FZCO works with hundreds of global manufacturers, OEMs and
          distributors. For US catalog sourcing, we support full-range access to
          major brands such as Grainger, McMaster-Carr and Uline, consolidating
          purchases into export-ready shipments for UAE, GCC and wider regions.
        </p>
      </header>

      {/* FEATURED CATALOG BRANDS */}
      <div className="grid gap-6 md:grid-cols-3">
        {brands.map((brand) => {
          const logo = brandLogos[brand.slug];
          const bg = brandColors[brand.slug] || "#f8fafc";

          return (
            <Card
              key={brand.slug}
              className="h-full overflow-hidden shadow-sm hover:shadow-md transition"
              style={{
                background: `linear-gradient(140deg, ${bg} 0%, ${bg}E6 85%)`,
              }}
            >
              <CardHeader className="space-y-4">
                {/* Name + Region */}
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-lg font-semibold text-white">
                    {brand.name}
                  </CardTitle>

                  <Badge variant="outline" className="text-white border-white">
                    {brand.region}
                  </Badge>
                </div>

                {/* LOGO – ORIGINAL COLOR, UNCHANGED */}
                {logo && (
                  <div className="relative h-12 w-32">
                    <Image
                      src={logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Focus */}
                <CardDescription className="text-white/80">
                  {brand.focus}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-white/90 leading-relaxed">
                  {brand.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* INDUSTRIAL BRANDS (search + modal) */}
      <IndustrialBrandsSection brandNames={industrialBrandNames} />

      {/* CTA BOX */}
      <section className="bg-slate-900/5 border border-slate-200 rounded-2xl p-6 md:p-7 text-sm md:text-base text-slate-700 space-y-3">
        <h2 className="font-semibold text-lg text-slate-900">
          Can&apos;t Find a Specific Brand Listed?
        </h2>
        <p>
          We regularly add new brands and OEMs based on project requirements. If
          you have a preferred manufacturer or an existing bill-of-materials
          from another supplier, share the details with our team and we will
          source, consolidate and ship to your location.
        </p>
      </section>
    </div>
  );
}
