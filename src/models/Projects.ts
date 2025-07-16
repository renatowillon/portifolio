import { Project } from "@/types/projects";

export const initialProjects: Project[] = [
  {
    id: "1",
    name: "BarberIO",
    description:
      "Sistema completo para agendamento em barbearias com painel administrativo e notificações em tempo real.",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&h=300&fit=crop",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Prisma"],
    githubUrl: "https://github.com/renatowillon/barberio",
    liveUrl: "https://barberio-demo.vercel.app",
    featured: true,
  },
  {
    id: "2",
    name: "TaskFlow",
    description:
      "Aplicativo de gerenciamento de tarefas com drag & drop, colaboração em tempo real e métricas de produtividade.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    technologies: ["React", "TypeScript", "React Query", "Framer Motion"],
    githubUrl: "https://github.com/renatowillon/taskflow",
    liveUrl: "https://taskflow-demo.vercel.app",
    featured: true,
  },
  {
    id: "3",
    name: "EcoCommerce",
    description:
      "E-commerce sustentável com foco em produtos ecológicos, sistema de recompensas e pegada de carbono.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["Next.js", "Stripe", "TailwindCSS", "MongoDB"],
    githubUrl: "https://github.com/renatowillon/ecocommerce",
    liveUrl: "https://ecocommerce-demo.vercel.app",
  },
  {
    id: "4",
    name: "DevBlog",
    description:
      "Blog pessoal para desenvolvedores com sistema de comentários, tags e busca avançada.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop",
    technologies: ["Next.js", "MDX", "TailwindCSS", "Vercel"],
    githubUrl: "https://github.com/renatowillon/devblog",
    liveUrl: "https://devblog-demo.vercel.app",
  },
  {
    id: "5",
    name: "WeatherApp",
    description:
      "Aplicativo de clima com previsões detalhadas, mapas interativos e notificações personalizadas.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    technologies: ["React", "OpenWeather API", "Chart.js", "PWA"],
    githubUrl: "https://github.com/renatowillon/weatherapp",
    liveUrl: "https://weatherapp-demo.vercel.app",
  },
  {
    id: "6",
    name: "FitnessTracker",
    description:
      "Rastreador de exercícios com cronômetro, histórico de treinos e gráficos de progresso.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    technologies: ["React Native", "SQLite", "React Navigation", "Expo"],
    githubUrl: "https://github.com/renatowillon/fitnesstracker",
    liveUrl: "https://fitnesstracker-demo.vercel.app",
  },
];
