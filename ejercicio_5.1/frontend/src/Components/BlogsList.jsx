import TogglableBlogs from './TogglableBlogs'

const BlogsList = ({blogs}) => {
    return(
        <div>
            {blogs.map(blog => 
                <TogglableBlogs blog={blog} key={blog.id}/>
            )}
        </div>
    )
}

export default BlogsList