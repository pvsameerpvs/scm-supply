"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const heroImages = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE EVERY 10 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black text-white min-h-[calc(100vh-64px)] overflow-hidden">
      {/* SLIDING BACKGROUND IMAGES */}
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt="SCM Supply Hero Background"
              fill
              priority
              className="object-cover object-center md:object-[80%]"
            />
          </div>
        ))}
      </div>

      {/* DARK LEFT OVERLAY */}

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 grid md:grid-cols-2 min-h-[calc(100vh-64px)]">
        {/* LEFT SIDE TEXT */}
        <div className="flex flex-col justify-end p-6 sm:p-8 gap-3">
          <p className="text-xs tracking-[0.28em] uppercase text-yellow-400">
            SCM Supply FZCO
          </p>

          <p className="max-w-md text-sm sm:text-base text-slate-100">
            Strategic partner for industrial procurement, MRO, tools, oil &amp;
            gas spares and logistics – serving UAE, GCC, USA, Europe, Africa
            &amp; Asia.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <Link href="/contact">
              <Button size="sm">Request RFQ</Button>
            </Link>
            <Link href="/products">
              <Button
                size="sm"
                variant="outline"
                className="border-yellow-300 text-yellow-300"
              >
                Browse Products
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE – YELLOW PANEL */}
        <div className="relative bg-[#f7c948] text-slate-900 flex py-8 px-4 sm:px-6 md:px-10 overflow-hidden">
          <div
            className="
              leading-none font-black uppercase tracking-tight
              text-transparent
              text-6xl sm:text-7xl lg:text-[140px]
              [text-stroke:4px_#1e293b]
              [-webkit-text-stroke:4px_#1e293b]
              pointer-events-none
              w-full md:w-auto
              text-center md:text-left
              mb-8 md:mb-0
              md:absolute md:left-1 lg:-left-4 md:top-1/2 md:-translate-y-1/2
            "
          >
            <span className="block">IN</span>
            <span className="block">DUS</span>
            <span className="block">TRY</span>
          </div>

          <div className="relative flex flex-col justify-between items-center md:items-end w-full md:pl-40 lg:pl-52">
            <div className="text-center md:text-right">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
                SCM SUPPLY
              </p>
              <p className="text-base sm:text-lg font-extrabold leading-tight mt-1">
                GLOBAL&nbsp;INDUSTRIAL
                <br />
                PROCUREMENT
              </p>
            </div>

            <div className="max-w-xs text-xs sm:text-sm text-slate-800 mt-8 text-center md:text-right">
              <p className="font-semibold">
                Offices in Dubai, UAE &amp; Houston, USA
              </p>
              <p>
                End-to-end sourcing, consolidation &amp; shipping for
                industrial, oil &amp; gas, infrastructure &amp; commercial
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
