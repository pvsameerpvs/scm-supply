// components/about/AboutLogisticsValue.tsx
export function AboutLogisticsValue() {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-900 text-slate-50 overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Left side – Logistics overview */}
        <div className="relative px-8 py-10 md:px-10 md:py-12">
          <div className="absolute inset-y-0 left-0 w-1 bg-amber-400" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-400">
            03 • Logistics
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            Logistics &amp; Global Supply Chain
          </h2>
          <p className="mt-5 text-sm md:text-base text-slate-200">
            SCM Supply delivers end-to-end procurement and logistics services
            across the USA, UAE, Middle East &amp; Africa. We manage the full
            supply chain — from global sourcing and vendor coordination to
            shipping, customs clearance and final delivery.
          </p>
          <p className="mt-4 text-sm md:text-base text-slate-200">
            Our logistics network includes FedEx, DHL, UPS, Aramex, and leading
            air-freight and sea-freight carriers, ensuring fast, reliable
            movement of goods worldwide. With expertise in export documentation,
            HS codes, customs compliance, and warehousing in both the USA and
            UAE, we support businesses and government clients with seamless,
            door-to-door supply solutions.
          </p>
        </div>

        {/* Right side – Key logistics capabilities */}
        <div className="bg-slate-900/80 px-8 py-10 md:px-10 md:py-12 border-t md:border-l md:border-t-0 border-slate-800">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-400">
            04 • Capabilities
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            How Our Logistics Work
          </h2>
          <ul className="mt-5 space-y-3 text-sm md:text-base text-slate-200">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>
                Global sourcing &amp; procurement across the USA, UAE, Europe
                &amp; Asia.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>Courier solutions through FedEx, DHL, UPS and Aramex.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>
                Air freight, sea freight, LCL/FCL and project cargo handling.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>
                Export documentation, HS codes and customs clearance expertise.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>
                Warehousing &amp; distribution in Houston (USA) and Dubai (UAE).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>
                Government &amp; enterprise-level supply-chain support.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>
                Fast delivery for industrial, MRO, oil &amp; gas, tools,
                machinery &amp; spare parts.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
