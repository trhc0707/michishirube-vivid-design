import { AlertCircle, HelpCircle, Users } from "lucide-react";

export default function CommunityProblemsSection() {
  const problems = [
    {
      icon: <HelpCircle className="w-12 h-12" />,
      title: "情報が散在している",
      description: "海外移住の情報がインターネット上に散在しており、信頼できる情報を見つけるのが難しい。",
      borderColor: "border-purple-500"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "相談相手がいない",
      description: "移住について相談できる仲間や先輩がおらず、不安を抱えたまま準備を進めている。",
      borderColor: "border-orange-500"
    },
    {
      icon: <AlertCircle className="w-12 h-12" />,
      title: "現地情報が不足",
      description: "移住先の最新情報や生活の実態がわからず、移住後のイメージが湧かない。",
      borderColor: "border-green-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            こんなお悩みありませんか？
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            海外移住の<span className="text-red-600">3つの壁</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            多くの人が海外移住を目指す際に直面する課題があります。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg border-t-4 ${problem.borderColor} shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="mb-6 text-gray-700">{problem.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
