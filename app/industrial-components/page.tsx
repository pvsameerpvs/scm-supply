"use client";

import IndustrialCategoryCard from "@/components/industrial/IndustrialCategoryCard";
import { industrialCategories } from "@/data/industrialCategories";

export default function IndustrialComponentsPage() {
  return (
    <div className="container py-10 md:py-14 space-y-10">
      <h1 className="text-2xl md:text-3xl font-semibold">
        Industrial Component Categories
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {industrialCategories.map((category) => (
          <IndustrialCategoryCard key={category.id} category={category} />
        ))}
      </div>
      {/* Yellow bottom line */}
      <div className="w-full h-1.5 bg-[#f7c948]" />
    </div>
  );
}
