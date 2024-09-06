'use client'

import { Fullscreen } from "lucide-react"
import Image from "next/image"
import { useState } from "react"


const Page = () => {
    const [ufOrigem, setUfOrigem] = useState('')
    const [ufDestino, setUfDestino] = useState('')
    const [percurso, setPercurso] = useState('')
    const NovoPercurso = () => {
        setUfDestino('')
        setUfOrigem('')
        setPercurso('')
        setShowPercurso(false)
    }
    
    const handleMostrarGerador = () => {
        setShowGerarPercurso(!showGerarPercurso)
        setUfDestino('')
        setUfOrigem('')
        setPercurso('')
        setShowPercurso(false)
    }
    const [showGerarPercurso, setShowGerarPercurso] = useState(false)
    const [showPercurso, setShowPercurso] = useState(false)
    const GerarPercurso = () => {
        if(ufOrigem === '' || ufDestino === ''){
            alert('[Error!] Preencha os campos de Origem e Destino!')
        }else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Acre - AC') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        }else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Alagoas - AL') {
            setPercurso('PE');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Amazonas - AM') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Bahia - BA') {
            setPercurso('PE');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Ceará - CE') {
            setPercurso('RN');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Distrito Federal - DF') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Espírito Santo - ES') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Goiás - GO') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Maranhão - MA') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Mato Grosso - MT') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Mato Grosso do Sul - MS') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Minas Gerais - MG') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Pará - PA') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Paraíba - PB') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Paraná - PR') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Pernambuco - PE') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Piauí - PI') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Rio de Janeiro - RJ') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Rio Grande do Norte - RN') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Rio Grande do Sul - RS') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Rondônia - RO') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Roraima - RR') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Santa Catarina - SC') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'São Paulo - SP') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Sergipe - SE') {
            setPercurso('PE | AL');
            setShowPercurso(true);
        } else if (ufOrigem === 'Paraiba - PB' && ufDestino === 'Tocantins - TO') {
            setPercurso('Não há UF no Percurso');
            setShowPercurso(true);
        }
        
        
    }

    
    return (
        <div className="w-screen h-screen p-10 bg-slate-900">
            
            {!showGerarPercurso &&
            <div className="h-[720px] flex flex-col items-center justify-between  mb-5 gap-5">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-3">
                        <p className="text-4xl font-bold mb-3">Precisando gerar o percurso<br></br> para seu MDF-e?</p>
                        <p className="ml-3">A UF de percurso no Manifesto Eletrônico de Documentos Fiscais (MDFe) é a <br></br>Unidade da Federação (UF) que o veículo de transporte de mercadorias<br></br> passará durante o trajeto.</p>
                        <p className="ml-3">A UF de percurso é uma informação essencial para fins fiscais e logísticos,<br></br> pois permite: Acompanhar a trajetória da mercadoria, Aplicar corretamente os<br></br> tributos estaduais, Garantir a conformidade fiscal, Transparência no<br></br> transporte de cargas</p>
                        <button className="p-3 m-3 border border-sky-600 rounded-lg hover:bg-green-600 hover:border-green-300 transition-all duration-300" onClick={handleMostrarGerador}>Gerar Percurso UF</button>
                    </div>
                    <Image 
                        className="pointer-events-none"
                        src="/assets/mapa/mapa_brasil.svg"
                        width={800}
                        height={800}
                        alt="Mapa Brasil"
                        
                    />
                </div>
                
            </div>
            
            
            }

            {showGerarPercurso && !showPercurso &&


            <div className="flex h-full flex-col items-center justify-center gap-10 mt-10">
            
                <p className="flex items-center justify-center text-2xl font-bold text-slate-300">Gerador de Percurso entre Estados</p>
                
                <div className="flex items-center justify-center gap-3">
                    <p className="text-slate-300">Escolha a UF de Origem</p>
                    <select value={ufOrigem} onChange={e => setUfOrigem(e.target.value)} className="rounded-md bg-slate-600 w-[200px] h-10">
                        <option className="" value="">Selecione uma UF</option>
                        <option className="" value="Paraiba - PB">Paraiba - PB</option>
                    </select>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                    <p className="text-slate-300">Escolha a UF de Destino</p>
                    <select value={ufDestino} onChange={e => setUfDestino(e.target.value)} className="rounded-md bg-slate-600 w-[200px] h-10">
                        <option className="" value="">Selecione uma UF</option>
                        <option value="Acre - AC">Acre - AC</option>
                        <option value="Alagoas - AL">Alagoas - AL</option>
                        <option value="Amazonas - AM">Amazonas - AM</option>
                        <option value="Bahia - BA">Bahia - BA</option>
                        <option value="Ceará - CE">Ceará - CE</option>
                        <option value="Distrito Federal - DF">Distrito Federal - DF</option>
                        <option value="Espírito Santo - ES">Espírito Santo - ES</option>
                        <option value="Goiás - GO">Goiás - GO</option>
                        <option value="Maranhão - MA">Maranhão - MA</option>
                        <option value="Mato Grosso - MT">Mato Grosso - MT</option>
                        <option value="Mato Grosso do Sul - MS">Mato Grosso do Sul - MS</option>
                        <option value="Minas Gerais - MG">Minas Gerais - MG</option>
                        <option value="Pará - PA">Pará - PA</option>
                        <option value="Paraíba - PB">Paraíba - PB</option>
                        <option value="Paraná - PR">Paraná - PR</option>
                        <option value="Pernambuco - PE">Pernambuco - PE</option>
                        <option value="Piauí - PI">Piauí - PI</option>
                        <option value="Rio de Janeiro - RJ">Rio de Janeiro - RJ</option>
                        <option value="Rio Grande do Norte - RN">Rio Grande do Norte - RN</option>
                        <option value="Rio Grande do Sul - RS">Rio Grande do Sul - RS</option>
                        <option value="Rondônia - RO">Rondônia - RO</option>
                        <option value="Roraima - RR">Roraima - RR</option>
                        <option value="Santa Catarina - SC">Santa Catarina - SC</option>
                        <option value="São Paulo - SP">São Paulo - SP</option>
                        <option value="Sergipe - SE">Sergipe - SE</option>
                        <option value="Tocantins - TO">Tocantins - TO</option>
                    </select>
                </div>
                <div className="flex items-center justify-center mt-10 gap-3">
                    <button className="font-bold transition-colors flex items-center justify-center border-2 border-green-600 hover:bg-green-600 text-slate-300 p-3 rounded-md"
                        onClick={GerarPercurso}
                    >
                        Gerar Percurso
                    </button>
                    <button className="font-bold transition-colors flex items-center justify-center border-2 border-sky-600 hover:bg-sky-600 text-slate-300 p-3 rounded-md"
                        onClick={handleMostrarGerador}
                    >
                        Voltar ao Mapa
                    </button>
                </div>
            </div>
            }
                
            {showPercurso && 
                <div className="w-[800px] mx-auto mt-10 rounded-lg text-slate-300 bg-slate-600 flex items-center justify-center flex-col">
                    <div className="p-2 w-[700px] mx-auto border-b border-slate-500 flex items-center justify-center">Resultado de Percurso</div>
                    <div className="flex w-full p-3 items-center">
                         <table className="w-full">
                            <thead className="">
                                <tr className="">
                                    <th className="p-3">Origem</th>
                                    <th className="p-3">Percurso</th>
                                    <th className="p-3">Destino</th>
                                </tr>
                            </thead>

                            <tbody className="text-center">
                                <tr>
                                    <td className="p-3">{ufOrigem}</td>
                                    <td className="p-3 font-bold">{percurso}</td>
                                    <td className="p-3">{ufDestino}</td>
                                </tr>
                            </tbody>
                        </table> 
                                             
                    </div>
                </div>
            }
            
            {showPercurso &&
                <div className="flex items-center justify-center mt-10 gap-3">
                    <button className="font-bold transition-colors border-2 border-green-600 hover:bg-green-600 text-slate-300 p-3 rounded-md"
                        onClick={NovoPercurso}
                    >
                        Novo Percurso
                    </button>
                    <button className="font-bold transition-colors border-2 border-sky-600 hover:bg-sky-600 text-slate-300 p-3 rounded-md"
                        onClick={handleMostrarGerador}
                    >
                        Voltar ao Mapa
                    </button>
                </div>
            }              
        </div>

    )
}

export default Page