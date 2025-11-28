import HeroSection from "@/components/home/HeroSection";
import IndustriesAndWhySection from "@/components/home/IndustriesAndWhySection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import HelpCtaSection from "@/components/home/HelpCtaSection";
import AboutPage from "./about/page";
import WhyChooseUsStepper from "@/components/WhyChooseUsStepper";
import IndustrialComponentsPage from "./industrial-components/page";
import IndustrialComponentsSection from "@/components/industrial/IndustrialComponentsSection";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Full screen & full width */}
      <HeroSection />

      {/* Container for the rest */}
      <div className=" py-10 md:py-14 space-y-12">
        <AboutPage />
        <IndustrialComponentsSection />
        <IndustriesAndWhySection />
        <FeaturedProductsSection />
        <WhyChooseUsStepper />
        <HelpCtaSection />
      </div>
    </div>
  );
}
