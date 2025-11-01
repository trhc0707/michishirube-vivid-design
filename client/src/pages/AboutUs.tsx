import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  const [, setLocation] = useLocation();

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
      title: "最新情報",
      description: "英語・フランス語・スペイン語・日本語圏から収集した最新のAI・マーケティング情報",
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
      {/* Header with Back Button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              戻る
            </Button>
            <a href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="MichiShirube OÜ Logo" 
                className="h-10"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600">
              世界を舞台に、あなたの可能性を広げる
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">会社概要</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">会社名</p>
                  <p className="text-lg font-semibold">MichiShirube OÜ</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">設立</p>
                  <p className="text-lg font-semibold">2023年</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">所在地</p>
                  <p className="text-lg font-semibold">エストニア・タリン</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">代表取締役</p>
                  <p className="text-lg font-semibold">今村拓真</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">事業内容</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>AI事業（企業研修・AI導入・ツール開発）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>海外移住サポート（カナダ・メキシコ・ジョージア）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>ビジネス/マーケティングコンサルティング</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">代表メッセージ</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
                  <img
                    src="https://via.placeholder.com/600x800/E5E7EB/6B7280?text=CEO+Photo"
                    alt="代表取締役 今村拓真"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">代表プロフィール</p>
                  <ul className="space-y-2">
                    {profile.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="prose prose-lg">
                  <p>
                    私は15歳でオーストラリアに単身留学し、以来11年間、4カ国で生活してきました。人生の3分の1を海外で過ごす中で、何度も挫折を経験し、全財産を失ったこともあります。しかし、その度に立ち上がり、新しい挑戦を続けてきました。
                  </p>
                  <p>
                    現在、私は妻と3人の子どもとともに、ノマドファミリーとして世界を旅しながら、MichiShirube OÜを経営しています。エストニアに法人を設立し、フランス人の開発パートナーと協業しながら、英語・フランス語・スペイン語・日本語圏から最新のAI・マーケティング情報を収集し、日本市場に適応させています。
                  </p>
                  <p>
                    私たちのミッションは、「あなたの生き方、好き！」と思ってもらえる人生を、一人でも多くの方に実現していただくことです。海外移住においては、貯金よりも「稼ぐ力」が重要です。AI時代において、人間の価値を再定義し、場所にとらわれない働き方と生き方を実現するお手伝いをしています。
                  </p>
                  <p>
                    700名以上の方々と個別相談を重ね、60名以上を実際に海外でサポートしてきた経験から、皆さまの夢の実現を全力でサポートいたします。
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-lg font-semibold">代表取締役 今村拓真</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              ミッション・ビジョン・バリュー
            </h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">ミッション</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  グローバルな視点で、個人と企業の成長を支援します。海外移住の夢を実現し、ビジネスの国際展開をサポートすることで、より豊かで自由な人生とビジネスの創造に貢献します。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">ビジョン</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  AI時代において、場所にとらわれない働き方と生き方を実現し、「あなたの生き方、好き！」と思ってもらえる人生を、一人でも多くの方に届けます。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-600">バリュー（価値観）</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-lg">
                      <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">実績</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              あなたの夢を一緒に実現しましょう
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              まずは無料相談から始めませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                無料相談を申し込む
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => setLocation("/")}>
                サービスを見る
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
