"use client";

import Link from "next/link";

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/971543756775?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20product%20availability%20and%20pricing.%20Please%20assist.%20Thank%20you."
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-50
        flex
        items-center
        justify-center
        w-14
        h-14
        rounded-full
        bg-green-500
        hover:bg-green-600
        text-white
        shadow-xl
        transition-transform
        duration-300
        hover:scale-110
      "
    >
      {/* Exact WhatsApp Icon SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16.027 3C9.383 3 4 8.383 4 15.027c0 2.647.86 5.098 2.327 7.078L4 29l7.135-2.272A11.96 11.96 0 0 0 16.027 27C22.671 27 28 21.617 28 14.973S22.671 3 16.027 3zm5.764 17.098c-.244.685-1.42 1.338-1.969 1.408-.504.066-1.125.093-1.82-.114-.42-.132-1.014-.33-1.748-.645-3.073-1.333-5.073-4.437-5.223-4.648-.156-.21-1.245-1.66-1.245-3.166 0-1.506.79-2.25 1.07-2.554.28-.303.61-.38.82-.38.21 0 .41.004.59.01.19.01.44-.07.69.53.244.59.83 2.04.9 2.187.07.147.116.32.02.53-.093.21-.14.34-.28.53-.14.187-.3.42-.43.56-.14.14-.29.3-.12.59.17.29.75 1.23 1.62 2 1.11.99 2.04 1.3 2.33 1.44.29.14.46.12.63-.07.17-.19.73-.85.93-1.14.2-.29.39-.24.66-.14.28.093 1.76.83 2.06.98.29.14.48.21.55.33.07.12.07.7-.17 1.39z" />
      </svg>
    </Link>
  );
}
