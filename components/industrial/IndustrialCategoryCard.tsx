// components/industrial/IndustrialCategoryCard.tsx

import Image from "next/image";
import { Category } from "@/data/industrialCategories";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  category: Category;
};

export default function IndustrialCategoryCard({ category }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border-slate-200 hover:border-amber-300 hover:shadow-md transition-all">
      {/* Top image band */}
      <div className="relative h-32 w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
            {category.number.padStart(2, "0")}
          </span>
          {category.shortTag && (
            <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-900">
              {category.shortTag}
            </span>
          )}
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-base md:text-lg">{category.title}</CardTitle>
        <CardDescription className="text-xs md:text-sm text-slate-600">
          {category.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <ScrollArea className="max-h-64 pr-2">
          <Accordion type="single" collapsible className="w-full">
            {category.groups.map((group, idx) => (
              <AccordionItem key={group.label} value={`${category.id}-${idx}`}>
                <AccordionTrigger className="text-xs md:text-sm text-left font-medium">
                  {group.label}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1 text-[11px] md:text-xs text-slate-700">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
