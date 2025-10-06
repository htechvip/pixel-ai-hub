import { test, expect } from '@playwright/test';

test.describe('Header and Footer Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Header Navigation', () => {
    test('should display all navigation items', async ({ page }) => {
      // Check main navigation items
      await expect(page.getByText('Why Join')).toBeVisible();
      await expect(page.getByText('AI Courses')).toBeVisible();
      await expect(page.getByText('Blog')).toBeVisible();
      await expect(page.getByText('Newsletter')).toBeVisible();
      await expect(page.getByText('Instructor')).toBeVisible();
      await expect(page.getByText('Success Stories')).toBeVisible();
      await expect(page.getByText('FAQ')).toBeVisible();
    });

    test('should navigate to hash sections on homepage', async ({ page }) => {
      // Test Why Join link
      await page.getByText('Why Join').click();
      await expect(page).toHaveURL(/#why-join/);
      
      // Test Instructor link
      await page.getByText('Instructor').click();
      await expect(page).toHaveURL(/#instructor/);
      
      // Test Success Stories link
      await page.getByText('Success Stories').click();
      await expect(page).toHaveURL(/#showcase/);
      
      // Test FAQ link
      await page.getByText('FAQ').click();
      await expect(page).toHaveURL(/#faq/);
    });

    test('should navigate to Blog page', async ({ page }) => {
      await page.getByText('Blog').click();
      await expect(page).toHaveURL('/blog');
      await expect(page.getByText('AI Career Blog')).toBeVisible();
    });

    test('should navigate to Newsletter page', async ({ page }) => {
      await page.getByText('Newsletter').click();
      await expect(page).toHaveURL('/newsletter');
      await expect(page.getByText('Download Your Free Copy')).toBeVisible();
    });

    test('should display AI Courses dropdown', async ({ page }) => {
      // Hover over AI Courses to show dropdown
      await page.getByText('AI Courses').hover();
      
      // Check dropdown items are visible
      await expect(page.getByText('AI for Product Managers - Vibe Coding 101')).toBeVisible();
      await expect(page.getByText('AI for Marketing Professionals')).toBeVisible();
      await expect(page.getByText('AI for Software Developers')).toBeVisible();
      await expect(page.getByText('AI for Business Leaders')).toBeVisible();
      await expect(page.getByText('AI for Healthcare Professionals')).toBeVisible();
      await expect(page.getByText('AI for Finance Professionals')).toBeVisible();
    });

    test('should navigate to course pages from dropdown', async ({ page }) => {
      // Hover over AI Courses
      await page.getByText('AI Courses').hover();
      
      // Click on first course
      await page.getByText('AI for Product Managers - Vibe Coding 101').click();
      await expect(page).toHaveURL('/course/ai-for-product-managers-vibe-coding-101');
    });

    test('should show hamburger menu on mobile', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      
      // Check hamburger menu is visible
      await expect(page.locator('button[aria-label*="menu"]')).toBeVisible();
      
      // Click hamburger menu
      await page.locator('button[aria-label*="menu"]').click();
      
      // Check navigation items are visible in mobile menu
      await expect(page.getByText('Why Join')).toBeVisible();
      await expect(page.getByText('Blog')).toBeVisible();
      await expect(page.getByText('Newsletter')).toBeVisible();
    });
  });

  test.describe('Footer Navigation', () => {
    test('should display all footer navigation items', async ({ page }) => {
      // Scroll to footer
      await page.locator('footer').scrollIntoViewIfNeeded();
      
      // Check footer navigation items
      await expect(page.getByText('Why Join')).toBeVisible();
      await expect(page.getByText('AI Courses')).toBeVisible();
      await expect(page.getByText('Blog')).toBeVisible();
      await expect(page.getByText('Newsletter')).toBeVisible();
      await expect(page.getByText('Instructor')).toBeVisible();
      await expect(page.getByText('Success Stories')).toBeVisible();
      await expect(page.getByText('FAQ')).toBeVisible();
    });

    test('should navigate to sections from footer', async ({ page }) => {
      // Scroll to footer
      await page.locator('footer').scrollIntoViewIfNeeded();
      
      // Test Why Join link
      await page.locator('footer').getByText('Why Join').click();
      await expect(page).toHaveURL(/#why-join/);
      
      // Test FAQ link
      await page.locator('footer').getByText('FAQ').click();
      await expect(page).toHaveURL(/#faq/);
    });

    test('should navigate to Blog from footer', async ({ page }) => {
      // Scroll to footer
      await page.locator('footer').scrollIntoViewIfNeeded();
      
      await page.locator('footer').getByText('Blog').click();
      await expect(page).toHaveURL('/blog');
      await expect(page.getByText('AI Career Blog')).toBeVisible();
    });

    test('should navigate to Newsletter from footer', async ({ page }) => {
      // Scroll to footer
      await page.locator('footer').scrollIntoViewIfNeeded();
      
      await page.locator('footer').getByText('Newsletter').click();
      await expect(page).toHaveURL('/newsletter');
      await expect(page.getByText('Download Your Free Copy')).toBeVisible();
    });

    test('should display footer content', async ({ page }) => {
      // Scroll to footer
      await page.locator('footer').scrollIntoViewIfNeeded();
      
      // Check footer content
      await expect(page.getByText('AI Jedi')).toBeVisible();
      await expect(page.getByText('Co-Organizers')).toBeVisible();
      await expect(page.getByText('Hyperionsoft Consulting')).toBeVisible();
    });
  });

  test.describe('Chinese Navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/zh-tw');
    });

    test('should display Chinese navigation items', async ({ page }) => {
      await expect(page.getByText('為何加入')).toBeVisible();
      await expect(page.getByText('AI 課程')).toBeVisible();
      await expect(page.getByText('部落格')).toBeVisible();
      await expect(page.getByText('電子報')).toBeVisible();
      await expect(page.getByText('講師')).toBeVisible();
      await expect(page.getByText('成功案例')).toBeVisible();
      await expect(page.getByText('常見問題')).toBeVisible();
    });

    test('should navigate to Chinese Blog page', async ({ page }) => {
      await page.getByText('部落格').click();
      await expect(page).toHaveURL('/zh-tw/blog');
      await expect(page.getByText('AI Career Blog')).toBeVisible();
    });

    test('should navigate to Chinese Newsletter page', async ({ page }) => {
      await page.getByText('電子報').click();
      await expect(page).toHaveURL('/zh-tw/newsletter');
      await expect(page.getByText('免費下載')).toBeVisible();
    });

    test('should display Chinese footer navigation', async ({ page }) => {
      // Scroll to footer
      await page.locator('footer').scrollIntoViewIfNeeded();
      
      await expect(page.locator('footer').getByText('為何加入')).toBeVisible();
      await expect(page.locator('footer').getByText('AI 課程')).toBeVisible();
      await expect(page.locator('footer').getByText('部落格')).toBeVisible();
      await expect(page.locator('footer').getByText('電子報')).toBeVisible();
    });

    test('should navigate to Chinese sections from footer', async ({ page }) => {
      // Scroll to footer
      await page.locator('footer').scrollIntoViewIfNeeded();
      
      await page.locator('footer').getByText('部落格').click();
      await expect(page).toHaveURL('/zh-tw/blog');
    });
  });

  test.describe('Cross-page Navigation', () => {
    test('should navigate from Blog to Newsletter', async ({ page }) => {
      // Go to Blog page
      await page.goto('/blog');
      
      // Navigate to Newsletter via header
      await page.getByText('Newsletter').click();
      await expect(page).toHaveURL('/newsletter');
    });

    test('should navigate from Newsletter to Blog', async ({ page }) => {
      // Go to Newsletter page
      await page.goto('/newsletter');
      
      // Navigate to Blog via header
      await page.getByText('Blog').click();
      await expect(page).toHaveURL('/blog');
    });

    test('should navigate from Blog to home page sections', async ({ page }) => {
      // Go to Blog page
      await page.goto('/blog');
      
      // Navigate to FAQ via header
      await page.getByText('FAQ').click();
      await expect(page).toHaveURL('/#faq');
    });

    test('should navigate from Newsletter to home page sections', async ({ page }) => {
      // Go to Newsletter page
      await page.goto('/newsletter');
      
      // Navigate to Why Join via header
      await page.getByText('Why Join').click();
      await expect(page).toHaveURL('/#why-join');
    });
  });

  test.describe('Mobile Navigation', () => {
    test('should work on mobile viewport', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      
      // Check hamburger menu
      await expect(page.locator('button[aria-label*="menu"]')).toBeVisible();
      
      // Open mobile menu
      await page.locator('button[aria-label*="menu"]').click();
      
      // Navigate to Blog
      await page.getByText('Blog').click();
      await expect(page).toHaveURL('/blog');
    });

    test('should navigate to Newsletter on mobile', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      
      // Go to Newsletter page
      await page.goto('/newsletter');
      
      // Check page loads correctly
      await expect(page.getByText('Download Your Free Copy')).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('should have proper ARIA labels', async ({ page }) => {
      // Check hamburger menu has proper aria-label
      const hamburgerButton = page.locator('button[aria-label*="menu"]');
      await expect(hamburgerButton).toBeVisible();
    });

    test('should have proper link attributes', async ({ page }) => {
      // Check navigation links have proper href attributes
      const blogLink = page.getByText('Blog');
      await expect(blogLink).toHaveAttribute('href', '/blog');
      
      const newsletterLink = page.getByText('Newsletter');
      await expect(newsletterLink).toHaveAttribute('href', '/newsletter');
    });

    test('should be keyboard navigable', async ({ page }) => {
      // Test keyboard navigation
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      
      // Focus should be on a navigation element
      const focusedElement = page.locator(':focus');
      await expect(focusedElement).toBeVisible();
    });
  });
});
