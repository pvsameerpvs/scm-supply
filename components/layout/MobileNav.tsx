// components/layout/MobileNav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-white"
        aria-label="Toggle Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 top-16 w-full bg-[#0a0a0a] border-b py-4 z-50">
          <nav className="flex flex-col px-4 space-y-2 text-lg font-semibold">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "px-3 py-2 rounded-md transition-all duration-200",
                    "text-white",
                    "hover:bg-[#f7c948] hover:text-black",
                    isActive && "bg-[#f7c948] text-black shadow-sm"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
