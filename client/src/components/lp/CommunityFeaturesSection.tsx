import { MessageSquare, Calendar, Globe, Gift } from "lucide-react";

export default function CommunityFeaturesSection() {
  const features = [
    {
      icon: <MessageSquare className="w-16 h-16" />,
      title: "オンラインコミュニティ",
      description: "24時間いつでもアクセスできるオンラインコミュニティ。質問、相談、情報共有が自由にできます。",
      highlight: "いつでもどこでも"
    },
    {
      icon: <Calendar className="w-16 h-16" />,
      title: "定期勉強会",
      description: "月に2回、移住に関するテーマで勉強会を開催。専門家を招いたセミナーも定期的に実施します。",
      highlight: "月2回開催"
    },
    {
      icon: <Globe className="w-16 h-16" />,
      title: "現地情報共有",
      description: "世界50カ国以上に住むメンバーから、リアルタイムで現地情報を入手できます。",
      highlight: "50カ国以上"
    },
    {
      icon: <Gift className="w-16 h-16" />,
      title: "メンバー限定イベント",
      description: "オフ会、現地ツアー、ビジネスマッチングなど、メンバー限定のイベントを定期開催します。",
      highlight: "限定特典"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            コミュニティの特徴
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-600">4つの特徴</span>で移住を成功に導く
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            海外移住を成功させるために必要な情報とネットワークを提供します。
          </p>
        </div>

        <div className="space-y-24 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative">
                  <div className="absolute -left-4 -top-4 text-[120px] font-bold text-gray-100 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {feature.highlight}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Icon */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
