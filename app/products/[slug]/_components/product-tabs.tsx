// app/products/[slug]/_components/product-tabs.tsx
import Link from "next/link";
import { getProductBySlug } from "@/data/products";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type Product = NonNullable<ReturnType<typeof getProductBySlug>>;

type Props = {
  product: Product;
};

export function ProductTabs({ product }: Props) {
  return (
    <section id="product-tabs" className="space-y-6">
      <Tabs defaultValue="overview" className="space-y-6 w-full">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              Explore {product.name}
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              Switch between overview, typical product range and RFQ / support
              details.
            </p>
          </div>
          <TabsList
            className="
              flex gap-1
              bg-yellow-50/80
              border border-yellow-200
              rounded-full
              px-1 py-1
              shadow-sm
            "
          >
            <TabsTrigger
              value="overview"
              className="
                px-4 py-1 text-xs md:text-sm rounded-full
                text-slate-700
                border border-transparent
                hover:bg-yellow-50
                hover:text-slate-900
                data-[state=active]:bg-yellow-400
                data-[state=active]:text-slate-900
                data-[state=active]:border-yellow-500
                data-[state=active]:shadow-sm
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
                border border-transparent
                hover:bg-yellow-50
                hover:text-slate-900
                data-[state=active]:bg-yellow-400
                data-[state=active]:text-slate-900
                data-[state=active]:border-yellow-500
                data-[state=active]:shadow-sm
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
                border border-transparent
                hover:bg-yellow-50
                hover:text-slate-900
                data-[state=active]:bg-yellow-400
                data-[state=active]:text-slate-900
                data-[state=active]:border-yellow-500
                data-[state=active]:shadow-sm
                transition-all
              "
            >
              Support &amp; RFQ
            </TabsTrigger>
          </TabsList>
        </div>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6 w-full">
          {product.fullContent ? (
            <Accordion type="single" collapsible className="space-y-4 w-full">
              {/* Overview & applications */}
              <AccordionItem value="overview-main">
                <AccordionTrigger className="rounded-xl bg-yellow-50/80 px-4 py-3 text-sm md:text-base font-semibold text-yellow-800 border border-yellow-200 data-[state=open]:rounded-b-none">
                  {product.name} – Overview &amp; Applications
                </AccordionTrigger>
                <AccordionContent className="border border-t-0 border-yellow-200 rounded-b-2xl bg-yellow-50/70 px-5 py-6 md:px-7 md:py-8 shadow-sm">
                  <article className="text-sm md:text-base leading-relaxed text-slate-800 whitespace-pre-line mb-4">
                    {product.fullContent}
                  </article>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <Link href="/contact">
                      <Button
                        size="sm"
                        className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-slate-900 border border-yellow-500 shadow-sm"
                      >
                        Request Full Product Catalogue
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full md:w-auto border-yellow-300 text-yellow-800 hover:bg-yellow-100"
                      >
                        Share RFQ / Specifications
                      </Button>
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* RFQ / Support */}
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
                      <span className="font-medium">{product.name}</span>,
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
                          size="sm"
                          className="
                            w-full md:w-auto
                            bg-yellow-400
                            hover:bg-yellow-500
                            text-slate-900
                            border border-yellow-500
                            shadow-sm
                          "
                        >
                          Send RFQ / Inquiry
                        </Button>
                      </Link>

                      <p className="text-[11px] md:text-xs text-slate-500 text-center">
                        Attach your RFQ, BOM, spare-parts list or existing quote
                        — we&apos;ll respond with pricing, lead times &amp;
                        options.
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
                <span className="font-medium">{product.name}</span> will be
                available soon. In the meantime, you can review the typical
                product range or contact our team for specifications and
                technical support.
              </p>
            </div>
          )}
        </TabsContent>

        {/* PRODUCT RANGE TAB */}
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
              {product.bullets.map((b) => (
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
              maintenance, SCM Supply FZCO can consolidate category requirements
              into a single, well-organised RFQ and supply package.
            </p>
            <ul className="space-y-1">
              <li>• Single-source for mixed-brand requirements</li>
              <li>• Competitive pricing for volume / project lots</li>
              <li>• Logistics support from USA / UAE to your site</li>
            </ul>
            <Link href="/contact">
              <Button
                size="sm"
                className="w-full md:w-auto bg-yellow-400 my-2 hover:bg-yellow-500 text-slate-900 border border-yellow-500 shadow-sm"
              >
                Plan Your Requirements with Us
              </Button>
            </Link>
          </aside>
        </TabsContent>

        {/* SUPPORT / RFQ TAB */}
        <TabsContent value="support" className="space-y-4 w-full">
          <aside className="bg-yellow-50/70 border border-yellow-200 rounded-2xl p-5 md:p-6 space-y-4 text-sm md:text-base text-slate-700 shadow-sm">
            <h3 className="font-semibold text-base md:text-lg">
              RFQ, Sourcing &amp; Logistics Support
            </h3>
            <p>
              SCM Supply FZCO can support brand-specific, OEM and niche
              requirements under{" "}
              <span className="font-medium">{product.name}</span>. Send us your
              RFQ and we will handle sourcing, consolidation and delivery.
            </p>
            <ul className="space-y-1">
              <li>• Support for bill-of-materials &amp; spare-parts lists</li>
              <li>• Comparison against existing supplier quotations</li>
              <li>• Air / sea freight and local deliveries in UAE &amp; GCC</li>
            </ul>
            <Link href="/contact">
              <Button
                size="sm"
                className="w-full md:w-auto mt-5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 border border-yellow-500 shadow-sm"
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
              <span className="font-medium">{product.name}</span>, but we can
              also support special, OEM-specific and niche items. Share your
              list or existing quote and we&apos;ll propose a competitive offer
              with full logistics support.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button
                  size="sm"
                  className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-slate-900 border border-yellow-500 shadow-sm"
                >
                  Request Competitive Offer
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full md:w-auto border-yellow-300 text-yellow-800 hover:bg-yellow-100"
                >
                  Contact Sales Team
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
