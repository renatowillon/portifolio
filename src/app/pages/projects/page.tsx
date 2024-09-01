'use client'
import { useState } from "react"




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
    return (
        
        <div className="">
            {!showProjects &&
                <div className="w-screen h-screen flex flex-col items-center justify-center gap-6">
                    <p>Digite a senha | Acesso Restrito</p>
                    <div className="flex gap-3">
                        <input type="password" name="" id="" className="bg-slate-950 p-3 text-slate-300 border border-slate-300 rounded-lg"
                            value={inputPassword}
                            onChange={e => setInputPassword(e.target.value)}
                        />
                        <button onClick={logar} className="border hover:border hover:border-green-500 p-3 rounded-lg">Acessar</button>
                    </div>
                </div>
            }
            
            {showProjects &&
               <div>
                    <p>Em Desenvolvimento</p>
                    <button className="fixed top-10 right-10 border hover:border hover:border-green-500 py-3 px-6 rounded-lg"
                        onClick={logoff}>Sair</button>
               </div>
               
            }   
        </div>
     
    )
}
export default Projects