import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TogglableBlogs from './TogglableBlogs'
import { beforeEach, describe, test } from 'vitest'

describe('Component: <TogglableBlogs/>',() => {

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

  describe('The component does not render unnecessary elements by default in <TogglableBlogs/>', () => {

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

  describe('The component responds correctly when interacting with its buttons', () => {

    test('The component renders the details after clicking on "view"', async () => {

      render (<TogglableBlogs blog={blog} user={blog.user} />)

      const user = userEvent.setup()
      const button = screen.getByRole('button', {name: /view/i})
      await user.click(button)
   
      const url = screen.getByText('www/hola.net',{ exact: false })
      expect(url).toBeVisible()

      const likes = screen.getByText('6',{ exact: false })
      expect(likes).toBeVisible()

    })
  })
})