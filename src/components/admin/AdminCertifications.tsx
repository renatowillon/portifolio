"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2, Award } from "lucide-react";

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

const AdminCertifications = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [editingCertification, setEditingCertification] =
    useState<Certification | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    issuer: "",
    date: "",
    credentialUrl: "",
  });

  useEffect(() => {
    loadCertifications();
  }, []);

  const loadCertifications = () => {
    const savedCertifications = localStorage.getItem(
      "portfolio_certifications"
    );
    if (savedCertifications) {
      setCertifications(JSON.parse(savedCertifications));
    }
  };

  const saveCertifications = (updatedCertifications: Certification[]) => {
    localStorage.setItem(
      "portfolio_certifications",
      JSON.stringify(updatedCertifications)
    );
    setCertifications(updatedCertifications);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const certificationData: Certification = {
      id: editingCertification?.id || Date.now().toString(),
      name: formData.name,
      issuer: formData.issuer,
      date: formData.date,
      credentialUrl: formData.credentialUrl || undefined,
    };

    if (editingCertification) {
      const updatedCertifications = certifications.map((cert) =>
        cert.id === editingCertification.id ? certificationData : cert
      );
      saveCertifications(updatedCertifications);
    } else {
      saveCertifications([...certifications, certificationData]);
    }

    resetForm();
  };

  const handleEdit = (certification: Certification) => {
    setEditingCertification(certification);
    setFormData({
      name: certification.name,
      issuer: certification.issuer,
      date: certification.date,
      credentialUrl: certification.credentialUrl || "",
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta certificação?")) {
      const updatedCertifications = certifications.filter(
        (cert) => cert.id !== id
      );
      saveCertifications(updatedCertifications);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      issuer: "",
      date: "",
      credentialUrl: "",
    });
    setEditingCertification(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Add New Certification Button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="bg-green-accent hover:bg-green-600 text-white">
            <Plus size={18} className="mr-2" />
            Nova Certificação
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-2xl bg-navy border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-green-accent">
              {editingCertification
                ? "Editar Certificação"
                : "Nova Certificação"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">
                Nome da Certificação
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-dark-blue border-gray-600 text-white"
                placeholder="Certificação React Developer"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="issuer" className="text-gray-300">
                  Instituição
                </Label>
                <Input
                  id="issuer"
                  value={formData.issuer}
                  onChange={(e) =>
                    setFormData({ ...formData, issuer: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  placeholder="Alura, Rocketseat, etc."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-gray-300">
                  Data de Conclusão
                </Label>
                <Input
                  id="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  placeholder="Dezembro 2023"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="credentialUrl" className="text-gray-300">
                URL do Certificado (opcional)
              </Label>
              <Input
                id="credentialUrl"
                value={formData.credentialUrl}
                onChange={(e) =>
                  setFormData({ ...formData, credentialUrl: e.target.value })
                }
                className="bg-dark-blue border-gray-600 text-white"
                placeholder="https://certificado.com/..."
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
                {editingCertification ? "Salvar" : "Criar"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Certifications List */}
      <div className="grid gap-4">
        {certifications.map((certification) => (
          <Card key={certification.id} className="bg-dark-blue border-gray-600">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Award className="text-green-accent" size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">
                      {certification.name}
                    </CardTitle>
                    <p className="text-green-accent font-medium">
                      {certification.issuer}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {certification.date}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(certification)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit size={14} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(certification.id)}
                    className="h-8 w-8 p-0 hover:bg-red-600 hover:border-red-600"
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </CardHeader>
            {certification.credentialUrl && (
              <CardContent className="pt-0">
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-accent hover:text-green-400 text-sm font-medium"
                >
                  Ver Certificado →
                </a>
              </CardContent>
            )}
          </Card>
        ))}

        {certifications.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            Nenhuma certificação cadastrada. Clique em &quot;Nova
            Certificação&quot; para adicionar.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCertifications;
