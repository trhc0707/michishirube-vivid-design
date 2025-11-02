export default function FeaturesSection() {
  const features = [
    {
      number: "01",
      title: "待つ導入は今日で終わり\nこれからは",
      highlight: "攻めるAI導入",
      description: "小さくスタートして、優先度の高いものから導入。期待する結果を明確にした上で、段階的に展開します。最初から高額な費用を投入せず、確実に成果を出しながら進めます。",
      icon: "/feature1.png"
    },
    {
      number: "02",
      title: "あらゆるデータを可視化して、",
      highlight: "正しい判断",
      description: "社内のタスクを洗い出し、どこを削ると最も成果が出るのか、どこに最も時間を使っているのかを分析。データに基づいた最適なアプローチを提案します。",
      icon: "/feature2.png"
    },
    {
      number: "03",
      title: "独自かつ各社オリジナルの導入計画で\nミスマッチを",
      highlight: "極限まで0に",
      description: "企業によって「やったほうがいい・やらないほうがいい」は異なります。御社の業界、規模、課題に合わせた、完全オリジナルの導入計画を設計します。",
      icon: "/feature3.jpg"
    },
    {
      number: "04",
      title: "導入後の成果を、事前に予測。",
      highlight: "長期的な成長",
      description: "短期での結果ではなく、長期的に売上も顧客満足度も上がって、人件費も時間も削減できる仕組みを構築。それぞれが自分にしかできないことにフォーカスできる状態を作ります。",
      icon: "/feature4.jpg"
    }
  ];

  return (
    <section id="features" className="section-spacing">
      <div className="container">
        {/* 見出し */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-lg mb-2" style={{ color: "rgb(59, 89, 152)" }}>
            業務効率化の答えをだす
          </p>
          <h2 className="heading-section">
            <span style={{ color: "rgb(59, 89, 152)" }}>AI導入サポート</span>
            <span style={{ color: "rgb(255, 107, 74)" }} className="text-6xl">4</span>
            <span style={{ color: "rgb(59, 89, 152)" }}>つの特徴</span>
          </h2>
        </div>

        {/* 交互レイアウト */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* テキスト */}
              <div
                className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                {/* 背景番号 */}
                <div
                  className="absolute -top-8 -left-4 text-9xl font-bold opacity-10"
                  style={{ color: "rgb(59, 89, 152)" }}
                >
                  {feature.number}
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 whitespace-pre-line">
                    {feature.title}
                    <span style={{ color: "rgb(231, 76, 60)" }}>"{feature.highlight}"</span>
                    を実現
                  </h3>
                  <p className="text-gray-700 text-lg">{feature.description}</p>
                </div>
              </div>

              {/* イラスト */}
              <div
                className={index % 2 === 1 ? "md:order-1" : ""}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
              <div className="rounded-2xl border-2 border-gray-200 overflow-hidden bg-gray-50">
                <img src={feature.icon} alt={feature.highlight} className="w-full h-full object-cover" />
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* 説明カード */}
        <div className="grid md:grid-cols-2 gap-8 mt-24">
          <div className="bg-white rounded-2xl p-8 card-shadow" data-aos="fade-up">
            <h3 className="heading-card mb-4">
              <span style={{ color: "rgb(255, 107, 74)" }}>AI</span>導入サポートとは
            </h3>
            <p className="text-gray-700">
              社内のタスクを洗い出し、優先順位を分析。小さくスタートして段階的に展開することで、失敗リスクを最小限に抑えながら、確実に成果を出すAI導入をサポートします。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 card-shadow" data-aos="fade-up" data-aos-delay="100">
            <h3 className="heading-card mb-4">
              なぜ<span style={{ color: "rgb(255, 107, 74)" }}>成功率</span>が高いのか
            </h3>
            <p className="text-gray-700">
              海外の最先端事例を取り入れつつ、日本の企業文化にフィット。英語・フランス語・スペイン語・日本語で情報収集し、グローバルな視点で最適な導入計画を設計します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
