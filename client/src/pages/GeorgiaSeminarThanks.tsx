import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GeorgiaSeminarThanks() {
  useEffect(() => {
    // Track CompleteRegistration event with Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CompleteRegistration');
    }

    // Redirect to LINE after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = "https://liff.line.me/2003791049-obR8m3Yp/landing?follow=%40970xqigc&lp=nctokP&liff_id=2003791049-obR8m3Yp";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col">
      {/* Header from main site */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 pt-32 pb-12">
        <div className="max-w-2xl w-full text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-12 h-12 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            ありがとうございます！
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            個別相談のお申し込みを承りました
          </p>

          {/* Redirect Message */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
            <p className="text-lg text-slate-700 mb-4">
              3秒後にLINEの友だち追加画面に自動で移動します
            </p>
            <p className="text-sm text-slate-500">
              移動しない場合は、下のボタンをクリックしてください
            </p>
          </div>

          {/* Manual Link */}
          <a 
            href="https://liff.line.me/2003791049-obR8m3Yp/landing?follow=%40970xqigc&lp=nctokP&liff_id=2003791049-obR8m3Yp"
            className="inline-block bg-[#06C755] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#05B04D] transition-colors shadow-lg"
          >
            LINEで個別相談を申し込む
          </a>

          {/* Loading Animation */}
          <div className="mt-12">
            <div className="flex justify-center gap-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer from main site */}
      <Footer />
    </div>
  );
}
