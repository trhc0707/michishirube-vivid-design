import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function BusinessConsulting() {
  const aiServices = [
    {
      title: "AIコンサルティング",
      description: "AI活用の戦略立案から実装まで、包括的にサポート。貴社のビジネスに最適なAIソリューションをご提案します。",
      features: ["AI戦略立案", "ROI分析", "実装ロードマップ作成", "効果測定"]
    },
    {
      title: "AI研修",
      description: "社員向けのAI研修プログラム。ChatGPT、画像生成AIなど、実務で使えるスキルを習得できます。",
      features: ["基礎研修", "実践ワークショップ", "業務別カスタマイズ", "継続サポート"]
    },
    {
      title: "AI開発",
      description: "カスタムAIソリューションの開発。チャットボット、画像認識、自然言語処理など、ニーズに合わせた開発を行います。",
      features: ["要件定義", "プロトタイプ開発", "本番実装", "運用保守"]
    },
    {
      title: "AI導入",
      description: "AIツールの導入支援。ChatGPT、Midjourney、各種AIツールを業務に組み込み、生産性を大幅に向上させます。",
      features: ["ツール導入支援", "業務フロー設計", "マニュアル作成", "運用サポート"]
    }
  ];

  const otherServices = [
    {
      title: "AIコミュニティ",
      description: "AI活用を学び、実践するコミュニティ。個人事業主・フリーランス（0-5名規模）向けに、AIで効率化する方法を学べます。",
      features: ["オンラインコミュニティ", "定期勉強会", "AI活用事例共有", "メンバー限定コンテンツ"],
      link: "https://note.com/takuma_canada/n/ne8fd379a8cf2"
    },
    {
      title: "個別相談",
      description: "あなたのビジネス課題を一緒に解決します。AI導入、マーケティング戦略、業務効率化など、様々な観点からアドバイスします。",
      features: ["課題ヒアリング", "解決策提案", "実行計画策定", "フォローアップ"]
    }
  ];

  const marketingServices = [
    {
      title: "LINE構築・運用代行",
      description: "LINE公式アカウントの構築から運用まで完全サポート。顧客とのコミュニケーションを最適化し、売上向上を実現します。",
      features: ["アカウント設計", "リッチメニュー作成", "配信戦略立案", "効果測定・改善"]
    },
    {
      title: "動画編集",
      description: "プロフェッショナルな動画編集サービス。YouTube、SNS、広告用など、目的に応じた高品質な動画を制作します。",
      features: ["YouTube動画編集", "SNS用ショート動画", "広告用動画制作", "サムネイル作成"]
    },
    {
      title: "SNS運用代行",
      description: "Instagram、X（Twitter）、TikTokなど、各SNSの特性を活かした運用代行。フォロワー増加とエンゲージメント向上を実現します。",
      features: ["コンテンツ企画", "投稿作成・配信", "コミュニティ管理", "分析・レポート"]
    },
    {
      title: "ホームページ制作",
      description: "ビジネスの顔となるホームページを制作。デザイン性と機能性を兼ね備えた、成果につながるサイトを提供します。",
      features: ["企画・設計", "デザイン制作", "コーディング", "SEO対策"]
    },
    {
      title: "LP制作",
      description: "コンバージョンを最大化するランディングページ制作。ターゲットに刺さるデザインとコピーで、成果を生み出します。",
      features: ["ターゲット分析", "デザイン制作", "コピーライティング", "A/Bテスト"]
    },
    {
      title: "MEO対策",
      description: "Googleマップでの上位表示を実現するMEO対策。地域ビジネスの集客力を大幅に向上させます。",
      features: ["Googleビジネスプロフィール最適化", "口コミ管理", "投稿運用", "効果測定"]
    },
    {
      title: "Google/Meta広告運用",
      description: "Google広告・Meta（Facebook/Instagram）広告の運用代行。ROIを最大化する広告戦略を実行します。",
      features: ["広告戦略立案", "クリエイティブ制作", "運用・最適化", "レポーティング"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Background */}
        <section
          className="relative pt-32 pb-40 wave-bottom"
          style={{ background: "linear-gradient(135deg, rgb(59, 89, 152) 0%, rgb(45, 70, 120) 100%)" }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <p className="text-sm text-white/80 mb-2">Business Consulting</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                ビジネスコンサルティング
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                AI活用からマーケティングまで、<br />
                ビジネスの成長を包括的にサポートします
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 pt-16 pb-16">

          {/* AI Services Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <p className="text-sm text-gray-600 mb-2">AI Services</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">AIサービス</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h4 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-black font-bold mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Marketing Services Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <p className="text-sm text-gray-600 mb-2">Marketing Services</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">マーケティングサービス</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {marketingServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h4 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-black font-bold mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Services Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <p className="text-sm text-gray-600 mb-2">Other Services</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">その他のサービス</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {otherServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h4 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-black font-bold mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full hover:bg-black hover:text-white transition-colors">
                        詳しく見る
                        <ArrowUpRight className="ml-2" size={16} />
                      </Button>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gray-800 text-white py-20 px-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              まずはお気軽にご相談ください
            </h2>
            <p className="text-lg mb-8 opacity-90">
              あなたのビジネスに最適なソリューションをご提案します
            </p>
            <a href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                お問い合わせ
                <ArrowUpRight className="ml-2" size={20} />
              </Button>
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
