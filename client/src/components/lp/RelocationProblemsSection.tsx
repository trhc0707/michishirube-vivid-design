export default function RelocationProblemsSection() {
  const problems = [
    {
      icon: "/problem-1.png",
      title: "貨金という名の「雨の降らないダム」",
      description: "「とりあえズ1000万円貨めれば大丈夫」そう思っていませんか？ですが、貨金とはダムに溜まった水と同じです。現地で収入（雨）がなければ、水は日に日に減っていき、やがて枯渇します。",
      borderColor: "border-purple"
    },
    {
      icon: "/problem-2.png",
      title: "現地雇用という「低賃金労働の幻想」",
      description: "「現地のレストランで働けばいい」その考えも危険です。僕の知人は、メキシコの日系レストランで夜11時まで働き、チップ込みの月収はわずか14万円でした。貴重な時間を切り売りし、家族との時間も犠牲に。",
      borderColor: "border-orange"
    },
    {
      icon: "/problem-3.png",
      title: "やみくもなスキル学習という「100万円の挫折」",
      description: "「じゃあ自分で稼ぐスキルを！」と、高額なスクールに申し込む。これが最大の罠です。いくら料理教室に通っても、お客さんの集め方や経営を知らなければ、レストランは一瞬で潰れてしまいます。",
      borderColor: "border-green"
    }
  ];

  return (
    <section id="problems" className="section-spacing bg-gray-50">
      <div className="container">
        {/* 見出し */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="heading-section">
            <span style={{ color: "rgb(59, 89, 152)" }}>多くの人が陥る、海外移住</span>
            <br />
            <span style={{ color: "rgb(59, 89, 152)" }}>
              <span style={{ color: "rgb(255, 107, 74)" }} className="text-6xl">3</span>
              つの罠
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            「英語が話せない…」「ビザが難しそう…」<br />
            そんな不安で立ち止まってしまうのは、あなただけではありません。<br />
            でも、それは本当の問題ではないのです。
          </p>
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

        {/* 本当に大事なのは */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="max-w-3xl mx-auto bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: "rgb(59, 89, 152)" }}>
              本当に大事なのは、現地での収入。
            </h3>
            <p className="text-lg text-gray-700">
              どれだけ英語を学んでも、どれだけビザ制度を調べても、<br />
              現地での収入源がなければ、すべては不安のまま。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
