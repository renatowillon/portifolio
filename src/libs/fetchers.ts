import { Projeto, ProjetoInput } from "@/types/projetos";
import axios from "axios";

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
