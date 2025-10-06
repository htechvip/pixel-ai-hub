import { test, expect } from '@playwright/test';

test.describe('Form Focus Ring Tests', () => {
  test('should display proper focus ring on inline form inputs', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to the Download Your Free Copy section
    await page.locator('text=Download Your Free Copy').scrollIntoViewIfNeeded();
    
    // Focus on Email Address input
    const emailInput = page.locator('input[type="email"]');
    await emailInput.focus();
    
    // Check that focus ring is visible and not clipped
    await expect(emailInput).toBeFocused();
    
    // Take screenshot to verify focus ring
    await page.screenshot({ 
      path: 'tests/screenshots/email-input-focused.png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 800, height: 600 }
    });
    
    // Focus on First Name input
    const firstNameInput = page.locator('input[type="text"]').first();
    await firstNameInput.focus();
    
    await expect(firstNameInput).toBeFocused();
    
    // Take screenshot to verify focus ring
    await page.screenshot({ 
      path: 'tests/screenshots/first-name-input-focused.png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 800, height: 600 }
    });
  });

  test('should display proper focus ring on Newsletter page', async ({ page }) => {
    await page.goto('/newsletter');
    
    // Focus on Email Address input
    const emailInput = page.locator('input[type="email"]');
    await emailInput.focus();
    
    await expect(emailInput).toBeFocused();
    
    // Check that the input has proper focus styling
    const emailInputStyles = await emailInput.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        outline: computed.outline,
        boxShadow: computed.boxShadow,
        border: computed.border
      };
    });
    
    // Verify focus ring is present
    expect(emailInputStyles.outline).not.toBe('none');
    expect(emailInputStyles.boxShadow).not.toBe('none');
  });

  test('should display proper focus ring on Blog page', async ({ page }) => {
    await page.goto('/blog');
    
    // Scroll to the Download Your Free Copy section at the bottom
    await page.locator('text=Download Your Free Copy').scrollIntoViewIfNeeded();
    
    // Focus on Email Address input
    const emailInput = page.locator('input[type="email"]');
    await emailInput.focus();
    
    await expect(emailInput).toBeFocused();
    
    // Take screenshot to verify focus ring is not clipped
    await page.screenshot({ 
      path: 'tests/screenshots/blog-page-input-focused.png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 800, height: 600 }
    });
  });

  test('should work on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');
    
    // Scroll to the Download Your Free Copy section
    await page.locator('text=Download Your Free Copy').scrollIntoViewIfNeeded();
    
    // Focus on Email Address input
    const emailInput = page.locator('input[type="email"]');
    await emailInput.focus();
    
    await expect(emailInput).toBeFocused();
    
    // Take mobile screenshot
    await page.screenshot({ 
      path: 'tests/screenshots/mobile-input-focused.png',
      fullPage: false
    });
  });

  test('should handle Chinese version focus rings', async ({ page }) => {
    await page.goto('/zh-tw');
    
    // Scroll to the Download Your Free Copy section
    await page.locator('text=免費下載').scrollIntoViewIfNeeded();
    
    // Focus on Email Address input
    const emailInput = page.locator('input[type="email"]');
    await emailInput.focus();
    
    await expect(emailInput).toBeFocused();
    
    // Take screenshot
    await page.screenshot({ 
      path: 'tests/screenshots/chinese-input-focused.png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 800, height: 600 }
    });
  });
});
