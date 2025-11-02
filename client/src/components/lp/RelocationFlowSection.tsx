export default function RelocationFlowSection() {
  const steps = [
    {
      number: "01",
      title: "無料体験に申し込む",
      description: "まずは無料体験にお申し込みください。フォームから簡単に申し込めます。24時間以内にご連絡いたします。"
    },
    {
      number: "02",
      title: "個別相談（無料）",
      description: "Zoomで個別相談を行います。あなたの現状、目標、不安などをお聞かせください。プログラムの詳細もご説明します。"
    },
    {
      number: "03",
      title: "プログラム開始",
      description: "納得いただけたら、プログラム開始です。まずは目標設定と学習計画を一緒に立てます。"
    },
    {
      number: "04",
      title: "スキル習得（1〜3ヶ月）",
      description: "4つのスキルを順番に習得していきます。AIを活用した効率的な学習方法で、短期間でスキルを身につけます。"
    },
    {
      number: "05",
      title: "案件獲得サポート（3〜6ヶ月）",
      description: "スキルが身についたら、実際に案件を取りに行きます。プロフィール作成、提案文作成、価格設定など、すべてサポートします。"
    },
    {
      number: "06",
      title: "収入化達成",
      description: "初案件獲得、そして継続的な収入化を目指します。月20万円の収入の柱を作り、海外移住の不安を解消します。"
    }
  ];

  return (
    <section id="flow" className="section-spacing">
      <div className="container">
        {/* 見出し */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="relative inline-block">
            <div
              className="absolute inset-0 opacity-10 text-9xl font-black text-gray-300"
              style={{ top: "-2rem", left: "50%", transform: "translateX(-50%)" }}
            >
              FLOW
            </div>
            <h2 className="heading-section relative z-10">
              <span style={{ color: "rgb(59, 89, 152)" }}>受講の流れ</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 mt-4">
            無料体験から収入化まで、6つのステップで進めます
          </p>
        </div>

        {/* タイムライン */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* 縦線 */}
              {index !== steps.length - 1 && (
                <div
                  className="absolute left-6 top-12 bottom-0 w-0.5"
                  style={{ backgroundColor: "rgb(59, 89, 152)" }}
                ></div>
              )}

              {/* ステップ番号 */}
              <div
                className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg"
                style={{ backgroundColor: "rgb(255, 107, 74)" }}
              >
                {step.number}
              </div>

              {/* カード */}
              <div className="bg-white rounded-2xl p-6 card-shadow ml-8">
                <h3 className="heading-card mb-3">
                  <span style={{ color: "rgb(59, 89, 152)" }}>{step.title}</span>
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
          >
            無料体験に申し込む →
          </a>
        </div>
      </div>
    </section>
  );
}
