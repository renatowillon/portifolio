-- CreateTable
CREATE TABLE "experiencias" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT[],
    "tecnologias" TEXT[],

    CONSTRAINT "experiencias_pkey" PRIMARY KEY ("id")
);
