const BlogsForm = ({title, setTitle, author, setAuthor, url, setUrl, handlBlog}) => {
    return(
        <form onSubmit={handlBlog}> 
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