import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUs() {
  const [, setLocation] = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    { label: "海外在住歴", value: "11年" },
    { label: "個別相談", value: "700名以上" },
    { label: "実際の海外サポート", value: "60名以上" },
    { label: "SNS総フォロワー", value: "28,000名以上" },
  ];

  const values = [
    {
      title: "実践主義",
      description: "11年の海外経験と実績に基づいた、実践的なサポート",
    },
    {
      title: "4言語対応",
      description: "英語・フランス語・スペイン語・日本語で世界中のAIニュースを毎日収集。海外の最先端情報をいち早くキャッチ",
    },
    {
      title: "国際チーム",
      description: "日本人とフランス人の国際チームが、グローバルスタンダードと日本市場の両方に精通したサービスを提供",
    },
    {
      title: "長期的パートナーシップ",
      description: "クライアント一人ひとりの夢と目標を大切にし、長期的な関係を築く",
    },
    {
      title: "透明性と誠実さ",
      description: "正直で透明性のあるコミュニケーション",
    },
    {
      title: "結果へのコミットメント",
      description: "最高のサービスを提供し、結果にコミットする",
    },
  ];

  const profile = [
    "1993年大阪府生まれ、3児の父",
    "15歳でオーストラリアに単身留学",
    "カナダ・University of Victoria卒業",
    "海外在住歴11年（オーストラリア、カナダ、メキシコ、ジョージア）",
    "エストニアで法人設立",
    "海外移住サポート実績：700名以上の個別相談、60名以上の実サポート",
    "AI事業とマーケティングコンサルティングを展開",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-bg.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div
          className={`relative z-10 text-center text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4">About Us</h1>
          <p className="text-xl md:text-2xl font-light">
            世界を舞台に、あなたの可能性を広げる
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="pattern-text">COMPANY COMPANY COMPANY</div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 mb-2">Company Overview</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-16">会社概要</h2>
            </div>

            <div className="bg-white border border-gray-200 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <p className="text-sm text-gray-500 mb-1">会社名</p>
                    <p className="text-lg font-semibold">MichiShirube OÜ</p>
                  </div>
                  <div className="border-b pb-4">
                    <p className="text-sm text-gray-500 mb-1">設立</p>
                    <p className="text-lg font-semibold">2023年</p>
                  </div>
                  <div className="border-b pb-4">
                    <p className="text-sm text-gray-500 mb-1">所在地</p>
                    <p className="text-lg font-semibold">エストニア・タリン</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">代表取締役</p>
                    <p className="text-lg font-semibold">今村拓真</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-4">事業内容</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-sm">AI事業（企業研修・AI導入・ツール開発）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-sm">海外移住サポート（カナダ・メキシコ・ジョージア）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-sm">ビジネス/マーケティングコンサルティング</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <p className="text-sm text-gray-600 mb-2">CEO Message</p>
              <h2 className="text-4xl md:text-5xl font-bold">代表メッセージ</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-sm overflow-hidden">
                  <img
                    src="https://via.placeholder.com/600x800/E5E7EB/6B7280?text=CEO+Photo"
                    alt="代表取締役 今村拓真"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6">
                  <p className="text-sm text-gray-500 mb-3 font-semibold">代表プロフィール</p>
                  <ul className="space-y-2">
                    {profile.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    私は15歳でオーストラリアに単身留学し、以来11年間、4カ国で生活してきました。人生の3分の1を海外で過ごす中で、何度も挫折を経験し、全財産を失ったこともあります。しかし、その度に立ち上がり、新しい挑戦を続けてきました。
                  </p>
                  <p>
                    現在、私は妻と3人の子どもとともに、ノマドファミリーとして世界を旅しながら、MichiShirube OÜを経営しています。エストニアでの会社設立をChatGPTで実現し、メキシコの小学校入学書類をスペイン語でAIに作成してもらうなど、私自身がAIを日常的に活用しています。「どうすれば努力をせずに楽をして勝てるのか？」という問いが、AI活用の原点です。
                  </p>
                  <p>
                    フランス人の開発パートナーと協業しながら、英語・フランス語・スペイン語・日本語の4言語で世界中のAIニュースを毎日収集し、海外の最先端事例を日本市場に適応させています。シフト管理、在庫管理、日報、顧客対応、予約管理、マニュアル作成、コンテンツ作成、チャットボット作成など、法人・企業向けのAI導入支援で実績を積み重ねています。
                  </p>
                  <p>
                    私たちのミッションは、「あなたの生き方、好き！」と思ってもらえる人生を、一人でも多くの方に実現していただくことです。海外移住においては、貯金よりも「稼ぐ力」が重要です。ビジネスにおいては、人件費削減と本質的業務へのフォーカスを通じて、「令和の産業革命」を実現します。AI時代において、人間の価値を再定義し、場所にとらわれない働き方と生き方を実現するお手伝いをしています。
                  </p>
                  <p>
                    700名以上の方々と個別相談を重ね、60名以上を実際に海外でサポートしてきた経験から、皆さまの夢の実現を全力でサポートいたします。
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-lg font-bold">代表取締役</p>
                  <p className="text-2xl font-bold mt-1">今村拓真</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="pattern-text">ABOUT ABOUT ABOUT</div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <p className="text-sm text-gray-600 mb-2">私たちについて</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                会社概要
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">私たちのミッション</h3>
                <p className="text-gray-600 leading-relaxed">
                  グローバルな視点で、個人と企業の成長を支援します。海外移住の夢を実現し、ビジネスの国際展開をサポートすることで、より豊かで自由な人生とビジネスの創造に貢献します。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">私たちの強み</h3>
                <p className="text-gray-600 leading-relaxed">
                  日本人とフランス人の国際チームが、英語・フランス語・スペイン語・日本語の4言語で世界中のAIニュースを毎日収集。海外の最先端事例を日本市場に適応させ、カナダ、メキシコ、ジョージアへの移住サポートと、AI導入・デジタルマーケティングの包括的なビジネスソリューションを提供します。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">私たちの価値観</h3>
                <p className="text-gray-600 leading-relaxed">
                  クライアント一人ひとりの夢と目標を大切にし、長期的なパートナーシップを築きます。透明性、誠実さ、そして結果へのコミットメントを最優先に、最高のサービスを提供します。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="pattern-text">CONTACT CONTACT CONTACT</div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              あなたの夢を一緒に実現しましょう
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              まずは無料相談から始めませんか？
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Button 
                className="bg-[#333333] hover:bg-[#1a1a1a] text-white py-6 text-lg"
              >
                無料相談を申し込む
              </Button>
              <Button 
                className="bg-[#333333] hover:bg-[#1a1a1a] text-white py-6 text-lg"
                onClick={() => setLocation("/")}
              >
                サービスを見る
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
