// components/home/HelpCtaSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HelpCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* ⭐ Top & Bottom Yellow Lines */}
      <div className="absolute inset-x-0 top-0 h-2 bg-amber-400" />
      <div className="absolute inset-x-0 bottom-0 h-2 bg-amber-400" />

      {/* ⭐ Big faint background word */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center"
        aria-hidden="true"
      >
        <span className="text-[52px] md:text-[80px] font-extrabold uppercase tracking-[0.3em] text-amber-300/20 leading-none">
          Help
        </span>
      </div>

      {/* ⭐ Main content */}
      <div className="container relative py-16 md:py-24 space-y-16">
        <div className="bg-slate-900/5 border border-slate-200 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          {/* Text */}
          <div className="space-y-3 max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-500">
              Need Assistance?
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Need Help with a Specific Part or Product?
            </h2>

            <p className="text-slate-600 text-sm md:text-base">
              Send us the part number, technical datasheet, description or even
              a photo – our team will quickly identify, source and ship to your
              site anywhere in UAE &amp; GCC.
            </p>
          </div>

          {/* CTA Button */}
          <Link href="/contact">
            <Button className="bg-amber-400 text-slate-900 hover:bg-amber-300 text-sm md:text-base px-6 py-3 rounded-lg shadow">
              Send RFQ Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
