export default function CommunityProblemsSection() {
  const problems = [
    {
      icon: "/problem1.jpg",
      title: "情報が散在している",
      description: "海外移住の情報がインターネット上に散在しており、信頼できる情報を見つけるのが難しい。どの情報を信じればいいのかわからない...",
      borderColor: "border-purple",
    },
    {
      icon: "/problem2.png",
      title: "相談相手がいない",
      description: "移住について相談できる仲間や先輩がおらず、不安を抱えたまま準備を進めている。孤独な戦いになってしまう...",
      borderColor: "border-orange",
    },
    {
      icon: "/problem3.jpg",
      title: "現地情報が不足",
      description: "移住先の最新情報や生活の実態がわからず、移住後のイメージが湧かない。本当に移住できるのか不安...",
      borderColor: "border-green",
    },
  ];

  return (
    <section id="problems" className="section-spacing bg-gray-50">
      <div className="container">
        {/* 見出し */}
        <div className="text-center mb-16">
          <h2 className="heading-section">
            <span style={{ color: "rgb(59, 89, 152)" }}>海外移住を困らせる</span>
            <br />
            <span style={{ color: "rgb(59, 89, 152)" }}>
              <span style={{ color: "rgb(255, 107, 74)" }} className="text-6xl">3</span>
              つの壁
            </span>
          </h2>
        </div>

        {/* 3カラムグリッド */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index}>
              {/* イラスト */}
              <div className={`mb-6 rounded-2xl ${problem.borderColor} overflow-hidden bg-white`}>
                <img src={problem.icon} alt={problem.title} className="w-full h-64 object-cover" />
              </div>

              {/* カード */}
              <div className="bg-white rounded-2xl p-6 card-shadow">
                <h3 className="heading-card mb-4">
                  <span style={{ color: "rgb(255, 107, 74)" }}>{problem.title}</span>
                </h3>
                <p className="text-gray-700">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
