export interface Projeto {
  id?: number;
  nome: string;
  descricao: string;
  imagem: string;
  tecnologias: string[];
  githuburl: string;
  liveurl: string;
  destaque: boolean;
}

export type ProjetoInput = Omit<Projeto, "id">;
