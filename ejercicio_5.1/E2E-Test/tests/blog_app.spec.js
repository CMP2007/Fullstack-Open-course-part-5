const { test, expect, beforeEach, describe } = require('@playwright/test')
const { loginWith, createBlog } = require('./helpers')

describe('Blog app', () => {
  beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Login form is shown', async ({ page }) => {
    await expect(page.getByText('application')).toBeVisible()
    await expect(page.getByLabel('username')).toBeVisible()
    await expect(page.getByLabel('password')).toBeVisible()
  })

  describe('Testing login', () => {
    beforeEach(async ({page, request}) => {
      await request.post('/api/testing/reset')
      await request.post('/api/users', {
        data: {
          name: 'test',
          username: 'test',
          password: 'test'
        }
      })
    })
    
    test('You can log in successfully', async ({page}) => {
      await loginWith(page, 'test', 'test') 

      await expect(page.getByText('test logged in')).toBeVisible()
    })

    test('fails with wrong credentials', async ({ page }) => {
      await loginWith(page, 'test', 'error')

      const errorDiv = await page.locator('.error')
      await expect(errorDiv).toContainText('wrong username or password')
      await expect(errorDiv).toHaveCSS('border-style', 'solid')
      await expect(errorDiv).toHaveCSS('color', 'rgb(255, 0, 0)')

      await expect(page.getByText('test logged in')).not.toBeVisible()
    })

    describe('When logged in', () => {
      beforeEach(async ({ page }) => {
          await loginWith(page, 'test', 'test')
          await createBlog(page, 'a blog created by playwright', 'Author name', 'www/playwright.com')
      })

      test('a new blog can be created', async ({ page }) => {
        const alertDiv = await page.locator('.alert')
        await expect(alertDiv).toContainText('a new blog a blog created by playwright')
        await expect(alertDiv).toHaveCSS('border-style', 'solid')
        await expect(alertDiv).toHaveCSS('color', 'rgb(0, 128, 0)')
        
        await expect(page.getByTestId('blog-list').getByText('a blog created by playwright')).toBeVisible()
      })

      test('a new blog can be added', async ({ page }) => {  
        const blog = page.getByTestId('blog-list').getByText('a blog created by playwright')
        await blog.getByRole('button', { name: 'view' }).click()
        await blog.getByRole('button', { name: 'like' }).click()

        const alertDiv = await page.locator('.alert')
        await expect(alertDiv).toContainText('a vote for a blog created by playwright by Author name added')
        await expect(alertDiv).toHaveCSS('border-style', 'solid')
        await expect(alertDiv).toHaveCSS('color', 'rgb(0, 128, 0)')

        await expect(blog.getByText(1)).toBeVisible()
      })

      test('a new blog can be removed', async ({page}) => {
        const blog = page.getByTestId('blog-list').getByText('a blog created by playwright')
        await blog.getByRole('button', { name: 'view' }).click()
        
        await Promise.all([
          page.waitForEvent('dialog').then(dialog => dialog.accept()),
          blog.getByRole('button', { name: 'Remove' }).click()
        ])

        const alertDiv = await page.locator('.alert')
        await expect(alertDiv).toContainText('the blog a blog created by playwright by Author name has been successfully deleted')
        await expect(alertDiv).toHaveCSS('border-style', 'solid')
        await expect(alertDiv).toHaveCSS('color', 'rgb(0, 128, 0)')

        await expect(page.getByTestId('blog-list').getByText('a blog created by playwright')).not.toBeVisible()
      })
    })
  })
})
