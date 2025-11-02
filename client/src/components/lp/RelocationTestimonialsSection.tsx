export default function RelocationTestimonialsSection() {
  const testimonials = [
    {
      company: "カナダ移住",
      role: "30代男性",
      title: "受講開始3ヶ月で初案件獲得！",
      content: "動画編集のスキルを学び、3ヶ月で初案件を獲得できました。AIツールのおかげで、作業時間が大幅に短縮され、家族との時間も確保できています。今では月15万円の安定収入があります。",
      borderColor: "border-purple",
    },
    {
      company: "メキシコ移住",
      role: "40代女性",
      title: "受講開始6ヶ月で月20万円達成！",
      content: "LP作成とHP制作を学び、6ヶ月で月20万円の収入を達成しました。現地の日系企業からの依頼も増え、安定した収入源を確保できています。移住前の不安が嘘のようです。",
      borderColor: "border-orange",
    },
    {
      company: "ジョージア移住",
      role: "30代夫婦",
      title: "受講開始4ヶ月で夫婦で月30万円！",
      content: "夫婦で受講し、それぞれ動画編集とECサイト構築を担当。4ヶ月で合計月30万円の収入を達成しました。海外での生活費を十分にカバーでき、子どもとの時間も増えました。",
      borderColor: "border-green",
    },
    {
      company: "タイ移住",
      role: "50代男性",
      title: "受講開始5ヶ月で早期退職を実現",
      content: "HP制作とLP作成を学び、5ヶ月で月25万円の収入を確保。会社を早期退職し、タイでの自由な生活を実現しました。AIのおかげで、年齢に関係なく新しいスキルを習得できました。",
      borderColor: "border-purple",
    },
  ];

  return (
    <section id="testimonials" className="section-spacing bg-gray-50">
      <div className="container">
        {/* 見出し */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="heading-section">受講者の声</h2>
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
                {testimonial.title.split(/([0-9]+ヶ月|[0-9]+万円|月[0-9]+万円|初案件)/).map((part, i) => {
                  if (part.match(/[0-9]+ヶ月|[0-9]+万円|月[0-9]+万円|初案件/)) {
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
