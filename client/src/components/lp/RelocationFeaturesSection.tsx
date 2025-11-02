export default function RelocationFeaturesSection() {
  const features = [
    {
      number: "01",
      title: "動画編集\n誰でも簡単に",
      highlight: "プロ級の動画",
      description: "AIツールを使えば、複雑な編集作業も驚くほど簡単に。字幕自動生成、BGM選定、カット編集まで、すべてAIがサポート。初心者でも、わずか数週間でクライアントから喜ばれる動画を作れるようになります。",
      icon: "/feature1.png",
      borderColor: "border-purple",
    },
    {
      number: "02",
      title: "LP作成で\n売れる仕組みを",
      highlight: "デザイン不要",
      description: "ランディングページ（LP）は、商品を売るための重要なツール。AIを使えば、デザインスキルがなくても、コンバージョン率の高いLPを作成可能。テンプレートとAIの組み合わせで、プロ顔負けのページを短時間で完成させます。",
      icon: "/feature2.png",
      borderColor: "border-orange",
    },
    {
      number: "03",
      title: "HP制作で\n企業の顔を",
      highlight: "自分の手で",
      description: "ホームページ制作は、企業にとって必須のサービス。AIを活用すれば、コーディング知識がなくても、美しく機能的なサイトを構築できます。クライアントの要望に応え、継続的な収入源を確保できます。",
      icon: "/feature3.jpg",
      borderColor: "border-green",
    },
    {
      number: "04",
      title: "ECサイト構築で\n販売の自動化を",
      highlight: "実現",
      description: "オンラインショップの需要は年々増加。AIツールを使えば、在庫管理、決済システム、顧客対応まで自動化されたECサイトを構築可能。クライアントのビジネスを次のレベルに引き上げ、高単価案件を獲得できます。",
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
            海外で稼ぐ力を手に入れる
          </p>
          <h2 className="heading-section">
            <span style={{ color: "rgb(59, 89, 152)" }}>AI時代のWebスキル</span>
            <span style={{ color: "rgb(255, 107, 74)" }} className="text-6xl">4</span>
            <span style={{ color: "rgb(59, 89, 152)" }}>つのスキル</span>
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
                className={`${index % 2 === 1 ? "md:order-1" : ""}`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div className={`rounded-2xl ${feature.borderColor} overflow-hidden`}>
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
