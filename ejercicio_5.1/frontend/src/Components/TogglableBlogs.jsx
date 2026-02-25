import { useState } from 'react'

const TogglableBlogs = ({blog}) => {
    const [details, setDetails] = useState(false)

    const showWhenVisible = { display: details ? '' : 'none' }

    const labelButton = details 
    ?'hide'
    :'view'

    const toggleDetails = () => {
    setDetails(!details)
  }
  
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <>
      <div style={blogStyle}>
        {blog.title}
        <button onClick={toggleDetails}>{labelButton}</button>
        <div style={showWhenVisible}>
          {blog.url} <br />
          {blog.likes} 
          <button>like</button><br />
          {blog.author} <br />
        </div>
      </div>
    </>
  )
}

export default TogglableBlogs