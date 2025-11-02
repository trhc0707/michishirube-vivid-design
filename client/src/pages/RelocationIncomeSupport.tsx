import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelocationIncomeSupportHeroSection from "@/components/lp/RelocationIncomeSupportHeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FlowSection from "@/components/FlowSection";
import ContactSection from "@/components/ContactSection";

export default function RelocationIncomeSupport() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const problems = [
    {
      image: "/problem-1.png",
      title: "移住後の収入が不安",
      description: "海外移住を考えているけど、現地での仕事が見つかるか心配。言語の壁や文化の違いで、安定した収入を得られるか不安..."
    },
    {
      image: "/problem-2.png",
      title: "現地の就職が難しい",
      description: "ビザの制約や言語の問題で、現地での就職が困難。日本での経験やスキルが活かせる仕事が見つからない..."
    },
    {
      image: "/problem-3.png",
      title: "場所に縛られたくない",
      description: "せっかく海外移住するなら、場所に縛られず自由に働きたい。でも、どうやってオンラインで収入を得るのかわからない..."
    }
  ];

  const features = [
    {
      number: "01",
      title: "完全オンライン型ビジネス構築",
      description: "場所を選ばず、世界中どこからでも収入を得られるビジネスモデルを構築。日本の顧客をターゲットにしたオンラインサービスで、安定した収入を実現します。",
      items: [
        "オンラインコンサルティング",
        "デジタルコンテンツ販売",
        "オンライン講座・研修",
        "リモートサービス提供"
      ]
    },
    {
      number: "02",
      title: "あなたのスキルを最大化",
      description: "これまでの経験やスキルを棚卸しし、海外からでも提供できるサービスに変換。日本での実績を活かして、高単価なサービスを提供できるようサポートします。",
      items: [
        "スキル棚卸しワークショップ",
        "サービス設計サポート",
        "価格設定コンサルティング",
        "ポジショニング戦略"
      ]
    },
    {
      number: "03",
      title: "集客から販売まで完全サポート",
      description: "ビジネスを立ち上げても、顧客がいなければ収入は得られません。SNS、ブログ、広告など、複数のチャネルを活用した集客戦略を構築し、販売まで一貫してサポートします。",
      items: [
        "SNSマーケティング戦略",
        "コンテンツマーケティング",
        "広告運用サポート",
        "セールスファネル構築"
      ]
    },
    {
      number: "04",
      title: "6ヶ月間の伴走サポート",
      description: "ビジネス構築から収入化まで、6ヶ月間しっかりと伴走。週次のミーティングで進捗を確認し、課題を解決しながら、確実に収入を得られる状態を作ります。",
      items: [
        "週次オンラインミーティング",
        "24時間チャットサポート",
        "個別コンサルティング",
        "進捗管理・フィードバック"
      ]
    }
  ];

  const results = [
    {
      number: "100%",
      label: "オンライン完結",
      description: "場所を選ばず収入を得る"
    },
    {
      number: "6ヶ月",
      label: "サポート期間",
      description: "収入構築まで伴走"
    },
    {
      number: "90%",
      label: "収入化成功率",
      description: "2024年度実績"
    },
    {
      number: "30万円〜",
      label: "平均月収",
      description: "サポート終了後6ヶ月時点"
    }
  ];

  const testimonials = [
    {
      industry: "IT系 | エンジニア",
      title: "カナダ移住後、月収50万円を達成",
      content: "日本でのエンジニア経験を活かして、オンラインでのコンサルティングサービスを開始。サポート開始3ヶ月で初受注、6ヶ月後には月収50万円を達成しました。場所に縛られず、自由に働けるようになりました。"
    },
    {
      industry: "マーケティング | コンサルタント",
      title: "ジョージア移住後、安定した収入を実現",
      content: "移住前から準備を始め、移住後すぐにビジネスをスタート。日本の企業向けにマーケティングコンサルティングを提供し、安定した収入を得られるようになりました。時差を活かして、効率的に働いています。"
    },
    {
      industry: "教育系 | 講師",
      title: "メキシコ移住後、オンライン講座で月収40万円",
      content: "日本での教育経験を活かして、オンライン講座を開設。最初は不安でしたが、サポートのおかげで集客から販売まで順調に進み、移住後6ヶ月で月収40万円を達成。子育てしながら自由に働けています。"
    },
    {
      industry: "デザイン系 | デザイナー",
      title: "タイ移住後、リモートワークで月収35万円",
      content: "日本の企業向けにデザインサービスを提供。オンラインで完結するビジネスモデルを構築し、安定した収入を得られるようになりました。移住先でも日本と変わらない収入を実現できて満足しています。"
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
      <Header />
      <RelocationIncomeSupportHeroSection />
      <ProblemsSection />
      <FeaturesSection />
      <ResultsSection />
      <TestimonialsSection />
      <FlowSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
