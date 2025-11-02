import { Mail, UserPlus, MessageSquare, Users, Calendar, Rocket } from "lucide-react";

export default function CommunityFlowSection() {
  const steps = [
    {
      icon: Mail,
      title: "無料登録",
      description: "メールアドレスだけで簡単に登録できます。登録後すぐにコミュニティにアクセスできます。",
    },
    {
      icon: UserPlus,
      title: "プロフィール作成",
      description: "移住先や興味のある国、現在の状況などを登録します。同じ目標を持つメンバーとつながりやすくなります。",
    },
    {
      icon: MessageSquare,
      title: "自己紹介",
      description: "コミュニティで自己紹介をして、同じ移住先を目指すメンバーとつながりましょう。",
    },
    {
      icon: Users,
      title: "情報交換",
      description: "質問、相談、情報共有を通じて、移住に必要な知識とネットワークを構築します。",
    },
    {
      icon: Calendar,
      title: "勉強会参加",
      description: "月2回開催される定期勉強会に参加して、移住に必要な知識を体系的に学びます。",
    },
    {
      icon: Rocket,
      title: "移住成功",
      description: "コミュニティのサポートを活用して、理想の海外生活を実現しましょう。",
    },
  ];

  return (
    <section id="flow" className="section-spacing">
      <div className="container">
        {/* 上部バッジ */}
        <div className="text-center mb-8">
          <div className="inline-block bg-yellow-300 text-gray-800 px-8 py-3 rounded-full font-bold relative">
            簡単6ステップで参加可能！最短1日でコミュニティメンバーに
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-yellow-300"></div>
          </div>
        </div>

        {/* 見出し */}
        <div className="text-center mb-16">
          <h2 className="heading-section">参加までの流れ</h2>
        </div>

        {/* ステップ表示 */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* ステップコンテンツ */}
                <div
                  className={`flex gap-6 mb-12 ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  {/* アイコン */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg"
                      style={{ background: "linear-gradient(135deg, rgb(59, 89, 152) 0%, rgb(45, 70, 120) 100%)" }}
                    >
                      <Icon className="w-10 h-10" />
                    </div>
                  </div>

                  {/* テキスト */}
                  <div className="flex-1 bg-white rounded-2xl p-6 card-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="px-4 py-1 rounded-full text-white text-sm font-bold"
                        style={{ background: "linear-gradient(135deg, rgb(59, 89, 152) 0%, rgb(45, 70, 120) 100%)" }}
                      >
                        STEP {index + 1}
                      </div>
                      <h3 className="text-xl font-bold" style={{ color: "rgb(59, 89, 152)" }}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>

                {/* 矢印 */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mb-6">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent" style={{ borderTopColor: "rgb(59, 89, 152)" }}></div>
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
