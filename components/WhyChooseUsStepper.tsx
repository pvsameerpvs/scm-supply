// components/home/WhyChooseUsStepper.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle, Globe2, Clock3, PackageOpen, Wrench } from "lucide-react";

const steps = [
  { value: "step-1", title: "Single-Source Procurement Partner" },
  { value: "step-2", title: "Fast Sourcing for Critical Parts" },
  { value: "step-3", title: "Technical & MRO Expertise" },
  { value: "step-4", title: "Global Sourcing Base (USA & UAE)" },
  { value: "step-5", title: "Reliable Logistics & Documentation" },
];

export default function WhyChooseUsStepper() {
  // start from Step 1
  const [active, setActive] = useState<string>(steps[0].value);
  const activeIndex = steps.findIndex((s) => s.value === active);

  return (
    <section className="relative overflow-hidden">
      {/* Faint background word */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
        aria-hidden="true"
      >
        <span className="text-[52px] md:text-[80px] font-extrabold tracking-[0.3em] uppercase text-amber-300/15 leading-none">
          Choose
        </span>
      </div>

      <div className="container relative py-16 md:py-24 space-y-16">
        {/* Section heading */}
        <div className="text-center space-y-2">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-500">
            Our Advantage
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Why Choose SCM Supply FZCO?
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            A step-by-step look at how we simplify your procurement, reduce risk
            and keep your operations running without interruption.
          </p>
        </div>

        <Tabs
          value={active}
          onValueChange={setActive}
          className="w-full space-y-10"
        >
          {/* Arrow stepper header */}
          <div>
            <TabsList className="flex w-full p-0 bg-transparent border-0 gap-2">
              {steps.map((step, index) => {
                const isCompleted = index < activeIndex;
                const isActive = index === activeIndex;

                // Colors: dark for completed, bright for active, white for upcoming
                const completedColor = "#d4a72c"; // darker amber
                const activeColor = "#f7c948"; // brand yellow
                const defaultBg = "#ffffff";
                const defaultText = "#64748b";
                const defaultBorder = "#e2e8f0";

                let bg = defaultBg;
                let text = defaultText;
                let border = defaultBorder;

                if (isCompleted) {
                  bg = completedColor;
                  text = "#ffffff";
                  border = completedColor;
                } else if (isActive) {
                  bg = activeColor;
                  text = "#1f2933";
                  border = activeColor;
                }

                return (
                  <TabsTrigger
                    key={step.value}
                    value={step.value}
                    className={`
                      relative flex-1 h-12 md:h-14
                      flex items-center justify-center
                      text-[11px] md:text-sm font-medium
                      border transition-colors
                      px-3 md:px-5
                      first:rounded-l-2xl last:rounded-r-2xl
                    `}
                    style={{
                      backgroundColor: bg,
                      color: text,
                      borderColor: border,
                      clipPath:
                        "polygon(0% 0%, 100% 0%, 96% 50%, 100% 100%, 0% 100%, 4% 50%)",
                    }}
                  >
                    Step {index + 1}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* thin line under the stepper */}
            <div className="mt-4 h-px w-full bg-slate-200" />
          </div>

          {/* Step content grid */}
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
            {/* Text panels */}
            <div className="space-y-6">
              <TabsContent value="step-1" className="mt-0">
                <StepPanel
                  icon={<CheckCircle className="h-6 w-6 text-amber-500" />}
                  title="Single-Source Procurement Partner"
                  subtitle="Consolidate your RFQs and reduce admin load."
                  bullets={[
                    "Handle multi-brand RFQs through one dedicated partner.",
                    "Reduce time spent chasing multiple suppliers and quotes.",
                    "Standardize communication, documentation and follow-up.",
                  ]}
                  imageSrc="/tabs1.jpg"
                  imageAlt="Single source procurement"
                />
              </TabsContent>

              <TabsContent value="step-2" className="mt-0">
                <StepPanel
                  icon={<Clock3 className="h-6 w-6 text-amber-500" />}
                  title="Fast Sourcing for Critical & Hard-to-Find Parts"
                  subtitle="Support for urgent shutdowns, breakdowns and project deadlines."
                  bullets={[
                    "Prioritized handling of critical and shutdown-related requests.",
                    "Flexible sourcing routes across USA, Europe and regional stock.",
                    "Proactive alternatives if original items are obsolete or delayed.",
                  ]}
                  imageSrc="/tabs5.jpg"
                  imageAlt="Fast sourcing of critical parts"
                />
              </TabsContent>

              <TabsContent value="step-3" className="mt-0">
                <StepPanel
                  icon={<Wrench className="h-6 w-6 text-amber-500" />}
                  title="Deep Technical & MRO Expertise"
                  subtitle="Support across tools, MRO, oil & gas, HVAC, electrical and more."
                  bullets={[
                    "Cross-referencing OEM part numbers and equivalent products.",
                    "Support for tools, instrumentation, HVAC, electrical and MEP packages.",
                    "Helping engineering and maintenance teams validate specifications.",
                  ]}
                  imageSrc="/tabs3.jpg"
                  imageAlt="Technical and MRO expertise"
                />
              </TabsContent>

              <TabsContent value="step-4" className="mt-0">
                <StepPanel
                  icon={<Globe2 className="h-6 w-6 text-amber-500" />}
                  title="Strong USA & UAE Sourcing Base"
                  subtitle="Dual presence for global projects and regional delivery."
                  bullets={[
                    "Houston and Dubai locations to bridge manufacturers and end users.",
                    "Direct access to USA and international brands.",
                    "Optimized shipping routes for Middle East, Africa, Europe and Asia.",
                  ]}
                  imageSrc="/tabs2.jpg"
                  imageAlt="Global sourcing base"
                />
              </TabsContent>

              <TabsContent value="step-5" className="mt-0">
                <StepPanel
                  icon={<PackageOpen className="h-6 w-6 text-amber-500" />}
                  title="Logistics, Packing & Documentation You Can Trust"
                  subtitle="End-to-end coordination from purchase order to final delivery."
                  bullets={[
                    "Export packing, compliance and documentation handled for you.",
                    "Consolidated shipments and optimized freight planning.",
                    "Transparent lead-times and communication for every order.",
                  ]}
                  imageSrc="/tabs4.jpg"
                  imageAlt="Reliable logistics and documentation"
                />
              </TabsContent>
            </div>

            {/* Static summary panel */}
            <div className="bg-slate-900/5 border border-slate-200 rounded-2xl px-6 py-6 md:px-8 md:py-8 space-y-4">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-500">
                Result
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                A Procurement Partner, Not Just a Supplier
              </h3>
              <p className="text-sm text-slate-600">
                By partnering with SCM Supply FZCO, you gain a single point of
                contact for sourcing, logistics and technical support — helping
                your team stay focused on projects, maintenance and operations.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Fewer suppliers to manage</li>
                <li>• Faster turnaround on urgent needs</li>
                <li>• Stronger control over cost and delivery</li>
              </ul>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

type StepPanelProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
};

function StepPanel({
  icon,
  title,
  subtitle,
  bullets,
  imageSrc,
  imageAlt,
}: StepPanelProps) {
  return (
    <div className="space-y-4 border border-slate-200 rounded-2xl px-5 py-5 md:px-6 md:py-6">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
        {/* Text */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
              {icon}
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-slate-900">
                {title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600">{subtitle}</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            {bullets.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="relative h-32 md:h-40 w-full rounded-xl overflow-hidden">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
