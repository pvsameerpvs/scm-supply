// components/home/IndustriesAndWhySection.tsx
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle, Building2, Briefcase } from "lucide-react";

export default function IndustriesAndWhySection() {
  return (
    <section className="relative overflow-hidden">
      {/* BIG FAINT BACKGROUND WORD – bottom center */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
        aria-hidden="true"
      >
        <span className="text-[52px] md:text-[80px] font-extrabold tracking-[0.25em] uppercase text-amber-300/15 leading-none">
          Support
        </span>
      </div>

      <div className="container relative py-16 md:py-24 space-y-16">
        {/* Section Title */}
        <div className="relative text-center space-y-2">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-500">
            Our Strength
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Industries We Support &amp; Why Companies Choose Us
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            SCM Supply FZCO connects diverse industries to global brands,
            technical products and reliable supply-chain solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="relative grid gap-8 md:grid-cols-2 text-sm md:text-base">
          {/* INDUSTRIES CARD */}
          <Card className="bg-slate-900/5 border border-slate-200 shadow-none">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
                  <Building2 className="h-5 w-5 text-amber-500" />
                </span>
                <div>
                  <CardTitle className="text-lg md:text-xl text-slate-900">
                    Industries We Serve
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Flexible support for contractors, workshops, facility
                    managers, government entities &amp; industrial buyers.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
                <ul className="space-y-1.5">
                  <li>• Construction &amp; Contracting</li>
                  <li>• Manufacturing &amp; Fabrication</li>
                  <li>• Marine &amp; Offshore</li>
                  <li>• HVAC &amp; MEP Contractors</li>
                  <li>• Oil &amp; Gas Industry</li>
                </ul>
                <ul className="space-y-1.5">
                  <li>• Automotive &amp; Fleet Maintenance</li>
                  <li>• Facility Management</li>
                  <li>• Government &amp; Public Sector</li>
                  <li>• Workshops &amp; Repair Centers</li>
                  <li>• Electrical &amp; Mechanical Firms</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* WHY CHOOSE US CARD */}
          <Card className="bg-slate-900/5 border border-slate-200 shadow-none">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
                  <Briefcase className="h-5 w-5 text-amber-500" />
                </span>
                <CardTitle className="text-lg md:text-xl text-slate-900">
                  Why Choose SCM Supply FZCO?
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5" />
                  <span>
                    Single-source procurement partner for multi-brand RFQs.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5" />
                  <span>
                    Fast sourcing of critical, special and hard-to-find parts.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5" />
                  <span>
                    Expertise across tools, MRO, oil &amp; gas, HVAC, electrical
                    &amp; more.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5" />
                  <span>
                    Strong USA &amp; UAE sourcing base for global projects.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5" />
                  <span>
                    Reliable export packing, documentation and international
                    logistics.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
