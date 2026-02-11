const Login = ({username, password, setPassword, setUsername, handlLogin }) =>{
    return(
        <form onSubmit={handlLogin}>
            <b>username</b>
          <input type="text" 
            name="username"
            value={username}
            onChange={({target}) => setUsername(target.value)}
          /> 
          <br />
          <b>password</b>
          <input 
            type="password" 
            name="Password"
            value={password}
            onChange={({target}) => setPassword(target.value) }
          /> 
          <br />
          <button type="submit">login</button>
        </form>
    )
}

export default Login
