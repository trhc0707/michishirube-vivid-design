import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AIサービス - MichiShirube OÜ",
    "description": "AIコンサルティング、AI研修、AI開発、AI導入の4つのサービスを提供",
    "provider": {
      "@type": "Organization",
      "name": "MichiShirube OÜ"
    },
    "serviceType": "AI Consulting and Implementation",
    "areaServed": ["JP", "Global"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AIサービス",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AIコンサルティング",
            "description": "企業のAI戦略立案から導入までをサポート"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI研修",
            "description": "従業員のAIリテラシー向上と実践的なスキル習得"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI開発",
            "description": "カスタムAIソリューションの設計・開発・導入"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI導入",
            "description": "既存業務プロセスへのAIツール導入と運用サポート"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="AIサービス - MichiShirube OÜ | AIコンサルティング・研修・開発・導入"
        description="AIコンサルティング、AI研修、AI開発、AI導入の4つのサービスで、企業のAI活用を包括的にサポート。100社以上の導入実績。初回相談無料。"
        keywords="AIコンサルティング,AI研修,AI開発,AI導入,企業AI,AI活用,AIツール,業務効率化,DX推進,生成AI,ChatGPT,業務自動化"
        structuredData={structuredData}
      />
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
