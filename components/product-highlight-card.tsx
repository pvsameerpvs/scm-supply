import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/components/utils";

type ProductHighlightCardProps = {
  tag: string; // e.g. "PRODUCT CATEGORY"
  title: string;
  description: string;
  href: string; // link to details page
  imageSrc: string; // product image URL
  className?: string;
};

export function ProductHighlightCard({
  tag,
  title,
  description,
  href,
  imageSrc,
  className,
}: ProductHighlightCardProps) {
  return (
    <div
      className={cn(
        "rounded-[32px] overflow-hidden bg-gradient-to-br from-[#ffb347] to-[#ff8743] p-[3px]",
        className
      )}
    >
      <div className="bg-[#ffe7cf] rounded-[28px] overflow-hidden flex flex-col">
        {/* Image */}
        <div className="relative w-full h-52 md:h-60">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="px-6 py-6 md:py-7 space-y-3">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-orange-500 uppercase">
            {tag}
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-slate-900">
            {title}
          </h3>

          <p className="text-sm md:text-base text-slate-600">{description}</p>

          <div className="pt-3">
            <Link href={href}>
              <Button
                size="md"
                className="rounded-full px-6 bg-gradient-to-r from-[#ffb347] to-[#ff7f3f] text-white border-none"
              >
                View details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
