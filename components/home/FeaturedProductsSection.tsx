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

export default function FeaturedProductsSection() {
  const featuredProducts = productCategories.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ⭐ TOP YELLOW LINE */}
      <div
        className="absolute inset-x-0 top-0 h-2 bg-amber-400"
        aria-hidden="true"
      />

      {/* Big faint background word */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center"
        aria-hidden="true"
      >
        <span className="text-[60px] lg:text-[90px] font-extrabold tracking-[0.25em] uppercase text-amber-300/10 leading-none">
          Products
        </span>
      </div>

      <div className="space-y-6 py-16 md:py-24 container">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-500">
              Key Offerings
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Featured Product Categories
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-3xl mt-1.5">
              A quick look at some of the main product groups we support –
              explore all categories on the Products page.
            </p>
          </div>

          <Link href="/products">
            <Button
              size="sm"
              variant="outline"
              className="border-amber-400/70 text-slate-900 hover:bg-amber-50"
            >
              View All Products
            </Button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Card
              key={product.slug}
              className="group overflow-hidden border-slate-200 bg-slate-900/5 hover:bg-slate-900/10 transition-colors"
            >
              {/* Image */}
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={product.coverProductImage!}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute left-4 bottom-3 flex items-center gap-2">
                  <Badge className="bg-amber-400 text-slate-900 text-[10px] uppercase tracking-wide">
                    Product Group
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-base md:text-lg text-slate-900">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {product.shortTagline}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex items-center justify-between gap-2 pt-0 pb-4">
                <p className="text-[11px] uppercase tracking-wide text-slate-500">
                  Explore specs &amp; options
                </p>
                <Link href={`/products/${product.slug}`}>
                  <Button
                    size="sm"
                    className="bg-amber-400 text-slate-900 hover:bg-amber-300"
                  >
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
