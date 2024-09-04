import { Play } from "lucide-react"
import Image  from "next/image"

interface ListaPrimariaProps{
    cantor: string
    src: string
   
}


export function ListaPrimaria ({ cantor, src}:ListaPrimariaProps){
    return(
        
            <div className='bg-white/10 rounded group overflow-hidden flex items-center gap-3 text-sm font-semibold hover:bg-white/20 transition-colors'>
                <Image src={src} alt={cantor} width={50} height={50} />
                {cantor}
                <button className='size-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible hover:scale-105'>
                  <Play size={20} fill="bg-black"/>
                </button>
            </div>
        
    )
}