const { test, expect, beforeEach, describe } = require('@playwright/test')

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
      await expect(page.getByLabel('username')).toBeVisible()
      await page.getByRole('textbox').first().fill('test')
      await page.getByRole('textbox').last().fill('test')
      await page.getByRole('button', { name: 'login' }).click() 

      await expect(page.getByText('test logged in')).toBeVisible()
    })

    test('fails with wrong credentials', async ({ page }) => {
      await expect(page.getByLabel('username')).toBeVisible()
      await page.getByLabel('username').fill('test')
      await page.getByLabel('password').fill('error')
      await page.getByRole('button', { name: 'login' }).click() 

      const errorDiv = await page.locator('.error')
      await expect(errorDiv).toContainText('wrong username or password')
      await expect(errorDiv).toHaveCSS('border-style', 'solid')
      await expect(errorDiv).toHaveCSS('color', 'rgb(255, 0, 0)')

      await expect(page.getByText('test logged in')).not.toBeVisible()
    })
  })
})