import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import Notification from './components/error'
import Footer from './components/Footer'
import NoteForm from './components/NoteForm'
import LoginForm from './components/LoginForm'
import loginService from './services/login'


const App = () => {
  
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(()=>{
    noteService
      .getAll()
      .then(initialNotes =>{
        setNotes(initialNotes)
      })
  },[])
  
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])
  

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }
    noteService
      .create(noteObject)
      .then(returnedNote=>{
        setNotes(notes.concat(returnedNote))
        setNewNote("")
      })
  }

  const handleNoteChance = (event) =>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleLogin = async (event) =>{
    event.preventDefault()
    
    try {
      const user = await loginService.login({username, password})

      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      noteService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      console.log(user);
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
    
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error =>{
         setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
  })}


  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      
      {user === null ?
      <LoginForm handleLogin= {handleLogin} username={username} setUsername={setUsername} password={password} setPassword={setPassword} /> :
      <div>
        <p>{user.name} <b>logged-in</b></p>
        <NoteForm addNote = {addNote} newNote= {newNote} handleNoteChance={handleNoteChance}/>
      </div>
    }
      <div>
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} cambiarImportancia={()=>toggleImportanceOf(note.id)} note={note}/>
        )}
      </ul>
      <Footer/>   
    </div>
  )
}

export default App