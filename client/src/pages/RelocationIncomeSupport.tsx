import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import RelocationIncomeSupportHeroSection from "@/components/lp/RelocationIncomeSupportHeroSection";
import RelocationProblemsSection from "@/components/lp/RelocationProblemsSection";
import RelocationFeaturesSection from "@/components/lp/RelocationFeaturesSection";
import RelocationResultsSection from "@/components/lp/RelocationResultsSection";
import RelocationTestimonialsSection from "@/components/lp/RelocationTestimonialsSection";
import RelocationFlowSection from "@/components/lp/RelocationFlowSection";
import ContactSection from "@/components/ContactSection";

export default function RelocationIncomeSupport() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "海外移住後収入構築サポート - MichiShirube OÜ",
    "description": "海外移住後の収入不安を解消。リモートワーク、フリーランス、起業支援で安定収入を実現",
    "provider": {
      "@type": "Organization",
      "name": "MichiShirube OÜ"
    },
    "serviceType": "Relocation Income Support",
    "areaServed": ["CA", "GE", "MX", "Global"]
  };

  const problems = [
    {
      image: "/problem-1.png",
      title: "貯金という名の「雨の降らないダム」",
      description: "「とりあえズ1000万円貯めれば大丈夫」そう思っていませんか？ですが、貯金とはダムに溜まった水と同じです。現地で収入（雨）がなければ、水は日に日に減っていき、やがて枯渇します。"
    },
    {
      image: "/problem-2.png",
      title: "現地雇用という「低賃金労働の幻想」",
      description: "「現地のレストランで働けばいい」その考えも危険です。僕の知人は、メキシコの日系レストランで夜11時まで働き、チップ込みの月収はわずか14万円でした。貴重な時間を切り売りし、家族との時間も犠牲に。"
    },
    {
      image: "/problem-3.png",
      title: "やみくもなスキル学習という「100万円の挫折」",
      description: "「じゃあ自分で稼ぐスキルを！」と、高額なスクールに申し込む。これが最大の罠です。いくら料理教室に通っても、お客さんの集め方や経営を知らなければ、レストランは一瞬で潰れてしまいます。"
    }
  ];

  const features = [
    {
      number: "01",
      title: "動画編集（高頻度・低単価）",
      description: "YouTuberさんとかから「次、この編集お願いします！」って、継続的に案件が来る感じです。「週に1本」のように、コンスタントに仕事が来やすいスキルです。まずはこれで、安定して仕事が常にある状態を作るのが理想です。",
      items: [
        "継続的な案件獲得",
        "週に1本ペース",
        "安定収入の基盤",
        "AIで作業時間短縮"
      ]
    },
    {
      number: "02",
      title: "ランディングページ作成（中頻度・中単価）",
      description: "動画編集とホームページ制作の、ちょうど「いいとこ取り」みたいなスキルです。「月に1回」くらいの頻度で、安定して高めの単価の仕事が取れます。収入の安定感をグッと高めてくれるスキルです。",
      items: [
        "月に1回の安定収入",
        "中単価案件",
        "収入の安定化",
        "声だけでサイト作成"
      ]
    },
    {
      number: "03",
      title: "ホームページ制作（低頻度・高単価）",
      description: "「2～3ヶ月に1回」ドカンと大きい仕事を取るためのスキルです。プロに頼んだら普通に100万、300万とかする世界なので、あなたが「10万円でやりますよ」って言ったら喜ばれます。AIを使えば声だけでサイトが作れる時代です。",
      items: [
        "2～3ヶ月に1回の高単価",
        "10万円～の案件",
        "AIで声だけで作成",
        "チャンスは今だけ"
      ]
    },
    {
      number: "04",
      title: "オンラインストア構築（低頻度・高単価）",
      description: "こちらも「2～3ヶ月に1回」大きい仕事を取るためのスキルです。ECサイトの需要は常にあり、特に小規模事業者から「手頃な価格で」という依頼が多く来ます。この4つのスキルで、それぞれ月5万円ずつ稼げたら、月20万円の収入の柱ができます。",
      items: [
        "ECサイト需要は常にあり",
        "小規模事業者からの依頼",
        "月5万円×4スキル",
        "月20万円の収入柱"
      ]
    }
  ];

  const results = [
    {
      number: "800+",
      label: "相談実績",
      description: "すでに800人以上が相談済み"
    },
    {
      number: "93%",
      label: "成果達成率",
      description: "6ヶ月以内に具体的な成果を実現"
    },
    {
      number: "3.2倍",
      label: "平均収入向上",
      description: "受講開始から6ヶ月後"
    },
    {
      number: "90%",
      label: "作業時間削減",
      description: "AI活用で効率化"
    }
  ];

  const testimonials = [
    {
      industry: "子育て中の主婦 | 38歳",
      title: "パソコンが苦手な私でも、始めて3ヶ月で月10万円の収入に",
      content: "子育て中の主婦（38歳）が、AIを活用した新しい学習方法で、短時間でも着実に結果を出せました。毎日の家事や育児の合間でも、無理なく続けられています。"
    },
    {
      industry: "海外移住希望者 | 32歳",
      title: "移住前から収入基盤を構築、不安なくカナダへ",
      content: "移住前から準備を始め、移住後すぐにビジネスをスタート。日本の顧客をターゲットにしたオンラインサービスで、安定した収入を得られるようになりました。時差を活かして、効率的に働いています。"
    },
    {
      industry: "メキシコ在住 | 41歳",
      title: "家族との時間を大切にしながら、月20万円の安定収入",
      content: "4つのスキルを習得し、それぞれ月5万円ずつ稼げるようになりました。最初は不安でしたが、サポートのおかげで集客から販売まで順調に進み、子育てしながら自由に働けています。"
    },
    {
      industry: "ジョージア在住 | 29歳",
      title: "AIを活用して作業時間の90%削減、競合に圧倒的な差",
      content: "フランス人のパートナーと共同開発してる最先端のAIノウハウを学び、他の人が10時間かけてやる作業を1時間で終わらせられるようになりました。オンラインで完結するビジネスモデルで、場所に縛られず自由に働けています。"
    }
  ];

  const flow = [
    {
      step: "01",
      title: "無料相談・ヒアリング",
      description: "まずは、あなたの移住計画や現在のスキル、目標とする収入などをお聞きします。海外移住後の収入構築に関する不安や疑問にもお答えします。"
    },
    {
      step: "02",
      title: "スキル棚卸し・サービス設計",
      description: "これまでの経験やスキルを棚卸しし、海外からでも提供できるサービスを設計。あなたの強みを最大限に活かせるビジネスモデルを一緒に考えます。"
    },
    {
      step: "03",
      title: "ビジネスプラン策定",
      description: "ターゲット顧客、価格設定、集客戦略など、具体的なビジネスプランを策定。収入目標を達成するための詳細なロードマップを作成します。"
    },
    {
      step: "04",
      title: "サービス構築・準備",
      description: "Webサイト、SNSアカウント、販売ページなど、ビジネスに必要なツールを準備。サービス提供に必要な環境を整えます。"
    },
    {
      step: "05",
      title: "集客・マーケティング開始",
      description: "SNS、ブログ、広告など、複数のチャネルを活用して集客を開始。コンテンツ作成から広告運用まで、実践的にサポートします。"
    },
    {
      step: "06",
      title: "販売・収入化",
      description: "顧客獲得から販売、サービス提供まで一貫してサポート。収入を得られる状態を作り、安定した収入を実現します。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="海外移住後収入構築サポート - MichiShirube OÜ | リモートワーク・フリーランス支援"
        description="海外移住後の収入不安を解消。リモートワーク、フリーランス、起業支援で海外からでも安定収入を実現。スキル棚卸しからビジネス構築まで伴走サポート。収入化成功率90%。"
        keywords="海外移住収入,移住後収入,リモートワーク,フリーランス,海外起業,オンラインビジネス,海外就職,ノマド,デジタルノマド,副業,個人事業主"
        structuredData={structuredData}
      />
      <Header />
      <RelocationIncomeSupportHeroSection />
      <RelocationProblemsSection />
      <RelocationFeaturesSection />
      <RelocationResultsSection />
      <RelocationTestimonialsSection />
      <RelocationFlowSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
