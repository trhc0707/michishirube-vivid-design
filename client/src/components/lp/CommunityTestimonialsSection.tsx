import { Star } from "lucide-react";

export default function CommunityTestimonialsSection() {
  const testimonials = [
    {
      name: "田中 健太さん",
      age: 35,
      location: "カナダ・バンクーバー",
      comment: "コミュニティに参加してから、移住の不安が一気に解消されました。先輩メンバーからのアドバイスが本当に役立ちました。",
      rating: 5
    },
    {
      name: "佐藤 美咲さん",
      age: 28,
      location: "メキシコ・プラヤデルカルメン",
      comment: "定期勉強会で学んだビザ取得のノウハウが、移住をスムーズに進める鍵になりました。メンバー同士の交流も楽しいです。",
      rating: 5
    },
    {
      name: "鈴木 大輔さん",
      age: 42,
      location: "ジョージア・トビリシ",
      comment: "現地情報の共有が本当に助かります。移住前に知っておくべき情報が、リアルタイムで手に入るのが最高です。",
      rating: 5
    },
    {
      name: "高橋 由美さん",
      age: 31,
      location: "タイ・チェンマイ",
      comment: "メンバー限定イベントで、同じ移住先の仲間と出会えました。現地での生活がより充実したものになっています。",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            メンバーの声
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            実際に移住を成功させた<span className="text-green-600">メンバーの声</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            コミュニティを活用して、海外移住を成功させたメンバーの体験談をご紹介します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.age}歳 / {testimonial.location}
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
