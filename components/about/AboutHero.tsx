// components/about/AboutHero.tsx
import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
  return (
    <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
      <div className="space-y-6 max-w-xl">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-amber-400">
          ABOUT SCM SUPPLY FZCO
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          <span className="block uppercase text-slate-900">Turning</span>
          <span className="block uppercase text-amber-400">Big Ideas</span>
          <span className="block uppercase text-slate-800">
            Into Great Products &amp; Supply Solutions
          </span>
        </h1>

        <p className="text-sm md:text-base text-slate-600 max-w-xl">
          SCM Supply FZCO is an international procurement, logistics, and
          industrial supply company operating from the United States and United
          Arab Emirates (Dubai). With more than 15 years of expertise, we
          support commercial companies, contractors, workshops, manufacturing
          sites, facility managers, government buyers, and industrial operations
          worldwide.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-wide bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-md"
          >
            Get a Quote
          </Link>
          <span className="text-xs md:text-sm text-slate-500 max-w-xs">
            We work at the forefront of innovation and technology to take
            products from an idea all the way to the end consumer.
          </span>
        </div>
      </div>

      {/* Framed image like the reference design */}
      <div className="relative h-[260px] md:h-[360px]">
        {/* outer yellow frame */}
        <div className="absolute -top-6 -right-6 h-full w-full border-4 border-amber-400" />
        {/* inner block */}
        <div className="absolute inset-0 bg-slate-900" />
        {/* main image */}
        <div className="relative m-5 h-[calc(100%-2.5rem)]">
          <div className="relative h-full w-full overflow-hidden shadow-2xl">
            <Image
              src="/about1.jpg" // same image as your page
              alt="Industrial safety & procurement"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
