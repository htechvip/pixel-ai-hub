import { describe, it, expect } from 'vitest'
import { checkMultipleUrls, extractUrls, isValidUrl } from './utils/url-checker'

/**
 * Comprehensive test suite that extracts and checks ALL URLs from Course.tsx
 * This test will catch broken images that the sample-based tests miss
 */
describe('Comprehensive URL Check', () => {
  
  it('should extract and validate ALL reviewer avatar URLs from Course.tsx', async () => {
    // Read the actual Course.tsx file
    const fs = await import('fs/promises');
    const courseTsxContent = await fs.readFile('/Users/cho3/code/vibecoding/pixel-ai-hub/src/pages/Course.tsx', 'utf-8');
    
    // Extract all URLs from the file
    const allUrls = extractUrls(courseTsxContent);
    
    // Filter to only image URLs (Unsplash URLs)
    const imageUrls = allUrls.filter(url => url.includes('images.unsplash.com'));
    
    console.log(`Found ${imageUrls.length} image URLs in Course.tsx`);
    
    // Validate URL format
    imageUrls.forEach(url => {
      expect(isValidUrl(url), `Invalid URL format: ${url}`).toBe(true);
    });
    
    // Check accessibility of all image URLs
    console.log(`Checking accessibility of ${imageUrls.length} image URLs...`);
    const results = await checkMultipleUrls(imageUrls, 3);
    
    const brokenImages = results.filter(result => !result.ok);
    
    if (brokenImages.length > 0) {
      const brokenUrls = brokenImages.map(img => `${img.url} (${img.error || `Status: ${img.status}`})`);
      expect.fail(`Found ${brokenImages.length} broken image URLs:\n${brokenUrls.join('\n')}`);
    }
    
    expect(brokenImages.length).toBe(0);
  }, 120000); // 2 minute timeout for comprehensive check

  it('should have unique avatar URLs for all course-reviewer combinations', async () => {
    // Read the actual Course.tsx file
    const fs = await import('fs/promises');
    const courseTsxContent = await fs.readFile('/Users/cho3/code/vibecoding/pixel-ai-hub/src/pages/Course.tsx', 'utf-8');
    
    // Extract all URLs from the file
    const allUrls = extractUrls(courseTsxContent);
    
    // Filter to only image URLs (Unsplash URLs)
    const imageUrls = allUrls.filter(url => url.includes('images.unsplash.com'));
    
    // Check for duplicates
    const uniqueUrls = new Set(imageUrls);
    const duplicateCount = imageUrls.length - uniqueUrls.size;
    
    if (duplicateCount > 0) {
      const duplicates = imageUrls.filter((url, index) => imageUrls.indexOf(url) !== index);
      expect.fail(`Found ${duplicateCount} duplicate image URLs:\n${[...new Set(duplicates)].join('\n')}`);
    }
    
    expect(duplicateCount).toBe(0);
  });

  it('should have proper Unsplash optimization parameters for all image URLs', async () => {
    // Read the actual Course.tsx file
    const fs = await import('fs/promises');
    const courseTsxContent = await fs.readFile('/Users/cho3/code/vibecoding/pixel-ai-hub/src/pages/Course.tsx', 'utf-8');
    
    // Extract all URLs from the file
    const allUrls = extractUrls(courseTsxContent);
    
    // Filter to only Unsplash URLs
    const unsplashUrls = allUrls.filter(url => url.includes('images.unsplash.com'));
    
    unsplashUrls.forEach(url => {
      // Check for common optimization parameters
      const hasOptimization = url.includes('w=') || url.includes('h=') || url.includes('fit=') || url.includes('q=');
      expect(hasOptimization, `Unsplash URL should have optimization parameters: ${url}`).toBe(true);
      
      // Check for proper face cropping for avatars
      const hasFaceCrop = url.includes('crop=face');
      expect(hasFaceCrop, `Avatar URL should have face cropping: ${url}`).toBe(true);
    });
  });
});
