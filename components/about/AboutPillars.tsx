// components/about/AboutPillars.tsx
import Image from "next/image";

export function AboutPillars() {
  return (
    <section className="mt-14 text-sm md:text-base">
      <div className="mb-6 flex flex-col items-start gap-2">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-400">
          Our Foundation
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Built Around Your Operations
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* CARD 1 */}
        <div className="relative overflow-hidden rounded-xl h-72 shadow-md group">
          <Image
            src="/GlobalPresence.jpg"
            alt="Global Presence"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-slate-900 text-xl mb-3">
              🌍
            </div>
            <h3 className="text-lg font-semibold">Global Presence</h3>
            <p className="mt-2 text-sm text-slate-100">
              Offices in Dubai (UAE) and Houston (USA) allow SCM Supply FZCO to
              source from international manufacturers and serve the Middle East,
              Africa, Europe and Asia.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="relative overflow-hidden rounded-xl h-72 shadow-md group">
          <Image
            src="/CustomersWeSupport.jpg"
            alt="Customers"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-slate-900 text-xl mb-3">
              🤝
            </div>
            <h3 className="text-lg font-semibold">Customers We Support</h3>
            <p className="mt-2 text-sm text-slate-100">
              We work with EPC, oil & gas, manufacturers, shipyards, workshops,
              government entities and facilities worldwide.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="relative overflow-hidden rounded-xl h-72 shadow-md group">
          <Image
            src="/Approach&Culture.jpg"
            alt="Approach & Culture"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-slate-900 text-xl mb-3">
              ⚙️
            </div>
            <h3 className="text-lg font-semibold">Approach & Culture</h3>
            <p className="mt-2 text-sm text-slate-100">
              We focus on fast response, clear communication and accurate
              technical matching for operational continuity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
