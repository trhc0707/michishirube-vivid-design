import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const [, setLocation] = useLocation();

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
    <section id="about" ref={sectionRef} className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pattern-text">ABOUT ABOUT ABOUT</div>
      </div>

      <div className="container relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 mb-2">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">会社概要</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-16">
              MichiShirube OÜ specializes in overseas relocation and business consulting, empowering clients worldwide with new opportunities for life and business.
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
                  日本人とフランス人の国際チームが、英語・フランス語・スペイン語・日本語の4言語で世界中のAIニュースを毎日収集。海外の最先端事例を日本市場に適応させ、カナダ、メキシコ、ジョージアへの移住サポートと、AI導入・デジタルマーケティングの包括的なビジネスソリューションを提供します。
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

          {/* CEO Message Excerpt */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-black"></div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">CEO Message</p>
                  <p className="text-xl font-bold">代表メッセージ</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  私は15歳でオーストラリアに単身留学し、以来4カ国で11年間生活してきました。現在は妻と3人の子どもとともに、ノマドファミリーとして世界を旅しながら、MichiShirube OÜを経営しています。
                </p>
                <p>
                  フランス人の開発パートナーと協業しながら、4言語で世界中のAIニュースを毎日収集し、海外の最先端事例を日本市場に適応させています。私たちのミッションは、「あなたの生き方、好き！」と思ってもらえる人生を、一人でも多くの方に実現していただくことです。
                </p>
                <p className="text-sm text-gray-500 italic">
                  700名以上の方々と個別相談を重ね、70名以上を実際に海外でサポートしてきた経験から、皆さまの夢の実現を全力でサポートいたします。
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">代表取締役</p>
                  <p className="text-lg font-bold">今村拓真</p>
                </div>
                <Button 
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white"
                  onClick={() => setLocation("/about-us")}
                >
                  詳しく見る →
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-12">
            <Button 
              className="bg-[#333333] hover:bg-[#1a1a1a] text-white py-6 text-lg"
              onClick={() => setLocation("/about-us")}
            >
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
