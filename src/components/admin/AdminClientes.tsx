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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Edit, Trash2 } from "lucide-react";

/* =======================
   Types
======================= */

enum StatusPagamento {
  ativo = "ativo",
  inadimplente = "inadimplente",
  cancelado = "cancelado",
}

interface Cliente {
  id: string;
  createdAt: string;
  nome: string;
  responsavel: string;
  telefone: string;
  primeiro_contrato: string;
  validade: string;
  status_pagamento: StatusPagamento;
  ultima_atualizacao: string;
}

/* =======================
   Component
======================= */

const AdminClientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [editingCliente, setEditingCliente] = useState<Cliente | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    responsavel: "",
    telefone: "",
    primeiro_contrato: "",
    validade: "",
    status_pagamento: StatusPagamento.ativo,
  });

  /* =======================
     Storage
  ======================= */

  useEffect(() => {
    const stored = localStorage.getItem("clientes");
    if (stored) setClientes(JSON.parse(stored));
  }, []);

  const saveClientes = (data: Cliente[]) => {
    localStorage.setItem("clientes", JSON.stringify(data));
    setClientes(data);
  };

  /* =======================
     Actions
  ======================= */

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const now = new Date().toISOString();

    const clienteData: Cliente = {
      id: editingCliente?.id || Date.now().toString(),
      createdAt: editingCliente?.createdAt || now,
      ultima_atualizacao: now,
      nome: formData.nome,
      responsavel: formData.responsavel,
      telefone: formData.telefone,
      primeiro_contrato: formData.primeiro_contrato,
      validade: formData.validade,
      status_pagamento: formData.status_pagamento,
    };

    if (editingCliente) {
      saveClientes(
        clientes.map((c) => (c.id === editingCliente.id ? clienteData : c)),
      );
    } else {
      saveClientes([...clientes, clienteData]);
    }

    resetForm();
  };

  const handleEdit = (cliente: Cliente) => {
    setEditingCliente(cliente);
    setFormData({
      nome: cliente.nome,
      responsavel: cliente.responsavel,
      telefone: cliente.telefone,
      primeiro_contrato: cliente.primeiro_contrato,
      validade: cliente.validade,
      status_pagamento: cliente.status_pagamento,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este cliente?")) {
      saveClientes(clientes.filter((c) => c.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      nome: "",
      responsavel: "",
      telefone: "",
      primeiro_contrato: "",
      validade: "",
      status_pagamento: StatusPagamento.ativo,
    });
    setEditingCliente(null);
    setIsDialogOpen(false);
  };

  /* =======================
     Render
  ======================= */

  return (
    <div className="space-y-6">
      {/* New Client Button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="bg-green-accent hover:bg-green-600 text-white">
            <Plus size={18} className="mr-2" />
            Novo Cliente
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-2xl bg-navy border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-green-accent">
              {editingCliente ? "Editar Cliente" : "Novo Cliente"}
            </DialogTitle>
          </DialogHeader>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">Nome</Label>
                <Input
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">Responsável</Label>
                <Input
                  value={formData.responsavel}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      responsavel: e.target.value,
                    })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">Telefone</Label>
                <Input
                  value={formData.telefone}
                  onChange={(e) =>
                    setFormData({ ...formData, telefone: e.target.value })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">Status</Label>
                <select
                  value={formData.status_pagamento}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status_pagamento: e.target.value as StatusPagamento,
                    })
                  }
                  className="w-full h-10 rounded-md bg-dark-blue border border-gray-600 text-white px-3"
                >
                  <option value="ativo">Ativo</option>
                  <option value="inadimplente">Inadimplente</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">Primeiro contrato</Label>
                <Input
                  type="date"
                  value={formData.primeiro_contrato}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      primeiro_contrato: e.target.value,
                    })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">Validade</Label>
                <Input
                  type="date"
                  value={formData.validade}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      validade: e.target.value,
                    })
                  }
                  className="bg-dark-blue border-gray-600 text-white"
                  required
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
                {editingCliente ? "Salvar" : "Criar"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* LISTAGEM */}
      <div className="grid gap-4">
        {clientes.map((cliente) => (
          <Card key={cliente.id} className="bg-dark-blue border-gray-600">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-green-accent text-white">
                      {cliente.nome
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <CardTitle className="text-white text-lg">
                      {cliente.nome}
                    </CardTitle>
                    <p className="text-green-accent font-medium">
                      {cliente.responsavel}
                    </p>
                    <p className="text-gray-400 text-sm">{cliente.telefone}</p>
                    <p className="text-gray-400 text-xs capitalize">
                      Status: {cliente.status_pagamento}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(cliente)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit size={14} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(cliente.id)}
                    className="h-8 w-8 p-0 hover:bg-red-600 hover:border-red-600"
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}

        {clientes.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            Nenhum cliente cadastrado. Clique em &quot;Novo Cliente&quot; para
            adicionar.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminClientes;
