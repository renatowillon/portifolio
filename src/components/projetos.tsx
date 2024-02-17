"use client";

import Image from "next/image"
import * as Dialog from '@radix-ui/react-dialog';
import { Wrench, X } from "lucide-react";

interface ProjetosProps{
    titulo: string
    descricao: string
    categoria1: string
    categoria2: string
    imagem: string
    url?: string
}

export function Projetos ({ titulo, descricao, categoria1, categoria2, imagem, url }: ProjetosProps){
    return(
    <Dialog.Root>
        <Dialog.Trigger className="flex flex-col p-5 gap-3 border border-indigo-800 w-full h-[50vh] rounded-lg overflow-hidden justify-between">
            <strong className="text-2xl text-indigo-200">{titulo}</strong>
            <span className="text-xs text-indigo-300">{descricao}</span>
            <div className="flex gap-3">
                <span className="p-1 bg-indigo-900 text-indigo-500 flex items-center justify-center rounded-lg px-2 font-semibold">{categoria1}</span>
                <span className="p-1 bg-indigo-900 text-indigo-500 flex items-center justify-center rounded-lg px-2 font-semibold">{categoria2}</span>
            </div>
            <div className="flex items-center justify-center">
                <Image src={imagem} alt={titulo} width={500} height={500} />
            </div>        
        </Dialog.Trigger>

        <Dialog.Portal>
            <Dialog.Overlay className="inset-0 fixed bg-black/50" />
            <Dialog.Content className="fixed inset-0 md:inset-auto md:left-1/2 overflow-hidden md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 max-w-[880px] w-full md:h-[80vh] bg-indigo-950 md:rounded-md flex flex-col outline-none">
                <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
                    <X className="size-5"/>
                </Dialog.Close>

                <div className="w-full h-full flex items-center justify-center">
                    <div className="flex  gap-3"><Wrench /> em produção</div>
                </div>

            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
)
}