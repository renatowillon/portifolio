import { pegarUmProjeto } from "@/controllers/projetoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const projeto = await pegarUmProjeto(Number(params.id));
  return NextResponse.json(projeto, { status: 200 });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {}
