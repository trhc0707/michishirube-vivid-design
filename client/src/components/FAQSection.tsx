import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "お問い合わせから返信までどのくらいかかりますか？",
    answer: "メールでのお問い合わせの場合、通常3営業日以内にご返信いたします。LINEでのお問い合わせの場合は、営業時間内（平日9:00〜18:00）であれば当日中にご返信いたします。",
  },
  {
    question: "相談は無料ですか？",
    answer: "はい、初回相談は完全無料です。お客様の課題やご要望をお伺いし、最適なソリューションをご提案いたします。具体的なサービス内容や料金については、ヒアリング後にお見積もりをご提示いたします。",
  },
  {
    question: "海外移住サポートはどの国に対応していますか？",
    answer: "カナダ、メキシコ、ジョージアを中心に、海外移住サポートを提供しています。ビザ取得から現地生活の立ち上げ、移住後の収入構築まで、11年の海外経験を持つスタッフがトータルサポートいたします。",
  },
  {
    question: "AIサービスはどのような企業に向いていますか？",
    answer: "業務効率化や人件費削減を検討している企業様、AIを導入したいが何から始めればいいかわからない企業様に最適です。小規模事業者から中小企業まで、幅広い規模の企業様にご利用いただいています。",
  },
  {
    question: "AI導入にはどのくらいの期間がかかりますか？",
    answer: "小さくスタートして段階的に展開するため、最短2ヶ月で業務効率化を実感いただけます。お客様の課題や導入範囲によって異なりますが、初回ヒアリングから本格運用まで、平均3〜6ヶ月程度です。",
  },
  {
    question: "オンラインでの相談は可能ですか？",
    answer: "はい、可能です。Zoom、Google Meet、LINEビデオ通話など、お客様のご都合に合わせたオンライン相談を承っています。全国どこからでもご相談いただけます。",
  },
  {
    question: "料金体系について教えてください",
    answer: "サービス内容やプロジェクトの規模によって異なります。初回相談時に詳しくヒアリングさせていただき、お客様に最適なプランとお見積もりをご提示いたします。明確な料金体系で、追加費用が発生する場合は事前にご相談いたします。",
  },
  {
    question: "契約後のサポート体制はどうなっていますか？",
    answer: "専属チームが継続的にサポートいたします。定期的なフォローアップミーティング、メール・LINEでのサポート、緊急時の対応など、安心してご利用いただける体制を整えています。",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-white">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 pattern-text">
          よくある質問よくある質問よくある質問よくある質問よくある質問よくある質問よくある質問よくある質問よくある質問よくある質問
        </div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            よくある質問
          </h2>
          <p className="text-gray-600">
            お問い合わせの前に、こちらもご確認ください
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-2 border-black rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed border-t-2 border-gray-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
