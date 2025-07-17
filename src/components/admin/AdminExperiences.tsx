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
import { Plus, Edit, Trash2, Calendar } from "lucide-react";

interface Experience {
  id: string;
  position: string;
  company: string;
  period: string;
  description: string;
}

const AdminExperiences = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    period: "",
    description: "",
  });

  useEffect(() => {
    loadExperiences();
  }, []);

  const loadExperiences = () => {
    const savedExperiences = localStorage.getItem("portfolio_experiences");
    if (savedExperiences) {
      setExperiences(JSON.parse(savedExperiences));
    }
  };

  const saveExperiences = (updatedExperiences: Experience[]) => {
    localStorage.setItem(
      "portfolio_experiences",
      JSON.stringify(updatedExperiences)
    );
    setExperiences(updatedExperiences);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const experienceData: Experience = {
      id: editingExperience?.id || Date.now().toString(),
      position: formData.position,
      company: formData.company,
      period: formData.period,
      description: formData.description,
    };

    if (editingExperience) {
      const updatedExperiences = experiences.map((exp) =>
        exp.id === editingExperience.id ? experienceData : exp
      );
      saveExperiences(updatedExperiences);
    } else {
      saveExperiences([...experiences, experienceData]);
    }

    resetForm();
  };

  const handleEdit = (experience: Experience) => {
    setEditingExperience(experience);
    setFormData({
      position: experience.position,
      company: experience.company,
      period: experience.period,
      description: experience.description,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta experiência?")) {
      const updatedExperiences = experiences.filter((exp) => exp.id !== id);
      saveExperiences(updatedExperiences);
    }
  };

  const resetForm = () => {
    setFormData({
      position: "",
      company: "",
      period: "",
      description: "",
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
                <Label htmlFor="position" className="text-gray-300">
                  Cargo
                </Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  placeholder="Desenvolvedor Frontend Júnior"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-300">
                  Empresa
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  placeholder="Tech Company"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="period" className="text-gray-300">
                Período
              </Label>
              <Input
                id="period"
                value={formData.period}
                onChange={(e) =>
                  setFormData({ ...formData, period: e.target.value })
                }
                className="bg-dark-blue border-gray-600 text-white"
                placeholder="Jan 2023 - Atual"
                required
              />
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
                placeholder="Descreva suas responsabilidades e conquistas..."
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
        {experiences.map((experience) => (
          <Card key={experience.id} className="bg-dark-blue border-gray-600">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-white text-lg">
                    {experience.position}
                  </CardTitle>
                  <p className="text-green-accent font-medium">
                    {experience.company}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                    <Calendar size={14} />
                    {experience.period}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(experience)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit size={14} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(experience.id)}
                    className="h-8 w-8 p-0 hover:bg-red-600 hover:border-red-600"
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-300 text-sm">{experience.description}</p>
            </CardContent>
          </Card>
        ))}

        {experiences.length === 0 && (
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
