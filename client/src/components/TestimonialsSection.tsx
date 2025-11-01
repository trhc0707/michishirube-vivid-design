export default function TestimonialsSection() {
  const testimonials = [
    {
      company: "IT系企業",
      role: "人事部長",
      title: "支援開始2ヶ月で業務効率化に成功",
      content: "小さくスタートして、段階的に導入できたので、社員も抵抗なく受け入れてくれました。最初は不安でしたが、丁寧なサポートのおかげで、今では社内の業務フローが大きく改善されています。",
      borderColor: "border-purple",
    },
    {
      company: "広告系企業",
      role: "役員",
      title: "支援開始6ヶ月で人件費30%削減！",
      content: "タスクの優先順位を見直すことで、本当に必要な業務に集中できるようになりました。AIで自動化できる部分と、人間がやるべき部分を明確に分けられたことが、大きな成果につながっています。",
      borderColor: "border-orange",
    },
    {
      company: "営業系企業",
      role: "営業部長",
      title: "支援開始3ヶ月で業務時間40%減",
      content: "自動化により、営業活動に集中できる時間が大幅に増えました。以前は事務作業に追われていましたが、今では顧客対応に時間を使えるようになり、売上も向上しています。",
      borderColor: "border-green",
    },
    {
      company: "物流系",
      role: "人事部長",
      title: "導入した社員の満足度が3年で95%まで向上",
      content: "正しい情報と、明確な導入計画により、社員の理解と協力を得られました。AIは難しいというイメージがありましたが、研修を通じて社員全員が使いこなせるようになり、業務が楽になったと喜んでいます。",
      borderColor: "border-purple",
    },
  ];

  return (
    <section id="testimonials" className="section-spacing bg-gray-50">
      <div className="container">
        {/* 見出し */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="heading-section">導入事例</h2>
        </div>

        {/* 2x2グリッド */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* 会社情報 */}
              <div className={`inline-block px-4 py-2 rounded-full ${testimonial.borderColor} mb-4`}>
                <p className="text-sm font-bold">
                  {testimonial.company} | {testimonial.role}
                </p>
              </div>

              {/* タイトル */}
              <h3 className="heading-card mb-4">
                {testimonial.title.split(/([0-9]+ヶ月|[0-9]+%|人件費|業務時間|満足度)/).map((part, i) => {
                  if (part.match(/[0-9]+ヶ月|[0-9]+%|人件費|業務時間|満足度/)) {
                    return (
                      <span key={i} style={{ color: "rgb(255, 107, 74)" }}>
                        {part}
                      </span>
                    );
                  }
                  return part;
                })}
              </h3>

              {/* 本文 */}
              <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
