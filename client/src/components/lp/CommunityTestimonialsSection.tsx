export default function CommunityTestimonialsSection() {
  const testimonials = [
    {
      company: "カナダ移住",
      role: "30代男性",
      title: "参加3ヶ月でカナダ移住に成功",
      content: "コミュニティで得た情報とアドバイスのおかげで、スムーズにカナダへ移住できました。ビザ取得の手順や現地での生活費など、具体的な情報が手に入ったことが大きかったです。",
      borderColor: "border-purple",
    },
    {
      company: "メキシコ移住",
      role: "40代女性",
      title: "参加6ヶ月でメキシコ移住を実現",
      content: "同じメキシコを目指すメンバーと情報交換できたことが、移住の決め手になりました。現地の治安や生活環境について、リアルな声を聞けたので、安心して移住できました。",
      borderColor: "border-orange",
    },
    {
      company: "ジョージア移住",
      role: "20代男性",
      title: "参加4ヶ月でジョージア移住に成功",
      content: "定期勉強会でビザ取得の方法を学び、先輩メンバーからアドバイスをもらえたことが大きかったです。コミュニティがなければ、移住は実現できなかったと思います。",
      borderColor: "border-green",
    },
    {
      company: "タイ移住",
      role: "50代夫婦",
      title: "参加1年でタイ移住を実現",
      content: "夫婦でタイ移住を目指していましたが、コミュニティのサポートのおかげで、無事に移住できました。現地の医療や教育についても詳しく教えてもらえたので、安心して生活しています。",
      borderColor: "border-purple",
    },
  ];

  return (
    <section id="testimonials" className="section-spacing bg-gray-50">
      <div className="container">
        {/* 見出し */}
        <div className="text-center mb-16">
          <h2 className="heading-section">移住成功事例</h2>
        </div>

        {/* 2x2グリッド */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              {/* 会社情報 */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.borderColor} flex items-center justify-center text-white font-bold text-xl`}>
                  {testimonial.company[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.company}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              {/* タイトル */}
              <h3 className="text-xl font-bold mb-4" style={{ color: "rgb(59, 89, 152)" }}>
                {testimonial.title}
              </h3>

              {/* 内容 */}
              <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
