"use client";
import { useState, useEffect, ReactNode } from "react";
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
  LogIn,
  LucideIcon,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import LoginModal from "./LoginModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  interface menuItensProps {
    name: string | ReactNode;
    href: string;
    icon: LucideIcon;
  }

  const menuItems: menuItensProps[] = [
    { name: "Home", href: "#home", icon: Code },
    { name: "Sobre", href: "#about", icon: User },
    { name: "Projetos", href: "#projects", icon: Briefcase },
    { name: "Habilidades", href: "#skills", icon: FileText },
    { name: "Experiência", href: "#experience", icon: Award },
    { name: "Depoimentos", href: "#testimonials", icon: MessageSquare },
    { name: "Contato", href: "#contact", icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    // Verifica se é um link de seção (começa com #)
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    } else {
      // É um link normal, navega para a página
      router.push(href);
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
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-green-accent transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Admin Login/Logout */}
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => router.push("/admin")}
                  className="text-green-accent hover:text-green-400 transition-colors duration-300 font-medium"
                >
                  Admin
                </button>
                <button
                  onClick={logout}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                  title="Sair"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="text-gray-300 hover:text-green-accent transition-colors duration-300"
                title="Login Administrativo"
              >
                <LogIn size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* Admin Login/Logout Mobile */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => router.push("/admin")}
                className="text-green-accent hover:text-green-400 transition-colors duration-300 text-sm"
              >
                Admin
              </button>
              <button
                onClick={logout}
                className="text-gray-300 hover:text-red-400 transition-colors duration-300"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowLoginModal(true)}
              className="text-gray-300 hover:text-green-accent transition-colors duration-300"
            >
              <LogIn size={18} />
            </button>
          )}

          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-dark-blue border-b border-navy md:hidden">
            <ul className="py-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
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

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </header>
  );
};

export default Header;
