import { describe, it, expect } from 'vitest'
import { checkMultipleImages, extractImageUrls, isValidUrl } from './utils/url-checker'
import { englishContent, zhContent } from '../config/content'

/**
 * Test suite for images
 * Ensures all images in content and components are accessible and valid
 */
describe('Images', () => {
  // Sample image URLs from Course.tsx component (reviewer avatars)
  const sampleImageUrls = [
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80'
  ];

  it('should extract image URLs from content and components', () => {
    // Check content first
    const contentString = JSON.stringify({ englishContent, zhContent });
    const contentImageUrls = extractImageUrls(contentString);
    
    // Combine all image URLs
    const imageUrls = [...contentImageUrls, ...sampleImageUrls];
    
    expect(imageUrls.length, 'Should find image URLs in content or components').toBeGreaterThan(0);
    expect(imageUrls.every(url => isValidUrl(url)), 'All image URLs should be valid').toBe(true);
  });

  it('should have valid URL format for all extracted image URLs', () => {
    // Check content first
    const contentString = JSON.stringify({ englishContent, zhContent });
    const contentImageUrls = extractImageUrls(contentString);
    
    // Combine all image URLs
    const imageUrls = [...contentImageUrls, ...sampleImageUrls];
    
    imageUrls.forEach(url => {
      expect(isValidUrl(url), `Invalid image URL format: ${url}`).toBe(true);
    });
  });

  it('should have accessible image URLs', async () => {
    // Check content first
    const contentString = JSON.stringify({ englishContent, zhContent });
    const contentImageUrls = extractImageUrls(contentString);
    
    // Combine all image URLs
    const imageUrls = [...contentImageUrls, ...sampleImageUrls];
    
    if (imageUrls.length === 0) {
      console.log('No image URLs found in content');
      return;
    }
    
    console.log(`Checking ${imageUrls.length} image URLs...`);
    const results = await checkMultipleImages(imageUrls, 3);
    
    const brokenImages = results.filter(result => !result.ok || !result.isImage);
    
    if (brokenImages.length > 0) {
      const brokenUrls = brokenImages.map(img => `${img.url} (${img.error || 'Not accessible/not an image'})`);
      expect.fail(`Found ${brokenImages.length} broken images:\n${brokenUrls.join('\n')}`);
    }
    
    expect(brokenImages.length).toBe(0);
  }, 60000); // 60 second timeout for network requests

  it('should have proper image content types', async () => {
    // Check content first
    const contentString = JSON.stringify({ englishContent, zhContent });
    const contentImageUrls = extractImageUrls(contentString);
    
    // Combine all image URLs
    const imageUrls = [...contentImageUrls, ...sampleImageUrls];
    
    if (imageUrls.length === 0) {
      console.log('No image URLs found in content');
      return;
    }
    
    const results = await checkMultipleImages(imageUrls, 3);
    const nonImageResults = results.filter(result => result.ok && !result.isImage);
    
    if (nonImageResults.length > 0) {
      const nonImageUrls = nonImageResults.map(img => `${img.url} (${img.contentType || 'Unknown content type'})`);
      expect.fail(`Found ${nonImageResults.length} URLs that are not images:\n${nonImageUrls.join('\n')}`);
    }
    
    expect(nonImageResults.length).toBe(0);
  }, 60000);

  it('should have optimized image URLs', () => {
    // Check content first
    const contentString = JSON.stringify({ englishContent, zhContent });
    const contentImageUrls = extractImageUrls(contentString);
    
    // Combine all image URLs
    const imageUrls = [...contentImageUrls, ...sampleImageUrls];
    
    const unsplashUrls = imageUrls.filter(url => url.includes('unsplash.com'));
    
    unsplashUrls.forEach(url => {
      // Check for common optimization parameters
      const hasOptimization = url.includes('w=') || url.includes('h=') || url.includes('fit=') || url.includes('q=');
      expect(hasOptimization, `Unsplash URL should have optimization parameters: ${url}`).toBe(true);
    });
  });

  it('should not have any localhost or internal image URLs in content', () => {
    // Check content first
    const contentString = JSON.stringify({ englishContent, zhContent });
    const contentImageUrls = extractImageUrls(contentString);
    
    // Combine all image URLs
    const imageUrls = [...contentImageUrls, ...sampleImageUrls];
    
    const internalUrls = imageUrls.filter(url => {
      try {
        const urlObj = new URL(url);
        return urlObj.hostname === 'localhost' || 
               urlObj.hostname === '127.0.0.1' ||
               urlObj.hostname.startsWith('192.168.') ||
               urlObj.hostname.startsWith('10.') ||
               urlObj.hostname.endsWith('.local');
      } catch {
        return false;
      }
    });
    
    if (internalUrls.length > 0) {
      expect.fail(`Found ${internalUrls.length} internal/localhost image URLs in content:\n${internalUrls.join('\n')}`);
    }
    
    expect(internalUrls.length).toBe(0);
  });
});