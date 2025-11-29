import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/data/products";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
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
          {/* Optional top overlay so text is readable */}
        </div>
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

      {/* (Optional) remove old yellow waves, since we now use image bg
          If you still want them, you can move/adjust them below.
      */}

      {/* MAIN CONTENT BELOW HERO */}
      <div className="container py-10 md:py-14 space-y-8">
        <section className="space-y-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm md:text-base text-slate-600">
              Click on a category below to view a detailed breakdown of the
              typical product range and applications supported under each group.
            </p>

            {/* BUTTON = THEME YELLOW */}
            <Link href="/contact">
              <Button
                size="sm"
                className="w-full md:w-auto bg-[#f7c948] text-slate-900 border border-[#f7c948] hover:bg-[#f7c948]/90 hover:text-slate-900 shadow-sm"
              >
                Send RFQ
              </Button>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((product) => (
              <Card
                key={product.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/80 shadow-sm bg-white hover:shadow-lg hover:-translate-y-1 hover:border-[#f7c948] transition-all duration-300"
              >
                {/* Top accent strip */}
                <div className="h-1 w-full bg-[#f7c948]" />

                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={product.coverProductImage!}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Small floating label – product-based feel */}
                  <div className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-medium text-slate-900 shadow-sm flex items-center gap-1">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f7c948]" />
                    <span>Product Group</span>
                  </div>
                </div>

                <CardHeader className="space-y-1 pb-3">
                  <CardTitle className="text-base md:text-lg text-slate-900">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm text-slate-600">
                    {product.shortTagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto flex items-center justify-between gap-2 pt-0 pb-4">
                  <Badge
                    variant="outline"
                    className="text-[10px] uppercase tracking-wide border-slate-300 text-slate-700"
                  >
                    Category
                  </Badge>

                  {/* CARD BUTTON = THEME YELLOW */}
                  <Link href={`/products/${product.slug}`}>
                    <Button
                      size="sm"
                      className="bg-[#f7c948] text-slate-900 border border-[#f7c948] hover:bg-[#f7c948]/90"
                    >
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* BOTTOM FULL-WIDTH YELLOW LINE (unchanged) */}
      <div className="w-full h-1.5 bg-[#f7c948]" />
    </div>
  );
}
