import { db } from "@/lib/prisma";
import { Projeto, ProjetoInput } from "@/types/projetos";

// GET
export const pegarTodosProjetos = async () => {
  return db.projetos.findMany({
    orderBy: [{ destaque: "desc" }, { id: "asc" }],
  });
};

//GET UM Projeto
export const pegarUmProjeto = async (id: number) => {
  return db.projetos.findUnique({ where: { id } });
};

//POST
export const adicionarProjeto = async (data: Projeto) => {
  return db.projetos.create({ data });
};

//PUT
export const atualizarProjeto = async (id: number, data: Projeto) => {
  return db.projetos.update({ where: { id }, data });
};

//DELETE
export const deletarProjeto = async (id: number) => {
  return db.projetos.delete({ where: { id } });
};
