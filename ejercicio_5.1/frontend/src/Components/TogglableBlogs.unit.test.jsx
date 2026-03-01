import { render, screen } from '@testing-library/react'
import TogglableBlogs from './TogglableBlogs'
import { beforeEach, describe } from 'vitest'

describe('blog list', () => {
  let container 

    const blog = {
    id:'123',
    title: 'prueba',
    author: 'miguela',
    url: 'www/hola.net',
    likes: 6,
    user: {
      username: 'marico',
      name: 'Miguel',
      id:'321'
    }
  }
  beforeEach(() => {
    container =  render (<TogglableBlogs blog={blog} user={blog.user}/>).container
  })

 
  test('renders title and author', () => {
    const title = screen.getByText('prueba')
    expect(title).toBeDefined()
    const author = screen.getByText('miguela')
    expect(author).toBeDefined()
  })

  test('at start the children are not displayed', () => {

    const div = container.querySelector('.showWhenVisible')
    expect(div).toHaveStyle('display: none')
  })

  test('at start the url and likes are not rendered', () => {

    const url = screen.queryByText(blog.url)
    expect(url).toBeNull()
    const likes = screen.queryByText(blog.likes)
    expect(likes).toBeNull()
  })
})