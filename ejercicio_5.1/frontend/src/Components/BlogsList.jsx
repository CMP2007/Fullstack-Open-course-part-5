import TogglableBlogs from './TogglableBlogs'

const BlogsList = ({blogs, putBlogs}) => {
    const blogsSort = [...blogs].sort(function (a, b) {
        return  b.likes - a.likes
    })
    
    return(
        <div>
            {blogsSort.map(blog => 
                <TogglableBlogs blog={blog} key={blog.id} putBlogs={putBlogs}/>
            )}
        </div>
    )
}

export default BlogsList