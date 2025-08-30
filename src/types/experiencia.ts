export interface Experiencia {
  titulo: string;
  empresa: string;
  periodo: string;
  localizacao: string;
  tipo: string;
  descricao: string[];
  tecnologias: string[];
}

export type ExperienciaInput = Omit<Experiencia, "id">;
