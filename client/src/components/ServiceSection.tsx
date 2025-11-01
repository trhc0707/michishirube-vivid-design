import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

export default function ServiceSection() {
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

  const services = [
    {
      title: "海外移住サポート",
      description: "カナダ、メキシコ、ジョージアなどへの移住をトータルサポート。ビザ取得から現地生活の立ち上げ、移住後の収入構築まで、経験豊富なスタッフが全面的にサポートします。",
      color: "border-[#00CED1]",
      items: ["カナダ移住", "メキシコ移住", "ジョージア移住", "海外移住個別相談", "ノマドビザ取得サポート", "海外移住コミュニティ", "海外移住後収入構築サポート"],
      link: "/overseas-relocation"
    },
    {
      title: "ビジネス/マーケティングコンサルティング",
      description: "LINE構築、SNS運用、ホームページ制作、広告運用などのデジタルマーケティングから、AI導入・活用まで、ビジネスの成長を加速させる包括的なコンサルティングサービスを提供します。",
      color: "border-[#9370DB]",
      items: ["LINE構築・運用代行", "動画編集", "SNS運用代行", "ホームページ制作", "LP制作", "MEO対策", "Google/Meta広告運用", "AIコミュニティ", "AIコンサルティング", "AI導入", "AI研修"],
      link: "/business-consulting"
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pattern-text">SERVICE SERVICE SERVICE</div>
      </div>

      <div className="container relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 mb-2">私たちのサービス</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              サービス一覧
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-16">
              革新的な技術ソリューションと独自のアプローチで、お客様一人ひとりに特別な体験を提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} href={service.link}>
                <div
                  className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative cursor-pointer"
                >
                  <div className="absolute top-4 right-4">
                    <ArrowUpRight className="text-gray-400 group-hover:text-gray-700 transition-colors" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="inline-block bg-black text-white px-3 py-1 text-sm mr-2 mb-2">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
