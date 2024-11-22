'use client'
import { HomeIcon, Loader, Loader2 } from "lucide-react"
import Link from "next/link"
import { KeyboardEvent, useState } from "react"




const Projects = () => {
    const [showProjects, setShowProjects] = useState(false)
    const [inputPassword, setInputPassword] = useState("")
    const password = '123456789@'
    const logar = () => {
        
        if(inputPassword === password) {
            setShowProjects(true)
            setInputPassword("")
        }else {
            alert("[ERROR!] - Senha Incorreta!")
        }
    }
    const logoff = () => {
        setShowProjects(false)
    }
    const handleKeyUpAction = ( event: KeyboardEvent<HTMLInputElement> ) =>  {
        if(['enter', 'numpadenter'].includes(event.code.toLowerCase())){
            logar()
        }
    }
    return (
        
        <div className="">
            {!showProjects &&
                <div className="w-screen h-screen flex flex-col items-center justify-center gap-6">
                    <p>Digite a senha | Acesso Restrito</p>
                    <div className="flex gap-3">
                        <input type="password" name="" id="" className="bg-slate-950 p-3 text-slate-300 border border-slate-300 rounded-lg"
                            placeholder="123456789@"
                            value={inputPassword}
                            onChange={e => setInputPassword(e.target.value)}
                            onKeyUp={handleKeyUpAction}
                        />
                        <button onClick={logar} className="border hover:border hover:border-green-500 p-3 rounded-lg">Acessar</button>
                        <Link href='/' className="border hover:text-green-500 hover:border hover:border-green-500 p-3 rounded-lg flex gap-3"><HomeIcon />Voltar</Link>
                    </div>
                    
                </div>
            }
            
            {showProjects &&
               <div className="w-screen h-screen flex flex-col items-center justify-center gap-6 p-10">
                    
                    <p className="h-screen flex items-center justify-center gap-3">Em Desenvolvimento <Loader2 className="animate-spin spin- "/></p>
                    
                    <button className="fixed top-10 right-10 border hover:border hover:border-green-500 py-3 px-6 rounded-lg"
                        onClick={logoff}>Sair</button>
               </div>
               
            }   
        </div>
     
    )
}
export default Projects