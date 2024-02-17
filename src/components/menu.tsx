export function Menu(){
    return(
        <div className="bg-indigo-950 hidden md:flex md:items-center md:justify-between py-2 px-20 rounded-md">
      <section id="top">logo</section>
      <div className="text-indigo-300 flex items-center text-sm font-normal gap-5">
          <a href="#" className="hover:text-indigo-500 hover:font-semibold">Home</a>
          <a href="#sobre" className="hover:text-indigo-500 hover:font-semibold">Sobre mim</a>
          <a href="#jobs" className="hover:text-indigo-500 hover:font-semibold">Portfólio</a>
          <a href="#" className="hover:text-indigo-500 hover:font-semibold">Skills</a>
          <a href="#" className="hover:text-indigo-500 hover:font-semibold">Carreira</a>
          <a href="#" className="hover:text-indigo-500 hover:font-semibold">Contato</a>
        
      </div>
    </div>  
    )
}