import { Home as HomeIcon, Search, LibraryBig, ArrowRight, Plus, List, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Repeat2, PlaySquare, Mic2, ListTree, MonitorSpeaker, Volume2, Airplay, Maximize2, ArrowDownCircle, Bell } from 'lucide-react'
import Image from "next/image";
import { ListaPrimaria } from '@/components/spotify/ListPrimaria';
import { ListaSecundaria } from '@/components/spotify/ListSecundaria';
import { Footer } from '@/components/spotify/Footer';


const page = () => {
  return (
    
    //INICIO DO PROJETO
    <div className="h-screen flex flex-col">
     
        {/* INICIO PAGE TOTAL */}
        <div className="flex flex-1 p-2 gap-3">
          {/* INICIO ASIDE TOTAL */}    
     
          <div className="w-96 gap-3 grid grid-rows-5">
           
            {/* INICIO MENU PRIMARIO */}    
            <div className="bg-zinc-900 rounded-md row-span-1 p-3 flex flex-col justify-center">
              <a href="#" className="flex items-center gap-3 pb-3 text-zinc-400 font-semibold hover:text-zinc-200"><HomeIcon /> Inicio</a>
              <a href="#" className="flex items-center gap-3 pb-3 text-zinc-400 font-semibold hover:text-zinc-200" ><Search /> Buscar</a>
            </div>
            {/* FIM MENU PRIMARIO */}        
            
            {/* INICIO MENU SECUNDARIO */}        
            <aside className="bg-zinc-900 rounded-md  row-span-4 p-3">
              <div className='flex flex-cols-2 justify-between'>
                <a href="#" className='flex items-center gap-3 pb-3 text-zinc-400 font-semibold hover:text-zinc-200'><LibraryBig />Sua Biblioteca</a>
                <div className='flex gap-3'>
                  <a href='#' className='text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 flex items-center justify-center rounded-full h-8 w-8'><Plus /></a>
                  <a href='#' className='text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 flex items-center justify-center rounded-full h-8 w-8'><ArrowRight /></a>
                </div>
              </div>

              <div className='flex grid-cols-4 justify-between p-2'>
                <a href='#' className='bg-zinc-800 text-sm py-1 px-4 gap-1 rounded-full hover:bg-zinc-700 transform'>Playlist</a>
                <a href='#' className='bg-zinc-800 text-sm py-1 px-4 gap-1 rounded-full hover:bg-zinc-700 transform'>Artista</a>
                <a href='#' className='bg-zinc-800 text-sm py-1 px-4 gap-1 rounded-full hover:bg-zinc-700 transform'>Álbum</a>
                <a href='#' className='bg-zinc-800 text-sm py-1 px-4 gap-1 rounded-full hover:bg-zinc-700 transform'>Podcasts</a>
              </div>

              <div className='flex flex-cols-2 justify-between'>
              <a href='#' className='text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 flex items-center justify-center rounded-full h-8 w-8'><Search size={18} /></a>
              <a href='#' className='flex items-center gap-2 text-sm text-zinc-400 font-semibold hover:scale-105 hover:text-zinc-200'>Recentes <List size={18}/></a>
              
              </div>
              {/* INICIO LIST MENU LATERAL*/}
              <div className="grid grid-rows-4 py-2">
                <div className="flex items-center gap-3 rounded p-2 hover:bg-white/20">
                <Image src="/assets/mais-tocadas.png" alt="Believer" width={55} height={55} />
                <div className="flex flex-col gap-1">
                  <strong>Mais Curtidas</strong>
                  <span className="text-sm text-zinc-400">Playlist • 35 músicas</span>
                </div>
                </div>

                <div className="flex items-center gap-3 rounded p-2 hover:bg-white/20">
                <Image src="/assets/rap.jpg" alt="Believer" width={55} height={55} />
                <div className="flex flex-col gap-1">
                  <strong>Rap</strong>
                  <span className="text-sm text-zinc-400">Playlist • Renato Willon</span>
                </div>
                </div>

                <div className="flex items-center gap-3 rounded p-2 hover:bg-white/20">
                <Image src="/assets/pedro-henrique.jpg" className="rounded-full" alt="Believer" width={55} height={55} />
                <div className="flex flex-col gap-1">
                  <strong>Pedro Henrique</strong>
                  <span className="text-sm text-zinc-400">Artista</span>
                </div>
                </div>

                <div className="flex items-center gap-3 rounded p-2 hover:bg-white/20">
                <Image src="/assets/newid.jpg" className="rounded-full" alt="Believer" width={55} height={55} />
                <div className="flex flex-col gap-1">
                  <strong>Banda New ID</strong>
                  <span className="text-sm text-zinc-400">Artista</span>
                </div>
                </div>

                
              </div>
              {/* FIM LIST MENU LATERAL*/}
            </aside>
            {/* FIM MENU SECUNDARIO */}          
          
          </div>
          
          {/* INICIO CONTEUDO */}
          <main className="flex-1 bg-zinc-900 rounded-md p-3">
            <div className='grid-cols-2 flex justify-between  items-center gap-3 p-3'>
              <div className="flex items-center gap-3">
                <button className='rounded-full bg-black/40 w-8 h-8 flex items-center justify-center pr-1'><ChevronLeft /></button>
                <button className='rounded-full bg-black/30 w-8 h-8 flex items-center justify-center pl-1'><ChevronRight /></button>
              </div>
              <div className="flex items-center gap-4">
                <button className="rounded-full bg-zinc-100 text-zinc-900 text-sm font-bold py-1.5 px-3 hover:scale-105 hover:bg-zinc-200">Ver planos Premium</button>
                <button className="flex items-center gap-2 rounded-full bg-black/60 text-zinc-100 text-sm font-bold py-1.5 px-3 hover:scale-105"><ArrowDownCircle size={20}/>Instalar Aplicativo</button>
                <div className="size-8 text-zinc-400 rounded-full bg-black/60 flex items-center justify-center pr-0.5 hover:scale-105 hover:pr-0 hover:text-zinc-100"><Bell size={18} /></div>
                <div className="size-8 rounded-full bg-black/60 flex items-center justify-center">
                  <Image src="/assets/avatar.jpg" alt="Foto do Avatar" width={20} height={20} className="rounded-full hover:scale-105" />
                </div>
              </div>            
            </div>
            <h1 className='font-bold text-3xl mt-5 mb-3 pl-3'>Olá, Boa tarde</h1>

             {/* INICIO GRID */}
             <div className='grid grid-cols-4 gap-4 pl-3'>
              
              <ListaPrimaria 
              cantor='Imagine Dragons'
              src="/assets/Believer.jpg"
              />

              <ListaPrimaria 
              cantor='Pedro Henrique'
              src="/assets/pedro-henrique.jpg"
              />

              <ListaPrimaria 
              cantor='Sucessos Gospel'
              src="/assets/sucessos-gospel.jpg"
              />
              
              <ListaPrimaria 
              cantor='Melim'
              src="/assets/melim.jpg"
              />
              
              <ListaPrimaria 
              cantor='Projota'
              src="/assets/projota.jpg"
              />

              <ListaPrimaria 
              cantor='Bon Jovi'
              src="/assets/bonjovi.jpg"
              />    

              <ListaPrimaria 
              cantor='Pagode Restaura'
              src="/assets/pagode-restaura.jpg"
              />    

              <ListaPrimaria 
              cantor='Mais Tocadas'
              src="/assets/mais-tocadas.png"
              />    
             
             </div>
             {/* FIM GRID */}

             {/* INICIO GRID 2 */}
             <h1 className='font-bold text-2xl mt-5 mb-3 pl-3 hover:underline hover:text-zinc-200'>Feito por Renato Willon</h1>
             
             <div className="grid grid-cols-5 gap-4 mt-4">
            

              <ListaSecundaria 
              src="/assets/daily-mix1.jpg"
              titulo='Daily Mix 1'
              cantor='Pedro Henrique, Banda Universos, Daniela...'
              />
             
             <ListaSecundaria 
              src="/assets/daily-mix2.jpg"
              titulo='Daily Mix 2'
              cantor='Melim, Projota, Alok e mais'
              />

              <ListaSecundaria 
              src="/assets/daily-mix3.jpg"
              titulo='Daily Mix 3'
              cantor='Thalles Roberto, Ministério Zoe, Banda...'
              />
              
              <ListaSecundaria 
              src="/assets/daily-mix4.jpg"
              titulo='Daily Mix 4'
              cantor='Lu Alone, Isaias Saad, Priscilla e mais'
              />

              <ListaSecundaria 
              src="/assets/daily-mix5.jpg"
              titulo='Daily Mix 5'
              cantor='Tribo da Periferia, Hungria, Pacificadores...'
              />

            </div>
            {/* FIM GRID 2 */}
            
          </main>
          {/* FIM CONTEUDO */}
        
        </div>
        {/* FIM PAGE TOTAL */}

        {/* INICIO FOOTER */}
        
          <Footer />            
        
        {/* FIM FOOTER */}
    
    </div>
    
  );
}
export default page