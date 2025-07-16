"use client";
import { certifications } from "@/models/Certifications";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-navy/50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="text-gradient">Certificações</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cursos e certificações que complementam minha formação em
            desenvolvimento front-end
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-dark-blue rounded-xl p-6 card-hover animate-fade-in-up border border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={cert.logo}
                    alt={cert.provider}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-white mb-1">{cert.name}</h3>
                  <p className="text-green-accent text-sm font-medium">
                    {cert.provider}
                  </p>
                  <p className="text-gray-400 text-xs">{cert.year}</p>
                </div>
                <Award className="text-green-accent" size={20} />
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-accent hover:text-emerald-400 transition-colors text-sm font-medium"
              >
                Ver Certificação
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-green-accent/10 to-emerald-400/10 rounded-xl p-8 border border-green-accent/20">
            <h3 className="text-2xl font-bold mb-4">Aprendizado Contínuo</h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Acredito que a educação é um processo contínuo. Estou sempre
              investindo em novos cursos e certificações para me manter
              atualizado com as últimas tendências e tecnologias do
              desenvolvimento front-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
