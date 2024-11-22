"use client";

import { FaWhatsapp, FaRegPaperPlane, FaRegCopy, FaAnglesUp } from "react-icons/fa6"
import { Toaster, toast } from 'sonner'
import { TypeAnimation } from "react-type-animation";
import Mail from "./Mail";

let email = "renatowillon@hotmail.com"
function copyTexto(){
    navigator.clipboard.writeText(email).then(() => {
        toast.info('👋Oii, ao clicar no email uma mágica acontece')
        toast.success('Email copiado! 😁')
    
})
}

export function Contato() {
    return(
    <div className="flex flex-col items-center justify-center py-5">
        <span className="py-1 px-3 mb-7 bg-indigo-950 rounded-lg text-indigo-500 font-bold">
            <TypeAnimation
                sequence={[
                    "📬 Contatos_", 3000,
                    "📬 Contacts_", 3000,
                ]} 
                wrapper="span"
                speed={10}
                repeat={Infinity}
                className=""
                />
        </span>
        
        <strong className="text-5xl px-3 text-indigo-300 mb-7">Vamos conversar!</strong>
        
            <div className="flex flex-col md:flex-row items-center justify-center gap-40 my-10">
                <a href="https://api.whatsapp.com/send?phone=5583988332659" target="_blank"
                className="flex p-2 items-center justify-center md:mt-0 border border-indigo-800 rounded-lg text-indigo-800 gap-3 hover:brightness-200 transition-all duration-500">
                    <FaWhatsapp />Vamos conversar
                </a>
            
                <div className="flex flex-col items-center justify-center gap-3">
                    <div className="flex  gap-2 text-indigo-800 text-base font-semibold"><FaRegPaperPlane size={25} fill="#3730a3" /> E-mail:</div>
                    <a href="mailto:renatowillon@hotmail.com" className="text-zinc-600 text-xl">renatowillon@hotmail.com</a>
                    <button onClick={copyTexto} className="font-semibold text-indigo-800 flex gap-1"><FaRegCopy size={30} fill="#3730a3" />copiar</button>
                </div>
            
                <div>
                    <Mail />
                </div>
            </div>
            
        
        
        <a href="#" className="flex gap-4 items-center justify-center text-indigo-800 font-semibold text-sm pt-7">Voltar ao topo <FaAnglesUp /></a>

    </div>  
)
}