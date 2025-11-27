export const metadata = {
  title: "Contact SCM Supply FZCO | RFQs, Procurement & Logistics Support",
  description:
    "Get in touch with SCM Supply FZCO for RFQs, industrial sourcing, logistics support and supplier registration in UAE, USA and worldwide.",
};

export default function ContactPage() {
  return (
    <div className="relative bg-white">
      {/* 🔶 FULL-WIDTH TOP YELLOW LINE */}
      <div className="w-full h-1.5 bg-[#f7c948]" />
      {/* THEME YELLOW WAVES IN BACKGROUND – PAGE BG STAYS WHITE */}
      <div className="pointer-events-none absolute inset-x-0 -top-36 -z-10 overflow-hidden">
        <div className="mx-auto h-44 w-[140%] rounded-[100%] bg-[#f7c948]/45 opacity-70 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 overflow-hidden">
        <div className="mx-auto h-48 w-[140%] rounded-[100%] bg-[#f7c948]/35 opacity-70 blur-3xl" />
      </div>

      <div className="container py-10 md:py-14 space-y-10">
        {/* HEADER */}
        <header className="space-y-4 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-500">
            Tell Us About your Needs
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
            Contact Us
          </h1>

          <p className="text-base md:text-lg text-slate-600">
            We’re here to support your procurement, supply-chain, and industrial
            sourcing requirements across the UAE, USA, and global markets. Reach
            out to us anytime—our team responds quickly to RFQs, technical
            inquiries, supplier registrations, and project requirements.
          </p>
        </header>
        \
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* LEFT: OFFICE INFO + RFQ INFO */}
          <div className="space-y-6 text-sm md:text-base">
            <div className="space-y-3 bg-white/90 border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#f7c948]" />
                UAE Office – Dubai
              </h2>
              <p className="text-slate-700">
                Bldg. A1, DDP, Dubai Silicon Oasis
                <br />
                Dubai, United Arab Emirates
              </p>
              <p>
                <span className="font-semibold">Telephone:</span>{" "}
                <a
                  href="tel:+971543756775"
                  className="text-slate-900 hover:underline"
                >
                  +971 54 375 6775
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@scmsupply.com"
                  className="text-slate-900 hover:underline"
                >
                  info@scmsupply.com
                </a>{" "}
                /{" "}
                <a
                  href="mailto:sales@scmsupply.com"
                  className="text-slate-900 hover:underline"
                >
                  sales@scmsupply.com
                </a>
              </p>
            </div>

            <div className="space-y-3 bg-white/90 border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#f7c948]" />
                USA Office – Houston
              </h2>
              <p className="text-slate-700">
                9898 Bissonnet St., Suite 375D
                <br />
                Houston, TX 77036, United States
              </p>
              <p>
                <span className="font-semibold">Telephone:</span>{" "}
                <a
                  href="tel:+18327593558"
                  className="text-slate-900 hover:underline"
                >
                  +1 (832) 759-3558
                </a>
                {", "}
                <a
                  href="tel:+18324908630"
                  className="text-slate-900 hover:underline"
                >
                  +1 (832) 490-8630
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:sales@scmsupply.com"
                  className="text-slate-900 hover:underline"
                >
                  sales@scmsupply.com
                </a>
              </p>
            </div>

            <div className="space-y-3 bg-[#f7c948]/10 border border-[#f7c948]/60 rounded-2xl p-5 md:p-6">
              <h2 className="font-semibold text-lg text-slate-900">
                RFQs, Projects &amp; Supplier Registration
              </h2>
              <p className="text-slate-700">
                For detailed RFQs, please include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Company name &amp; location</li>
                <li>Contact person &amp; phone number</li>
                <li>Part numbers, descriptions &amp; quantities</li>
                <li>Preferred brands or equivalent acceptable</li>
                <li>Required delivery location and timeline</li>
              </ul>
              <p className="text-slate-700">
                You can also email us directly at{" "}
                <a
                  href="mailto:sales@scmsupply.com"
                  className="font-semibold text-slate-900 hover:underline"
                >
                  sales@scmsupply.com
                </a>{" "}
                or{" "}
                <a
                  href="mailto:info@scmsupply.com"
                  className="font-semibold text-slate-900 hover:underline"
                >
                  info@scmsupply.com
                </a>
                .
              </p>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm">
            <h2 className="font-semibold text-lg md:text-xl mb-2 text-slate-900">
              Send Us a Message
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-5">
              Share your RFQ or inquiry and our team will get back to you with
              pricing, availability and logistics options.
            </p>

            <form className="space-y-4 text-sm md:text-base">
              <div className="space-y-1.5">
                <label className="block font-medium text-slate-800">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm md:text-base text-slate-900 outline-none focus:border-[#f7c948] focus:ring-2 focus:ring-[#f7c948]/40"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-medium text-slate-800">
                  Phone Number (WhatsApp / Mobile){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+971 54 375 6775"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm md:text-base text-slate-900 outline-none focus:border-[#f7c948] focus:ring-2 focus:ring-[#f7c948]/40"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-medium text-slate-800">
                  Location (City &amp; Country){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dubai, UAE"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm md:text-base text-slate-900 outline-none focus:border-[#f7c948] focus:ring-2 focus:ring-[#f7c948]/40"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-medium text-slate-800">
                  Office Preference
                </label>
                <select
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm md:text-base text-slate-900 outline-none focus:border-[#f7c948] focus:ring-2 focus:ring-[#f7c948]/40"
                  defaultValue="uae"
                >
                  <option value="uae">UAE Office – Dubai</option>
                  <option value="usa">USA Office – Houston</option>
                  <option value="any">Either office / Any</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block font-medium text-slate-800">
                  Message / RFQ Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Share part numbers, descriptions, quantities, preferred brands and delivery timelines..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm md:text-base text-slate-900 outline-none resize-y focus:border-[#f7c948] focus:ring-2 focus:ring-[#f7c948]/40"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[#f7c948] px-4 py-2.5 text-sm md:text-base font-semibold text-slate-900 shadow-sm hover:bg-[#f7c948]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f7c948]"
              >
                Submit Inquiry
              </button>

              <p className="text-xs md:text-[13px] text-slate-500 mt-2">
                By submitting this form, you agree to be contacted by SCM Supply
                FZCO regarding your inquiry. We do not share your details with
                third parties.
              </p>
            </form>
          </div>
        </section>
      </div>
      <div className="w-full h-1.5 bg-[#f7c948]" />
    </div>
  );
}
