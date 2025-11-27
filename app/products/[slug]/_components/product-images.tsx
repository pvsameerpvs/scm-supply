// app/products/[slug]/_components/product-images.tsx
import Image from "next/image";
import { getProductBySlug } from "@/data/products";

type Product = NonNullable<ReturnType<typeof getProductBySlug>>;

type Props = {
  product: Product;
};

export function ProductImages({ product }: Props) {
  if (!product.images || product.images.length === 0) return null;

  return (
    <section className="grid gap-4 md:gap-6 md:grid-cols-3">
      {product.images.map((src, idx) => (
        <div
          key={src}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-yellow-50/70 border-yellow-200 group"
        >
          <Image
            src={src}
            alt={`${product.name} image ${idx + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </section>
  );
}
