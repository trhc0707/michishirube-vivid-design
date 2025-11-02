import Header from "@/components/Header";
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

  return (
    <div className="min-h-screen flex flex-col">
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

      {/* FAQ Section */}
      <FAQSection />

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
