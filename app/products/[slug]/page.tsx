// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getProductBySlug, productCategories } from "@/data/products";
import type { Metadata } from "next";
import { ProductBreadcrumbs } from "./_components/product-breadcrumbs";
import { ProductHero } from "./_components/product-hero";
import { ProductImages } from "./_components/product-images";
import { ProductTabs } from "./_components/product-tabs";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

type Product = NonNullable<ReturnType<typeof getProductBySlug>>;

export function generateStaticParams() {
  return productCategories.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.seoTitle,
    description: product.seoDescription,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const typedProduct = product as Product;

  return (
    <>
      {/* FULL-WIDTH YELLOW LINES */}
      <div className="w-full border-t-4 border-yellow-400"></div>

      <div className="container py-8 md:py-10 space-y-10">
        <ProductBreadcrumbs product={typedProduct} />
        <ProductHero product={typedProduct} />
        <ProductImages product={typedProduct} />
        <ProductTabs product={typedProduct} />
      </div>

      <div className="w-full border-b-4 border-yellow-400"></div>
    </>
  );
}
