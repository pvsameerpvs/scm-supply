"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { anton } from "@/app/fonts";

// Background slideshow images
const heroImages = [
  "/hero1.jpg",
  "/hero6.jpg",
  "/hero7.jpg",
  "/hero8.jpg",
  "/hero9.jpg",
  "/hero10.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
];

// Text to type
const TYPING_LINES = ["Industrial", "Procurement", "& Logistics"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // Typing state (TS typed)
  const [displayedLines, setDisplayedLines] = useState<string[]>(["", "", ""]);
  const [typingDone, setTypingDone] = useState(false);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  // Typing animation for "Industrial / Procurement / & Logistics"
  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    const type = () => {
      lineIndex = 0;
      charIndex = 0;
      setDisplayedLines(["", "", ""]);
      setTypingDone(false);

      const typingInterval = setInterval(() => {
        // Stop if beyond the last line
        if (lineIndex >= TYPING_LINES.length) {
          clearInterval(typingInterval);
          setTypingDone(true);
          return;
        }

        setDisplayedLines((prev) => {
          const next = [...prev];
          const currentLine = TYPING_LINES[lineIndex];

          if (!currentLine) return prev;

          next[lineIndex] = currentLine.slice(0, charIndex + 1);
          return next;
        });

        charIndex++;

        if (charIndex >= TYPING_LINES[lineIndex].length) {
          lineIndex++;
          charIndex = 0;
        }
      }, 70); // typing speed
    };

    // run typing immediately
    type();

    // 🔁 repeat typing every 5 seconds
    const loopInterval = setInterval(() => {
      type();
    }, 5000);

    return () => clearInterval(loopInterval);
  }, []);

  return (
    <section className="relative bg-black text-white min-h-[calc(100vh-64px)] overflow-hidden">
      {/* BACKGROUND IMAGE SLIDESHOW */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt="SCM Supply Background"
              fill
              priority
              className="object-cover object-center md:object-[80%]"
            />
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 grid md:grid-cols-2 min-h-[calc(100vh-64px)]">
        {/* LEFT SIDE TEXT */}
        <div className="relative flex flex-col justify-end p-6 sm:p-8 gap-3">
          <p className="text-xs tracking-[0.28em] uppercase text-yellow-400">
            SCM Supply FZCO
          </p>

          <p className="max-w-md text-sm sm:text-base text-slate-100">
            Strategic partner for industrial procurement, MRO, tools, oil &amp;
            gas spares and logistics – serving UAE, GCC, USA, Europe, Africa
            &amp; Asia.
          </p>

          {/* INDUSTRIAL PROCUREMENT & LOGISTICS – TYPING + BLINKING CURSOR */}
          <div
            className={`
              ${anton.className}
              mt-4
              text-yellow-300
              leading-[0.9]
              text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[100px]
              text-right
              md:absolute
              md:left-1/2
              md:top-1/2
              md:-translate-x-[38%]
              md:-translate-y-1/2
            `}
          >
            <p className="font-black uppercase">{displayedLines[0]}</p>
            <p className="font-black uppercase">{displayedLines[1]}</p>
            <p className="font-black uppercase typing-cursor">
              {displayedLines[2]}
              {/* cursor while typing */}
              {!typingDone && <span>&nbsp;</span>}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-6 md:mt-4">
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
              >
                Request RFQ
              </Button>
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

        {/* RIGHT PANEL */}
        <div className="relative bg-[#f7c948] text-slate-900 flex py-8 px-4 sm:px-6 md:px-10 overflow-hidden">
          {/* INDUSTRY TEXT — FIXED IMAGE + BOLD + TIGHT */}
          <div
            className={`
              leading-[0.85] uppercase 
              text-5xl sm:text-6xl md:text-7xl lg:text-[180px] xl:text-[220px]
              pointer-events-none
              w-full md:w-auto
              text-center md:text-left
              mb-8 md:mb-0
              md:absolute md:left-1 lg:-left-4 md:top-1/2 md:-translate-y-1/2
              industry-mask
            `}
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
                url(${heroImages[index]})
              `,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <span
              className={`${anton.className} font-black tracking-[-0.04em] block`}
            >
              IN
            </span>
            <span
              className={`${anton.className} font-black tracking-[-0.04em] block`}
            >
              DUS
            </span>
            <span
              className={`${anton.className} font-black tracking-[-0.04em] block`}
            >
              TRY
            </span>
          </div>

          {/* RIGHT SIDE DETAILS */}
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
