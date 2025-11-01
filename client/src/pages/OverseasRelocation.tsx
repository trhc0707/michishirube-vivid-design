import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OverseasRelocation() {
  const services = [
    {
      title: "カナダ移住",
      description: "カナダへの移住をトータルサポート。ビザ申請から現地での生活立ち上げまで、経験豊富なスタッフがサポートします。",
      features: ["永住権申請サポート", "就労ビザ取得", "学生ビザ取得", "現地生活サポート"]
    },
    {
      title: "メキシコ移住",
      description: "温暖な気候と低コストで人気のメキシコ移住。ビザ取得から住居探し、銀行口座開設まで完全サポートします。",
      features: ["一時居住ビザ取得", "永住ビザ取得", "住居探しサポート", "銀行口座開設サポート"]
    },
    {
      title: "ジョージア移住",
      description: "デジタルノマドに人気のジョージア。ビザなしで1年間滞在可能な制度を活用した移住をサポートします。",
      features: ["ビザなし滞在サポート", "長期滞在ビザ取得", "現地ネットワーク構築", "生活立ち上げサポート"]
    },
    {
      title: "海外移住個別相談",
      description: "あなたに最適な移住先を一緒に考えます。予算、ライフスタイル、ビジネス展開など、様々な観点からアドバイスします。",
      features: ["移住先選定相談", "予算プランニング", "ビザ戦略立案", "ロードマップ作成"]
    },
    {
      title: "ノマドビザ取得サポート",
      description: "世界各国で導入が進むデジタルノマドビザ。取得条件の確認から申請書類作成まで完全サポートします。",
      features: ["ビザ要件確認", "必要書類準備", "申請書類作成", "申請代行"]
    },
    {
      title: "海外移住コミュニティ",
      description: "海外移住を目指す仲間とつながるコミュニティ。情報交換、相談、現地情報の共有など、移住を成功させるためのネットワークを提供します。",
      features: ["オンラインコミュニティ", "定期勉強会", "現地情報共有", "メンバー限定イベント"]
    },
    {
      title: "海外移住後収入構築サポート",
      description: "移住後の収入源を確保するためのサポート。オンラインビジネス、フリーランス、現地就職など、様々な選択肢を提案します。",
      features: ["オンラインビジネス構築", "フリーランス支援", "現地就職サポート", "収入多様化戦略"]
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
              海外移住サポート
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              あなたの海外移住の夢を実現します。ビザ取得から現地生活の立ち上げまで、経験豊富な専門スタッフが全面的にサポートします。
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
                        <span className="text-[#00CED1] mr-2">✓</span>
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
              あなたの海外移住プランについて、専門スタッフが無料でご相談に応じます。お気軽にお問い合わせください。
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
