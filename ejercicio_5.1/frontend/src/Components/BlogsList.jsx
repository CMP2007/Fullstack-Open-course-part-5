import TogglableBlogs from './TogglableBlogs'

const BlogsList = ({blogs, putBlogs}) => {
    return(
        <div>
            {blogs.map(blog => 
                <TogglableBlogs blog={blog} key={blog.id} putBlogs={putBlogs}/>
            )}
        </div>
    )
}

export default BlogsList