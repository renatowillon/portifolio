import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

let w = 40;
let h = 40;

export function Skills (){
    return(
        <div className="flex flex-col items-center justify-center py-10">
            
            <span className="py-1 px-3 mb-7 bg-indigo-950 rounded-lg text-indigo-500 font-bold">
                
                <TypeAnimation
              sequence={[
                "🧑‍💻 Experiências_", 3000,
                "🧑‍💻 Experiences_", 3000,
                "🧑‍💻 Habilidades_", 3000,
                "🧑‍💻 Skills_", 3000,
              ]} 
              wrapper="span"
              speed={10}
              repeat={Infinity}
              className=""
              />
            
            </span>
            <strong className="text-4xl text-indigo-300 mb-7">Tecnologias e habilidades</strong>
            
            
            <span className="text-sm font-thin text-indigo-400 mb-7">Techs usadas em projetos</span>
            <div className="grid grid-cols-5 md:flex md:flex-row mb-4 gap-3">
                <div className="hover:scale-110"><Image src="assets/icons/white/white_React.svg" alt="Titulo" width={w} height={h} /></div>
                <div className="hover:scale-110"><Image src="assets/icons/white/white_Javascript.svg" alt="Titulo" width={w} height={h} /></div>
                <div className="hover:scale-110"><Image src="assets/icons/white/white_vitejs.svg" alt="Titulo" width={w} height={h} /></div>
                <div className="hover:scale-110"><Image src="assets/icons/white/white_Typescript.svg" alt="Titulo" width={w} height={h} /></div>
                <div className="hover:scale-110"><Image src="assets/icons/white/white_Nextjs.svg" alt="Titulo" width={w} height={h} /></div>
                <div className="hover:scale-110"><Image src="assets/icons/white/white_css3.svg" alt="Titulo" width={w} height={h} /></div>
                <div className="hover:scale-110"><Image src="assets/icons/white/white_HTML5.svg" alt="Titulo" width={w} height={h} /></div>
                <div className="hover:scale-110"><Image src="assets/icons/white/white_Figma.svg" alt="Titulo" width={w} height={h} /></div>
                <div className="hover:scale-110"><Image src="assets/icons/white/white_Github.svg" alt="Titulo" width={w} height={h} /></div>
                <div className="hover:scale-110"><Image src="assets/icons/white/white_Git.svg" alt="Titulo" width={w} height={h} /></div>
                <div className="hover:scale-110"><Image src="assets/icons/white/white_Insomnia.svg" alt="Titulo" width={w} height={h} /></div>
            </div>    
        
        </div>
    )
}