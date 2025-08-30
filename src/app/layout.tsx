import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Providers } from "@/libs/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "<RenatoWillon />",
  description: "Desenvolvedor FrontEnd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-slate-950 text-zinc-100">
        <Providers>
          <Toaster position="bottom-right" expand={false} richColors />
          {children}
        </Providers>
      </body>
    </html>
  );
}
