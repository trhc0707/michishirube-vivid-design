import { UserPlus, MessageSquare, Users, Rocket, ArrowRight } from "lucide-react";

export default function CommunityFlowSection() {
  const steps = [
    {
      icon: <UserPlus className="w-12 h-12" />,
      title: "無料登録",
      description: "メールアドレスだけで簡単に登録できます。登録後すぐにコミュニティにアクセスできます。"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "自己紹介",
      description: "コミュニティで自己紹介をして、同じ移住先を目指すメンバーとつながりましょう。"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "情報交換",
      description: "質問、相談、情報共有を通じて、移住に必要な知識とネットワークを構築します。"
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "移住成功",
      description: "コミュニティのサポートを活用して、理想の海外生活を実現しましょう。"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            参加の流れ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-600">4つのステップ</span>で移住を成功に導く
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            簡単な登録から移住成功まで、わかりやすいステップでサポートします。
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-600" />
                  </div>
                )}

                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 mb-6 mx-auto mt-4">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-center">STEP {index + 1}</h3>
                  <h4 className="text-lg font-bold mb-3 text-center">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
