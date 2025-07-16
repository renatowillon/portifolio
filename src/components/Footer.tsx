"use client";
import { Heart, Code, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark-blue border-t border-navy">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-gradient mb-4">
              &lt;RenatoWillon /&gt;
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Desenvolvedor Front-End apaixonado por criar experiências digitais
              excepcionais que conectam pessoas e tecnologia.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/renatowillon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/renatowillon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:renatowillon@gmail.com"
                className="text-gray-400 hover:text-green-accent transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Sobre", href: "#about" },
                { name: "Projetos", href: "#projects" },
                { name: "Habilidades", href: "#skills" },
                { name: "Experiência", href: "#experience" },
                { name: "Contato", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-green-accent transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Tecnologias Favoritas</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "TailwindCSS",
                "Git",
                "Figma",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-green-accent/10 text-green-accent px-2 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-navy mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} Renato Willon. Feito com
              <Heart className="text-red-500 fill-current" size={16} />
              e <Code className="text-green-accent" size={16} />
            </p>
            <p className="text-gray-400 text-sm">
              Desenvolvido com React, TypeScript e TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
