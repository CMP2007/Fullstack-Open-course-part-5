const UserForm = ({handleLogin,username, password }) =>{
  return(
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="">UserName</label>
        <input
        type="text"
        value={{username}}
        name="username"
        onChange={({ target }) => setUsername(target.value)}
        />
      </div>
    </form> 
)}

export default UserForm