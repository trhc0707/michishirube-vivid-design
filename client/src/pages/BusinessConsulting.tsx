import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BusinessConsulting() {
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gray-900 text-white">
          <div className="container">
            <Link href="/">
              <Button variant="ghost" className="mb-8 text-white hover:text-gray-300">
                <ArrowLeft className="mr-2" size={20} />
                戻る
              </Button>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ビジネス/マーケティングコンサルティング
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              デジタルマーケティングからAI活用まで、ビジネスの成長を加速させる包括的なコンサルティングサービスを提供します。
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#9370DB] mr-2">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">まずは無料相談から</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              あなたのビジネス課題について、専門スタッフが無料でご相談に応じます。お気軽にお問い合わせください。
            </p>
            <Button className="bg-[#333333] hover:bg-[#1a1a1a] text-white px-8 py-6 text-lg">
              無料相談を申し込む →
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
