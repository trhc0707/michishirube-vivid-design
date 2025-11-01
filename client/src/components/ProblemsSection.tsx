export default function ProblemsSection() {
  const problems = [
    {
      icon: "/problem1.jpg",
      title: "AIは気になるけど、よくわかっていない",
      description: "なんとなくすごそうだけど、何ができるかわからない。活用方法もイメージできず、導入に踏み切れない...",
      borderColor: "border-purple",
    },
    {
      icon: "/problem2.png",
      title: "活用方法がわからない",
      description: "できることはわかるけど、うちの会社にどう活かせばいいのか。「AIができること」から考えてしまい、具体的な活用イメージが湧かない...",
      borderColor: "border-orange",
    },
    {
      icon: "/problem3.jpg",
      title: "導入に失敗したくない",
      description: "高額な費用を払ったのに、1年後には使われなくなってしまう。そんな失敗事例を聞いて、導入を渋ってしまう...",
      borderColor: "border-green",
    },
  ];

  return (
    <section id="problems" className="section-spacing bg-gray-50">
      <div className="container">
        {/* 見出し */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="heading-section">
            <span style={{ color: "rgb(59, 89, 152)" }}>AI導入を困らせる</span>
            <br />
            <span style={{ color: "rgb(59, 89, 152)" }}>
              <span style={{ color: "rgb(255, 107, 74)" }} className="text-6xl">3</span>
              つの課題
            </span>
          </h2>
        </div>

        {/* 3カラムグリッド */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
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
