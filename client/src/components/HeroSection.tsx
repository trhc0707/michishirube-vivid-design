import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const newsItems = [
    "2023/11/26 Revolutionary new service announcement! Digital marketing future changes",
    "2023/11/26 Partnership with industry leader! Expanding into new markets",
    "2023/11/26 Latest AI technology introduced, web design services evolve",
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center text-white transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-6xl md:text-8xl font-black mb-4">
          VIVID
          <br />
          DESIGN
        </h1>
        <p className="text-2xl md:text-3xl font-light italic mb-2">for</p>
        <p className="text-3xl md:text-4xl font-bold">SOCIETY</p>
        <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto px-4">
          Combining digital innovation and creativity
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce-slow">
          <ChevronDown className="text-white" size={32} />
        </div>
      </div>

      {/* News Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-4 overflow-hidden z-10">
        <div className="flex animate-marquee">
          {[...newsItems, ...newsItems].map((news, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 text-sm font-medium text-gray-800"
            >
              {news}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
