import { Users, Globe, Calendar, Award, Shield, Zap } from "lucide-react";

export default function CommunityResultsSection() {
  const results = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "800+人の活発なメンバー",
      description: "世界中から集まった800人以上のメンバーが、日々情報交換を行っています。"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "50カ国以上の移住先情報",
      description: "カナダ、メキシコ、ジョージア、タイなど、50カ国以上の現地情報を共有しています。"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "月2回の定期勉強会",
      description: "移住に関する様々なテーマで、専門家を招いた勉強会を定期開催しています。"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "成功率93%の移住サポート",
      description: "コミュニティメンバーの93%が、目標としていた国への移住を成功させています。"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24時間サポート体制",
      description: "いつでも質問や相談ができる、24時間体制のサポートを提供しています。"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "メンバー限定特典",
      description: "オフ会、現地ツアー、ビジネスマッチングなど、限定イベントに参加できます。"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            コミュニティの実績
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-600">6つの強み</span>で移住を全力サポート
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            海外移住を成功させるための、充実したサポート体制を整えています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-6">
                {result.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{result.title}</h3>
              <p className="text-gray-600 leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
