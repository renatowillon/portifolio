import {
  adicionarExperiencia,
  pegarTodasExperiencias,
} from "@/controllers/experienciaController";
import { Experiencias } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

type ExperienciaSemId = Omit<Experiencias, "id">;
//API PEGAR TODOS PROJETOS
export async function GET() {
  const allExperiencias = await pegarTodasExperiencias();
  return NextResponse.json(allExperiencias, { status: 200 });
}

//API CADASTRAR PROJETO NOVO
export async function POST(req: NextRequest) {
  const experiencia: ExperienciaSemId = await req.json();

  try {
    const CriarExperiencia: ExperienciaSemId = await adicionarExperiencia(
      experiencia
    );
    return NextResponse.json(CriarExperiencia, { status: 201 });
  } catch (error) {
    if (!experiencia.titulo) {
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
