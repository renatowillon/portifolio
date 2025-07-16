import { pegarProjetos } from "@/controllers/projectController";

export async function GET() {
  const projects = await pegarProjetos();
  return projects;
}
