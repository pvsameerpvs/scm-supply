"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { anton } from "@/app/fonts";

// Background slideshow images
const heroImages = [
  "/hero-change8.jpeg",
  "/hero-change2.jpeg",
  "/hero-change4.jpeg",
  "/hero-change5.jpeg",
  "/hero-change6.jpeg",
  "/hero-change7.jpeg",
  "/hero-motor4.jpg",
  "/hero-last1.jpg",
  "/hero-last2.jpg",
  "/hero-last3.jpg",
  "/hero-last4.jpg",
];

// Text to type
const TYPING_LINES = ["Smart Procurement", "Fast Logistics", "Global Coverage"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // Typing state
  const [displayedLines, setDisplayedLines] = useState<string[]>(["", "", ""]);
  const [typingDone, setTypingDone] = useState(false);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, []);

  // Typing animation for "Industrial / Procurement / & Logistics"
  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let typingIntervalId: number | undefined;

    const startTyping = () => {
      lineIndex = 0;
      charIndex = 0;
      setDisplayedLines(["", "", ""]);
      setTypingDone(false);

      if (typingIntervalId) {
        window.clearInterval(typingIntervalId);
      }

      typingIntervalId = window.setInterval(() => {
        if (lineIndex >= TYPING_LINES.length) {
          if (typingIntervalId) window.clearInterval(typingIntervalId);
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
      }, 70);
    };

    // run typing immediately
    startTyping();

    // repeat typing every 5 seconds
    const loopIntervalId = window.setInterval(() => {
      startTyping();
    }, 5000);

    return () => {
      if (typingIntervalId) window.clearInterval(typingIntervalId);
      window.clearInterval(loopIntervalId);
    };
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
        {/* LEFT SIDE TEXT – CLEAN, CENTERED, NO ABSOLUTE POSITIONING */}
        {/* LEFT SIDE TEXT – TOP / MIDDLE / BOTTOM LAYOUT */}
        <div className="relative flex flex-col justify-between p-6 sm:p-8">
          {/* 🔼 TOP LEFT CONTENT */}
          <div className="flex flex-col gap-3">
            <p className="text-2xl md:text-4xl tracking-[0.28em] uppercase text-yellow-400 font-bold">
              SCM Supply FZCO
            </p>

            <p className="max-w-md text-sm sm:text-base text-slate-100">
              Strategic partner for industrial procurement, MRO, tools, oil
              &amp; gas spares and logistics – serving UAE, GCC, USA, Europe,
              Africa &amp; Asia.
            </p>
          </div>

          {/* ⬆️⬇️ MIDDLE LEFT – TYPING TEXT */}
          <div
            className={`
      ${anton.className}
      text-yellow-300
      leading-tight
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
      mt-6 mb-6
      h-[4.5rem] sm:h-[5.5rem] md:h-[6.5rem] lg:h-[7.5rem]
    `}
          >
            <p className="font-black uppercase">{displayedLines[0]}</p>
            <p className="font-black uppercase">{displayedLines[1]}</p>
            <p className="font-black uppercase typing-cursor">
              {displayedLines[2]}
              {!typingDone && <span>&nbsp;</span>}
            </p>
          </div>

          {/* 🔽 BOTTOM LEFT – BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-4">
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

        {/* RIGHT PANEL – NO YELLOW BG, TOP + BOTTOM CONTENT */}
        <div className="relative flex flex-col justify-between py-8 px-4 sm:px-6 md:px-10 overflow-hidden w-full">
          {/* TOP CONTENT */}
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

          {/* BOTTOM CONTENT */}
          <div className="max-w-xs text-xs sm:text-sm text-slate-200 mt-8 text-center self-center md:self-end md:text-right">
            <p className="font-semibold">
              Offices in Dubai, UAE &amp; Houston, USA
            </p>
            <p>
              End-to-end sourcing, consolidation &amp; shipping for industrial,
              oil &amp; gas, infrastructure &amp; commercial projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
