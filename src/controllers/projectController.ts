import { addProjeto, getAllProjetos } from "@/models/projetosModel";
import { ProjetoInput } from "@/types/projetos";
import { NextRequest, NextResponse } from "next/server";

export async function pegarProjetos() {
  const projects = await getAllProjetos();
  return NextResponse.json(projects, { status: 200 });
}

export async function adicionarProjeto(req: NextRequest) {
  try {
    const body = (await req.json()) as ProjetoInput;
    const projeto = await addProjeto(body);
    return NextResponse.json(projeto, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar projeto:", error);
    return NextResponse.json(
      { erro: "Erro ao criar projeto" },
      { status: 500 }
    );
  }
}
