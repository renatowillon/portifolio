import Image from "next/image"

export function Menu(){
    return(
        <div className="bg-indigo-950 hidden md:flex md:items-center md:justify-between py-2 px-32 rounded-md">
      <section id="top">
        <Image src="/assets/logo.png" alt="Logo wDev" height={60} width={60} />
      </section>
      <div className="text-indigo-300 flex items-center text-sm font-normal gap-5">
          <a href="#" className="hover:text-indigo-500 hover:font-semibold transition-colors duration-500">Home</a>
          <a href="#sobre" className="hover:text-indigo-500 hover:font-semibold transition-colors duration-500">Sobre mim</a>
          <a href="#jobs" className="hover:text-indigo-500 hover:font-semibold transition-colors duration-500">Portfólio</a>
          <a href="#skills" className="hover:text-indigo-500 hover:font-semibold transition-colors duration-500">Skills</a>
          <a href="#contato" className="hover:text-indigo-500 hover:font-semibold transition-colors duration-500">Contato</a>
        
      </div>
    </div>  
    )
}