export default function AIServicesSection() {
  const services = [
    {
      number: "01",
      title: "AIコンサルティング",
      description: "海外の最先端事例と独自の導入メソッドを活用し、あなたの会社に最適な自動化・効率化をサポート。小さくスタートして段階的に展開することで、失敗リスクを最小限に抑えながら、確実に成果を出します。",
      stats: [
        { label: "人件費削減", value: "30%" },
        { label: "業務効率化", value: "95%" },
        { label: "導入成功率", value: "93%" },
      ],
      color: "rgb(155, 89, 182)",
    },
    {
      number: "02",
      title: "AI研修サービス",
      description: "AIツールを導入しても、使いこなせなければ意味がない。実践的なハンズオン研修で、明日から使えるAIスキルを習得。社員全員がAIを使いこなせる組織へと変革します。",
      stats: [
        { label: "研修満足度", value: "98%" },
        { label: "業務活用率", value: "87%" },
        { label: "生産性向上", value: "42%" },
      ],
      color: "rgb(255, 107, 74)",
    },
    {
      number: "03",
      title: "AI開発サービス",
      description: "既製品では解決できない課題に、カスタムAIソリューションで応える。海外の最先端技術を活用した完全オーダーメイド開発で、あなたのビジネスに最適化されたAIシステムを構築します。",
      stats: [
        { label: "開発実績", value: "50+" },
        { label: "稼働率", value: "99%" },
        { label: "ROI改善", value: "3.2x" },
      ],
      color: "rgb(39, 174, 96)",
    },
    {
      number: "04",
      title: "AI導入支援",
      description: "計画から運用まで、トータルサポート。小さくスタートして段階的に展開し、確実に成果を出すAI導入を実現。失敗しないAI導入を、段階的に実現します。",
      stats: [
        { label: "導入企業", value: "100+" },
        { label: "継続利用率", value: "96%" },
        { label: "成果達成率", value: "89%" },
      ],
      color: "rgb(59, 89, 152)",
    },
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        {/* 見出し */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-lg mb-2" style={{ color: "rgb(59, 89, 152)" }}>
            あなたのビジネスに最適なサービスを
          </p>
          <h2 className="heading-section">
            <span style={{ color: "rgb(59, 89, 152)" }}>AI導入・活用</span>
            <br />
            <span style={{ color: "rgb(255, 107, 74)" }} className="text-6xl">4</span>
            <span style={{ color: "rgb(59, 89, 152)" }}>つのサービス</span>
          </h2>
        </div>

        {/* サービスカード */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 md:p-12 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* 背景番号 */}
              <div
                className="absolute -top-8 -right-8 text-9xl md:text-[200px] font-bold opacity-5"
                style={{ color: service.color }}
              >
                {service.number}
              </div>

              <div className="relative z-10">
                {/* サービス番号とタイトル */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="text-2xl md:text-3xl font-bold px-4 py-2 rounded-lg text-white"
                    style={{ backgroundColor: service.color }}
                  >
                    {service.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                </div>

                {/* 説明文 */}
                <p className="text-gray-700 text-lg mb-6">{service.description}</p>

                {/* 統計 */}
                <div className="grid grid-cols-3 gap-4">
                  {service.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-4 text-center card-shadow"
                    >
                      <div className="text-xs md:text-sm text-gray-600 mb-1">{stat.label}</div>
                      <div className="text-xl md:text-3xl font-bold" style={{ color: service.color }}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
