import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import AIConsultingHeroSection from "@/components/lp/AIConsultingHeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FlowSection from "@/components/FlowSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function AIConsulting() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AIConsultingHeroSection />
        <ProblemsSection />
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
