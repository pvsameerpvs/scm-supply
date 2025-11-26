import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, productCategories } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return productCategories.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: ProductPageProps) {
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

  return (
    <div className="container py-8 md:py-10 space-y-8">
      <nav className="text-xs md:text-sm text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-primary">
          Products
        </Link>
        <span>/</span>
        <span className="text-slate-700">{product!.name}</span>
      </nav>

      <header className="space-y-4">
        <Badge variant="outline" className="uppercase tracking-[0.25em]">
          Product Category
        </Badge>
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          {product!.name}
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl">
          {product!.seoDescription}
        </p>
        {product!.heroNote && (
          <p className="text-sm md:text-base text-sky-700 bg-sky-50 border border-sky-100 rounded-xl px-4 py-3 max-w-3xl">
            {product!.heroNote}
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          <Link href="/contact">
            <Button size="md">Request Quote for {product!.name}</Button>
          </Link>
          <a href="#ranges">
            <Button size="md" variant="outline">
              View Product Range
            </Button>
          </a>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {product!.images.map((src, idx) => (
          <div
            key={src}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-slate-100"
          >
            <Image
              src={src}
              alt={`${product!.name} image ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </section>

      <section
        id="ranges"
        className="grid gap-8 md:grid-cols-[2fr,1.2fr] items-start"
      >
        <div className="space-y-4">
          <h2 className="section-title">Typical Product Range</h2>
          <p className="section-subtitle max-w-3xl">
            SCM Supply FZCO can supply a wide range of items under this
            category, from standard catalogue products to special, made-to-order
            and OEM-specific parts.
          </p>
          <ul className="space-y-2 text-sm md:text-base text-slate-700 list-disc list-inside">
            {product!.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <aside className="bg-white border rounded-2xl p-5 space-y-4 text-sm text-slate-700 shadow-sm">
          <h3 className="font-semibold text-base md:text-lg">
            Need a Specific Brand, Part Number or Spec?
          </h3>
          <p>
            Send us your RFQ with part numbers, technical datasheets, photos or
            application details. Our team will match the right product, brand or
            equivalent to suit your requirement.
          </p>
          <ul className="space-y-1">
            <li>• Support for multi-line project RFQs</li>
            <li>• Sourcing from USA, Europe &amp; global brands</li>
            <li>• Fast delivery across UAE &amp; GCC</li>
          </ul>
          <Link href="/contact">
            <Button size="md" className="w-full">
              Send RFQ / Inquiry
            </Button>
          </Link>
        </aside>
      </section>

      <section className="bg-white border rounded-2xl p-6 md:p-7 text-sm md:text-base text-slate-700 space-y-3">
        <h3 className="font-semibold text-base md:text-lg">
          Didn&apos;t see the exact product listed here?
        </h3>
        <p>
          This page summarises the core range under{" "}
          <span className="font-medium">{product!.name}</span>, but SCM Supply
          FZCO can also support brand-specific, OEM and niche requirements.
          Share your bill-of-materials, spare-parts list or existing supplier
          quotation, and we will propose a competitive offer with logistics
          handled from USA / UAE to your site.
        </p>
      </section>
    </div>
  );
}
