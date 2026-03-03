import {useState} from 'react'

const Login = ({ handlLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const loginSend = (event) => {
    event.preventDefault()
    handlLogin(password, username)
    setUsername('')
    setPassword('')
  }
  return(
    <form onSubmit={loginSend}>
      <b>username</b>
      <input type="text"
        name="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <br />
      <b>password</b>
      <input
        type="password"
        name="Password"
        value={password}
        onChange={({ target }) => setPassword(target.value) }
      />
      <br />
      <button type="submit">login</button>
    </form>
  )
}

export default Login
