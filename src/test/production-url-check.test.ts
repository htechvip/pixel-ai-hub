import { describe, it, expect } from 'vitest'
import { checkImageUrl } from './utils/url-checker'

/**
 * Production URL check tests
 * These tests make real HTTP requests to verify URLs are working
 * Run with: npm run test:production-urls
 */
describe('Production URL Checks', () => {
  // Skip these tests in CI/CD or when mocking is enabled
  const shouldSkipRealChecks = process.env.CI || process.env.NODE_ENV === 'test';
  
  describe.skipIf(shouldSkipRealChecks)('Real URL Accessibility Checks', () => {
    it('should verify Jennifer Liu avatar is accessible', async () => {
      const jenniferLiuUrl = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face&auto=format&q=80';
      
      const result = await checkImageUrl(jenniferLiuUrl);
      
      expect(result.ok, 'Jennifer Liu avatar should be accessible').toBe(true);
      expect(result.isImage, 'Jennifer Liu avatar should be a valid image').toBe(true);
      expect(result.contentType, 'Jennifer Liu avatar should have proper content type').toContain('image/');
    }, 15000);

    it('should verify all critical reviewer avatars are accessible', async () => {
      // List of critical reviewer avatars that must be working
      const criticalAvatars = [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face&auto=format&q=80', // Jennifer Liu (fixed)
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format&q=80', // Sarah Martinez
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80', // Mike Chen
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face&auto=format&q=80', // Jessica Wu
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format&q=80', // Alex Thompson
      ];
      
      const results = await Promise.all(
        criticalAvatars.map(url => checkImageUrl(url))
      );
      
      const brokenImages = results.filter(result => !result.ok || !result.isImage);
      
      if (brokenImages.length > 0) {
        const brokenUrls = brokenImages.map(img => `${img.url} (${img.error || 'Not accessible'})`);
        expect.fail(`Found ${brokenImages.length} broken critical avatar images:\n${brokenUrls.join('\n')}`);
      }
      
      expect(brokenImages.length).toBe(0);
    }, 30000);

    it('should verify old broken URLs are actually broken', async () => {
      // The old broken URL that was causing issues
      const oldBrokenUrl = 'https://images.unsplash.com/photo-1594824388853-8e1b5d4e8e8a?w=100&h=100&fit=crop&crop=face&auto=format&q=80';
      
      const result = await checkImageUrl(oldBrokenUrl);
      
      // This URL should be broken (404 or not accessible)
      expect(result.ok, 'Old broken URL should not be accessible').toBe(false);
    }, 10000);
  });

  describe('URL Format Validation', () => {
    it('should validate Jennifer Liu URL format', () => {
      const jenniferLiuUrl = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face&auto=format&q=80';
      
      // Check URL structure
      expect(jenniferLiuUrl).toMatch(/^https:\/\/images\.unsplash\.com\/photo-\d+-\w+\?/);
      expect(jenniferLiuUrl).toContain('w=100');
      expect(jenniferLiuUrl).toContain('h=100');
      expect(jenniferLiuUrl).toContain('fit=crop');
      expect(jenniferLiuUrl).toContain('crop=face');
      expect(jenniferLiuUrl).toContain('auto=format');
      expect(jenniferLiuUrl).toContain('q=80');
    });

    it('should ensure URL is properly encoded', () => {
      const jenniferLiuUrl = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face&auto=format&q=80';
      
      // URL should be properly encoded
      expect(jenniferLiuUrl).not.toContain(' ');
      expect(jenniferLiuUrl).not.toContain('%20');
      // URL should be valid and not need additional encoding
      expect(() => new URL(jenniferLiuUrl)).not.toThrow();
    });
  });
});
