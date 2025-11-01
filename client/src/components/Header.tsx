import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "SERVICES", color: "#4169E1" },
    { name: "HOME B", color: "#FF8C00" },
    { name: "ABOUT", color: "#4169E1" },
    { name: "CONTACT", color: "#FF6347" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="MichiShirube OÜ Logo" 
              className="h-12"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Vertical Navigation on Right Side (Desktop) */}
      <nav className="hidden lg:block absolute right-8 top-8 z-50">
        <div className="flex flex-row gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase().replace(" ", "-")}`}
              className="flex flex-col items-center gap-2 group"
            >
              {/* Colored line above text */}
              <div 
                className="w-0.5 h-12 bg-white transition-all duration-300 group-hover:h-16"
              ></div>
              {/* Vertical text */}
              <div 
                className="text-white text-sm font-semibold tracking-wider"
                style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
              >
                {item.name}
              </div>
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 pt-20">
          <nav className="container py-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                className="block px-4 py-3 text-white hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
