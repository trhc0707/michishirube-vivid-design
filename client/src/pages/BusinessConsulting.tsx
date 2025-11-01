import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BusinessConsulting() {
  const [, setLocation] = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
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
      features: ["投稿コンテンツ作成", "ハッシュタグ戦略", "コミュニティ管理", "分析レポート"]
    },
    {
      title: "ホームページ制作",
      description: "ビジネスの成長を加速させるホームページを制作。デザイン、機能性、SEO対策を兼ね備えたサイトを提供します。",
      features: ["レスポンシブデザイン", "SEO最適化", "CMS導入", "保守・運用サポート"]
    },
    {
      title: "LP制作",
      description: "コンバージョン率を最大化するランディングページを制作。ターゲットに刺さるデザインとコピーライティングで成果を出します。",
      features: ["ターゲット分析", "デザイン・コーディング", "A/Bテスト実施", "改善提案"]
    },
    {
      title: "MEO対策",
      description: "Googleマップでの上位表示を実現するMEO対策。地域ビジネスの集客を強化し、来店数・問い合わせ数を増やします。",
      features: ["Googleビジネスプロフィール最適化", "口コミ管理", "投稿管理", "効果測定"]
    },
    {
      title: "Google/Meta広告運用",
      description: "Google広告、Facebook・Instagram広告の運用代行。費用対効果を最大化し、ビジネスの成長を加速させます。",
      features: ["広告戦略立案", "クリエイティブ制作", "入札最適化", "レポーティング"]
    },
    {
      title: "AIコミュニティ",
      description: "AI活用を学び、実践するコミュニティ。最新のAIツールや活用事例を共有し、ビジネスでのAI活用を推進します。",
      features: ["オンラインコミュニティ", "定期勉強会", "AI活用事例共有", "メンバー限定コンテンツ"]
    },
    {
      title: "AIコンサルティング",
      description: "ビジネスにAIを導入するためのコンサルティング。課題分析から導入計画、効果測定まで一貫してサポートします。",
      features: ["課題分析", "AI導入計画策定", "ツール選定", "効果測定"]
    },
    {
      title: "AI導入",
      description: "AIツールの導入支援。ChatGPT、Midjourney、各種AIツールを業務に組み込み、生産性を大幅に向上させます。",
      features: ["ツール導入支援", "業務フロー設計", "マニュアル作成", "運用サポート"]
    },
    {
      title: "AI研修",
      description: "社員向けAI研修プログラム。AIの基礎から実践的な活用方法まで、ビジネスで使えるAIスキルを習得できます。",
      features: ["基礎研修", "実践ワークショップ", "業種別カスタマイズ", "フォローアップ"]
    }
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
          className={`relative z-10 text-center text-white transition-all duration-1000 px-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            ビジネス/マーケティング
            <br />
            コンサルティング
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto">
            デジタルマーケティングからAI活用まで
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              LINE構築、SNS運用、ホームページ制作、広告運用などのデジタルマーケティングから、AI導入・活用まで、ビジネスの成長を加速させる包括的なコンサルティングサービスを提供します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="pattern-text">SERVICES SERVICES SERVICES</div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <p className="text-sm text-gray-600 mb-2">Our Services</p>
              <h2 className="text-4xl md:text-5xl font-bold">サービス一覧</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
                    {service.title}
                  </h3>
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
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <p className="text-sm text-gray-600 mb-2">Our Strength</p>
              <h2 className="text-4xl md:text-5xl font-bold">私たちの強み</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black mb-4">4言語</div>
                <div className="text-sm text-gray-600 mb-2">多言語対応</div>
                <p className="text-sm text-gray-700">
                  英語・フランス語・スペイン語・日本語圏から最新情報を収集
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black mb-4">AI特化</div>
                <div className="text-sm text-gray-600 mb-2">最新AI技術</div>
                <p className="text-sm text-gray-700">
                  ChatGPT、Midjourney等の最新AIツールを活用
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black mb-4">実践型</div>
                <div className="text-sm text-gray-600 mb-2">実践的サポート</div>
                <p className="text-sm text-gray-700">
                  理論だけでなく実際の業務に即した実践的な支援
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              ビジネスの成長を加速させましょう
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              まずは無料相談で、あなたのビジネス課題をお聞かせください。最適なソリューションをご提案いたします。
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
                ホームに戻る
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
