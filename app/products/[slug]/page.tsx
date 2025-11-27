import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, productCategories } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
    <div className="container py-8 md:py-10 space-y-10">
      {/* Breadcrumbs */}
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

      {/* Hero / Header */}
      <section className="grid gap-8 md:grid-cols-[1.6fr,1.4fr] items-start bg-gradient-to-br from-slate-50 to-slate-100 border rounded-3xl px-5 py-6 md:px-8 md:py-8">
        <header className="space-y-5">
          <div className="flex items-center gap-3 flex-wrap">
            <Badge variant="outline" className="uppercase tracking-[0.25em]">
              Product Category
            </Badge>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-[11px] md:text-xs font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              UAE &amp; GCC Delivery
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
            {product!.name}
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-3xl">
            {product!.seoDescription}
          </p>

          {product!.heroNote && (
            <p className="text-sm md:text-base text-sky-800 bg-sky-50 border border-sky-100 rounded-xl px-4 py-3 max-w-3xl">
              {product!.heroNote}
            </p>
          )}

          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/contact">
              <Button
                size="md"
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 border border-yellow-500 shadow-sm"
              >
                Request Quote for {product!.name}
              </Button>
            </Link>
            <a href="#product-tabs">
              <Button size="md" variant="outline">
                View Product Details
              </Button>
            </a>
          </div>

          {/* Quick highlights */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] md:text-xs text-slate-700">
              • Project &amp; MRO Support
            </span>
            <span className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] md:text-xs text-slate-700">
              • Brand &amp; OEM Alternatives
            </span>
            <span className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] md:text-xs text-slate-700">
              • Sourcing from USA / Europe / UAE
            </span>
          </div>
        </header>

        {/* Key highlights / small feature list */}
        <aside className="space-y-4 bg-yellow-50/70 border border-yellow-200 rounded-2xl p-5 md:p-6 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-base md:text-lg font-semibold text-slate-900">
              Why SCM Supply FZCO?
            </h2>
            <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-yellow-50 border border-yellow-200 px-3 py-1 text-[11px] font-medium text-yellow-800">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              Trusted UAE &amp; GCC Supplier
            </span>
          </div>

          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-400" />
              <span>Wide selection of industrial-grade products</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-400" />
              <span>
                Support for fabrication, construction &amp; maintenance
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-400" />
              <span>Fast sourcing and deliveries across UAE &amp; GCC</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-400" />
              <span>Brand, OEM and application-based recommendations</span>
            </li>
          </ul>

          <div className="pt-1">
            <Link href="/contact">
              <Button
                size="md"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 border border-yellow-500 shadow-sm"
              >
                Talk to Sales / Applications Team
              </Button>
            </Link>
            <p className="mt-2 text-[11px] md:text-xs text-slate-500 text-center">
              Share your RFQ, part numbers or photos — our team will respond
              with options and lead times.
            </p>
          </div>
        </aside>
      </section>

      {/* Images */}
      {product!.images?.length > 0 && (
        <section className="grid gap-4 md:gap-6 md:grid-cols-3">
          {product!.images.map((src, idx) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-yellow-50/70 border-yellow-200 group"
            >
              <Image
                src={src}
                alt={`${product!.name} image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </section>
      )}

      {/* Tabs Section */}
      <section id="product-tabs" className="space-y-6">
        <Tabs defaultValue="overview" className="space-y-6 w-full">
          {/* Tabs header */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                Explore {product!.name}
              </h2>
              <p className="text-xs md:text-sm text-slate-500">
                Switch between overview, typical product range and RFQ / support
                details.
              </p>
            </div>
            <TabsList className="bg-yellow-50 border border-yellow-200 rounded-full px-1 py-1 shadow-sm">
              <TabsTrigger
                value="overview"
                className="
      px-4 py-1 text-xs md:text-sm rounded-full
      text-slate-700
      data-[state=active]:bg-yellow-400
      data-[state=active]:text-slate-900
      data-[state=active]:shadow
      data-[state=active]:border-yellow-500
      transition-all
    "
              >
                Overview
              </TabsTrigger>

              <TabsTrigger
                value="range"
                className="
      px-4 py-1 text-xs md:text-sm rounded-full
      text-slate-700
      data-[state=active]:bg-yellow-400
      data-[state=active]:text-slate-900
      data-[state=active]:shadow
      transition-all
    "
              >
                Product Range
              </TabsTrigger>

              <TabsTrigger
                value="support"
                className="
      px-4 py-1 text-xs md:text-sm rounded-full
      text-slate-700
      data-[state=active]:bg-yellow-400
      data-[state=active]:text-slate-900
      data-[state=active]:shadow
      transition-all
    "
              >
                Support &amp; RFQ
              </TabsTrigger>
            </TabsList>
          </div>

          {/* OVERVIEW TAB WITH DROPDOWNS (FULL-WIDTH) */}
          <TabsContent value="overview" className="space-y-6 w-full">
            {product!.fullContent ? (
              <Accordion type="single" collapsible className="space-y-4 w-full">
                {/* Overview & Applications dropdown */}
                <AccordionItem value="overview-main">
                  <AccordionTrigger className="rounded-xl bg-yellow-50/80 px-4 py-3 text-sm md:text-base font-semibold text-yellow-800 border border-yellow-200 data-[state=open]:rounded-b-none">
                    {product!.name} – Overview &amp; Applications
                  </AccordionTrigger>
                  <AccordionContent className="border border-t-0 border-yellow-200 rounded-b-2xl bg-yellow-50/70 px-5 py-6 md:px-7 md:py-8 shadow-sm">
                    <article className="text-sm md:text-base leading-relaxed text-slate-800 whitespace-pre-line mb-4">
                      {product!.fullContent}
                    </article>
                    <div className="flex flex-wrap gap-3 pt-1">
                      <Link href="/contact">
                        <Button
                          size="md"
                          className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 border border-yellow-500 shadow-sm"
                        >
                          Request Full Product Catalogue
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button
                          size="md"
                          variant="outline"
                          className="border-yellow-300 text-yellow-800 hover:bg-yellow-100"
                        >
                          Share RFQ / Specifications
                        </Button>
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* RFQ / Support dropdown */}
                <AccordionItem value="overview-support">
                  <AccordionTrigger className="rounded-xl bg-yellow-50/80 px-4 py-3 text-sm md:text-base font-semibold text-slate-900 border border-yellow-200 data-[state=open]:rounded-b-none">
                    RFQ &amp; Product Support
                  </AccordionTrigger>
                  <AccordionContent className="border border-t-0 border-yellow-200 rounded-b-2xl bg-yellow-50/70 px-5 py-6 md:px-6 md:py-6 shadow-sm">
                    <aside className="space-y-4 text-sm md:text-base text-slate-700">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 border border-yellow-200 px-3 py-1 text-[11px] font-medium text-yellow-800">
                          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                          Expert Product Support
                        </div>
                        <h4 className="font-semibold text-base md:text-lg text-slate-900">
                          Need Help Selecting the Right Product?
                        </h4>
                      </div>

                      <p className="leading-relaxed">
                        Send us your part numbers, material, application details
                        or photos from site. Our team will match suitable brands
                        and solutions for{" "}
                        <span className="font-medium">{product!.name}</span>,
                        including equivalent and alternate options where needed.
                      </p>

                      <ul className="space-y-2 text-sm md:text-base">
                        <li className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-400" />
                          <span>Support for multi-line project RFQs</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-400" />
                          <span>
                            OEM, equivalent &amp; alternative suggestions
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-400" />
                          <span>
                            Sourcing from USA, Europe &amp; global brands
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-400" />
                          <span>Fast delivery across UAE &amp; GCC</span>
                        </li>
                      </ul>

                      <div className="pt-1 space-y-2">
                        <Link href="/contact">
                          <Button
                            size="md"
                            className="
      w-full
      bg-[#f7c948]
      hover:bg-[#eabc30]
      text-slate-900
      border border-[#eabc30]
      shadow-sm
    "
                          >
                            Send RFQ / Inquiry
                          </Button>
                        </Link>

                        <p className="text-[11px] md:text-xs text-slate-500 text-center">
                          Attach your RFQ, BOM, spare-parts list or existing
                          quote — we&apos;ll respond with pricing, lead times
                          &amp; options.
                        </p>
                      </div>
                    </aside>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <div className="rounded-2xl border border-yellow-200 bg-yellow-50/70 p-5 md:p-6 text-sm md:text-base text-slate-700 shadow-sm">
                <p>
                  Detailed overview content for{" "}
                  <span className="font-medium">{product!.name}</span> will be
                  available soon. In the meantime, you can review the typical
                  product range or contact our team for specifications and
                  technical support.
                </p>
              </div>
            )}
          </TabsContent>

          {/* PRODUCT RANGE TAB – FULL-WIDTH STACKED CARDS */}
          <TabsContent value="range" className="space-y-4 w-full">
            <div className="rounded-2xl border border-yellow-200 bg-yellow-50/70 p-5 md:p-6 space-y-4 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">
                Typical Product Range
              </h3>
              <p className="max-w-3xl text-sm md:text-base text-slate-600">
                SCM Supply FZCO can supply a wide range of items under this
                category, from standard catalogue products to special,
                made-to-order and OEM-specific parts.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-700 list-disc list-inside">
                {product!.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <aside className="bg-yellow-50/70 border border-yellow-200 rounded-2xl p-5 md:p-6 space-y-4 text-sm text-slate-700 shadow-sm">
              <h4 className="font-semibold text-base md:text-lg">
                Project, Shutdown or Maintenance Support
              </h4>
              <p>
                Whether you&apos;re planning a shutdown, new project or routine
                maintenance, SCM Supply FZCO can consolidate category
                requirements into a single, well-organised RFQ and supply
                package.
              </p>
              <ul className="space-y-1">
                <li>• Single-source for mixed-brand requirements</li>
                <li>• Competitive pricing for volume / project lots</li>
                <li>• Logistics support from USA / UAE to your site</li>
              </ul>
              <Link href="/contact">
                <Button
                  size="md"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 border border-yellow-500 shadow-sm"
                >
                  Plan Your Requirements with Us
                </Button>
              </Link>
            </aside>
          </TabsContent>

          {/* SUPPORT / RFQ TAB – FULL-WIDTH STACKED CARDS */}
          <TabsContent value="support" className="space-y-4 w-full">
            <aside className="bg-yellow-50/70 border border-yellow-200 rounded-2xl p-5 md:p-6 space-y-4 text-sm md:text-base text-slate-700 shadow-sm">
              <h3 className="font-semibold text-base md:text-lg">
                RFQ, Sourcing &amp; Logistics Support
              </h3>
              <p>
                SCM Supply FZCO can support brand-specific, OEM and niche
                requirements under{" "}
                <span className="font-medium">{product!.name}</span>. Send us
                your RFQ and we will handle sourcing, consolidation and
                delivery.
              </p>
              <ul className="space-y-1">
                <li>• Support for bill-of-materials &amp; spare-parts lists</li>
                <li>• Comparison against existing supplier quotations</li>
                <li>
                  • Air / sea freight and local deliveries in UAE &amp; GCC
                </li>
              </ul>
              <Link href="/contact">
                <Button
                  size="md"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 border border-yellow-500 shadow-sm"
                >
                  Send RFQ / Documents
                </Button>
              </Link>
            </aside>

            <div className="bg-yellow-50/70 border border-yellow-200 rounded-2xl p-5 md:p-6 space-y-4">
              <h4 className="font-semibold text-base md:text-lg">
                Didn&apos;t see the exact product listed here?
              </h4>
              <p className="text-sm md:text-base text-slate-700">
                This page summarises the core range under{" "}
                <span className="font-medium">{product!.name}</span>, but we can
                also support special, OEM-specific and niche items. Share your
                list or existing quote and we&apos;ll propose a competitive
                offer with full logistics support.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button
                    size="md"
                    className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 border border-yellow-500 shadow-sm"
                  >
                    Request Competitive Offer
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="md" variant="outline">
                    Contact Sales Team
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
