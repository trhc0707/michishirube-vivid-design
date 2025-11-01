import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const newsItems = [
    "2025/01/15 AI導入支援実績100社突破！シフト管理・在庫管理・顧客対応など8種類の業務自動化を実現",
    "2025/01/10 カナダ・メキシコ・ジョージアへの移住サポート60名以上達成！11年の海外経験でトータルサポート",
    "2024/12/20 4言語対応のグローバルAIコンサルティング開始！英語・フランス語・スペイン語・日本語で世界中の最新AI情報を毎日収集",
    "2024/12/01 日仏国際チームによるAI×海外移住の包括サポート！エストニア法人として日本市場に海外最先端事例を提供",
    "2024/11/15 SNS総フォロワー28,000名突破！700名以上の個別相談実績で、あなたの生き方をサポート",
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center text-white transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Global AI × Relocation
        </h1>
        <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto px-4 font-light">
          4言語で世界をつなぎ、AIで未来を創る
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce-slow">
          <ChevronDown className="text-white" size={32} />
        </div>
      </div>

      {/* News Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-4 overflow-hidden z-10">
        <div className="flex animate-marquee">
          {[...newsItems, ...newsItems].map((news, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 text-sm font-medium text-gray-800"
            >
              {news}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
