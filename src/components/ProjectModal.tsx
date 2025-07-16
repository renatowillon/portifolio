"use client";
import { useState } from "react";
import { X, Plus } from "lucide-react";
import { Projeto } from "@/types/projetos";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (project: Omit<Projeto, "id">) => void;
}

const ProjectModal = ({ isOpen, onClose, onSubmit }: ProjectModalProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    imagem: "",
    tecnologias: "",
    githuburl: "",
    liveurl: "",
    destaque: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const project = {
      ...formData,
      tecnologias: formData.tecnologias.split(",").map((tech) => tech.trim()),
    };

    onSubmit(project);
    setFormData({
      nome: "",
      descricao: "",
      imagem: "",
      tecnologias: "",
      githuburl: "",
      liveurl: "",
      destaque: false,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-navy rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Adicionar Novo Projeto</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Nome do Projeto
            </label>
            <input
              type="text"
              required
              value={formData.nome}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full px-3 py-2 bg-dark-blue border border-gray-600 rounded-lg focus:outline-none focus:border-green-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Descrição</label>
            <textarea
              required
              rows={3}
              value={formData.descricao}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="w-full px-3 py-2 bg-dark-blue border border-gray-600 rounded-lg focus:outline-none focus:border-green-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              URL da Imagem
            </label>
            <input
              type="url"
              required
              value={formData.imagem}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, image: e.target.value }))
              }
              className="w-full px-3 py-2 bg-dark-blue border border-gray-600 rounded-lg focus:outline-none focus:border-green-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Tecnologias (separadas por vírgula)
            </label>
            <input
              type="text"
              required
              placeholder="React, TypeScript, TailwindCSS"
              value={formData.tecnologias}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  technologies: e.target.value,
                }))
              }
              className="w-full px-3 py-2 bg-dark-blue border border-gray-600 rounded-lg focus:outline-none focus:border-green-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">GitHub URL</label>
            <input
              type="url"
              required
              value={formData.githuburl}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, githubUrl: e.target.value }))
              }
              className="w-full px-3 py-2 bg-dark-blue border border-gray-600 rounded-lg focus:outline-none focus:border-green-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Live Demo URL
            </label>
            <input
              type="url"
              required
              value={formData.liveurl}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, liveUrl: e.target.value }))
              }
              className="w-full px-3 py-2 bg-dark-blue border border-gray-600 rounded-lg focus:outline-none focus:border-green-accent"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              checked={formData.destaque}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, featured: e.target.checked }))
              }
              className="mr-2"
            />
            <label htmlFor="featured" className="text-sm">
              Projeto em destaque
            </label>
          </div>

          <button type="submit" className="w-full btn-primary justify-center">
            <Plus size={20} />
            Adicionar Projeto
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
