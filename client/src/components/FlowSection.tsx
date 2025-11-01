import { Mail, Search, ClipboardList, Target, FileCheck, Rocket } from "lucide-react";

export default function FlowSection() {
  const steps = [
    {
      icon: Mail,
      title: "ヒアリング・お問い合わせ",
      description: "まずは、何に困っているのか、どんな課題があるのかをお聞きします。現状の業務フローや、改善したいポイントを詳しくヒアリングします。",
    },
    {
      icon: Search,
      title: "社内の様子を確認",
      description: "本当にそれが問題なのか、他にも解決すべきところがないかを確認します。実際の業務を拝見し、潜在的な課題も洗い出します。",
    },
    {
      icon: ClipboardList,
      title: "タスクの洗い出し",
      description: "全員が行なっているタスクを洗い出し、どこに最も時間を使っているのか、どこを削ると最も成果が出るのかを分析します。",
    },
    {
      icon: Target,
      title: "優先順位の確認",
      description: "どの順番で行うのが最適か、どのアプローチがベストかを提案します。小さくスタートして、段階的に展開する計画を立てます。",
    },
    {
      icon: FileCheck,
      title: "導入計画の策定",
      description: "社員研修で済むのか、AIツールの導入が必要か、開発が必要かを判断。御社に最適な導入計画を設計します。",
    },
    {
      icon: Rocket,
      title: "サポート開始（本格運用）",
      description: "開発・導入・研修など、専属チームがついて運用をサポート。導入後も継続的にフォローし、最適化を続けます。",
    },
  ];

  return (
    <section id="flow" className="section-spacing">
      <div className="container">
        {/* 上部バッジ */}
        <div className="text-center mb-8" data-aos="fade-up">
          <div className="inline-block bg-yellow-300 text-gray-800 px-8 py-3 rounded-full font-bold relative">
            簡単6ステップで本格導入が可能！最短2ヶ月で業務効率化を実感
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-yellow-300"></div>
          </div>
        </div>

        {/* 見出し */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="heading-section">ご利用までの流れ</h2>
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
