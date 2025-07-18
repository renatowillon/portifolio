"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, ExternalLink, Github } from "lucide-react";
import { Projeto, ProjetoInput } from "@/types/projetos";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  atualizarProjeto,
  criarProjeto,
  deletarProjeto,
  fetchProjetos,
} from "@/libs/fetchers";

const AdminProjects = () => {
  const [editingProject, setEditingProject] = useState<Projeto | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    technologies: "",
    githubUrl: "",
    liveUrl: "",
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["projetos"],
    queryFn: fetchProjetos,
    staleTime: 5 * (60 * 1000), //5 minutos
  });

  const queryClient = useQueryClient();

  const criarMutation = useMutation({
    mutationFn: criarProjeto,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projetos"] }),
    onError: (error) => {
      console.error("Erro ao criar projeto:", error);
    },
  });

  const atualizarMutation = useMutation({
    mutationFn: ({ id, projeto }: { id: number; projeto: Projeto }) =>
      atualizarProjeto(id, projeto),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projetos"] }),
    onError: (error) => {
      console.error("Erro ao atualizar projeto:", error);
    },
  });

  const deletarMutation = useMutation({
    mutationFn: deletarProjeto,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projetos"] }),
    onError: (error) => {
      console.error("Erro ao deletar projeto:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const projectData: ProjetoInput = {
      nome: formData.name,
      descricao: formData.description,
      imagem:
        formData.image ||
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      tecnologias: formData.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),
      githuburl: formData.githubUrl,
      liveurl: formData.liveUrl,
      destaque: true,
    };

    if (editingProject) {
      atualizarMutation.mutate({
        id: editingProject.id!,
        projeto: projectData,
      });
    } else {
      criarMutation.mutate(projectData);
    }

    resetForm();
  };

  const handleEdit = (project: Projeto) => {
    setEditingProject(project);
    setFormData({
      name: project.nome,
      description: project.descricao,
      image: project.imagem,
      technologies: project.tecnologias.join(", "),
      githubUrl: project.githuburl,
      liveUrl: project.liveurl,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Tem certeza que deseja excluir este projeto?")) {
      deletarMutation.mutate(id);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      image: "",
      technologies: "",
      githubUrl: "",
      liveUrl: "",
    });
    setEditingProject(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Add New Project Button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="bg-green-accent hover:bg-green-600 text-white">
            <Plus size={18} className="mr-2" />
            Novo Projeto
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-2xl bg-navy border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-green-accent">
              {editingProject ? "Editar Projeto" : "Novo Projeto"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">
                  Nome
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image" className="text-gray-300">
                  URL da Imagem
                </Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-300">
                Descrição
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="bg-dark-blue border-gray-600 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="technologies" className="text-gray-300">
                Tecnologias (separadas por vírgula)
              </Label>
              <Input
                id="technologies"
                value={formData.technologies}
                onChange={(e) =>
                  setFormData({ ...formData, technologies: e.target.value })
                }
                className="bg-dark-blue border-gray-600 text-white"
                placeholder="React, TypeScript, TailwindCSS"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="githubUrl" className="text-gray-300">
                  GitHub URL
                </Label>
                <Input
                  id="githubUrl"
                  value={formData.githubUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, githubUrl: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  placeholder="https://github.com/..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="liveUrl" className="text-gray-300">
                  Demo URL
                </Label>
                <Input
                  id="liveUrl"
                  value={formData.liveUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, liveUrl: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={resetForm}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-green-accent hover:bg-green-600 text-white"
              >
                {editingProject ? "Salvar" : "Criar"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Projects List */}
      <div className="grid gap-4">
        {data?.map((project: Projeto) => (
          <Card key={project.id} className="bg-dark-blue border-gray-600">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-white text-lg">
                    {project.nome}
                  </CardTitle>
                  <p className="text-gray-400 text-sm mt-1">
                    {project.descricao}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(project)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit size={14} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(Number(project.id))}
                    className="h-8 w-8 p-0 hover:bg-red-600 hover:border-red-600"
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tecnologias.map((tech: any, index: any) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-navy text-green-accent"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3 text-sm">
                {project.githuburl && (
                  <a
                    href={project.githuburl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-accent flex items-center gap-1"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
                {project.liveurl && (
                  <a
                    href={project.liveurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-accent flex items-center gap-1"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {data?.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            Nenhum projeto cadastrado. Clique em &quot;Novo Projeto&quot; para
            adicionar.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProjects;
