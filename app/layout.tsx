// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { MainHeader } from "@/components/layout/MainHeader";
import { MainFooter } from "@/components/layout/MainFooter";
import { anton } from "./fonts";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "SCM Supply FZCO | Industrial Procurement & Supply-Chain Partner",
  description:
    "SCM Supply FZCO - Your strategic partner for global industrial procurement, oil & gas parts, MRO supplies, and supply-chain solutions from USA & UAE (Dubai).",
  keywords: [
    "SCM Supply FZCO",
    "Industrial Procurement",
    "MRO Supplies",
    "Oil & Gas Parts",
    "Global Supplier",
    "UAE Industrial Supply",
    "USA Industrial Supply",
    "Supply-Chain Solutions",
    "Dubai Industrial Supplier",  ],
    
    icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="min-h-screen flex flex-col">
          <MainHeader />

          <main className="flex-1 min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">
            {children}
          </main>

          <MainFooter />
            <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
