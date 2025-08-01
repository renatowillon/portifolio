"use client";
import { Download, Code, Palette, Zap } from "lucide-react";

const About = () => {
  const technologies = [
    { name: "React", level: 89 },
    { name: "Next.js", level: 89 },
    { name: "TypeScript", level: 80 },
    { name: "TailwindCSS", level: 89 },
    { name: "JavaScript", level: 86 },
    { name: "HTML/CSS", level: 95 },
  ];

  const traits = [
    {
      icon: Code,
      title: "Código Limpo",
      description:
        "Escrevo código legível e bem documentado seguindo as melhores práticas.",
    },
    {
      icon: Palette,
      title: "Design Orientado",
      description:
        "Transformo designs em interfaces funcionais com atenção aos detalhes.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Desenvolvo aplicações otimizadas focando na experiência do usuário.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-navy/50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Desenvolvedor front-end apaixonado por criar experiências digitais
            que fazem a diferença
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-gray-300 leading-relaxed">
              Sou um desenvolvedor front-end com uma paixão genuína por
              transformar ideias em realidade digital. Minha jornada no
              desenvolvimento começou com curiosidade sobre como os sites
              funcionam, e hoje me especializei em criar interfaces modernas e
              funcionais usando as tecnologias mais atuais do mercado.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Acredito que a melhor tecnologia é aquela que as pessoas nem
              percebem que está lá - ela simplesmente funciona. Por isso, foco
              em criar experiências intuitivas e performáticas que conectam
              marcas aos seus usuários.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {traits.map((trait, index) => {
                const Icon = trait.icon;
                return (
                  <div key={index} className="text-center p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-accent/10 rounded-lg mb-3">
                      <Icon className="text-green-accent" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">{trait.title}</h3>
                    <p className="text-sm text-gray-400">{trait.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-6">
              <a
                href="/downloads/curriculo-renato-willon.pdf"
                download
                className="btn-primary"
              >
                <Download size={20} />
                Baixar Currículo
              </a>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6">Principais Tecnologias</h3>
            {technologies.map((tech, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-green-accent">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-accent to-emerald-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
