import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Globe } from "lucide-react";

export default function OverseasCommunityHeroSection() {
  const handleCTAClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">800+ Active Members</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              海外移住を目指す
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                仲間とつながる
              </span>
              <br />
              コミュニティ
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed">
              情報交換、相談、現地情報の共有など、移住を成功させるためのネットワークを提供します。
            </p>

            {/* Stats Circles */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">800+</div>
                    <div className="text-xs">メンバー</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-xs">移住先国</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-xs">サポート</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-xl"
                onClick={handleCTAClick}
              >
                無料で参加する
                <span className="ml-2 bg-white/20 px-2 py-1 rounded text-sm">いますぐ！</span>
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Placeholder for illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Globe className="w-32 h-32 mx-auto text-blue-600" />
                  <MessageCircle className="w-24 h-24 mx-auto text-purple-600" />
                  <Users className="w-20 h-20 mx-auto text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 wave-bottom">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
