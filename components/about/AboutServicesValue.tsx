// components/about/AboutServicesValue.tsx
export function AboutServicesValue() {
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-900 text-slate-50 overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Left side – What We Do */}
        <div className="relative px-8 py-10 md:px-10 md:py-12">
          <div className="absolute inset-y-0 left-0 w-1 bg-amber-400" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-400">
            01 • Services
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            What We Do
          </h2>
          <p className="mt-5 text-sm md:text-base text-slate-200">
            We streamline sourcing, handle global logistics, and deliver
            thousands of products including hand and power tools, pumps and
            fluid-handling systems, fasteners, electrical and automation
            components, HVAC parts, safety and PPE, plumbing materials,
            pneumatics, hydraulics, abrasives, adhesives, welding supplies,
            lighting, material-handling equipment, raw materials, laboratory
            tools, janitorial supplies, and full MRO ranges.
          </p>
          <p className="mt-4 text-sm md:text-base text-slate-300">
            Our role is to act as your single procurement and logistics partner
            – connecting your projects and facilities to global brands,
            technical products, and efficient supply-chain solutions.
          </p>
        </div>

        {/* Right side – How We Add Value */}
        <div className="bg-slate-900/80 px-8 py-10 md:px-10 md:py-12 border-t md:border-l md:border-t-0 border-slate-800">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-400">
            02 • Value
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            How We Add Value
          </h2>
          <ul className="mt-5 space-y-3 text-sm md:text-base text-slate-200">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>
                Reduce supplier count and administrative load through
                consolidated procurement.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>
                Support urgent requirements and hard-to-find parts with flexible
                sourcing routes.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>
                Combine USA, European and regional brands under one shipment and
                invoice.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>
                Handle export packing, compliance, documentation and freight
                from door to port/site.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>
                Assist technical teams with cross-references, alternates and
                equivalent products.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
