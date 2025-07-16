"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Code,
  User,
  Briefcase,
  Mail,
  FileText,
  Award,
  MessageSquare,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home", icon: Code },
    { name: "Sobre", href: "#about", icon: User },
    { name: "Projetos", href: "#projects", icon: Briefcase },
    { name: "Habilidades", href: "#skills", icon: FileText },
    { name: "Experiência", href: "#experience", icon: Award },
    { name: "Depoimentos", href: "#testimonials", icon: MessageSquare },
    { name: "Contato", href: "#contact", icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-blue/95 backdrop-blur-sm border-b border-navy"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between py-4">
        <div className="text-2xl font-bold text-gradient">
          &lt;RenatoWillon /&gt;
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-green-accent transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-dark-blue border-b border-navy md:hidden">
            <ul className="py-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left px-6 py-3 text-gray-300 hover:text-green-accent hover:bg-navy transition-all duration-300 flex items-center gap-3"
                    >
                      <Icon size={18} />
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
