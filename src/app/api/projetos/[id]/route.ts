import {
  atualizarProjeto,
  deletarProjeto,
  pegarUmProjeto,
} from "@/controllers/projetoController";
import { NextRequest, NextResponse } from "next/server";

//API PEGAR 1 PROJETO
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const projeto = await pegarUmProjeto(Number(params.id));
  return NextResponse.json(projeto, { status: 200 });
}

//API ATUALIZAR PROJETO
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }
  try {
    const data = await req.json();
    const projetoExistente = await pegarUmProjeto(id);
    if (!projetoExistente) {
      return NextResponse.json(
        { error: "Projeto não encontrado" },
        { status: 400 }
      );
    }
    const projetoAtualizado = await atualizarProjeto(id, data);
    return NextResponse.json(projetoAtualizado, { status: 200 });
  } catch (error) {
    console.error("erro ao atualizar projeto:", error);
    return NextResponse.json(
      { error: "Erro interno ao atualizar projeto" },
      { status: 500 }
    );
  }
}
//API DELETE PROJETO
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const projeto = await deletarProjeto(Number(params.id));
  return NextResponse.json(projeto, { status: 200 });
}
