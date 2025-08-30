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
import {
  Plus,
  Edit,
  Trash2,
  Calendar,
  MapPin,
  Briefcase,
  Code,
} from "lucide-react";
import { Experiencias } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  atualizarExperiencia,
  criarExperiencia,
  deletarExperiencia,
  fetchExperiencias,
} from "@/libs/fetchers";

const AdminExperiences = () => {
  type ExperienciaSemId = Omit<Experiencias, "id">;
  const [experiences, setExperiences] = useState<Experiencias[]>([]);
  const [editingExperience, setEditingExperience] =
    useState<Experiencias | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    empresa: "",
    periodo: "",
    localizacao: "",
    tipo: "",
    descricao: "",
    tecnologias: "",
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["experiencias"],
    queryFn: fetchExperiencias,
    staleTime: 5 * (60 * 1000), //5 minutos
  });

  const queryClient = useQueryClient();

  const criarMutation = useMutation({
    mutationFn: criarExperiencia,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["experiencias"] }),
    onError: (error) => {
      console.error("Erro ao criar projeto:", error);
    },
  });

  const atualizarMutation = useMutation({
    mutationFn: ({
      id,
      experiencia,
    }: {
      id: number;
      experiencia: ExperienciaSemId;
    }) => atualizarExperiencia(id, experiencia),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["experiencias"] }),
    onError: (error) => {
      console.error("Erro ao atualizar projeto:", error);
    },
  });

  const deletarMutation = useMutation({
    mutationFn: deletarExperiencia,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["experiencias"] }),
    onError: (error) => {
      console.error("Erro ao deletar projeto:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const experienceData: ExperienciaSemId = {
      titulo: formData.titulo,
      descricao: formData.descricao
        .split(",")
        .map((exp) => exp.trim())
        .filter(Boolean),
      empresa: formData.empresa,
      localizacao: formData.localizacao,
      periodo: formData.periodo,
      tecnologias: formData.tecnologias
        .split(",")
        .map((exp) => exp.trim())
        .filter(Boolean),
      tipo: formData.tipo,
    };

    if (editingExperience) {
      atualizarMutation.mutate({
        id: editingExperience.id!,
        experiencia: experienceData,
      });
    } else {
      criarMutation.mutate(experienceData);
    }

    resetForm();
  };

  const handleEdit = (experience: Experiencias) => {
    setEditingExperience(experience);
    setFormData({
      titulo: experience.titulo,
      descricao: experience.descricao.join(", "),
      empresa: experience.empresa,
      localizacao: experience.localizacao,
      periodo: experience.periodo,
      tecnologias: experience.tecnologias.join(", "),
      tipo: experience.tipo,
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
      titulo: "",
      empresa: "",
      periodo: "",
      localizacao: "",
      tipo: "",
      descricao: "",
      tecnologias: "",
    });
    setEditingExperience(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Add New Experience Button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="bg-green-accent hover:bg-green-600 text-white">
            <Plus size={18} className="mr-2" />
            Nova Experiência
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-2xl bg-navy border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-green-accent">
              {editingExperience ? "Editar Experiência" : "Nova Experiência"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="titulo" className="text-gray-300">
                  Cargo
                </Label>
                <Input
                  id="titulo"
                  value={formData.titulo}
                  onChange={(e) =>
                    setFormData({ ...formData, titulo: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  placeholder="Desenvolvedor Frontend"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="empresa" className="text-gray-300">
                  Empresa
                </Label>
                <Input
                  id="empresa"
                  value={formData.empresa}
                  onChange={(e) =>
                    setFormData({ ...formData, empresa: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  placeholder="Tech Company"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="periodo" className="text-gray-300">
                  Período
                </Label>
                <Input
                  id="periodo"
                  value={formData.periodo}
                  onChange={(e) =>
                    setFormData({ ...formData, periodo: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  placeholder="Jan 2023 - Atual"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="localizacao" className="text-gray-300">
                  Localização
                </Label>
                <Input
                  id="localizacao"
                  value={formData.localizacao}
                  onChange={(e) =>
                    setFormData({ ...formData, localizacao: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  placeholder="João Pessoa - PB"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipo" className="text-gray-300">
                Tipo
              </Label>
              <Input
                id="tipo"
                value={formData.tipo}
                onChange={(e) =>
                  setFormData({ ...formData, tipo: e.target.value })
                }
                className="bg-dark-blue border-gray-600 text-white"
                placeholder="Projeto Pessoal"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="descricao" className="text-gray-300">
                Descrição
              </Label>
              <Textarea
                id="descricao"
                value={formData.descricao}
                onChange={(e) =>
                  setFormData({ ...formData, descricao: e.target.value })
                }
                className="bg-dark-blue border-gray-600 text-white"
                placeholder="Descreva suas responsabilidades e conquistas separado por virgula..."
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tecnologias" className="text-gray-300">
                Descrição
              </Label>
              <Textarea
                id="tecnologias"
                value={formData.tecnologias}
                onChange={(e) =>
                  setFormData({ ...formData, tecnologias: e.target.value })
                }
                className="bg-dark-blue border-gray-600 text-white"
                placeholder="Next.js, React, TailwindCSS, TypeScript, Zod, React Hook Form, Nodemailer,"
                required
              />
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
                {editingExperience ? "Salvar" : "Criar"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Experiences List */}
      <div className="grid gap-4">
        {data?.map((exp: Experiencias, index: any) => (
          <div
            key={index}
            className="bg-dark-blue rounded-xl p-6 md:p-8  animate-fade-in-up"
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

              <div className="md:col-span-2 flex items-center justify-center gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
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
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(exp)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit size={14} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(exp.id)}
                    className="h-8 w-8 p-0 hover:bg-red-600 hover:border-red-600"
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {data?.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            Nenhuma experiência cadastrada. Clique em &quot;Nova
            Experiência&quot; para adicionar.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminExperiences;
