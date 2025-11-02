import { Button } from "@/components/ui/button";

export default function OverseasCommunityHeroSection() {
  const handleCTAClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
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
          <div className="text-white">
            {/* バッジ */}
            <div className="inline-block bg-white text-gray-800 px-6 py-2 rounded-full text-sm mb-6">
              800+人のメンバーと共に、海外移住を成功させる
            </div>

            {/* 見出し */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
              海外移住を目指す仲間とつながる
            </h1>

            {/* 説明文 */}
            <div className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 space-y-1 md:space-y-2">
              <p>情報交換、相談、現地情報の共有など、</p>
              <p>移住を成功させるためのネットワークを提供します。</p>
              <p>50カ国以上の移住先情報が手に入る</p>
            </div>

            {/* 統計サークル */}
            <div className="flex gap-3 md:gap-6 mb-6 md:mb-8">
              {[
                { label: "メンバー", value: "800", unit: "+" },
                { label: "移住先国", value: "50", unit: "+" },
                { label: "成功率", value: "93", unit: "%" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full border-2 md:border-4 border-white"
                >
                  <div className="text-[10px] md:text-xs lg:text-sm mb-1">{stat.label}</div>
                  <div className="text-lg md:text-2xl lg:text-4xl font-bold">
                    {stat.value}
                    <span className="text-xs md:text-sm lg:text-lg">{stat.unit}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg shadow-xl relative overflow-hidden group"
                onClick={handleCTAClick}
              >
                <span className="relative z-10">無料で参加する</span>
                <span className="ml-2 bg-gray-900 text-white px-2 py-1 rounded text-xs md:text-sm relative z-10">
                  いますぐ！
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </div>
          </div>

          {/* 右側イラスト */}
          <div className="relative">
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl md:text-8xl font-bold mb-4">800+</div>
                  <div className="text-xl md:text-2xl">Active Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 wave-bottom">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
