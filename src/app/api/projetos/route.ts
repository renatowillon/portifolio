import {
  adicionarProjeto,
  pegarTodosProjetos,
} from "@/controllers/projetoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const allProjetos = await pegarTodosProjetos();
  return NextResponse.json(allProjetos, { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    const ProjetoParaCriar = await req.json();
    const CriarProjeto = await adicionarProjeto(ProjetoParaCriar);
    return NextResponse.json(CriarProjeto, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "preencha todos os dados" },
      { status: 400 }
    );
  }
}
