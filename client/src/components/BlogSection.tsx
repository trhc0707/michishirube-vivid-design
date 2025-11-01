import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function BlogSection() {
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

  const blogPosts = [
    {
      title: "New Paradigms in Design Research",
      date: "2023/11/26",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000",
      color: "border-[#32CD32]",
    },
    {
      title: "Modern Website Trends: Critical Insights",
      date: "2023/11/26",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1000",
      color: "border-[#9370DB]",
    },
    {
      title: "Contemporary Interior Design: Critical Perspectives",
      date: "2023/11/26",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000",
      color: "border-[#FF8C00]",
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pattern-text">BLOG BLOG BLOG</div>
      </div>

      <div className="container relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 mb-2">Blog</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">ブログ</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-16">
              Through innovative technology solutions and unique approaches, we provide each client with a distinctive web experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="absolute top-4 right-4 z-10">
                  <ArrowUpRight className="text-white group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url('${post.image}')` }}
                ></div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-lg font-bold">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
