import { useState } from "react";

const Mail = () => {
  const mailSend = 'renatowillon@hotmail.com'
  const [inputMail, setInputMail] = useState('')
  const [inputName, setInputName] = useState('')
  const [inputMensagem, setInputMensagem] = useState('')
  const handleClearInput = () => {
    setInputName('')
    setInputMail('')
    setInputMensagem('')
  }
  return(
    <div>
      <form action={`https://formsubmit.co/${mailSend}`} method="POST" className="flex flex-col gap-3">
        <input 
          type="text" 
          name="name" 
          id=""
          value={inputName}
          onChange={e => setInputName(e.target.value)}
          required
          placeholder="Digite seu nome"
          className="bg-transparent border border-indigo-800 w-[300px] py-2 px-5 rounded-md outline-none"
          />
        <input 
          type="email"
          name="email"
          id="" 
          value={inputMail}
          onChange={e => setInputMail(e.target.value)}
          required
          placeholder="Digite seu email"
          className="bg-transparent border border-indigo-800 w-[300px] py-2 px-5 rounded-md outline-none"
          />
          <textarea
            name="mensagem"
            value={inputMensagem}
            onChange={e => setInputMensagem(e.target.value)}
            placeholder="Digite sua mensagem"
            className="bg-transparent border border-indigo-800 w-[300px] py-2 px-5 rounded-md outline-none"
          >
          </textarea>
          
        <input type="text" name="_honey" className="hidden" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://renatowillon.vercel.app/" />
        <input type="hidden" name="_template" value="table" />
        
        <button type="submit" className="bg-indigo-800 py-2 px-5 rounded-md">Enviar</button>
      </form>
    </div>
  )
}
export default Mail;