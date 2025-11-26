// components/brands/IndustrialBrandsSection.tsx
"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type IndustrialBrandsSectionProps = {
  brandNames: string[];
};

export function IndustrialBrandsSection({
  brandNames,
}: IndustrialBrandsSectionProps) {
  const [query, setQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return brandNames;
    const q = query.toLowerCase();
    return brandNames.filter((name) => name.toLowerCase().includes(q));
  }, [brandNames, query]);

  const whatsappNumber = "0000000000"; // TODO: replace with your WhatsApp number (digits only, no +)

  const selectedDescription = selectedBrand
    ? `SCM Supply FZCO sources genuine ${selectedBrand} products for projects and maintenance teams across UAE & GCC. Share your part numbers, bill-of-materials or application details and we will support with sourcing, pricing and delivery options.`
    : "";

  const whatsappUrl =
    selectedBrand &&
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Hello, I would like more information and pricing for ${selectedBrand} products for our operations in UAE/GCC.`
    )}`;

  return (
    <section className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Leading Industrial Brands We Supply in UAE
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl">
            Below is a selection of commonly requested brands we support for
            tools, safety, instrumentation, electrical, hydraulics, valves,
            maintenance and general industrial supply into UAE &amp; GCC.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-2 md:items-end">
          <Badge className="self-start md:self-end bg-amber-500 text-slate-900 hover:bg-amber-400">
            UAE &amp; GCC Supply
          </Badge>
          <Input
            placeholder="Search brand name…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-64 text-sm"
          />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-6">
        {filtered.length === 0 ? (
          <p className="text-sm text-slate-500">
            No brands matched{" "}
            <span className="font-medium text-slate-700">
              &quot;{query}&quot;
            </span>
            . Try a different name.
          </p>
        ) : (
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setSelectedBrand(name)}
                className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/60 px-3 py-2 md:px-4 md:py-2.5 text-left hover:border-amber-400 hover:bg-amber-50 transition-colors"
              >
                <span className="text-sm font-medium text-slate-800">
                  {name}
                </span>
                <span className="h-2 w-2 rounded-full bg-amber-400" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Brand details modal */}
      <Dialog
        open={!!selectedBrand}
        onOpenChange={(open) => !open && setSelectedBrand(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedBrand}</DialogTitle>
            <DialogDescription>
              Leading industrial manufacturer supplied by SCM Supply FZCO into
              UAE &amp; GCC.
            </DialogDescription>
          </DialogHeader>

          {selectedBrand && (
            <div className="space-y-4 text-sm text-slate-700">
              <p>{selectedDescription}</p>

              <p className="text-xs text-slate-500">
                Tip: you can send us your part list, photos of labels or an
                existing quote from another supplier and we will match or offer
                alternatives.
              </p>

              <div className="flex justify-end">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium bg-amber-400 text-slate-900 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    More info via WhatsApp
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
