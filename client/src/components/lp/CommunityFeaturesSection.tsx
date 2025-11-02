export default function CommunityFeaturesSection() {
  const features = [
    {
      number: "01",
      title: "24時間いつでもアクセス可能な",
      highlight: "オンラインコミュニティ",
      description: "質問、相談、情報共有が自由にできるオンラインコミュニティ。世界中のメンバーと時差を気にせず交流できます。移住の悩みを共有し、先輩メンバーからアドバイスをもらえます。",
      icon: "/feature1.png",
      borderColor: "border-purple",
    },
    {
      number: "02",
      title: "月2回開催される",
      highlight: "定期勉強会",
      description: "移住に関する様々なテーマで、専門家を招いた勉強会を定期開催。ビザ取得、現地生活、ビジネス展開など、実践的な知識を学べます。",
      icon: "/feature2.png",
      borderColor: "border-orange",
    },
    {
      number: "03",
      title: "50カ国以上の移住先から得られる",
      highlight: "現地情報共有",
      description: "カナダ、メキシコ、ジョージア、タイなど、50カ国以上に住むメンバーから、リアルタイムで現地情報を入手できます。生活費、治安、ビザ情報など、最新の情報が手に入ります。",
      icon: "/feature3.jpg",
      borderColor: "border-green",
    },
    {
      number: "04",
      title: "メンバーだけが参加できる",
      highlight: "限定イベント",
      description: "オフ会、現地ツアー、ビジネスマッチングなど、メンバー限定のイベントを定期開催。同じ移住先を目指す仲間と直接会って、ネットワークを広げられます。",
      icon: "/feature4.jpg",
      borderColor: "border-purple",
    },
  ];

  return (
    <section id="features" className="section-spacing">
      <div className="container">
        {/* 見出し */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-lg mb-2" style={{ color: "rgb(59, 89, 152)" }}>
            移住を成功に導く
          </p>
          <h2 className="heading-section">
            <span style={{ color: "rgb(59, 89, 152)" }}>コミュニティの</span>
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

              {/* 画像 */}
              <div
                className={index % 2 === 1 ? "md:order-1" : ""}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
              <div className={`rounded-2xl ${feature.borderColor} overflow-hidden bg-gray-50`}>
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
              <span style={{ color: "rgb(255, 107, 74)" }}>海外移住</span>コミュニティとは
            </h3>
            <p className="text-gray-700">
              移住を目指す仲間と情報交換し、優先順位を分析。小さな一歩から段階的に準備することで、失敗リスクを最小限に抑えながら、確実に移住を実現するコミュニティです。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 card-shadow" data-aos="fade-up" data-aos-delay="100">
            <h3 className="heading-card mb-4">
              なぜ<span style={{ color: "rgb(255, 107, 74)" }}>成功率</span>が高いのか
            </h3>
            <p className="text-gray-700">
              海外の最新移住情報を取り入れつつ、日本人の文化にフィット。英語・フランス語・スペイン語・日本語で情報収集し、グローバルな視点で最適な移住計画を設計します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
