import { Projeto } from "@/types/projetos";

export const initialProjects: Projeto[] = [
  {
    id: 1,
    nome: "BarberIO",
    descricao:
      "Sistema completo para agendamento em barbearias com painel administrativo e notificações em tempo real.",
    imagem:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&h=300&fit=crop",
    tecnologias: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn",
      "React Hook Form",
      "Zod",
    ],
    liveurl: "https://barberio.vercel.app",
    githuburl: "https://github.com/renatowillon/barberio",
    destaque: true,
  },
  {
    id: 2,
    nome: "wFinance",
    descricao:
      "Sistema de gerenciamento de finanças como receitas e despesas, com Dashboard para melhor controle visual.",
    imagem:
      "https://images.unsplash.com/photo-1734417795018-a16c7f18076d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tecnologias: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn",
      "React Hook Form",
      "Zod",
      "Prisma",
    ],
    githuburl: "https://github.com/renatowillon/finance-ai",
    liveurl: "https://wfinance-ia.vercel.app/login",
    destaque: true,
  },
  {
    id: 3,
    nome: "PedidoZap",
    descricao:
      "Sistema de cardapio eletronico, com pedido sendo enviado via whatsapp para o restaurante.",
    imagem:
      "https://images.unsplash.com/photo-1606306886995-784b5d761d9d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tecnologias: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn",
      "React Hook Form",
      "Zod",
    ],
    githuburl: "https://github.com/renatowillon/pedido-zap",
    liveurl: "https://pedido-zap.vercel.app/pedido",
    destaque: true,
  },
  {
    id: 4,
    nome: "ImagoDei Medical",
    descricao:
      "Landing page profissional voltada para a divulgação de cursos online. Desenvolvida para atrair e converter visitantes, com carregamento rápido, excelente posicionamento no Google e estrutura estratégica para gerar leads qualificados.",
    imagem: "https://www.idmedical.com.br/img/bannerTelemedicina.jpg",
    tecnologias: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn",
      "Motion.Dev",
      "SEO",
    ],
    githuburl: "https://github.com/renatowillon/imagodei",
    liveurl: "https://www.idmedical.com.br/",
    destaque: false,
  },
];
