// FETCHERS DE PROJETOS
import { Projeto } from "@/types/projetos";
import { Experiencias } from "@prisma/client";
import axios from "axios";

type ExperienciaSemId = Omit<Experiencias, "id">;

export const fetchProjetos = async () => {
  const response = await axios.get("/api/projetos");
  return response.data;
};

export const criarProjeto = async (projeto: Projeto) => {
  const res = await axios.post("/api/projetos", projeto);
  return res.data;
};

export const atualizarProjeto = async (id: number, projeto: Projeto) => {
  const res = await axios.put(`/api/projetos/${id}`, projeto);
  return res.data;
};

export const deletarProjeto = async (id: number) => {
  const res = await axios.delete(`/api/projetos/${id}`);
  return res.data;
};

// FETCHERS DE EXPERIENCIAS
export const fetchExperiencias = async () => {
  const response = await axios.get("/api/experiencias");
  return response.data;
};

export const criarExperiencia = async (experiencia: ExperienciaSemId) => {
  const res = await axios.post("/api/experiencias", experiencia);
  return res.data;
};

export const atualizarExperiencia = async (
  id: number,
  experiencia: ExperienciaSemId
) => {
  const res = await axios.put(`/api/experiencias/${id}`, experiencia);
  return res.data;
};
export const deletarExperiencia = async (id: number) => {
  const res = await axios.delete(`/api/experiencias${id}`);
};
