import { Button } from "@/components/ui/button";

export default function AIImplementationHeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative pt-24 md:pt-32 pb-32 md:pb-40 wave-bottom"
      style={{ background: "linear-gradient(135deg, rgb(59, 89, 152) 0%, rgb(45, 70, 120) 100%)" }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* 左側コンテンツ */}
          <div className="text-white" data-aos="fade-up">
            {/* バッジ */}
            <div className="inline-block bg-white text-gray-800 px-6 py-2 rounded-full text-sm mb-6">
              失敗しないAI導入を、段階的に実現
            </div>

            {/* 見出し */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
              AI導入支援
            </h1>

            {/* 説明文 */}
            <div className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 space-y-1 md:space-y-2">
              <p>計画から運用まで、トータルサポート。</p>
              <p>小さくスタートして段階的に展開し、</p>
              <p>確実に成果を出すAI導入を実現</p>
            </div>

            {/* 統計サークル */}
            <div className="flex gap-3 md:gap-6 mb-6 md:mb-8">
              {[
                { label: "導入企業", value: "100", unit: "+" },
                { label: "継続利用率", value: "96", unit: "%" },
                { label: "成果達成率", value: "89", unit: "%" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full border-2 md:border-4 border-white"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="text-[10px] md:text-xs lg:text-sm mb-1">{stat.label}</div>
                  <div className="text-xl md:text-3xl lg:text-4xl font-bold">
                    {stat.value}
                    <span className="text-sm md:text-xl lg:text-2xl">{stat.unit}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAボタン */}
            <div className="relative inline-block" data-aos="fade-up" data-aos-delay="300">
              <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 bg-white text-gray-800 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm whitespace-nowrap">
                いますぐ！
              </div>
              <Button
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 font-bold"
                style={{ backgroundColor: "rgb(255, 107, 74)" }}
                onClick={scrollToContact}
              >
                導入計画を相談
              </Button>
            </div>
          </div>

          {/* 右側イラスト */}
          <div className="hidden md:block" data-aos="fade-left">
            <div className="rounded-2xl overflow-hidden border-orange" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
              <img 
                src="/dashboard-hero.png" 
                alt="AI導入イメージ" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 注釈 */}
      <div className="absolute bottom-16 md:bottom-20 right-4 md:right-8 text-white text-[10px] md:text-xs max-w-[200px] md:max-w-xs text-right">
        <p>*2024年度導入支援実績</p>
        <p>*導入後12ヶ月の継続利用率</p>
        <p>*設定したKPI目標の達成率</p>
      </div>
    </section>
  );
}
