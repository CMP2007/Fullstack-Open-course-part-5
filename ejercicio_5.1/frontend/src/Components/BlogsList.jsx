const BlogsList = ({blogs}) => {
    return(
        <div>
            {blogs.map(blog => 
               <p key={blog.id}> {blog.title} {blog.author} </p>
            )}
        </div>
    )
}

export default BlogsList