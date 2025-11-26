// components/layout/MainHeader.tsx
import Link from "next/link";
import { MainNav } from "./MainNav";

export function MainHeader() {
  return (
    // header height ≈ 64px mobile, 80px desktop
    <header className="sticky top-0 z-40 border-b bg-[#0a0a0a]/95 backdrop-blur text-white">
      <div className="container flex items-center justify-between gap-4 h-16 md:h-20">
        <Link href="/" className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
            SCM SUPPLY FZCO
          </span>
          <span className="text-lg md:text-xl font-semibold">
            Industrial Procurement &amp; Logistics
          </span>
        </Link>

        <MainNav />
      </div>
    </header>
  );
}
