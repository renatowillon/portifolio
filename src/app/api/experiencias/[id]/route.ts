import {
  atualizarExperiencia,
  deletarExperiencia,
  pegarUmExperiencia,
} from "@/controllers/experienciaController";
import { NextRequest, NextResponse } from "next/server";

//API PEGAR 1 PROJETO
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const experiencia = await pegarUmExperiencia(Number(params.id));
  return NextResponse.json(experiencia, { status: 200 });
}

//API ATUALIZAR PROJETO
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }
  try {
    const data = await req.json();
    const experienciaExistente = await pegarUmExperiencia(id);
    if (!experienciaExistente) {
      return NextResponse.json(
        { error: "Experiencia não encontrado" },
        { status: 400 }
      );
    }
    const experienciaAtualizado = await atualizarExperiencia(id, data);
    return NextResponse.json(experienciaAtualizado, { status: 200 });
  } catch (error) {
    console.error("erro ao atualizar experiencia:", error);
    return NextResponse.json(
      { error: "Erro interno ao atualizar experiencia" },
      { status: 500 }
    );
  }
}
//API DELETE PROJETO
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const experiencia = await deletarExperiencia(Number(params.id));
  return NextResponse.json(experiencia, { status: 200 });
}
