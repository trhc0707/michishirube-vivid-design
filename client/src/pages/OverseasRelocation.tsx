import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function OverseasRelocation() {
  const [, setLocation] = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceCategories = [
    {
      category: "移住サポート",
      services: [
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
          title: "ノマドビザ取得サポート",
          description: "世界各国で導入が進むデジタルノマドビザ。取得条件の確認から申請書類作成まで完全サポートします。",
          features: ["ビザ要件確認", "必要書類準備", "申請書類作成", "申請代行"]
        }
      ]
    },
    {
      category: "その他のサービス",
      services: [
        {
          title: "海外移住後収入構築サポート",
          description: "移住後の収入源を確保するためのサポート。オンラインビジネス、フリーランス、現地就職など、様々な選択肢を提案します。",
          features: ["オンラインビジネス構築", "フリーランス支援", "現地就職サポート", "収入多様化戦略"],
          link: "/relocation-income-support"
        },
        {
          title: "海外移住コミュニティ",
          description: "海外移住を目指す仲間とつながるコミュニティ。情報交換、相談、現地情報の共有など、移住を成功させるためのネットワークを提供します。",
          features: ["オンラインコミュニティ", "定期勉強会", "現地情報共有", "メンバー限定イベント"],
          link: "/overseas-community"
        }
      ]
    },
    {
      category: "個別相談",
      services: [
        {
          title: "海外移住個別相談",
          description: "あなたに最適な移住先を一緒に考えます。予算、ライフスタイル、ビジネス展開など、様々な観点からアドバイスします。",
          features: ["移住先選定相談", "予算プランニング", "ビザ戦略立案", "ロードマップ作成"]
        }
      ]
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
            backgroundImage: "url('/hero-bg.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div
          className={`relative z-10 text-center text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            海外移住サポート
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto px-4">
            あなたの海外移住の夢を実現します
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
              ビザ取得から現地生活の立ち上げまで、経験豊富な専門スタッフが全面的にサポートします。カナダ、メキシコ、ジョージアを中心に、700名以上の個別相談、60名以上の実サポート実績があります。
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

            <div className="space-y-16">
              {serviceCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h3 className="text-3xl font-bold mb-8 border-b-4 border-black pb-3 inline-block">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
                    {category.services.map((service, index) => (
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
                        {(service as any).link && (
                          <Button
                            className="w-full bg-[#333333] hover:bg-[#1a1a1a] text-white"
                            onClick={() => setLocation((service as any).link)}
                          >
                            詳しく見る →
                          </Button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
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
              <p className="text-sm text-gray-600 mb-2">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-bold">選ばれる理由</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black mb-4">11年</div>
                <div className="text-sm text-gray-600 mb-2">海外在住歴</div>
                <p className="text-sm text-gray-700">
                  4カ国での実生活経験に基づく実践的なアドバイス
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black mb-4">700名+</div>
                <div className="text-sm text-gray-600 mb-2">個別相談実績</div>
                <p className="text-sm text-gray-700">
                  多様なケースに対応した豊富な相談経験
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black mb-4">60名+</div>
                <div className="text-sm text-gray-600 mb-2">実サポート実績</div>
                <p className="text-sm text-gray-700">
                  実際の移住成功者を多数輩出
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
              まずは無料相談から
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              あなたの海外移住プランについて、専門スタッフが無料でご相談に応じます。お気軽にお問い合わせください。
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
