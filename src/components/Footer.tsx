import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";

const anoAtual = new Date()
const Ano = anoAtual.getFullYear()

export function Footer(){
    return(
        <div className="w-full flex flex-col items-center justify-center gap-2 md:grid md:grid-cols-3 md:content-center md:justify-items-center border-t border-indigo-800 p-3">
            
            <span className="text-indigo-400 font-extralight text-sm">Copyright © Renato Willon · {Ano}</span>
            
            <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/renato-willon-414ba155/" target="_blank"><FaLinkedin fill="#818cf8" size={25} /></a>
                <a href="https://github.com/renatowillon/" target="_blank"><FaGithub fill="#818cf8" size={25} /></a>
                <a href="https://instagram.com/renatowillon/" target="_blank"><FaInstagram fill="#818cf8" size={25}/></a>
            </div>
            
            <span className="text-indigo-400 font-extralight text-sm">Front-end developer · UI designer</span>
        </div>
    )
}