// import { PrismaClient } from "@prisma/client";

// declare global {
//   var cachedPrisma: PrismaClient;
// }
// let prisma: PrismaClient;
// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.cachedPrisma) {
//     global.cachedPrisma = new PrismaClient();
//   }
//   prisma = global.cachedPrisma;
// }

// export const db = prisma;

import { PrismaClient } from "@prisma/client";

// Evita múltiplas instâncias do Prisma no desenvolvimento
declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient | undefined;
}

export const db =
  global.cachedPrisma ??
  new PrismaClient({
    log: ["query"], // opcional, útil para debug
  });

// Salva a instância no global no desenvolvimento
if (process.env.NODE_ENV !== "production") {
  global.cachedPrisma = db;
}
