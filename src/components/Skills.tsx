import { Code, Palette, Zap, Settings, Database, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens",
      icon: Code,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Frameworks & Bibliotecas",
      icon: Zap,
      skills: ["React", "Next.js", "React Router", "React Hook Form"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Estilização",
      icon: Palette,
      skills: ["TailwindCSS", "Styled Components", "CSS Modules", "Sass/SCSS"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Ferramentas",
      icon: Settings,
      skills: ["Git & GitHub", "Vercel", "Figma", "VS Code"],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Bibliotecas Úteis",
      icon: Database,
      skills: ["TanStack Query", "Zod", "Date-fns", "Lucide React"],
      color: "from-red-500 to-red-600",
    },
    {
      title: "Conceitos",
      icon: Globe,
      skills: ["Responsive Design", "PWA", "SEO", "Acessibilidade"],
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-navy/50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar experiências
            digitais excepcionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-dark-blue rounded-xl p-6 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 bg-navy/50 rounded-lg hover:bg-navy transition-colors"
                    >
                      <div className="w-2 h-2 bg-green-accent rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-green-accent/10 to-emerald-400/10 rounded-xl p-8 border border-green-accent/20">
            <h3 className="text-2xl font-bold mb-4">Sempre Aprendendo</h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              A tecnologia evolui rapidamente, e eu também. Estou sempre
              estudando novas ferramentas e técnicas para me manter atualizado
              com as melhores práticas do desenvolvimento front-end moderno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
