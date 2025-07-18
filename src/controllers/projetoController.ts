import { db } from "@/lib/prisma";

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
export const adicionarProjeto = async (data: {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  tecnologias: string[];
  githuburl: string;
  liveurl: string;
  destaque: boolean;
}) => {
  return db.projetos.create({ data });
};

//PUT
export const atualizarProjeto = async (id: number, data: any) => {
  return db.projetos.update({ where: { id }, data });
};

//DELETE
export const deletarProjeto = async (id: number) => {
  return db.projetos.delete({ where: { id } });
};
