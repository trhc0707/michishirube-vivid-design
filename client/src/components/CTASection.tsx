import { useEffect, useRef, useState } from "react";

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className={`grid grid-cols-1 md:grid-cols-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Download CTA */}
        <div className="relative h-96 md:h-[500px] overflow-hidden group cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')",
            }}
          ></div>
          <div className="absolute inset-0 bg-[#4a5568]/70 group-hover:bg-[#4a5568]/60 transition-colors"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">資料請求</h3>
            <p className="text-xl mb-6">サービス資料をダウンロード</p>
            <div className="text-6xl">→→→</div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="relative h-96 md:h-[500px] overflow-hidden group cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070')",
            }}
          ></div>
          <div className="absolute inset-0 bg-[#2d3748]/70 group-hover:bg-[#2d3748]/60 transition-colors"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">お問い合わせ</h3>
            <p className="text-xl mb-6">お気軽にご連絡ください</p>
            <div className="text-6xl">→→→</div>
          </div>
        </div>
      </div>
    </section>
  );
}
