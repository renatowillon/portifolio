import Image from "next/image"

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
        <div className="flex flex-col p-5 gap-3 border border-indigo-800 w-full h-[50vh] rounded-lg overflow-hidden justify-between">
            <strong className="text-2xl text-indigo-200">{titulo}</strong>
            <span className="text-xs text-indigo-300">{descricao}</span>
            <div className="flex gap-3">
                <span className="p-1 bg-indigo-900 text-indigo-500 flex items-center justify-center rounded-lg px-2 font-semibold">{categoria1}</span>
                <span className="p-1 bg-indigo-900 text-indigo-500 flex items-center justify-center rounded-lg px-2 font-semibold">{categoria2}</span>
            </div>
            <div className="flex items-center justify-center">
                <Image src={imagem} alt={titulo} width={500} height={500} />
            </div>        
        </div>

)
}