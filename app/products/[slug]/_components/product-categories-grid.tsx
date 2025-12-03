"use client";

import { useMemo, useState } from "react";
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
import { Input } from "@/components/ui/input";

export function ProductCategoriesGrid() {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return productCategories;

    return productCategories.filter((product) => {
      const fields: (string | undefined)[] = [
        product.name,
        product.shortTagline,
        product.seoTitle,
        product.seoDescription,
        product.slug,
      ];
      return fields.some((field) =>
        field ? field.toLowerCase().includes(q) : false
      );
    });
  }, [search]);

  return (
    <section className="space-y-6">
      {/* Top row: text + search + RFQ button */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          Click on a category below to view a detailed breakdown of the typical
          product range and applications supported under each group.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto md:items-center">
          {/* SEARCH BAR */}
          <Input
            type="text"
            placeholder="Search products & categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-64 bg-white/80 border-slate-300 focus-visible:ring-[#f7c948]"
          />

          {/* BUTTON = THEME YELLOW */}
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              size="sm"
              className="w-full sm:w-auto bg-[#f7c948] text-slate-900 border border-[#f7c948] hover:bg-[#f7c948]/90 hover:text-slate-900 shadow-sm"
            >
              Send RFQ
            </Button>
          </Link>
        </div>
      </div>

      {/* Small helper text */}
      <p className="text-xs md:text-sm text-slate-500">
        Showing{" "}
        <span className="font-semibold">
          {filteredProducts.length} / {productCategories.length}
        </span>{" "}
        categories
        {search
          ? ` for “${search.trim()}”`
          : " — use the search to quickly find tools, HVAC, safety, pumps and more."}
      </p>

      {/* If no matches */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 gap-4">
          {/* IMAGE */}
          <div className="relative w-40 h-40 opacity-80">
            <Image
              src="/not found.png"
              alt="Not found"
              fill
              className="object-contain"
            />
          </div>

          {/* MESSAGE */}
          <div className="text-sm md:text-base text-slate-600 text-center max-w-md">
            No categories match{" "}
            <span className="font-semibold">“{search.trim()}”</span>. Try
            another keyword like
            <span className="font-semibold"> “safety”</span>,
            <span className="font-semibold"> “HVAC”</span> or
            <span className="font-semibold"> “pumps”</span>.
          </div>

          {/* CLEAR BUTTON */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSearch("")}
            className="text-xs"
          >
            Clear Search
          </Button>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
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
      )}
    </section>
  );
}
