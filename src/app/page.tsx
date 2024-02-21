import Image from "next/image"
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaCode, FaBoxesStacked, FaBezierCurve, FaPalette } from "react-icons/fa6"
import { Projetos } from "@/components/projetos"
import { ChevronUp, HomeIcon } from "lucide-react"
import { Menu } from "@/components/menu"
import { Skills } from "@/components/Skills"
import { Contato } from "@/components/Contato"
import { Toaster } from 'sonner'
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    
    <div className="h-screen flex flex-col md:p-10 p-5">
      <Toaster richColors expand={true} closeButton position="bottom-center" />
      <a href="#" className="size-10 rounded-full bg-indigo-400 flex items-center justify-center pb-1 text-indigo-950 fixed bottom-6 right-6"><ChevronUp /></a>
      <section id="top">
        <Menu />
      </section>
    
    <div className="flex-row md:flex md:items-center md:justify-between  md:px-20 py-10"> 
      <div className="flex flex-col gap-4">
        <div className="bg-indigo-950 rounded-lg py-2 px-3 flex items-center justify-center text-indigo-500 font-bold">👋 Saudações!</div>
        <div className="flex flex-col items-center justify-center md:items-start">
          <span className="text-5xl text-indigo-500">Renato</span>
          <strong className="text-7xl text-indigo-500">Willon</strong>
        </div>
        <div className="text-lg text-zinc-500 font-semibold flex items-center justify-center">Front-end developer · UI designer</div>
        <div className="flex items-center justify-center gap-8">
          <a href="https://github.com/renatowillon/" target="_blank"><FaGithub size={30}/></a>
          <a href="https://www.linkedin.com/in/renato-willon-414ba155/" target="_blank"><FaLinkedin size={30}/></a>
          <a href="https://instagram.com/renatowillon/" target="_blank"><FaInstagram size={30}/></a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image src="/assets/icons/avatar-renato-temp.svg" width={400} height={400} alt="Avatar" />
      </div>
      <a href="https://api.whatsapp.com/send?phone=5583988332659" target="_blank" className="py-2 px-3 mt-10 md:mt-0 border border-indigo-800 rounded-lg text-indigo-800 flex items-center justify-center gap-3 hover:brightness-200 transition-all duration-500">
        <FaWhatsapp />Vamos conversar
      </a>

    </div>
    
    

      <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-7 md:gap-10 md:justify-items-center border-t border-indigo-800 md:pt-10 md:pb-5">
        <div></div>
        <div></div>
        
        <div className="w-64 md:w-48 flex flex-col items-center border border-indigo-900 rounded-lg p-5">
          <div className="text-indigo-800"><FaCode size={50}/></div>
          <span className="text-sm font-thin mt-2">estudante de</span>
          <strong className="text-2xl">Programação</strong>
        </div>
        
        <div className="w-64 md:w-48 flex flex-col items-center bg-indigo-950 rounded-lg p-5">
          <div className="text-indigo-600"><FaBoxesStacked size={50}/></div>
          <span className="text-sm font-thin mt-2">null Jobs</span>
          <strong className="text-2xl">Trabalhos</strong>
        </div>
        
        <div className="w-64 md:w-48 flex flex-col items-center border border-indigo-900 rounded-lg p-5">
          <div className="text-indigo-800"><FaBezierCurve size={50}/></div>
          <span className="text-sm font-thin mt-2">9 anos como</span>
          <strong className="text-2xl">Designer</strong>
        </div>
        
        <div></div>
        <div></div>
      </div>
      
      
      <div className="flex flex-col items-center justify-center md:grid md:grid-cols-7 md:flex-col md:justify-items-center border-b border-indigo-800 pb-10">
        <div className="col-span-2"></div>

        <div className="flex flex-col items-center justify-center gap-5 p-12 md:w-full md:col-span-3 bg-indigo-950 rounded-lg md:grid md:grid-cols-3 md:justify-items-center py-3">
          <div className="flex flex-col items-center justify-center">
            <span className="text-sm text-indigo-500">Desenvolvedor</span>
            <strong className="text-3xl text-indigo-500">Front-end</strong>
          </div>
          
          <div className="flex flex-col items-center justify-center border-y md:border-none border-indigo-500 py-5">
            <span className="text-sm text-indigo-500">Dezenas de projetos</span>
            <strong className="text-3xl text-indigo-500">Experiência</strong>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <span className="text-sm text-indigo-500">Designer Freelancer</span>
            <strong className="text-3xl text-indigo-500">UI · UX</strong>
          </div>
        </div>
        
        <div className="col-span-2"></div>
      </div>
          
      <div className="flex flex-col items-center justify-center py-6 md:grid md:grid-cols-5 md:gap-10 md:p-10">
        <div className="flex items-center justify-center col-span-2">
          <Image src="/assets/icons/avatar-renato-temp.svg" alt="Renato Willon" width={300} height={300} />
        </div>
        
        <section id="sobre" className="md:flex md:flex-col md:justify-center md:col-span-3 md:gap-4 md:my-0 my-5">
          <div className="bg-indigo-950 relative rounded-lg py-2 px-3 flex items-center justify-center text-indigo-500 font-bold">
          <Image className="absolute mt-36 ml-56" src="assets/icons/seta-baixo.svg" alt="Seta" width={100} height={100} />Sobre mim
          </div>
          
          <div className="text-indigo-300 text-3xl font-bold md:my-0 my-5">Renato Willon</div>
          
          <div className="flex flex-col">
          
            <span className="font-semibold pb-5">👋 Olá, me chamo Renato, Prazer em te ver por aqui!</span>
            <span>👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com JavaScript, React JS e Typescript.</span>
            <span>🎓 Cursando na Rocketseat, Alura e entre outras plataformas de ensinos</span>
            <span>💡 Interesses em desenvolvimento Front-end com ReactJs, Typescript, NextJS e UX/UI Design.</span>
            <span className="py-5">🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</span>

          </div>
        </section> 
      </div>    

      <div className="md:flex items-center justify-between md:px-20 px-5">
        <div className="flex flex-col items-start justify-start">
          <span className="bg-indigo-950 text-indigo-500 font-bold px-4 py-1 rounded-lg">🔗 Portfólio</span>
          <span className="text-indigo-300 text-5xl font-bold pt-5">Trabalhos e Projetos</span>
        
        </div>
        
        <div className="md:flex md:flex-row md:gap-5 md:items-center md:justify-center md:mt-0 mt-5 flex flex-col gap-3">
          <div className="border border-indigo-950 py-2 px-14 rounded-lg text-indigo-800 font-bold flex gap-3 items-center justify-center"><Image src="/assets/icons/React.svg" alt="React" width={20} height={20} />ReactJS</div>
          <div className="bg-indigo-950 py-2 px-14 rounded-lg text-indigo-500 font-bold flex gap-3 items-center justify-center"><FaPalette />Design</div>
          <div className="border border-indigo-950 py-2 px-14 rounded-lg text-indigo-800 font-bold flex gap-3 items-center justify-center"><Image className="" src="/assets/icons/Typescript.svg" alt="Typescript" width={20} height={20} />Typescript</div>
        </div>

      </div>
      
      <section id="jobs" className="grid md:grid-cols-3 px-5 py-10 gap-5 justify-items-center">
                
        
          <Projetos
          titulo="Notes"
          descricao="Notes é um projeto que foi realizado junto a NLW com a Rocketseat para armazenamento de notas, salvando notas via audio que faz a conversão para o texto de forma otimizada, como também salvando a nota em texto, salvando em localstorage, e podendo apagar caso necessario."
          categoria1="Typescript"
          categoria2="ViteJS"
          categoria3="Tailwind CSS"
          categoria4="Radix-UI"
          imagem="/assets/capa-notes.png"
          repositorio="https://github.com/renatowillon/NLW-Notes"
          url1="/assets/img_projects/macbook_notes.png"
          />
        
        
          <Projetos
          titulo="Spotify"
          descricao="Feito a replicação do Spotify Web, Spotify é um provedor sueco de serviços de mídia e streaming de áudio fundado em 23 de abril de 2006 por Daniel Ek e Martin Lorentzon. É um dos maiores provedores de serviços de streaming de música, com mais de 602 milhões de usuários ativos mensais."
          categoria1="Typescript"
          categoria2="NextJS"
          categoria3="Tailwind CSS"
          categoria4="Lucide"
          imagem="/assets/capa-spotify.png"
          repositorio="https://github.com/renatowillon/wDev-Spotify"
          url1="/assets/img_projects/macbook_spotify.png"
          />
        
      </section>

      <section id="skills" className="w-full md:px-96 px-3 flex flex-col items-center justify-center border-y border-indigo-900">
        <Skills />
      </section>

      <section id="contato" className="flex items-center justify-center py-10">
        <Contato />
      </section>

      <div className="">
        <Footer />
      </div>  

    </div>
    
    
  )
}
