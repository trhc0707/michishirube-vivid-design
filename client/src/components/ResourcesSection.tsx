import { motion } from "framer-motion";
import { FileText, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const featuredResources = [
  {
    id: "canada-seminar",
    title: "カナダ移住完全ガイドセミナー",
    category: "海外移住",
    description: "カナダ移住の最新情報、ビザ取得方法、生活費、仕事の見つけ方まで徹底解説",
    image: "/resources-canada-seminar.webp",
  },
  {
    id: "ai-guide-pdf",
    title: "AI活用入門ガイド",
    category: "AI活用",
    description: "ChatGPT、Claude、Geminiなど主要AIツールの使い方を初心者向けに解説",
    image: "/resources-ai-guide-pdf.webp",
  },
  {
    id: "georgia-seminar",
    title: "ジョージア移住セミナー",
    category: "海外移住",
    description: "ノマドビザの取得方法、生活費の安さ、治安、文化など実際の移住経験者が語る",
    image: "/resources-georgia-seminar.webp",
  },
];

export default function ResourcesSection() {
  return (
    <section className="relative py-20 bg-gray-50" id="resources">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 pattern-text">
          お役立ち資料お役立ち資料お役立ち資料お役立ち資料お役立ち資料お役立ち資料お役立ち資料お役立ち資料お役立ち資料お役立ち資料
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
          <div className="inline-flex items-center gap-2 mb-4">
            <FileText className="h-6 w-6" />
            <span className="text-sm font-bold tracking-wider">RESOURCES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            お役立ち資料
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            海外移住とAI活用の最新情報を無料でお届け。LINE登録で、セミナー動画やガイドPDFをすぐに受け取れます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 border-black hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 text-sm font-bold">
                      {resource.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">
                    {resource.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a href="/resources">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 font-bold text-lg px-8 py-6 border-2 border-black"
            >
              <Download className="mr-2 h-5 w-5" />
              すべての資料を見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
