import { describe, it, expect } from 'vitest'
import { checkMultipleUrls, extractUrls, isValidUrl } from './utils/url-checker'
import { englishContent, zhContent } from '../config/content'

/**
 * Test suite for external links
 * Ensures all external URLs in components and content are accessible
 */
describe('External Links', () => {
  // Known external domains that should be accessible
  const externalDomains = [
    'hyperionsoft.com',
    'unsplash.com',
    'youtube.com',
    'vimeo.com',
    'github.com',
    'linkedin.com',
    'twitter.com',
    'facebook.com',
    'instagram.com'
  ];

  // Sample URLs from Course.tsx component (reviewer avatars and canonical URLs)
  const sampleComponentUrls = [
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'https://aijedi.hyperionsoft.com/course/ai-for-finance-professionals'
  ];

  it('should extract URLs from content and components', () => {
    // Check content first
    const contentString = JSON.stringify({ englishContent, zhContent });
    const contentUrls = extractUrls(contentString);
    
    // Combine all URLs
    const allUrls = [...contentUrls, ...sampleComponentUrls];
    
    expect(allUrls.length, 'Should find URLs in content or components').toBeGreaterThan(0);
    expect(allUrls.every(url => isValidUrl(url)), 'All URLs should be valid').toBe(true);
  });

  it('should have valid URL format for all extracted URLs', () => {
    // Check content first
    const contentString = JSON.stringify({ englishContent, zhContent });
    const contentUrls = extractUrls(contentString);
    
    // Combine all URLs
    const allUrls = [...contentUrls, ...sampleComponentUrls];
    
    allUrls.forEach(url => {
      expect(isValidUrl(url), `Invalid URL format: ${url}`).toBe(true);
    });
  });

  it('should have accessible external links', async () => {
    // Check content first
    const contentString = JSON.stringify({ englishContent, zhContent });
    const contentUrls = extractUrls(contentString);
    
    // Combine all URLs
    const urls = [...contentUrls, ...sampleComponentUrls];
    
    // Filter to only external URLs (not localhost or relative)
    const externalUrls = urls.filter(url => {
      try {
        const urlObj = new URL(url);
        return urlObj.hostname !== 'localhost' && 
               urlObj.hostname !== '127.0.0.1' &&
               !urlObj.hostname.startsWith('192.168.') &&
               !urlObj.hostname.startsWith('10.');
      } catch {
        return false;
      }
    });
    
    if (externalUrls.length === 0) {
      console.log('No external URLs found in content');
      return;
    }
    
    console.log(`Checking ${externalUrls.length} external URLs...`);
    const results = await checkMultipleUrls(externalUrls, 3);
    
    const brokenLinks = results.filter(result => !result.ok);
    
    if (brokenLinks.length > 0) {
      const brokenUrls = brokenLinks.map(link => `${link.url} (${link.error || `Status: ${link.status}`})`);
      expect.fail(`Found ${brokenLinks.length} broken external links:\n${brokenUrls.join('\n')}`);
    }
    
    expect(brokenLinks.length).toBe(0);
  }, 60000); // 60 second timeout for network requests

  it('should have proper HTTPS URLs for external links', () => {
    // Check content first
    const contentString = JSON.stringify({ englishContent, zhContent });
    const contentUrls = extractUrls(contentString);
    
    // Combine all URLs
    const urls = [...contentUrls, ...sampleComponentUrls];
    
    const externalUrls = urls.filter(url => {
      try {
        const urlObj = new URL(url);
        return urlObj.hostname !== 'localhost' && 
               urlObj.hostname !== '127.0.0.1' &&
               !urlObj.hostname.startsWith('192.168.') &&
               !urlObj.hostname.startsWith('10.');
      } catch {
        return false;
      }
    });
    
    const nonHttpsUrls = externalUrls.filter(url => !url.startsWith('https://'));
    
    if (nonHttpsUrls.length > 0) {
      expect.fail(`Found ${nonHttpsUrls.length} non-HTTPS external URLs:\n${nonHttpsUrls.join('\n')}`);
    }
    
    expect(nonHttpsUrls.length).toBe(0);
  });

  it('should not have any localhost or internal URLs in content', () => {
    // Check content first
    const contentString = JSON.stringify({ englishContent, zhContent });
    const contentUrls = extractUrls(contentString);
    
    // Combine all URLs
    const urls = [...contentUrls, ...sampleComponentUrls];
    
    const internalUrls = urls.filter(url => {
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
      expect.fail(`Found ${internalUrls.length} internal/localhost URLs in content:\n${internalUrls.join('\n')}`);
    }
    
    expect(internalUrls.length).toBe(0);
  });
});