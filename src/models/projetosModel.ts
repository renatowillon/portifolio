import { db } from "@/lib/prisma";
import { Projeto, ProjetoInput } from "@/types/projetos";

export const getAllProjetos = () => db.projetos.findMany();

export const addProjeto = (data: ProjetoInput) => {
  return db.projetos.create({ data });
};
