import { Users, Globe, Calendar, TrendingUp } from "lucide-react";

export default function CommunityResultsSection() {
  const results = [
    {
      icon: Users,
      label: "メンバー数",
      value: "800",
      unit: "+",
      description: "世界中から集まった移住を目指す仲間たち。様々な国への移住経験者が在籍！",
    },
    {
      icon: Globe,
      label: "移住先国",
      value: "50",
      unit: "+",
      description: "カナダ、メキシコ、ジョージア、タイなど、50カ国以上の移住先情報が手に入ります！",
    },
    {
      icon: Calendar,
      label: "定期勉強会",
      value: "24",
      unit: "回/年",
      description: "月2回開催される勉強会で、移住に必要な知識を体系的に学べます！",
    },
    {
      icon: TrendingUp,
      label: "移住成功率",
      value: "93",
      unit: "%",
      description: "コミュニティのサポートを活用して、高い成功率で移住を実現しています！",
    },
  ];

  return (
    <section className="section-spacing" style={{ background: "linear-gradient(135deg, rgb(59, 89, 152) 0%, rgb(45, 70, 120) 100%)" }}>
      <div className="container">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          {/* 見出し */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="heading-section text-white">
              コミュニティで得られる<span className="text-6xl">4</span>つの効果
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
