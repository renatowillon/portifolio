import { Play } from "lucide-react"
import Image from "next/image"

interface ListaSecundariaProps{
    titulo: string
    src: string
    cantor: string
    

}

export function ListaSecundaria ({ titulo, src, cantor }:ListaSecundariaProps) {
    return(
        <div className="bg-white/5 p-4 rounded flex flex-col gap-1 relative group hover:bg-white/20">
        <div className="relative group">
          <Image src={src} className="w-full rounded" alt={titulo} width={120} height={120} />
          <button className='w-10 h-10 flex items-center absolute bottom-1 right-1 justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible hover:scale-105'>
            <Play size={20} fill="bg-black"/>
          </button>
        </div>
        <strong className="font-semibold">{titulo}</strong>
        <span className="text-sm text-zinc-400">{cantor}</span>
      </div>
    )
}