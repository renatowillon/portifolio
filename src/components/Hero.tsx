"use client";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-green-accent text-lg font-medium">
                Olá, sou Renato 👋
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Desenvolvedor
                <span className="text-gradient"> Front-End</span>
                <br />
                Júnior
              </h1>
              <p className="text-xl text-gray-400 max-w-lg">
                Criando experiências digitais incríveis com React, Next.js e
                TypeScript. Apaixonado por código limpo e interfaces elegantes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("#projects")}
                className="btn-primary"
              >
                Ver Projetos
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="btn-secondary"
              >
                Entre em Contato
                <Mail size={20} />
              </button>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/renatowillon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-accent transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/renatowillon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:renato.willon@email.com"
                className="text-gray-400 hover:text-green-accent transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-green-accent/20 shadow-2xl">
                <img
                  src="assets/renatoWillon.png"
                  alt="Renato Willon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-accent/10 to-emerald-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
