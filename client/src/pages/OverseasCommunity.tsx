import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import OverseasCommunityHeroSection from "@/components/lp/OverseasCommunityHeroSection";
import CommunityProblemsSection from "@/components/lp/CommunityProblemsSection";
import CommunityFeaturesSection from "@/components/lp/CommunityFeaturesSection";
import CommunityResultsSection from "@/components/lp/CommunityResultsSection";
import CommunityTestimonialsSection from "@/components/lp/CommunityTestimonialsSection";
import CommunityFlowSection from "@/components/lp/CommunityFlowSection";
import ContactSection from "@/components/ContactSection";

export default function OverseasCommunity() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="海外移住コミュニティ | MichiShirube OÜ"
        description="海外移住を目指す仲間とつながるコミュニティ。情報交換、相談、現地情報の共有など、移住を成功させるためのネットワークを提供します。"
        keywords="海外移住,コミュニティ,情報交換,ネットワーク,海外生活,移住サポート"
        ogImage="/og-overseas-community.png"
      />
      <Header />
      <OverseasCommunityHeroSection />
      <CommunityProblemsSection />
      <CommunityFeaturesSection />
      <CommunityResultsSection />
      <CommunityTestimonialsSection />
      <CommunityFlowSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
