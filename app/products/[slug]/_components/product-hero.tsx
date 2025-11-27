// app/products/[slug]/_components/product-hero.tsx
import Link from "next/link";
import { getProductBySlug } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Product = NonNullable<ReturnType<typeof getProductBySlug>>;

type Props = {
  product: Product;
};

export function ProductHero({ product }: Props) {
  return (
    <section className="grid gap-8 md:grid-cols-[1.6fr,1.4fr] items-start bg-gradient-to-br from-slate-50 to-slate-100 border rounded-3xl px-5 py-6 md:px-8 md:py-8">
      {/* Left: header */}
      <header className="space-y-5">
        <div className="flex items-center gap-3 flex-wrap">
          {/* Updated Badge styles */}
          <Badge
            variant="outline"
            className="
              uppercase tracking-[0.25em]
              rounded-full
              border-yellow-300 bg-yellow-50 text-yellow-800
              px-4 py-1
              text-[10px] md:text-[11px]
              shadow-sm
            "
          >
            Product Category
          </Badge>

          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-[11px] md:text-xs font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            UAE &amp; GCC Delivery
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
          {product.name}
        </h1>

        <p className="text-base md:text-lg text-slate-600 max-w-3xl">
          {product.seoDescription}
        </p>

        {product.heroNote && (
          <p className="text-sm md:text-base text-sky-800 bg-sky-50 border border-sky-100 rounded-xl px-4 py-3 max-w-3xl">
            {product.heroNote}
          </p>
        )}

        <div className="flex flex-col gap-3 pt-1 w-full sm:flex-row sm:flex-wrap sm:justify-end">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              size="md"
              className="
        w-full sm:w-auto
        bg-yellow-400 hover:bg-yellow-500 
        text-slate-900 border border-yellow-500 shadow-sm
        flex items-center
      "
            >
              <span className="truncate max-w-[240px] sm:max-w-[260px]">
                Request Quote for {product.name}
              </span>
            </Button>
          </Link>

          <a href="#product-tabs" className="w-full sm:w-auto">
            <Button
              size="md"
              variant="outline"
              className="w-full sm:w-auto flex items-center justify-center"
            >
              View Product Details
            </Button>
          </a>
        </div>

        {/* Quick highlights */}
        <div className="flex flex-wrap gap-2 pt-1">
          <span className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] md:text-xs text-slate-700">
            • Project &amp; MRO Support
          </span>
          <span className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] md:text-xs text-slate-700">
            • Brand &amp; OEM Alternatives
          </span>
          <span className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] md:text-xs text-slate-700">
            • Sourcing from USA / Europe / UAE
          </span>
        </div>
      </header>

      {/* Right: highlights aside */}
      <aside className="space-y-4 bg-yellow-50/70 border border-yellow-200 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-base md:text-lg font-semibold text-slate-900">
            Why SCM Supply FZCO?
          </h2>
          <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-yellow-50 border border-yellow-200 px-3 py-1 text-[11px] font-medium text-yellow-800">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
            Trusted UAE &amp; GCC Supplier
          </span>
        </div>

        <ul className="space-y-2 text-sm md:text-base text-slate-700">
          <li className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-400" />
            <span>Wide selection of industrial-grade products</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-400" />
            <span>Support for fabrication, construction &amp; maintenance</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-400" />
            <span>Fast sourcing and deliveries across UAE &amp; GCC</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-400" />
            <span>Brand, OEM and application-based recommendations</span>
          </li>
        </ul>

        <div className="pt-1">
          <Link href="/contact">
            <Button
              size="md"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 border border-yellow-500 shadow-sm"
            >
              Talk to Sales / Applications Team
            </Button>
          </Link>
          <p className="mt-2 text-[11px] md:text-xs text-slate-500 text-center">
            Share your RFQ, part numbers or photos — our team will respond with
            options and lead times.
          </p>
        </div>
      </aside>
    </section>
  );
}
