// components/industrial/IndustrialComponentsSection.tsx

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { industrialCategories } from "@/data/industrialCategories";
import IndustrialCategoryCard from "./IndustrialCategoryCard";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export default function IndustrialComponentsSection() {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return industrialCategories;

    const q = search.toLowerCase();
    return industrialCategories.filter((cat) => {
      if (cat.title.toLowerCase().includes(q)) return true;
      if (cat.shortTag && cat.shortTag.toLowerCase().includes(q)) return true;

      return cat.groups.some(
        (group) =>
          group.label.toLowerCase().includes(q) ||
          group.items.some((item) => item.toLowerCase().includes(q))
      );
    });
  }, [search]);

  return (
    <div className=" py-10 md:py-14 space-y-10">
      <section className="container space-y-8">
        {/* Header strip */}
        <div className="space-y-4">
          <div className="space-y-4 text-center">
            {/* Top Badge Row */}
            <div className="flex flex-wrap justify-center items-center gap-3">
              <Badge
                variant="outline"
                className="rounded-full border-amber-300 bg-amber-50 text-amber-800 px-4 py-1 text-[11px] tracking-[0.28em] uppercase"
              >
                Our Strength
              </Badge>

              <span className="text-xs text-amber-500">
                Industries · Global Brands · Supply Chain Solutions
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Industries We Support &amp; Why Companies{" "}
              <span className="text-amber-500">Choose Us</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              SCM Supply FZCO connects diverse industries to global brands,
              technical products and reliable supply-chain solutions.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2 max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-amber-500">
                  Structured catalog for{" "}
                  <span className="text-slate-900">100,000+</span> industrial
                  components
                </h2>

                <p className="text-sm md:text-base text-slate-600">
                  Filter by keyword and expand any group to explore motion
                  transfer, fluid systems, fasteners, anchors, cable routing,
                  conveyors and more.
                </p>
              </div>
            </div>

            <div className="w-full md:w-80 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Search component families
                </label>

                {/* ⭐ RFQ Button (Yellow) */}
                <a
                  href="/contact"
                  className="
        text-[10px] font-medium 
        bg-[#f7c948] text-slate-900 
        px-3 py-1 rounded-full
        border border-[#f7c948]
        hover:bg-[#f7c948]/90 hover:text-slate-900
        transition
      "
                >
                  Send RFQ
                </a>
              </div>

              <Input
                placeholder="Search by item or function (e.g. pulleys, anchors, cable ties)…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white"
              />
            </div>
          </div>

          {/* Category chips */}
          <Tabs
            defaultValue="all"
            onValueChange={(value) => {
              if (value === "all") {
                setSearch("");
              } else {
                const cat = industrialCategories.find((c) => c.id === value);
                setSearch(cat?.shortTag || cat?.title || "");
              }
            }}
          >
            <ScrollArea className="w-full">
              <div className="flex w-max gap-2 pb-2 pt-1">
                <TabsList
                  className="
          inline-flex gap-2 rounded-full bg-slate-50 p-1
        "
                >
                  {/* ALL tab */}
                  <TabsTrigger
                    value="all"
                    className="
            rounded-full px-3 py-1 text-xs
            data-[state=active]:bg-amber-500
            data-[state=active]:text-white
            data-[state=active]:shadow-sm
            data-[state=inactive]:text-slate-700
          "
                  >
                    All Categories
                  </TabsTrigger>

                  {/* Category tabs */}
                  {industrialCategories.map((cat) => (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className="
              inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs
              data-[state=active]:bg-amber-500
              data-[state=active]:text-white
              data-[state=active]:shadow-sm
              data-[state=inactive]:bg-white
              data-[state=inactive]:text-slate-700
              border border-slate-200
            "
                    >
                      <span className="text-[10px] opacity-70">
                        {cat.number.padStart(2, "0")}
                      </span>
                      <span>{cat.shortTag || cat.title}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* horizontal scrollbar for mobile */}
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </Tabs>

          <Separator />
        </div>

        {/* Grid */}
        {filteredCategories.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 gap-3">
            <div className="relative w-40 h-40">
              <Image
                src="/not found.png"
                alt="Not found"
                fill
                className="object-contain  opacity-60"
              />
            </div>
            <p className="text-sm text-slate-500 text-center">
              No categories or items match{" "}
              <span className="font-semibold">“{search}”</span>. Try a different
              keyword.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCategories.map((category) => (
              <IndustrialCategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </section>
      {/* Yellow bottom line */}
      <div className="w-full h-1.5 bg-[#f7c948]" />
    </div>
  );
}
