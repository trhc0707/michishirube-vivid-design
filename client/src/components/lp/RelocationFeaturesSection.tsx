export default function RelocationFeaturesSection() {
  const features = [
    {
      number: "01",
      title: "動画編集（高頻度・低単価）",
      description: "YouTuberさんとかから「次、この編集お願いします！」って、継続的に案件が来る感じです。「週に1本」のように、コンスタントに仕事が来やすいスキルです。まずはこれで、安定して仕事が常にある状態を作るのが理想です。",
      items: [
        "継続的な案件獲得",
        "週に1本ペース",
        "安定収入の基盤",
        "AIで作業時間短縮"
      ],
      icon: "/feature1.png"
    },
    {
      number: "02",
      title: "ランディングページ作成（中頻度・中単価）",
      description: "動画編集とホームページ制作の、ちょうど「いいとこ取り」みたいなスキルです。「月に1回」くらいの頻度で、安定して高めの単価の仕事が取れます。収入の安定感をグッと高めてくれるスキルです。",
      items: [
        "月に1回の安定収入",
        "中単価案件",
        "収入の安定化",
        "声だけでサイト作成"
      ],
      icon: "/feature2.png"
    },
    {
      number: "03",
      title: "ホームページ制作（低頻度・高単価）",
      description: "「2～3ヶ月に1回」ドカンと大きい仕事を取るためのスキルです。プロに頼んだら普通に100万、300万とかする世界なので、あなたが「10万円でやりますよ」って言ったら喜ばれます。AIを使えば声だけでサイトが作れる時代です。",
      items: [
        "2～3ヶ月に1回の高単価",
        "10万円～の案件",
        "AIで声だけで作成",
        "チャンスは今だけ"
      ],
      icon: "/feature3.jpg"
    },
    {
      number: "04",
      title: "オンラインストア構築（低頻度・高単価）",
      description: "こちらも「2～3ヶ月に1回」大きい仕事を取るためのスキルです。ECサイトの需要は常にあり、特に小規模事業者から「手頃な価格で」という依頼が多く来ます。この4つのスキルで、それぞれ月5万円ずつ稼げたら、月20万円の収入の柱ができます。",
      items: [
        "ECサイト需要は常にあり",
        "小規模事業者からの依頼",
        "月5万円×4スキル",
        "月20万円の収入柱"
      ],
      icon: "/feature4.jpg"
    }
  ];

  return (
    <section id="features" className="section-spacing">
      <div className="container">
        {/* 見出し */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="relative inline-block">
            <div
              className="absolute inset-0 opacity-10 text-9xl font-black text-gray-300"
              style={{ top: "-2rem", left: "50%", transform: "translateX(-50%)" }}
            >
              SKILLS
            </div>
            <h2 className="heading-section relative z-10">
              <span style={{ color: "rgb(59, 89, 152)" }}>習得する</span>
              <br />
              <span style={{ color: "rgb(59, 89, 152)" }}>
                <span style={{ color: "rgb(255, 107, 74)" }} className="text-6xl">4</span>
                つのスキル
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 mt-4">
            この4つのスキルで、それぞれ月5万円ずつ稼げたら、<br />
            月20万円の収入の柱ができます。
          </p>
        </div>

        {/* 各特徴 */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center"
              data-aos="fade-up"
            >
              {/* テキスト */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="text-6xl font-black"
                    style={{ color: "rgb(255, 107, 74)" }}
                  >
                    {feature.number}
                  </div>
                  <h3 className="heading-card flex-1">
                    <span style={{ color: "rgb(59, 89, 152)" }}>{feature.title}</span>
                  </h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 flex-shrink-0 mt-0.5"
                        style={{ color: "rgb(255, 107, 74)" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 画像 */}
              <div
                className={index % 2 === 1 ? "md:order-1" : ""}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
              <div className="rounded-2xl border-2 border-gray-200 overflow-hidden bg-gray-50">
                <img src={feature.icon} alt={feature.title} className="w-full h-full object-cover" />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
