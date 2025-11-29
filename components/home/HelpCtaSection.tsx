// components/home/HelpCtaSection.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HelpCtaSection() {
  return (
    <section
      className="
        relative overflow-hidden 
        bg-white 
        min-h-[420px]
        sm:min-h-[500px]
        md:min-h-[600px]
        lg:min-h-[680px]
        flex items-center justify-center
      "
    >
      {/* ⭐ FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/help.jpg"
          alt="Need help background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ⭐ Top & Bottom Yellow Lines */}
      <div className="absolute inset-x-0 top-0 h-2 bg-amber-400" />
      <div className="absolute inset-x-0 bottom-0 h-2 bg-amber-400" />

      {/* ⭐ BACKGROUND WORD */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-12 flex justify-center"
        aria-hidden="true"
      >
        <span className="text-[40px] sm:text-[60px] md:text-[90px] font-extrabold uppercase tracking-[0.3em] text-amber-300/25 leading-none">
          Help
        </span>
      </div>

      {/* ⭐ MAIN CONTENT — CENTERED */}
      <div className="relative w-full max-w-5xl px-4">
        <div className="bg-white/85 backdrop-blur-md border border-slate-200 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
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
