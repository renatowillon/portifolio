import { Code, Database, Globe, Palette, Settings, Zap } from "lucide-react";

export const skillCategories = [
  {
    title: "Linguagens",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Frameworks & Bibliotecas",
    icon: Zap,
    skills: ["React", "Next.js", "React Router", "React Hook Form"],
    color: "from-green-500 to-green-600",
  },
  {
    title: "Estilização",
    icon: Palette,
    skills: ["TailwindCSS", "Styled Components", "CSS Modules", "Sass/SCSS"],
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Ferramentas",
    icon: Settings,
    skills: ["Git & GitHub", "Vercel", "Figma", "VS Code"],
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Bibliotecas Úteis",
    icon: Database,
    skills: ["TanStack Query", "Zod", "Date-fns", "Lucide React"],
    color: "from-red-500 to-red-600",
  },
  {
    title: "Conceitos",
    icon: Globe,
    skills: ["Responsive Design", "PWA", "SEO", "Acessibilidade"],
    color: "from-teal-500 to-teal-600",
  },
];
