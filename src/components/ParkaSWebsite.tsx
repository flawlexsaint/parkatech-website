import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SolutionSection from "./sections/SolutionSection";
import BusinessBenefitsSection from "./sections/BusinessBenefitsSection";
import WhyChooseSection from "./sections/WhyChooseSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import Footer from "./Footer";

const ParkaSWebsite: React.FC = () => {
  return (
    <div className="bg-[#021114] text-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionSection />
        <BusinessBenefitsSection />
        <WhyChooseSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default ParkaSWebsite;
