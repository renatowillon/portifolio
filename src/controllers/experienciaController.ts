import { db } from "@/lib/prisma";
import { Experiencias } from "@prisma/client";

type ExperienciaSemId = Omit<Experiencias, "id">;

// GET
export const pegarTodasExperiencias = async () => {
  return db.experiencias.findMany({
    orderBy: [{ id: "desc" }],
  });
};

//GET UMA EXPERIENCIA
export const pegarUmExperiencia = async (id: number) => {
  return db.experiencias.findUnique({ where: { id } });
};

//POST
export const adicionarExperiencia = async (data: ExperienciaSemId) => {
  return db.experiencias.create({ data });
};

//PUT
export const atualizarExperiencia = async (id: number, data: Experiencias) => {
  return db.experiencias.update({ where: { id }, data });
};

//DELETE
export const deletarExperiencia = async (id: number) => {
  return db.experiencias.delete({ where: { id } });
};
