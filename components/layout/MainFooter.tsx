// components/layout/MainFooter.tsx
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export function MainFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#f7c948] text-slate-900">
      {/* MAIN FOOTER CONTENT */}
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        {/* COMPANY */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">SCM Supply FZCO</h3>
          <p className="text-sm text-slate-800">
            International procurement & industrial supply partner for
            contractors, workshops, facilities, government buyers and global
            operations.
          </p>
        </div>

        {/* CONTACT */}
        <div className="space-y-3">
          <h4 className="font-semibold mb-1">Contact</h4>

          <div className="flex items-start gap-2 text-sm">
            <Phone className="h-4 w-4 text-slate-800 mt-0.5" />
            <a href="tel:+000000000" className="hover:text-slate-950">
              +00 000 0000
            </a>
          </div>

          <div className="flex items-start gap-2 text-sm">
            <Mail className="h-4 w-4 text-slate-800 mt-0.5" />
            <a
              href="mailto:info@scmsupply.com"
              className="hover:text-slate-950"
            >
              info@scmsupply.com
            </a>
          </div>
        </div>

        {/* LOCATIONS */}
        <div className="space-y-3">
          <h4 className="font-semibold mb-1">Locations</h4>

          <div className="flex items-start gap-2 text-sm">
            <MapPin className="h-4 w-4 text-slate-800 mt-0.5" />
            <p>
              <span className="font-medium">UAE – Dubai:</span>
              <br />
              Dubai Airport Free Zone (DAFZA)
            </p>
          </div>

          <div className="flex items-start gap-2 text-sm">
            <MapPin className="h-4 w-4 text-slate-800 mt-0.5" />
            <p>
              <span className="font-medium">USA – Houston:</span>
              <br />
              Houston, Texas, United States
            </p>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="space-y-3">
          <h4 className="font-semibold mb-1">Follow Us</h4>

          <div className="flex items-center gap-4 text-slate-800">
            <Link href="#" className="hover:text-slate-950">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-slate-950">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-slate-950">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-slate-300 bg-[#f7ca48]/70">
        <div className="container py-4 text-xs text-slate-900 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {year} SCM Supply FZCO. All rights reserved.</p>
          <p>
            USA • UAE (Dubai) • Serving Middle East, USA, Europe, Africa &amp;
            Asia
          </p>
        </div>
      </div>

      {/* Bottom decorative bar (optional) */}
      <div className="w-full h-[6px] bg-slate-900/20" />
    </footer>
  );
}
