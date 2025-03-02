import { Footer, Navbar } from "@/components";
import {
  AboutSection,
  BusinessBenefitsSection,
  HeroSection,
  HowItWorksSection,
  SolutionSection,
  WhyChooseSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="bg-[#021114] text-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <BusinessBenefitsSection />
      </main>
      <Footer />
    </div>
  );
}
