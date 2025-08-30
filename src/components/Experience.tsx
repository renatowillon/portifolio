"use client";
import { fetchExperiencias } from "@/libs/fetchers";
import { Experiencia } from "@/types/experiencia";
import { useQuery } from "@tanstack/react-query";
import { Calendar, MapPin, Code, Briefcase } from "lucide-react";

const Experience = () => {
  type ExperienciaSemId = Omit<Experiencia, "id">;

  //PEGAR EXPERIENCIA
  const { data } = useQuery({
    queryKey: ["experiencia"],
    queryFn: fetchExperiencias,
    staleTime: 5 * (60 * 1000),
  });
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minha <span className="text-gradient">Experiência</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Minha jornada profissional no desenvolvimento front-end, desde os
            primeiros passos até os projetos mais recentes
          </p>
        </div>

        <div className="space-y-8">
          {data?.map((exp: Experiencia, index: any) => (
            <div
              key={index}
              className="bg-navy rounded-xl p-6 md:p-8 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.titulo}
                    </h3>
                    <p className="text-green-accent font-medium text-lg">
                      {exp.empresa}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.periodo}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.localizacao}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Briefcase size={16} />
                      <span className="text-sm">{exp.tipo}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tecnologias.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-green-accent/10 text-green-accent px-2 py-1 rounded-lg text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Code size={18} className="text-green-accent" />
                    Principais Atividades
                  </h4>
                  <ul className="space-y-3">
                    {exp.descricao.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-green-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-green-accent/10 to-emerald-400/10 rounded-xl p-8 border border-green-accent/20">
            <h3 className="text-2xl font-bold mb-4">Próximos Passos</h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Busco oportunidades para crescer como desenvolvedor front-end,
              trabalhando em projetos desafiadores que me permitam aplicar meu
              conhecimento atual e continuar aprendendo novas tecnologias e
              metodologias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
