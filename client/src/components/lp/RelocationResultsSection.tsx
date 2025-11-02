export default function RelocationResultsSection() {
  const features = [
    {
      title: "最先端のAIノウハウ",
      description: "フランス人のパートナーと共同開発してる、最先端のAIノウハウを学べます。他の人が10時間かけてやる作業を、1時間で終わらせられるようになります。",
      icon: "🤖"
    },
    {
      title: "完全オンライン完結",
      description: "すべてオンラインで完結するので、世界中どこからでも受講可能。移住前から準備を始めることもできます。",
      icon: "🌍"
    },
    {
      title: "個別サポート体制",
      description: "グループレッスンではなく、あなた専用の個別サポート。あなたのペースで、あなたの目標に合わせて進められます。",
      icon: "👥"
    },
    {
      title: "実践的なカリキュラム",
      description: "理論だけでなく、実際に案件を取って稼ぐところまでサポート。「学んだけど稼げない」という状態にはさせません。",
      icon: "💼"
    },
    {
      title: "継続的なアップデート",
      description: "AIの進化は日進月歩。常に最新のノウハウをアップデートし、受講生に提供し続けます。",
      icon: "🔄"
    },
    {
      title: "コミュニティサポート",
      description: "同じ目標を持つ仲間とのコミュニティで、情報交換やモチベーション維持ができます。",
      icon: "🤝"
    }
  ];

  return (
    <section id="results" className="section-spacing bg-gray-50">
      <div className="container">
        {/* 見出し */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="relative inline-block">
            <div
              className="absolute inset-0 opacity-10 text-9xl font-black text-gray-300"
              style={{ top: "-2rem", left: "50%", transform: "translateX(-50%)" }}
            >
              FEATURES
            </div>
            <h2 className="heading-section relative z-10">
              <span style={{ color: "rgb(59, 89, 152)" }}>プログラムの</span>
              <br />
              <span style={{ color: "rgb(59, 89, 152)" }}>
                <span style={{ color: "rgb(255, 107, 74)" }} className="text-6xl">6</span>
                つの特徴
              </span>
            </h2>
          </div>
        </div>

        {/* グリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 card-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="heading-card mb-4">
                <span style={{ color: "rgb(59, 89, 152)" }}>{feature.title}</span>
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* 実績数値 */}
        <div className="mt-16 grid md:grid-cols-4 gap-8" data-aos="fade-up">
          <div className="text-center">
            <div className="text-5xl font-black mb-2" style={{ color: "rgb(255, 107, 74)" }}>
              800+
            </div>
            <div className="text-sm text-gray-600">相談実績</div>
            <div className="text-xs text-gray-500 mt-1">すでに800人以上が相談済み</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black mb-2" style={{ color: "rgb(255, 107, 74)" }}>
              93%
            </div>
            <div className="text-sm text-gray-600">成果達成率</div>
            <div className="text-xs text-gray-500 mt-1">6ヶ月以内に具体的な成果を実現</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black mb-2" style={{ color: "rgb(255, 107, 74)" }}>
              3.2倍
            </div>
            <div className="text-sm text-gray-600">平均収入向上</div>
            <div className="text-xs text-gray-500 mt-1">受講開始から6ヶ月後</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black mb-2" style={{ color: "rgb(255, 107, 74)" }}>
              90%
            </div>
            <div className="text-sm text-gray-600">作業時間削減</div>
            <div className="text-xs text-gray-500 mt-1">AI活用で効率化</div>
          </div>
        </div>
      </div>
    </section>
  );
}
