import { pegarProjetos } from "@/controllers/projectController";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = await pegarProjetos();
  return NextResponse.json(projects);
}
