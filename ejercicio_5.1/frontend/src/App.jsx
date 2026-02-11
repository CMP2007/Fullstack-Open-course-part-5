import { useState, useEffect } from 'react'
import BlogsList from './Components/BlogsList'
import Blogs from './services/blogs'
import Login from './Components/login'
import LoginServise from './services/login'

function App() {
 const [user, setUser] = useState(null)
 const [blogs, setBlogs] = useState([])
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')

 useEffect(()=>{
  if (user) {
    Blogs
    .getAll()
    .then( response => {
      setBlogs(response)
    })
  }
 },[user])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

 const handlLogin = async (event)=>{
    event.preventDefault()
    try{
      const response = await LoginServise.login({password, username})
      window.localStorage.setItem(
        'loggedBlogUser', JSON.stringify(response)
      )
      setUsername('')
      setPassword('')
      setUser(response)
    }
    catch (exception){
      console.error('Error detallado:', exception)
      alert('Credenciales incorrectas. Por favor, intenta de nuevo.')
      setPassword('')
      setUsername('')
    }
 }

 const closeSession = ()=>{
    window.localStorage.removeItem('loggedBlogUser')
    setUser(null)
 }


  const display = user =>{
    if (!user) {
      return(
        <>
          <h1>log in to application</h1>
          <Login 
            password={password} 
            username={username} 
            setUsername={setUsername} 
            setPassword={setPassword} 
            handlLogin={handlLogin}
          />
        </>
      )
    } else {
      return(
        <>
          <h1>blogs</h1>
          <BlogsList blogs={blogs} user={user} closeSession={closeSession} />
        </>
      )
    }
  }

  return (
    <>
      {display(user)}
    </>
  )
}

export default App
