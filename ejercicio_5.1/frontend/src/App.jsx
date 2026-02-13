import { useState, useEffect } from 'react'
import BlogsList from './Components/BlogsList'
import Blogs from './services/blogs'
import Login from './Components/login'
import LoginServise from './services/login'
import BlogsForm from './Components/BlogsForm'
import createBlog from './services/CreateBlog'
import Notification from './Components/alerts'
import './index.css'

function App() {
 const [user, setUser] = useState(null)
 const [blogs, setBlogs] = useState([])
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const [title, setTitle] = useState(null)
 const [author, setAuthor] = useState('')
 const [url, setUrl] = useState('')
 const [notification, setNotification] = useState({text:null, style:null})

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
      setNotification({text:`wrong username or password`, style:'error'})
      setTimeout(()=>{
        setNotification({text:null, style:null})
      },5000)
      setPassword('')
      setUsername('')
    }
 }
console.log(notification);


 const handlBlog = async (event)=>{
    event.preventDefault()
    const newBlog = {
      title: title,
      author: author,
      url: url
    }
    if (title !== ''&& author !== ''&& url!=='') {
      try{
        const response = await createBlog.CreateBlogs(newBlog, user.token)
        console.log(response);
        setBlogs(blogs.concat(response))    
        setTitle('')
        setAuthor('')
        setUrl('')

        setNotification({text:`a new blog ${title} by ${author} added`, style:'alert'})
        setTimeout(()=>{
          setNotification({text:null, style:null})
        },5000)
      }
      catch (exception){
        console.error('Error detallado:', exception)
        setNotification({text:`Error registering the blog ${title} by ${author}`, style:'error'})
        setTimeout(()=>{
          setNotification({text:null, style:null})
        },5000)
      }
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
          <Notification message = {notification.text} style={notification.style}/>
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
          <Notification message = {notification.text} style={notification.style}/>
          <b>{user.name} logged in </b>
          <button onClick={closeSession}>logout</button>
          <BlogsForm
            title = {title}
            setTitle = {setTitle}
            author = {author}
            setAuthor = {setAuthor}
            url = {url}
            setUrl = {setUrl}
            handlBlog={handlBlog}
          />
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
