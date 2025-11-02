import { motion } from "framer-motion";
import { Download, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

interface ResourceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  badge: string;
}

const resources: ResourceItem[] = [
  {
    id: "canada-seminar",
    title: "カナダ移住完全ガイドセミナー",
    category: "海外移住",
    description: "カナダ移住の最新情報、ビザ取得方法、生活費、仕事の見つけ方まで、11年の海外経験を持つ代表が徹底解説。実際の移住成功事例も紹介します。",
    image: "/resources-canada-seminar.jpg",
    badge: "海外移住"
  },
  {
    id: "georgia-seminar",
    title: "ジョージア移住セミナー - ノマドビザ完全ガイド",
    category: "海外移住",
    description: "注目のジョージア（グルジア）移住の魅力を徹底解説。ノマドビザの取得方法、生活費の安さ、治安、文化など、実際の移住経験者が語ります。",
    image: "/resources-georgia-seminar.jpg",
    badge: "海外移住"
  },
  {
    id: "mexico-school",
    title: "メキシコ子育て・教育セミナー",
    category: "海外移住",
    description: "メキシコでの子育て・教育事情を徹底解説。現地の学校システム、入学手続き、教育費、バイリンガル教育など、実際にメキシコで子育てをしている代表が語ります。",
    image: "/resources-mexico-school.jpg",
    badge: "海外移住"
  },
  {
    id: "ai-guide-pdf",
    title: "AI活用入門ガイド - 今日から使える実践テクニック",
    category: "AI活用",
    description: "ChatGPT、Claude、Geminiなど主要AIツールの使い方を初心者向けに解説。業務効率化、コンテンツ作成、データ分析など、すぐに使える実践テクニックを紹介します。",
    image: "/resources-ai-guide-pdf.jpg",
    badge: "AI活用"
  },
  {
    id: "ai-implementation",
    title: "企業向けAI導入完全ガイド",
    category: "AI活用",
    description: "4言語で世界中のAI情報を収集する代表が、企業のAI導入を成功に導く完全ガイド。シフト管理、在庫管理、顧客対応など8種類の自動化事例を詳しく解説します。",
    image: "/resources-ai-implementation.jpg",
    badge: "AI活用"
  }
];

const ResourceCard = ({ resource }: { resource: ResourceItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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
              {resource.badge}
            </span>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-3 line-clamp-2">
            {resource.title}
          </h3>
          <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
            {resource.description}
          </p>
          <Button
            className="w-full bg-black text-white hover:bg-gray-800 font-bold border-2 border-black"
            onClick={() => {
              // LINE登録リンクに遷移
              window.open("https://lin.ee/YOUR_LINE_ID", "_blank");
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            LINE登録して受け取る
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default function Resources() {
  const relocationResources = resources.filter(r => r.category === "海外移住");
  const aiResources = resources.filter(r => r.category === "AI活用");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "お役立ち資料 - MichiShirube OÜ",
    "description": "海外移住・AI活用に関するお役立ち資料を無料でダウンロード",
    "hasPart": [
      {
        "@type": "Article",
        "name": "カナダ移住完全ガイドセミナー",
        "description": "カナダ移住の最新情報、ビザ取得方法、生活費、仕事の見つけ方まで徹底解説"
      },
      {
        "@type": "Article",
        "name": "ジョージア移住セミナー",
        "description": "ノマドビザの取得方法、生活費の安さ、治安、文化などを徹底解説"
      },
      {
        "@type": "Article",
        "name": "AI活用入門ガイド",
        "description": "企業が今すぐ始められるAI活用の基礎から実践まで"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="お役立ち資料 - MichiShirube OÜ | 海外移住・AI活用ガイド"
        description="海外移住（カナダ、ジョージア、メキシコ）やAI活用に関するお役立ち資料を無料でダウンロード。セミナー動画、完全ガイド、導入事例などを公開中。"
        keywords="資料ダウンロード,無料資料,海外移住ガイド,AI活用ガイド,セミナー,カナダ移住,ジョージア移住,メキシコ子育て,AI導入,企業AI"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
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
                <FileText className="h-5 w-5" />
                <span className="font-bold">RESOURCES</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              お役立ち資料
            </h1>
            <p className="text-xl mb-4">
              海外移住とAI活用の最新情報を無料でお届け
            </p>
            <p className="text-gray-200">
              LINE登録で、セミナー動画やガイドPDFをすぐに受け取れます
            </p>
          </motion.div>
        </div>
      </section>

      {/* Relocation Resources Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 pattern-text">
            海外移住海外移住海外移住海外移住海外移住海外移住海外移住海外移住海外移住海外移住海外移住海外移住海外移住海外移住海外移住
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
              <Globe className="h-6 w-6" />
              <h2 className="text-3xl md:text-4xl font-bold">海外移住</h2>
            </div>
            <p className="text-gray-600">
              11年の海外経験を持つ代表が、実践的な移住ノウハウをお届けします
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relocationResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Resources Section */}
      <section className="relative py-20 bg-white">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 pattern-text">
            AI活用AI活用AI活用AI活用AI活用AI活用AI活用AI活用AI活用AI活用AI活用AI活用AI活用AI活用AI活用AI活用AI活用AI活用AI活用AI活用
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
              <h2 className="text-3xl md:text-4xl font-bold">AI活用</h2>
            </div>
            <p className="text-gray-600">
              4言語で世界中のAI情報を収集する代表が、最新のAI活用法を解説します
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aiResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              まずはLINE登録から
            </h2>
            <p className="text-gray-300 mb-8">
              お役立ち資料の受け取りには、LINE公式アカウントの登録が必要です。<br />
              登録後すぐに、ご希望の資料をお届けします。
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-bold text-lg px-8 py-6 border-2 border-white"
              onClick={() => {
                window.open("https://lin.ee/YOUR_LINE_ID", "_blank");
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              LINE登録する
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
