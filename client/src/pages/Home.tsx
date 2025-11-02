import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";

import AboutSection from "@/components/AboutSection";
import ResourcesSection from "@/components/ResourcesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vivid-design.manus.space/#organization",
        "name": "MichiShirube OÜ",
        "alternateName": "ミチシルベ",
        "description": "海外移住とビジネスコンサルティングを専門とするエストニア法人",
        "url": "https://vivid-design.manus.space",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vivid-design.manus.space/logo.webp"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "availableLanguage": ["Japanese", "English", "French", "Spanish"],
            "contactOption": "TollFree",
            "areaServed": ["JP", "CA", "GE", "MX", "Worldwide"]
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "EE"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "Japan"
          },
          {
            "@type": "Country",
            "name": "Canada"
          },
          {
            "@type": "Country",
            "name": "Georgia"
          },
          {
            "@type": "Country",
            "name": "Mexico"
          }
        ],
        "knowsAbout": [
          "海外移住",
          "AIコンサルティング",
          "ビジネスコンサルティング",
          "マーケティング支援",
          "DX推進",
          "リモートワーク支援"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "サービス一覧",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "海外移住後収入構築サポート",
                "description": "カナダ、メキシコ、ジョージアなどへの移住サポートと現地での収入構築支援",
                "serviceType": "Relocation Support"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AIコンサルティング",
                "description": "ビジネスにAIを導入するためのコンサルティングサービス",
                "serviceType": "AI Consulting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ビジネスコンサルティング",
                "description": "LINE構築、SNS運用、ホームページ制作などのマーケティング支援",
                "serviceType": "Business Consulting"
              }
            }
          ]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://vivid-design.manus.space/#business",
        "name": "MichiShirube OÜ",
        "image": "https://vivid-design.manus.space/logo.webp",
        "priceRange": "要相談",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "EE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 59.437,
          "longitude": 24.7536
        },
        "url": "https://vivid-design.manus.space",
        "telephone": "お問い合わせフォームより",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "areaServed": [
          "日本",
          "カナダ",
          "ジョージア",
          "メキシコ"
        ],
        "sameAs": [
          "https://note.com/michishirube"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="MichiShirube OÜ - 海外移住・AI・ビジネスコンサルティング"
        description="海外移住後の収入構築サポート、AI導入コンサルティング、ビジネスマーケティング支援を提供するエストニア法人。カナダ、メキシコ、ジョージアへの移住を完全サポート。"
        keywords="海外移住,カナダ移住,メキシコ移住,ジョージア移住,AIコンサルティング,AI導入,ビジネスコンサルティング,マーケティング支援,LINE構築,SNS運用,エストニア法人"
        structuredData={structuredData}
      />
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
