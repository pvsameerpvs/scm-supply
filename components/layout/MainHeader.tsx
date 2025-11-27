// components/layout/MainHeader.tsx
import Link from "next/link";
import Image from "next/image";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";

export function MainHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-[#0a0a0a]/95 backdrop-blur text-white">
      <div className="container flex items-center justify-between gap-4 h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="SCM Supply Logo"
            width={60}
            height={60}
            className="object-contain w-8 h-8 md:w-[60px] md:h-[60px]"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-[15px] md:text-lg font-bold uppercase tracking-[0.25em] text-slate-300">
              SCM SUPPLY
            </span>

            <span className="text-[7px] md:text-xs font-thin">
              YOUR GATEWAY TO GLOBAL SUPPLY SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <MainNav />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
}
