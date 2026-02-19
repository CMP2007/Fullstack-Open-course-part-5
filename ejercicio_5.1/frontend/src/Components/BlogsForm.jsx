import { useState } from 'react'

const BlogsForm = ({handlBlog}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const submit = event =>{
        event.preventDefault()
        const newBlog = {
          title: title,
            author: author,
          url: url
        }
        if (title !== ''&& author !== ''&& url!=='') {
            handlBlog(newBlog)    
            setTitle('')
            setAuthor('')
            setUrl('')
        }
    }
    return(
        <form onSubmit={submit}> 
            <h1>Create New</h1>
            <label htmlFor="title">Title</label>
            <input 
                type="text" 
                required
                name="title"
                id="title"
                value={title}
                onChange={({target}) => setTitle(target.value) }
            /> 
            <br />
            <label htmlFor="author">Author</label>
            <input 
                type="text" 
                required
                name="author"
                id="author"
                value={author}
                onChange={({target}) => setAuthor(target.value) }
            />
            <br />
            <label htmlFor="url">Url</label>
            <input 
                type="text" 
                required
                name="url"
                id="url"
                value={url}
                onChange={({target}) => setUrl(target.value) }
            /> 
            <br />
            <button type="submit">Create</button>
        </form>
    )
}

export default BlogsForm