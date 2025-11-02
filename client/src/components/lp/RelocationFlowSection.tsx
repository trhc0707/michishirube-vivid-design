import { Mail, MessageCircle, Rocket, BookOpen, Briefcase, TrendingUp } from "lucide-react";

export default function RelocationFlowSection() {
  const steps = [
    {
      icon: Mail,
      title: "無料体験に申し込む",
      description: "まずは無料体験にお申し込みください。フォームから簡単に申し込めます。24時間以内にご連絡いたします。",
    },
    {
      icon: MessageCircle,
      title: "個別相談（無料）",
      description: "Zoomで個別相談を行います。あなたの現状、目標、不安などをお聞かせください。プログラムの詳細もご説明します。",
    },
    {
      icon: Rocket,
      title: "プログラム開始",
      description: "納得いただけたら、プログラム開始です。まずは目標設定と学習計画を一緒に立てます。",
    },
    {
      icon: BookOpen,
      title: "スキル習得（1〜3ヶ月）",
      description: "4つのスキルを順番に習得していきます。AIを活用した効率的な学習方法で、短期間でスキルを身につけます。",
    },
    {
      icon: Briefcase,
      title: "案件獲得サポート（3〜6ヶ月）",
      description: "スキルが身についたら、実際に案件を取りに行きます。プロフィール作成、提案文作成、価格設定など、すべてサポートします。",
    },
    {
      icon: TrendingUp,
      title: "収入化達成",
      description: "初案件獲得、そして継続的な収入化を目指します。月20万円の収入の柱を作り、海外移住の不安を解消します。",
    },
  ];

  return (
    <section id="flow" className="section-spacing">
      <div className="container">
        {/* 上部バッジ */}
        <div className="text-center mb-8" data-aos="fade-up">
          <div className="inline-block bg-yellow-300 text-gray-800 px-8 py-3 rounded-full font-bold relative">
            簡単6ステップで収入化が可能！最短6ヶ月で月20万円を実現
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-yellow-300"></div>
          </div>
        </div>

        {/* 見出し */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="heading-section">受講の流れ</h2>
        </div>

        {/* ステップ表示 */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* ステップコンテンツ */}
                <div
                  className="grid md:grid-cols-[200px_1fr] gap-8 mb-12"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* 左側：番号 */}
                  <div className="text-center md:text-left">
                    <p className="text-sm text-gray-500 mb-2">STEP</p>
                    <div
                      className="text-8xl font-bold opacity-20"
                      style={{ color: "rgb(59, 89, 152)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* 右側：コンテンツ */}
                  <div className="flex gap-6">
                    {/* アイコン */}
                    <div
                      className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgb(59, 89, 152)" }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* テキスト */}
                    <div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* 矢印（最後以外） */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mb-12">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-400"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
