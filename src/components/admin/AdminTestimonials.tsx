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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Edit, Trash2, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
}

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editingTestimonial, setEditingTestimonial] =
    useState<Testimonial | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    content: "",
    avatar: "",
  });

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = () => {
    const savedTestimonials = localStorage.getItem("portfolio_testimonials");
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    }
  };

  const saveTestimonials = (updatedTestimonials: Testimonial[]) => {
    localStorage.setItem(
      "portfolio_testimonials",
      JSON.stringify(updatedTestimonials)
    );
    setTestimonials(updatedTestimonials);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const testimonialData: Testimonial = {
      id: editingTestimonial?.id || Date.now().toString(),
      name: formData.name,
      position: formData.position,
      company: formData.company,
      content: formData.content,
      avatar:
        formData.avatar ||
        `https://images.unsplash.com/photo-${
          Math.floor(Math.random() * 1000) + 1500000000000
        }-${Math.floor(
          Math.random() * 1000000
        )}?w=100&h=100&fit=crop&crop=face`,
    };

    if (editingTestimonial) {
      const updatedTestimonials = testimonials.map((test) =>
        test.id === editingTestimonial.id ? testimonialData : test
      );
      saveTestimonials(updatedTestimonials);
    } else {
      saveTestimonials([...testimonials, testimonialData]);
    }

    resetForm();
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      name: testimonial.name,
      position: testimonial.position,
      company: testimonial.company,
      content: testimonial.content,
      avatar: testimonial.avatar,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este depoimento?")) {
      const updatedTestimonials = testimonials.filter((test) => test.id !== id);
      saveTestimonials(updatedTestimonials);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      position: "",
      company: "",
      content: "",
      avatar: "",
    });
    setEditingTestimonial(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Add New Testimonial Button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="bg-green-accent hover:bg-green-600 text-white">
            <Plus size={18} className="mr-2" />
            Novo Depoimento
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-2xl bg-navy border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-green-accent">
              {editingTestimonial ? "Editar Depoimento" : "Novo Depoimento"}
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
                  placeholder="João Silva"
                  required
                />
              </div>

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
                  placeholder="Desenvolvedor Senior"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
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
                  placeholder="Tech Solutions"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="avatar" className="text-gray-300">
                  URL da Foto (opcional)
                </Label>
                <Input
                  id="avatar"
                  value={formData.avatar}
                  onChange={(e) =>
                    setFormData({ ...formData, avatar: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content" className="text-gray-300">
                Depoimento
              </Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                className="bg-dark-blue border-gray-600 text-white"
                placeholder="Escreva o depoimento aqui..."
                required
                rows={4}
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
                {editingTestimonial ? "Salvar" : "Criar"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Testimonials List */}
      <div className="grid gap-4">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="bg-dark-blue border-gray-600">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-green-accent text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-white text-lg">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-green-accent font-medium">
                      {testimonial.position}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(testimonial)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit size={14} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(testimonial.id)}
                    className="h-8 w-8 p-0 hover:bg-red-600 hover:border-red-600"
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-start gap-2">
                <Quote
                  className="text-green-accent mt-1 flex-shrink-0"
                  size={16}
                />
                <p className="text-gray-300 text-sm italic">
                  {testimonial.content}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}

        {testimonials.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            Nenhum depoimento cadastrado. Clique em &quot;Novo Depoimento&quot;
            para adicionar.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminTestimonials;
