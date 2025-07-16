-- CreateTable
CREATE TABLE "projetos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "tecnologias" TEXT[],
    "githuburl" TEXT NOT NULL,
    "liveurl" TEXT NOT NULL,
    "destaque" BOOLEAN NOT NULL,

    CONSTRAINT "projetos_pkey" PRIMARY KEY ("id")
);
