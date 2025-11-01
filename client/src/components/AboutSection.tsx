import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pattern-text">ABOUT ABOUT ABOUT</div>
      </div>

      <div className="container relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 mb-2">Who we are</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-16">
              MichiShirube OÜは、海外移住とビジネスコンサルティングを専門とする企業です。世界中のクライアントに、新しい生活とビジネスの可能性を提供しています。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div
                className="aspect-[3/4] bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000')",
                }}
              ></div>
            </div>

            {/* About Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">私たちのミッション</h3>
                <p className="text-gray-600 leading-relaxed">
                  グローバルな視点で、個人と企業の成長を支援します。海外移住の夢を実現し、ビジネスの国際展開をサポートすることで、より豊かで自由な人生とビジネスの創造に貢献します。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">私たちの強み</h3>
                <p className="text-gray-600 leading-relaxed">
                  豊富な実績と専門知識を持つスタッフが、カナダ、メキシコ、ジョージアなど複数の国への移住をサポート。また、デジタルマーケティングからAI導入まで、最新のビジネスソリューションを提供します。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">私たちの価値観</h3>
                <p className="text-gray-600 leading-relaxed">
                  クライアント一人ひとりの夢と目標を大切にし、長期的なパートナーシップを築きます。透明性、誠実さ、そして結果へのコミットメントを最優先に、最高のサービスを提供します。
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button className="bg-[#333333] hover:bg-[#1a1a1a] text-white py-6 text-lg">
              会社概要 →
            </Button>
            <Button className="bg-[#333333] hover:bg-[#1a1a1a] text-white py-6 text-lg">
              お問い合わせ →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
