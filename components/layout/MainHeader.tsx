// components/layout/MainHeader.tsx
import Link from "next/link";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";

export function MainHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-[#0a0a0a]/95 backdrop-blur text-white">
      <div className="container flex items-center justify-between gap-4 h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-[9px] md:text-xs uppercase tracking-[0.25em] text-slate-500">
            SCM SUPPLY FZCO
          </span>

          <span className="text-sm md:text-lg font-semibold">
            Industrial Procurement &amp; Logistics
          </span>
        </Link>

        {/* Desktop Navigation */}
        <MainNav />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
}
