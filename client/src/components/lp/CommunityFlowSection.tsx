import { Mail, UserPlus, Users, Calendar, MessageCircle, Rocket } from "lucide-react";

export default function CommunityFlowSection() {
  const steps = [
    {
      icon: Mail,
      title: "無料体験申し込み",
      description: "まずは、無料体験にお申し込みください。コミュニティの雰囲気や、どんな情報が得られるのかを実際に体験していただけます。",
    },
    {
      icon: UserPlus,
      title: "メンバー登録",
      description: "体験後、気に入っていただけたら正式にメンバー登録。プロフィールを設定し、自己紹介をして、コミュニティに参加します。",
    },
    {
      icon: Users,
      title: "コミュニティ参加",
      description: "オンラインコミュニティに参加し、他のメンバーと交流開始。質問、相談、情報共有が自由にできます。",
    },
    {
      icon: Calendar,
      title: "定期勉強会参加",
      description: "月2回開催される定期勉強会に参加。移住に関する様々なテーマで、専門家を招いた勉強会を受講できます。",
    },
    {
      icon: MessageCircle,
      title: "個別相談・サポート",
      description: "移住に関する個別の悩みや質問を、専門家や先輩メンバーに相談。あなたに最適な移住計画を一緒に考えます。",
    },
    {
      icon: Rocket,
      title: "移住実現",
      description: "コミュニティのサポートを受けながら、計画的に移住を実現。移住後も継続的にコミュニティでサポートを受けられます。",
    },
  ];

  return (
    <section id="flow" className="section-spacing">
      <div className="container">
        {/* 上部バッジ */}
        <div className="text-center mb-8" data-aos="fade-up">
          <div className="inline-block bg-yellow-300 text-gray-800 px-8 py-3 rounded-full font-bold relative">
            簡単6ステップで移住実現が可能！最短6ヶ月で新しい生活をスタート
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
