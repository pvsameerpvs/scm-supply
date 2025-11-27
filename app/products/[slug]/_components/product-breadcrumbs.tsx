import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getProductBySlug } from "@/data/products";

type Product = NonNullable<ReturnType<typeof getProductBySlug>>;

export function ProductBreadcrumbs({ product }: { product: Product }) {
  return (
    <nav className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-yellow-300 shadow-sm text-xs md:text-sm">
      <Link
        href="/"
        className="text-slate-700 hover:text-yellow-600 transition"
      >
        Home
      </Link>

      <ChevronRight className="w-3 h-3 text-yellow-500" />

      <Link
        href="/products"
        className="text-slate-700 hover:text-yellow-600 transition"
      >
        Products
      </Link>

      <ChevronRight className="w-3 h-3 text-yellow-500" />

      <span className="font-semibold text-slate-900">{product.name}</span>
    </nav>
  );
}
