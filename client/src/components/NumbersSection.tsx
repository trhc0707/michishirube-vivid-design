import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function NumbersSection() {
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

  const stats = [
    { label: "Customers", value: "+100,000" },
    { label: "Customer Satisfaction", value: "99%" },
    { label: "Average Annual Revenue", value: "+¥100,000,000" },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-gray-50 text-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pattern-text text-gray-900/5">NUMBER NUMBER NUMBER</div>
      </div>

      <div className="container relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 mb-2">Our impact in numbers</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Our Numbers</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-16">
              Through innovative technology solutions and unique approaches, we provide each client with a distinctive web experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="border-2 border-gray-200 p-8 text-center bg-white">
                <p className="text-sm text-gray-600 mb-4">{stat.label}</p>
                <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
              </div>
            ))}
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
