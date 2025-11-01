import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";

import AboutSection from "@/components/AboutSection";
import ResourcesSection from "@/components/ResourcesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServiceSection />

        <AboutSection />

        <ResourcesSection />

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
