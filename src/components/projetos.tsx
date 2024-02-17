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
                <Dialog.Close className="absolute right-0 top-0 bg-indigo-950 p-1.5 text-indigo-400 hover:text-indigo-100">
                    <X className="size-7"/>
                </Dialog.Close>

                <div className="w-full h-full grid md:grid-cols-2 p-3">
                    <div className="grid grid-rows-10">
                        <div className="flex flex-col row-span-8 p-5">
                            <strong className="text-4xl text-indigo-200 pb-3">{titulo}</strong>
                            <span className="text-md text-indigo-300 p-3">{descricao}</span>
                        </div>
                        <div className="row-span-1">parte estrelas</div>
                        <div className="row-span-1">linguagem</div>
                    </div>
                    <div className="p-7 grid grid-cols-2 items-center justify-items-center">
                        <div className="w-full h-full border border-indigo-300 flex items-center justify-center text-indigo-300 hover:bg-black/60">FOTO</div>
                        <div className="w-full h-full border border-indigo-300 flex items-center justify-center text-indigo-300 hover:bg-black/60">FOTO</div>
                        <div className="w-full h-full border border-indigo-300 flex items-center justify-center text-indigo-300 hover:bg-black/60">FOTO</div>
                        <div className="w-full h-full border border-indigo-300 flex items-center justify-center text-indigo-300 hover:bg-black/60">FOTO</div>
                    </div>
                </div>

            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
)
}