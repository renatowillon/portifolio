import Image from "next/image"
import { Shuffle, SkipBack, Play, SkipForward, Repeat2, PlaySquare, Mic2, ListTree, MonitorSpeaker, Volume2, Airplay, Maximize2} from "lucide-react"

export function Footer(){
    return(

        <footer className="bg-zinc-950 p-3 grid-cols-3 flex justify-between">
          <div className="flex items-center gap-3 col-span-1"> 
            <Image src="/Kansas.jpg" width={56} height={56} alt="Capa Kansas" />
            <div className="flex flex-col">
              <strong className="font-medium text-zinc-400 hover:underline hover:text-zinc-200 hover:cursor-pointer">A Vida é um sopro - Acústico Vivências</strong>
              <span className="font-medium text-sm text-zinc-400 hover:underline hover:text-zinc-200 hover:cursor-pointer">Tribo da Periferia, MC Hariel</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 col-span-1">
            <div className="flex items-center gap-3">
              <Shuffle size={20} className="text-zinc-400 hover:cursor-pointer hover:text-zinc-100"/>
              <SkipBack size={20} className="text-zinc-400 hover:cursor-pointer hover:text-zinc-100"/>
              <button className="size-10 flex items-center justify-center pl-1 rounded-full bg-zinc-100 text-zinc-100 hover:scale-105">
                <Play fill="bg-black"/>
              </button>
              <SkipForward size={20} className="text-zinc-400 hover:cursor-pointer hover:text-zinc-100"/>
              <Repeat2 size={20} className="text-zinc-400 hover:cursor-pointer hover:text-zinc-100"/>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-400">0:31</span>
              <div className="h-1 rounded-full w-96 bg-zinc-600">
                <div className="h-1 rounded-full w-40 bg-zinc-400 hover:bg-green-400"></div>
              </div>
              <span className="text-sm text-zinc-400">2:14</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 col-span-1"> 
            <PlaySquare size={20} className="text-zinc-400 hover:text-zinc-100" />
            <Mic2 size={20} className="text-zinc-400 hover:text-zinc-100" />
            <ListTree size={20} className="text-zinc-400 hover:text-zinc-100" />
            <MonitorSpeaker size={20} className="text-zinc-400 hover:text-zinc-100" />
            <div className="flex items-center gap-2">
              <Volume2 size={20} className="text-zinc-400 hover:text-zinc-100" />
              <div className="h-1 w-24 rounded-full bg-zinc-600">
                <div className="h-1 w-12 rounded-full bg-zinc-400 hover:bg-green-400"></div>
              </div>
            </div>
            <Airplay size={20} className="text-zinc-400 hover:text-zinc-100" />
            <Maximize2 size={20} className="text-zinc-400 hover:text-zinc-100" />
          </div>
        </footer>
    )
}