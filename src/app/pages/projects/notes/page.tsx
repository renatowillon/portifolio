'use client'

import { ChangeEvent, useState } from 'react'
import { NewNoteCard } from "@/components/new-note-card"
import { NoteCard } from "@/components/note-card"
import {toast} from 'sonner'

interface Note {
  id: string
  data: Date
  content: string
}

const page = () => {
    const [search, setSearch] = useState('')

  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')
    if (notesOnStorage){
      return JSON.parse(notesOnStorage)
    }
    return[]
  })

  function onNoteCreated(content:String){
    const newNote = {
      id: crypto.randomUUID(),
      data: new Date(),
      content,
    }

    const notesArray = [newNote, ...notes]

    setNotes(notesArray)
    
    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function onNoteDeleted (id: string){
    const notesArray = notes.filter(note => {
      return note.id != id
    })

    setNotes(notesArray)
    localStorage.setItem('notes', JSON.stringify(notesArray))
    toast.success('Nota Deletada com Sucesso')
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>){
    const query = event.target.value
    setSearch(query)
  }

  

  const filteredNotes = search != ''
  ? notes.filter(notes => notes.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())) 
  : notes

    return(
        <div className="max-w-6xl mx-auto my-12 space-y-6 px-5">
        <img src="/assets/logo-nlw-escuro.svg" alt="NLW" />
        
        <form className="w-full">
          <input
            type="text" 
            placeholder='Busque em suas notas...'
            className="w-full bg-transparent text-3xl font-semibold outline-none tracking-tight placeholder: text-slate-500"
            onChange={handleSearch}
          />
  
        </form>
        
        <div className="h-px bg-slate-700" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 auto-rows-[250px]">
            <NewNoteCard onNoteCreated={onNoteCreated} />
  
            {filteredNotes.map(note => {
              return <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} />
            })}
          </div>
        </div>
    )
}
export default page