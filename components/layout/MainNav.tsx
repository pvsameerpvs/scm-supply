// components/layout/MainNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-5 text-base font-semibold">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "px-3 py-1 rounded-md transition-all duration-200",
              // default
              "text-white",
              // hover
              "hover:bg-[#f7c948] hover:text-black",
              // active link
              isActive && "bg-[#f7c948] text-black shadow-sm"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
