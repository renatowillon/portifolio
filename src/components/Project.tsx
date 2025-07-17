"use client";
import { useState, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { Projeto } from "@/types/projetos";
import { initialProjects } from "@/models/Projects";
import { toast } from "sonner";
import { redirect } from "next/navigation";

const Projects = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [adminInput, setAdminInput] = useState("");

  useEffect(() => {
    const savedProjects = localStorage.getItem("renatoPortfolioProjects");
    if (savedProjects) {
      setProjetos(JSON.parse(savedProjects));
    } else {
      setProjetos(initialProjects);
      localStorage.setItem(
        "renatoPortfolioProjects",
        JSON.stringify(initialProjects)
      );
    }
  }, []);

  const handleAdminAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminInput === "admin123") {
      setShowModal(true);
      setAdminInput("");
    } else {
      toast.info("Senha incorreta!");
      setAdminInput("");
    }
  };

  const handleAddProject = (newProject: Omit<Projeto, "id">) => {
    const projeto: Projeto = {
      ...newProject,
    };

    const updatedProjects = [...projetos, projeto];
    setProjetos(updatedProjects);
    localStorage.setItem(
      "renatoPortfolioProjects",
      JSON.stringify(updatedProjects)
    );
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, desde aplicações web
            complexas até componentes reutilizáveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <div
              key={projeto.id}
              className="bg-navy rounded-xl overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={projeto.imagem}
                  alt={projeto.nome}
                  className="w-full h-48 object-cover"
                />
                {projeto.destaque && (
                  <div className="absolute top-3 right-3 bg-green-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                    Destaque
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{projeto.nome}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {projeto.descricao}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.tecnologias?.map((tech: any, techIndex: any) => (
                    <span
                      key={techIndex}
                      className="bg-green-accent/10 text-green-accent px-2 py-1 rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={projeto.githuburl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-green-accent transition-colors text-sm"
                  >
                    <Github size={16} />
                    Código
                  </a>
                  <a
                    href={projeto.liveurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-green-accent transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Admin Access Form - Hidden */}
        <div className="mt-16 text-center">
          <form onSubmit={handleAdminAccess} className="inline-flex">
            <input
              type="password"
              value={adminInput}
              onChange={(e) => setAdminInput(e.target.value)}
              placeholder="Digite algo..."
              className="px-3 py-1 text-xs bg-transparent border-b border-gray-600 focus:outline-none focus:border-green-accent text-gray-600"
            />
          </form>
        </div>

        <ProjectModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleAddProject}
        />
      </div>
    </section>
  );
};

export default Projects;
