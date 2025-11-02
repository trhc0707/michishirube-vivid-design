import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";
import FAQSection from "@/components/FAQSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // メール送信機能は後で実装
    toast.success("お問い合わせを受け付けました。後ほどご連絡いたします。");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "name": "お問い合わせ - MichiShirube OÜ",
        "description": "海外移住、AIコンサルティング、ビジネスコンサルティングに関するお問い合わせはこちらから",
        "mainEntity": {
          "@type": "Organization",
          "name": "MichiShirube OÜ",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "availableLanguage": ["Japanese", "English"],
            "contactOption": ["TollFree"],
            "areaServed": ["JP", "CA", "GE", "MX"]
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "お問い合わせしたら、どれくらいで返信いただけますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "通常、24時間以内に返信いたします。土日祈日の場合は、翌営業日の対応となります。お急ぎの場合は、LINE公式アカウントからのお問い合わせをお勧めいたします。"
            }
          },
          {
            "@type": "Question",
            "name": "相談は無料ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、初回相談は無料です。お客様の状況やニーズをお伺いし、最適なプランをご提案いたします。具体的なサービス内容や料金については、相談時に詳しくご説明いたします。"
            }
          },
          {
            "@type": "Question",
            "name": "海外移住サポートはどの国に対応していますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "主にカナダ、メキシコ、ジョージア、その他ノマドビザ対応国をサポートしています。各国のビザ取得、生活セットアップ、現地での収入構築まで、包括的にサポートいたします。その他の国への移住もご相談ください。"
            }
          },
          {
            "@type": "Question",
            "name": "AIサービスはどのような企業が対象ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "中小企業から大企業まで、業種を問わずAI導入を検討されているすべての企業様が対象です。特に、業務効率化、コスト削減、顧客対応の改善を目指す企業様に最適です。初めてAIを導入する企業様も安心してご相談ください。"
            }
          },
          {
            "@type": "Question",
            "name": "AI導入にはどれくらいの期間がかかりますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "プロジェクトの規模によりますが、小規模なツール導入であれば1～2ヶ月、カスタムAI開発であれば3～6ヶ月程度が目安です。まずは無料相談でお客様のニーズをお伺いし、具体的なスケジュールをご提案いたします。"
            }
          },
          {
            "@type": "Question",
            "name": "オンラインでの相談は可能ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、オンライン相談に完全対応しています。ZoomやGoogle Meetなどのビデオ会議ツールを使用して、世界中どこからでも相談いただけます。海外在住の方や、地方にお住まいの方もお気軽にご相談ください。"
            }
          },
          {
            "@type": "Question",
            "name": "料金体系はどのようになっていますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "サービス内容によって異なります。海外移住サポート、AIコンサルティング、ビジネスコンサルティングそれぞれに最適なプランをご用意しています。初回相談時にお客様のニーズをお伺いし、詳しいお見積りをご提示いたします。"
            }
          },
          {
            "@type": "Question",
            "name": "サポート体制はどうなっていますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "日本語、英語、フランス語、スペイン語の4言語で対応可能です。日仏国際チームが、お客様のタイムゾーンに合わせて柔軟に対応いたします。プロジェクト開始後も、定期的なフォローアップとサポートを提供します。"
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="お問い合わせ - MichiShirube OÜ | 海外移住・AI・ビジネスコンサルティング"
        description="海外移住、AI導入、ビジネスマーケティングに関するご相談はお気軽に。メールまたはLINEでお問い合わせいただけます。初回相談無料。"
        keywords="お問い合わせ,相談,無料相談,海外移住相談,AIコンサルティング相談,ビジネス相談,LINE相談,メール相談"
        structuredData={structuredData}
      />
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-bg.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 bg-white text-black px-6 py-2">
                <Mail className="h-5 w-5" />
                <span className="font-bold">CONTACT</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl mb-4">
              メールまたはLINEからお気軽にご連絡ください
            </p>
            <p className="text-gray-200">
              海外移住やAI導入に関するご相談、サービスについてのお問い合わせをお待ちしております
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 pattern-text">
            お問い合わせお問い合わせお問い合わせお問い合わせお問い合わせお問い合わせお問い合わせお問い合わせお問い合わせお問い合わせ
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              お問い合わせ方法を選択
            </h2>
            <p className="text-gray-600">
              ご都合の良い方法でお気軽にご連絡ください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Email Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 border-2 border-black h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-black text-white p-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">メールでお問い合わせ</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  フォームに必要事項をご記入ください。1〜2営業日以内にご返信いたします。
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="山田太郎"
                      className="border-2 border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@email.com"
                      className="border-2 border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      件名 <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="お問い合わせ内容"
                      className="border-2 border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      メッセージ <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="お問い合わせ内容を詳しくご記入ください"
                      rows={5}
                      className="border-2 border-gray-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-gray-800 font-bold py-6 border-2 border-black"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    送信する
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* LINE Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 border-2 border-black h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#06C755] text-white p-3">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">LINEでお問い合わせ</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  LINE公式アカウントから、お気軽にメッセージをお送りください。リアルタイムで対応いたします。
                </p>

                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-100 p-2 mt-1">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-bold mb-1">LINE登録</p>
                      <p className="text-sm text-gray-600">
                        下のボタンからLINE公式アカウントを友だち追加
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-100 p-2 mt-1">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-bold mb-1">メッセージ送信</p>
                      <p className="text-sm text-gray-600">
                        トークルームからお問い合わせ内容を送信
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-100 p-2 mt-1">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-bold mb-1">スタッフが対応</p>
                      <p className="text-sm text-gray-600">
                        専門スタッフが迅速に返信いたします
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://lin.ee/YOUR_LINE_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-[#06C755] text-white hover:bg-[#05B04A] font-bold py-6 border-2 border-[#06C755]">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    LINE公式アカウントを追加
                  </Button>
                </a>

                <div className="mt-6 pt-6 border-t-2 border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    営業時間: 平日 9:00〜18:00
                    <br />
                    （土日祝日は翌営業日に対応）
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Company Info Section */}
      <section className="relative py-20 bg-white">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 pattern-text">
            会社情報会社情報会社情報会社情報会社情報会社情報会社情報会社情報会社情報会社情報会社情報会社情報
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              会社情報
            </h2>
            <Card className="p-8 border-2 border-black">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white p-2 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">会社名</p>
                    <p className="text-gray-600">MichiShirube OÜ</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white p-2 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">メールアドレス</p>
                    <p className="text-gray-600">info@michishirube.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white p-2 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">営業時間</p>
                    <p className="text-gray-600">
                      平日 9:00〜18:00（土日祝日休業）
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
