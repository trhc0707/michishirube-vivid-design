import { Users, Clock, TrendingUp, DollarSign } from "lucide-react";

export default function ResultsSection() {
  const results = [
    {
      icon: DollarSign,
      label: "人件費削減",
      value: "30",
      unit: "%",
      description: "AIによる自動化で、単純作業を削減。人材を本当に必要な業務に集中させます！",
    },
    {
      icon: Clock,
      label: "業務時間短縮",
      value: "40",
      unit: "%",
      description: "タスクの洗い出しと優先順位の最適化により、大幅に時間を削減できます！",
    },
    {
      icon: TrendingUp,
      label: "顧客満足度",
      value: "95",
      unit: "%",
      description: "自動化により、迅速で正確な対応が可能に。顧客体験が向上します！",
    },
    {
      icon: Users,
      label: "導入成功率",
      value: "93",
      unit: "%",
      description: "小さくスタートし、段階的に展開することで、高い成功率を実現しています！",
    },
  ];

  return (
    <section className="section-spacing" style={{ background: "linear-gradient(135deg, rgb(59, 89, 152) 0%, rgb(45, 70, 120) 100%)" }}>
      <div className="container">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          {/* 見出し */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="heading-section text-white">
              導入で得られる<span className="text-6xl">4</span>つの効果
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
