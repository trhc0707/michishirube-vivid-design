import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function FeaturesSection() {
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

  const features = [
    {
      title: "Innovation",
      subtitle: "イノベーション",
      description:
        "We constantly pursue the latest web technologies and trends. This ensures that customer websites remain cutting-edge and provide better user experiences.",
    },
    {
      title: "Customize",
      subtitle: "Customization and Flexibility",
      description:
        "We provide custom website designs based on each customer's unique needs. This allows customers to have a unique website that fully reflects their brand.",
    },
    {
      title: "Support",
      subtitle: "Continuous Support and Evolution",
      description:
        "We provide ongoing support even after project completion. This includes regular website maintenance, security updates, SEO optimization, and content updates. We also promise to keep your website in top condition by continuously updating it in line with market trends and technological evolution.",
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pattern-text">FEATURES FEATURES FEATURES</div>
      </div>

      <div className="container relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 mb-2">What makes us stand out from the rest?</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-16">
              Through innovative technology solutions and unique approaches, we provide each client with a distinctive web experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div
                className="aspect-[3/4] bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000')",
                }}
              ></div>
            </div>

            {/* Features List */}
            <div className="order-1 lg:order-2 space-y-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold mb-1">{feature.title}</h3>
                  <p className="text-lg font-semibold text-gray-700 mb-3">{feature.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button className="bg-[#333333] hover:bg-[#1a1a1a] text-white py-6 text-lg">
              Company Overview →
            </Button>
            <Button className="bg-[#333333] hover:bg-[#1a1a1a] text-white py-6 text-lg">
              Contact Us →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
