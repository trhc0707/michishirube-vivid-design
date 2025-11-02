import { Laptop, Globe, TrendingUp, Users } from "lucide-react";

export default function RelocationResultsSection() {
  const results = [
    {
      icon: Users,
      label: "相談実績",
      value: "800",
      unit: "+",
      description: "すでに800人以上が相談し、海外移住後の収入構築に成功しています。",
    },
    {
      icon: TrendingUp,
      label: "成果達成率",
      value: "93",
      unit: "%",
      description: "6ヶ月以内に具体的な成果を実現。高い成功率を誇ります。",
    },
    {
      icon: Laptop,
      label: "収入向上",
      value: "3.2",
      unit: "倍",
      description: "受講開始から6ヶ月後、平均3.2倍の収入向上を達成しています。",
    },
    {
      icon: Globe,
      label: "作業時間削減",
      value: "90",
      unit: "%",
      description: "AI活用で作業時間を大幅に削減。家族との時間を最優先にできます。",
    },
  ];

  return (
    <section className="section-spacing" style={{ background: "linear-gradient(135deg, rgb(59, 89, 152) 0%, rgb(45, 70, 120) 100%)" }}>
      <div className="container">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          {/* 見出し */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="heading-section text-white">
              プログラムで得られる<span className="text-6xl">4</span>つの成果
            </h2>
          </div>

          {/* 4カラムグリッド */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => {
              const Icon = result.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {/* アイコン */}
                  <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: "rgb(59, 89, 152)" }} />

                  {/* ラベル */}
                  <p className="text-sm mb-2" style={{ color: "rgb(59, 89, 152)" }}>
                    {result.label}
                  </p>

                  {/* 数字 */}
                  <div className="mb-3">
                    <span
                      className="text-5xl md:text-6xl font-bold highlight-yellow inline-block"
                      style={{ color: "rgb(255, 107, 74)" }}
                    >
                      {result.value}
                    </span>
                    <span className="text-xl font-bold ml-1">{result.unit}</span>
                  </div>

                  {/* 説明 */}
                  <p className="text-sm text-gray-700">{result.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
