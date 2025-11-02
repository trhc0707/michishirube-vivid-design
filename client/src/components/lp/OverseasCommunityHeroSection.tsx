import { Button } from "@/components/ui/button";

export default function OverseasCommunityHeroSection() {
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
              一人で悩まない、みんなで実現する海外移住
            </div>

            {/* 見出し */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
              移住に、仲間を。
            </h1>

            {/* 説明文 */}
            <div className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 space-y-1 md:space-y-2">
              <p>「一人で」海外移住を目指しても不安は消えない。</p>
              <p>800人以上のメンバーと50カ国以上の移住先情報を活用し、</p>
              <p>あなたの理想の海外生活をサポート</p>
            </div>

            {/* 統計サークル */}
            <div className="flex gap-3 md:gap-6 mb-6 md:mb-8">
              {[
                { label: "メンバー数", value: "800", unit: "+" },
                { label: "移住先国", value: "50", unit: "+" },
                { label: "移住成功率", value: "93", unit: "%" },
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
                無料で参加する！
              </Button>
            </div>
          </div>

          {/* 右側イラスト */}
          <div className="hidden md:block" data-aos="fade-left">
            <div className="rounded-2xl overflow-hidden border-orange" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
              <img 
                src="/dashboard-hero.png" 
                alt="コミュニティイメージ" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 注釈 */}
      <div className="absolute bottom-16 md:bottom-20 right-4 md:right-8 text-white text-[10px] md:text-xs max-w-[200px] md:max-w-xs text-right">
        <p>*2024年度コミュニティ統計による</p>
        <p>*参加後12ヶ月以内の移住成功率</p>
        <p>*定期勉強会とメンバーサポートによる成功率</p>
      </div>
    </section>
  );
}
