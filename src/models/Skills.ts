import { Code, Database, Globe, Palette, Settings, Zap } from "lucide-react";

export const skillCategories = [
  {
    title: "Linguagens",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Java", "SQL", "HTML5", "CSS3"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Frontend",
    icon: Zap,
    skills: [
      "React",
      "Next.js",
      "React Hook Form",
      "TanStack Query",
      "Zod",
      "React Router",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    title: "Backend",
    icon: Settings,
    skills: [
      "Node.js",
      "Next.js API Routes",
      "Spring Boot",
      "REST APIs",
      "JWT Authentication",
      "Prisma ORM",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    title: "Estilização & UI",
    icon: Palette,
    skills: [
      "TailwindCSS",
      "Styled Components",
      "CSS Modules",
      "Sass / SCSS",
      "Responsive Design",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "Modelagem de Dados",
      "Migrations",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Ferramentas & DevOps",
    icon: Globe,
    skills: ["Git & GitHub", "Docker", "Vercel", "Swagger", "Figma", "VS Code"],
    color: "from-teal-500 to-teal-600",
  },
];
