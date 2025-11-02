import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      toast.error("プライバシーポリシーに同意してください");
      return;
    }
    toast.success("お問い合わせを受け付けました！担当者より3営業日以内にご連絡いたします。");
    // フォームリセット
    setFormData({
      company: "",
      name: "",
      phone: "",
      email: "",
      message: "",
      agree: false,
    });
  };

  return (
    <section id="contact" className="section-spacing bg-gray-50">
      <div className="container">
        {/* 上部バッジ */}
        <div className="text-center mb-8" data-aos="fade-up">
          <div className="inline-block bg-yellow-300 text-gray-800 px-8 py-3 rounded-full font-bold relative">
            AI導入に関するご相談は完全無料！お気軽にお問い合わせください
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-yellow-300"></div>
          </div>
        </div>

        {/* フォームコンテナ */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 card-shadow" data-aos="fade-up">
          {/* 見出し */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "rgb(255, 107, 74)" }}>
              簡単60秒で
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">無料相談お申し込み</h3>
            <div className="border-b-2 border-dashed border-gray-300 w-full"></div>
          </div>

          {/* フォーム */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 会社名 */}
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <Label className="flex items-center gap-2 mb-2">
                会社名
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "rgb(231, 76, 60)", color: "white" }}>
                  必須
                </span>
              </Label>
              <Input
                placeholder="株式会社○○"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
                className="border-0 bg-transparent"
              />
            </div>

            {/* お名前 */}
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <Label className="flex items-center gap-2 mb-2">
                お名前
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "rgb(231, 76, 60)", color: "white" }}>
                  必須
                </span>
              </Label>
              <Input
                placeholder="山田 太郎"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-0 bg-transparent"
              />
            </div>

            {/* 電話番号 */}
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <Label className="flex items-center gap-2 mb-2">
                電話番号
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "rgb(231, 76, 60)", color: "white" }}>
                  必須
                </span>
              </Label>
              <Input
                placeholder="000-0000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="border-0 bg-transparent"
              />
            </div>

            {/* メールアドレス */}
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <Label className="flex items-center gap-2 mb-2">
                メールアドレス
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "rgb(231, 76, 60)", color: "white" }}>
                  必須
                </span>
              </Label>
              <Input
                type="email"
                placeholder="xxxxxxxx@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-0 bg-transparent"
              />
            </div>

            {/* ご相談内容 */}
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <Label className="mb-2 block">ご相談内容</Label>
              <Textarea
                placeholder="現在の課題や、AI導入で解決したいことをお聞かせください"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-0 bg-transparent min-h-24"
              />
            </div>

            {/* プライバシーポリシー */}
            <div className="flex items-start gap-2">
              <Checkbox
                id="agree"
                checked={formData.agree}
                onCheckedChange={(checked) => setFormData({ ...formData, agree: checked as boolean })}
              />
              <label htmlFor="agree" className="text-sm text-gray-700 cursor-pointer">
                プライバシーポリシーに同意する
              </label>
            </div>

            {/* 送信ボタン */}
            <Button
              type="submit"
              size="lg"
              className="w-full text-lg font-bold py-6"
              style={{ background: "linear-gradient(135deg, rgb(255, 107, 74) 0%, rgb(255, 140, 100) 100%)" }}
            >
              無料相談を申し込む
            </Button>
          </form>

          {/* 注釈 */}
          <p className="text-center text-sm text-gray-600 mt-6">
            ※ 3営業日以内に担当者よりご連絡いたします
          </p>

          {/* お問い合わせページへのリンク */}
          <div className="mt-8 text-center">
            <Link href="/contact">
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="text-lg font-bold py-6 px-12 border-2"
              >
                お問い合わせページへ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
