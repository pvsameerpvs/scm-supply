// components/brands/IndustrialBrandsSection.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { IndustrialBrand } from "@/data/brands";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Props = {
  brands: IndustrialBrand[];
};

export function IndustrialBrandsSection({ brands }: Props) {
  const [query, setQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<IndustrialBrand | null>(
    null
  );

  // ✅ Ensure we don't get duplicates even if parent pushes same brand multiple times
  const baseBrands = useMemo(() => {
    const map = new Map<string, IndustrialBrand>();

    for (const b of brands) {
      if (b.slug && !map.has(b.slug)) {
        map.set(b.slug, b);
      }
    }

    return Array.from(map.values());
  }, [brands]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return baseBrands;

    return baseBrands.filter((b) => b.name.toLowerCase().includes(q));
  }, [baseBrands, query]);

  const whatsappNumber = "0000000000"; // TODO: replace with your WhatsApp number

  const whatsappUrl =
    selectedBrand &&
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Hello, I would like more information and pricing for ${selectedBrand.name} products for our operations in UAE/GCC.`
    )}`;

  return (
    <section className="space-y-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Leading Industrial Brands We Supply in UAE
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            Tools · Safety · Electrical · Instrumentation · Hydraulics · Valves
            · MRO
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <Badge className="bg-amber-500 text-slate-900 hover:bg-amber-400">
            UAE &amp; GCC Supply
          </Badge>

          <Input
            placeholder="Search brand name…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-64"
          />
        </div>
      </div>

      {/* Brand Grid */}
      <div className="bg-white border rounded-2xl p-4 md:p-6">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 gap-3">
            <div className="relative w-40 h-40">
              <Image
                src="/not found.png"
                alt="Not found"
                fill
                className="object-contain  opacity-60"
              />
            </div>
            <p className="text-slate-500 text-sm">No results found.</p>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {filtered.map((brand) => (
              <button
                key={brand.slug}
                type="button"
                onClick={() => setSelectedBrand(brand)}
                className="
                  flex items-center gap-3
                  rounded-xl border bg-slate-50
                  px-3 py-3
                  hover:border-amber-400 hover:bg-amber-50
                  transition
                "
              >
                {brand.logo && (
                  <div className="relative h-8 w-8">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                <span className="text-sm font-medium text-slate-800">
                  {brand.name}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedBrand}
        onOpenChange={(open) => !open && setSelectedBrand(null)}
      >
        <DialogContent className="rounded-2xl p-6 border">
          <DialogHeader>
            <div className="flex items-center gap-3">
              {selectedBrand?.logo && (
                <div className="relative h-10 w-10">
                  <Image
                    src={selectedBrand.logo}
                    alt={selectedBrand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              <div>
                <DialogTitle>{selectedBrand?.name}</DialogTitle>
                <DialogDescription>
                  Genuine industrial brand supplied by SCM Supply FZCO.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {selectedBrand && (
            <div className="space-y-4 text-sm text-slate-700">
              <p>
                SCM Supply FZCO supplies genuine {selectedBrand.name} products
                into UAE &amp; GCC. Share your part numbers or BOM and we will
                support with sourcing & pricing.
              </p>

              <div className="flex justify-end">
                <a
                  href={whatsappUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm rounded-md bg-amber-400 text-slate-900 hover:bg-amber-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
