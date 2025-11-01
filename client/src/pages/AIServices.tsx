import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIServicesHeroSection from "@/components/lp/AIServicesHeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import AIServicesSection from "@/components/lp/AIServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FlowSection from "@/components/FlowSection";
import ContactSection from "@/components/ContactSection";

export default function AIServices() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AIServicesHeroSection />
        <ProblemsSection />
        <AIServicesSection />
        <FeaturesSection />
        <ResultsSection />
        <TestimonialsSection />
        <FlowSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
