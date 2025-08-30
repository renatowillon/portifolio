import {
  adicionarProjeto,
  pegarTodosProjetos,
} from "@/controllers/projetoController";
import { Projeto } from "@/types/projetos";
import { NextRequest, NextResponse } from "next/server";

//API PEGAR TODOS PROJETOS
export async function GET() {
  const allProjetos = await pegarTodosProjetos();
  return NextResponse.json(allProjetos, { status: 200 });
}

//API CADASTRAR PROJETO NOVO
export async function POST(req: NextRequest) {
  const projeto: Projeto = await req.json();

  try {
    const CriarProjeto: Projeto = await adicionarProjeto(projeto);
    return NextResponse.json(CriarProjeto, { status: 201 });
  } catch (error) {
    if (!projeto.nome) {
      return NextResponse.json(
        { error: " o nome não pode ser vazio" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: `preencha todos os dados` },

      { status: 400 }
    );
  }
}
