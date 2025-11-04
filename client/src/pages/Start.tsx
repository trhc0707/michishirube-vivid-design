import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Start() {
  useEffect(() => {
    // Track ViewContent event with Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Start Page',
        content_category: 'Landing Page'
      });
    }
  }, []);

  const handleENPClick = () => {
    // Track Lead event for ENP
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'ENP Skills Course',
        content_category: 'toC'
      });
    }
    // TODO: Replace with actual Lステップ URL with Entry_ENP tag
    window.location.href = "https://lin.ee/NdSxKkb";
  };

  const handleBizClick = () => {
    // Track Lead event for Business Diagnosis
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Business Diagnosis',
        content_category: 'toB'
      });
    }
    // TODO: Replace with actual /diagnose URL with Entry_Biz tag
    window.location.href = "/diagnose";
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-40 wave-bottom"
        style={{ background: "linear-gradient(135deg, rgb(59, 89, 152) 0%, rgb(45, 70, 120) 100%)" }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="text-white" data-aos="fade-up">
              <div className="inline-block bg-white text-gray-800 px-6 py-2 rounded-full text-sm mb-6">
                海外×家族×AI
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                自由に働く仕組みをつくる。
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-95">
                特別な才能より、仕組みの設計が人生を変える。<br />
                あなたも「不完全でも走れる」仕組みを、ここから体験しませんか？
              </p>
            </div>

            {/* Right: CTA Buttons */}
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all">
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  個人向け
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">3日で学べるAIスキル講座</h3>
                <p className="text-sm text-gray-600 mb-4">副業・リモート・海外でも使えるスキルを習得</p>
                <Button
                  onClick={handleENPClick}
                  size="lg"
                  className="w-full text-lg font-bold py-6 animate-bounce hover:animate-none transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
                  style={{ backgroundColor: "#06C755" }}
                >
                  <span className="relative z-10">無料で体験する</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></span>
                </Button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all">
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  法人向け
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">社長がいなくても回る仕組み診断</h3>
                <p className="text-sm text-gray-600 mb-4">90日で利益を安定化する設計書を作成</p>
                <Button
                  onClick={handleBizClick}
                  size="lg"
                  className="w-full text-lg font-bold py-6 animate-bounce hover:animate-none transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
                  style={{ backgroundColor: "#06C755" }}
                >
                  <span className="relative z-10">無料で診断を受ける</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Skills Needed Overseas Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              なぜ、海外でお金を稼ぐスキルが必要なのか？
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl font-semibold text-gray-800">
              海外移住の現実は、想像以上に厳しい。
            </p>

            <p>
              僕自身、カナダから帰国せざるを得なかった経験があります。理由はシンプルで、現地での収入が途絶えたから。ビザが取れない、言語が話せない、そして何より「現地で稼ぐスキル」がなければ、どんなに海外生活を夢見ても、結局は帰国するしかないんです。
            </p>

            <p>
              海外で暮らすということは、日本の常識が通用しない環境で、ゼロから信頼を築き、収入を生み出すということ。それができなければ、どれだけ準備しても、どれだけ貯金があっても、いつか限界が来ます。
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg my-8">
              <p className="font-semibold text-lg mb-2 text-gray-800">
                だからこそ、場所に依存しないスキルが必要なんです。
              </p>
              <p className="text-gray-700">
                それが、AIスキル。どこにいても、誰と働いても、価値を生み出せる力です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              なぜ、AIなのか？
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200">
            <p>
              AIは、ガラケーからスマホへの移行と同じ。今はまだ「使える人」が少ないけれど、数年後には「使えて当たり前」になる。そして、使えない人は取り残される。
            </p>

            <p>
              実際、アメリカではAIによって仕事を失う人が増えています。でも逆に言えば、AIを使いこなせる人は、圧倒的に有利なポジションを取れるということ。
            </p>

            <div className="bg-white border-l-4 border-gray-400 p-6 rounded-r-lg my-8">
              <p className="font-semibold text-lg mb-2 text-gray-800">
                僕自身、AIで人生が変わりました。
              </p>
              <p className="text-gray-700 mb-4">
                エストニア法人の設立、娘の入学手続き、書類の記入...すべてAIでやりました。お金も時間も大幅に削減できて、家族との時間が増えました。
              </p>
              <p className="text-gray-700">
                海外で生活する人、子どもがいる人は、絶対にAIを使えるようになるべきです。そして、子どもにも教えられるようになるべきです。
              </p>
            </div>

            <p>
              なぜなら、これから子どもが大学受験や就職をする時、成功するかどうかは「AIリテラシー」が大きく関係してくるから。そして、それは紛れもなく、親が環境を与えられているかどうかで決まります。
            </p>
          </div>
        </div>
      </section>

      {/* How It Changes Your Life Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              AIを使うと、どう変わるのか？
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl font-semibold text-gray-800">
              AIに任せられるので、自分がやるべきことに集中できる。
            </p>

            <p>
              時間が増えて、嫌なことをすることが減る。これが、AIを使う最大のメリットです。
            </p>

            <p>
              僕の場合は、AIが楽しすぎて、新しいAIを追うのに時間を使ってしまっていますが（笑）、それでも、以前と比べて圧倒的に自由な時間が増えました。
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg my-8">
              <p className="font-semibold text-lg mb-2 text-gray-800">
                AIは、あなたの時間を取り戻してくれます。
              </p>
              <p className="text-gray-700">
                そして、その時間を、家族や、自分の成長や、本当にやりたいことに使えるようになります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              なぜ、今なのか？
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl font-semibold text-gray-800">
              今は、iPhoneの初期モデルが出て、少しずつみんなが触り始めた感じ。
            </p>

            <p>
              あの時、アプリをインストールする方法を1万円で教えている人もいました。今では信じられないですよね。でも、当時は「それでも価値があった」んです。
            </p>

            <p>
              今、AIも同じフェーズにあります。だからチャンスなんです。
            </p>

            <div className="bg-white border-l-4 border-gray-400 p-6 rounded-r-lg my-8">
              <p className="font-semibold text-lg mb-2 text-gray-800">
                遅すぎると、良くない理由。
              </p>
              <p className="text-gray-700">
                みんながAIに完全に浸透する前に、ポジションを取っておく。それが、これからの時代を生き抜く鍵です。
              </p>
            </div>

            <p>
              僕は、新聞配達員や新聞の営業をやっていたことがありますが、今は需要がありません。理由は、時代と逆行しているから。その時代の波が、今はAIなんです。
            </p>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              僕が海外で生活できている理由
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl font-semibold text-gray-800">
              元々は、できませんでした。
            </p>

            <p>
              でも今は、海外で3人の子どもを育てながら、自由に働いています。理由は、スキルを身につけたから。
            </p>

            <p>
              ただし、今は時代が変わって、同じスキルではダメです。今の時代は、AI。
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg my-8">
              <p className="font-semibold text-lg mb-2 text-gray-800">
                僕がAIを使い始めたきっかけ
              </p>
              <p className="text-gray-700 mb-4">
                カナダで留学エージェントをやっていた時、履歴書をAIを使って書いていました。結果、ベタ褒めされました。
              </p>
              <p className="text-gray-700">
                でも、周りからは「AI使えないでしょ」って言われていました。今では、その人たちも使っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Don't Wait CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              AIは、なんとなく大事そうだし、活用できそうなのもわかってる。<br />
              でも、何から触ればいいかわからないし、難しそうだから諦める...
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              それは、ここで辞めにしませんか？
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl mb-12" data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 leading-relaxed">
              早めに触り始めて、みんながAIに完全に浸透する前に、<br />
              一緒にポジションを取っておきませんか？
            </p>
            <p className="text-lg text-gray-700">
              今なら、まだ間に合います。
            </p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <Button
              onClick={handleENPClick}
              size="lg"
              className="text-xl font-bold py-8 px-16 animate-bounce hover:animate-none transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: "#06C755" }}
            >
              <span className="relative z-10">今すぐAIスキルを体験する（無料）</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></span>
            </Button>
            <p className="text-sm text-gray-500 mt-6">
              3日で、AIの全体像がわかります。
            </p>
          </div>
        </div>
      </section>

      {/* ENP Skills Section (toC) */}
      <section id="enp" className="py-20 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              個人向け
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              3日でAIスキルを体験。<br />
              仕組みをつくる側に回る最初の一歩。
            </h2>
            <p className="text-xl text-gray-600">
              副業・リモート・海外でも使えるENPスキル講座
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Feature Cards */}
            {[
              {
                title: "AI活用の全体像がわかる",
                description: "ChatGPT、n8n、Lステップなど、最新AIツールの実践的な使い方を学べます"
              },
              {
                title: "実際に自動化を作れる",
                description: "理論だけでなく、手を動かして自分の仕組みを構築できます"
              },
              {
                title: "3日で自分の仕組みが完成",
                description: "短期集中で、すぐに使える自動化の仕組みを手に入れられます"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center" data-aos="fade-up">
            <Button
              onClick={handleENPClick}
              size="lg"
              className="text-lg font-bold py-6 px-12 animate-bounce hover:animate-none transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: "#06C755" }}
            >
              <span className="relative z-10">AIスキルを体験する（無料）</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></span>
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              ENPとは「Education Nomad Program」— 変化に強い個人の働き方です。
            </p>
          </div>
        </div>
      </section>

      {/* Business Diagnosis Section (toB) */}
      <section id="biz" className="py-20 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              法人向け
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              社長不在でも売上が伸びる仕組みを<br />
              90日で設計するための無料診断。
            </h2>
            <p className="text-xl text-gray-600">
              広告費を増やしても利益が伸びない...そんな経営課題を、仕組みで解決します。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Feature Cards */}
            {[
              {
                title: "計測の正確さを診断",
                description: "現状の数値管理の精度を可視化し、改善ポイントを明確にします"
              },
              {
                title: "自動化・教育・追客を可視化",
                description: "顧客獲得から育成、リピートまでの流れを設計します"
              },
              {
                title: "90日で利益を安定化",
                description: "短期間で成果が出る、実践的な設計書を作成します"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center" data-aos="fade-up">
            <Button
              onClick={handleBizClick}
              size="lg"
              className="text-lg font-bold py-6 px-12 animate-bounce hover:animate-none transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: "#06C755" }}
            >
              <span className="relative z-10">無料で診断を受ける</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></span>
            </Button>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
            不完全でも走れる。それが仕組みの力。
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed mb-12 opacity-90" data-aos="fade-up" data-aos-delay="200">
            <p>
              どんなに環境が変わっても、仕組みがあれば、人生は止まりません。
            </p>
            <p>
              あなたが求める自由は、努力の先ではなく、設計の先にあります。
            </p>
            <p className="font-semibold">
              まずは、あなたに合う入口から始めてください。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            <Button
              onClick={handleENPClick}
              size="lg"
              className="text-lg font-bold py-6 px-8 animate-bounce hover:animate-none transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: "#06C755" }}
            >
              <span className="relative z-10">AIスキルを体験する</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></span>
            </Button>

            <Button
              onClick={handleBizClick}
              size="lg"
              className="text-lg font-bold py-6 px-8 animate-bounce hover:animate-none transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: "#06C755" }}
            >
              <span className="relative z-10">仕組みを診断する</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
