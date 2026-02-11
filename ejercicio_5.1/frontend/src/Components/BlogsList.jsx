const BlogsList = ({blogs, user, closeSession}) => {
    return(
        <div>
            <b>{user.name} logged in</b>
            {blogs.map(blog => 
               <p key={blog.id}> {blog.title} {blog.author} </p>
            )}
            <button onClick={closeSession}>close Sesion</button>
        </div>
    )
}

export default BlogsList