import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function GeorgiaSeminar() {
  const [, setLocation] = useLocation();

  const handleCTAClick = () => {
    setLocation("/thanks");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 pt-12 pb-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            ジョージア移住セミナー【完全版】
          </h1>
          <p className="text-xl text-slate-600 mb-2">
            海外移住×AIで未来を創る
          </p>
          <p className="text-lg text-slate-500">
            このセミナーアーカイブ動画では、ジョージア移住の全てをお伝えします
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe 
                src="https://www.loom.com/embed/0d240f01e51a4ad496e87c95d5dd813a" 
                frameBorder="0" 
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="ジョージア移住セミナー完全版"
              />
            </div>
          </div>
        </div>

        {/* CTA Button - Above Benefits */}
        <div className="text-center mb-12">
          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:from-orange-600 hover:to-orange-500 text-base md:text-xl px-6 md:px-12 py-4 md:py-6 h-auto font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse hover:animate-none w-full md:w-auto max-w-full"
          >
            今すぐプレゼントを受け取る
          </Button>
          <p className="text-sm mt-3 text-slate-500">
            ※ LINEで簡単に受け取れます（所要時間30秒）
          </p>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">このセミナーで学べること</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">ジョージアの基本情報</h3>
                <p className="text-slate-600 text-sm">ビザ、税制、生活費など移住に必要な情報</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">移住後の収入構築</h3>
                <p className="text-slate-600 text-sm">AIを活用した在宅ワークで安定収入を実現</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">実際の移住体験談</h3>
                <p className="text-slate-600 text-sm">リアルな生活、メリット・デメリット</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">移住準備のステップ</h3>
                <p className="text-slate-600 text-sm">具体的な準備手順と注意点</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Exclusive Viewer Gift */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
            🎁 視聴者限定プレゼント
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今すぐ受け取る<br />2つの特別プレゼント
          </h2>
          <p className="text-lg mb-8 opacity-90">
            このセミナーをご覧いただいた方だけに<br className="hidden md:block" />
            ジョージア移住を成功させるための特別資料を無料でプレゼント
          </p>
          
          {/* Gift Items */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-bold text-xl">プレゼント①</h3>
              </div>
              <p className="font-semibold text-lg mb-2">ジョージア移住完全ロードマップ</p>
              <p className="text-sm opacity-90">準備から現地生活まで、全ステップを網羅した実践的ガイド</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-bold text-xl">プレゼント②</h3>
              </div>
              <p className="font-semibold text-lg mb-2">移住後の収入構築 個別相談</p>
              <p className="text-sm opacity-90">あなたに最適な収入源を一緒に見つける30分の無料相談</p>
            </div>
          </div>

          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-white text-orange-600 hover:bg-slate-50 text-base md:text-xl px-6 md:px-12 py-4 md:py-6 h-auto font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse hover:animate-none w-full md:w-auto max-w-full"
          >
            今すぐプレゼントを受け取る
          </Button>
          <p className="text-sm mt-4 opacity-75">
            ※ LINEで簡単に受け取れます（所要時間30秒）
          </p>
        </div>
      </main>
    </div>
  );
}
