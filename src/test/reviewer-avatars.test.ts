import { describe, it, expect } from 'vitest'
import { checkMultipleImages, isValidUrl } from './utils/url-checker'
import { englishContent, zhContent } from '../config/content'

/**
 * Test suite for reviewer avatar URLs
 * Ensures all reviewer avatars are accessible and valid images
 */
describe('Reviewer Avatar URLs', () => {
  // Extract all reviewer avatar URLs from the Course.tsx avatar mapping
  const reviewerAvatars: { [key: string]: string } = {
    // AI for Finance Professionals (Course 1) - English & Chinese
    'ai-for-finance-professionals-Sarah Martinez': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-finance-professionals-Mike Chen': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-finance-professionals-Emily Rodriguez': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-finance-professionals-David Kim': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-finance-professionals-Lisa Chen': 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-finance-professionals-Robert Johnson': 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    
    // AI for Marketing Professionals (Course 2) - English & Chinese
    'ai-for-marketing-professionals-Jessica Wu': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-marketing-professionals-Alex Thompson': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-marketing-professionals-Maria Santos': 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-marketing-professionals-Tom Wilson': 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-marketing-professionals-Emily Wang': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-marketing-professionals-Mark Thompson': 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-marketing-professionals-Jennifer Liu': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-marketing-professionals-Alex Chen': 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    
    // AI for Software Developers (Course 3) - English & Chinese
    'ai-for-software-developers-Robert Johnson': 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Linda Chang': 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Carlos Rivera': 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Anna Petrov': 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Tom Wilson': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Kevin Zhang': 'https://images.unsplash.com/photo-1614289371518-722f2615943d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Rachel Park': 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Sandra Lee': 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    
    // AI for Business Leaders (Course 4) - English & Chinese
    'ai-for-business-leaders-Jennifer Adams': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-Marcus Brown': 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-Rachel Green': 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-Kevin Park': 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-Michael Chen': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-Sarah Johnson': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-David Liu': 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-Jennifer Wang': 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    
    // AI for Healthcare Professionals (Course 5) - English & Chinese
    'ai-for-healthcare-professionals-Patricia Davis': 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Steven Miller': 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Diana Lopez': 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Brian Taylor': 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Dr. Anna Wu': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Dr. James Lin': 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Nurse Sarah Chen': 'https://images.unsplash.com/photo-1594824388853-8e1b5d4e8e8a?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Dr. Michael Park': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    
    // AI for Product Managers - Vibe Coding 101 (Course 6) - English & Chinese
    'ai-for-product-managers-vibe-coding-101-Amanda Foster': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-product-managers-vibe-coding-101-James Rodriguez': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-product-managers-vibe-coding-101-Sophie Chen': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-product-managers-vibe-coding-101-Michael Johnson': 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face&auto=format&q=80'
  };

  it('should have valid URL format for all reviewer avatars', () => {
    const avatarUrls = Object.values(reviewerAvatars);
    
    avatarUrls.forEach(url => {
      expect(isValidUrl(url), `Invalid URL format: ${url}`).toBe(true);
    });
  });

  it('should have reasonable number of unique avatar URLs', () => {
    const avatarUrls = Object.values(reviewerAvatars);
    const uniqueUrls = new Set(avatarUrls);
    
    // We expect some duplicate URLs since some reviewers appear in multiple courses
    // But we should have a reasonable number of unique URLs
    expect(uniqueUrls.size, 'Should have a reasonable number of unique avatar URLs').toBeGreaterThan(20);
    expect(uniqueUrls.size, 'Should not have too many duplicate URLs').toBeLessThan(avatarUrls.length);
  });

  it('should have proper Unsplash URL format for all avatars', () => {
    const avatarUrls = Object.values(reviewerAvatars);
    
    avatarUrls.forEach(url => {
      expect(url, `Avatar URL should be from Unsplash: ${url}`).toMatch(/^https:\/\/images\.unsplash\.com\/photo-\d+-\w+\?w=100&h=100&fit=crop&crop=face&auto=format&q=80$/);
    });
  });

  it('should have accessible avatar URLs', async () => {
    const avatarUrls = Object.values(reviewerAvatars);
    const results = await checkMultipleImages(avatarUrls, 3);
    
    const brokenImages = results.filter(result => !result.ok || !result.isImage);
    
    if (brokenImages.length > 0) {
      const brokenUrls = brokenImages.map(img => `${img.url} (${img.error || 'Not accessible'})`);
      expect.fail(`Found ${brokenImages.length} broken avatar images:\n${brokenUrls.join('\n')}`);
    }
    
    expect(brokenImages.length).toBe(0);
  }, 30000); // 30 second timeout for network requests

  it('should have proper image content type for all avatars', async () => {
    const avatarUrls = Object.values(reviewerAvatars);
    const results = await checkMultipleImages(avatarUrls, 3);
    
    const nonImageResults = results.filter(result => result.ok && !result.isImage);
    
    if (nonImageResults.length > 0) {
      const nonImageUrls = nonImageResults.map(img => `${img.url} (${img.contentType || 'Unknown content type'})`);
      expect.fail(`Found ${nonImageResults.length} URLs that are not images:\n${nonImageUrls.join('\n')}`);
    }
    
    expect(nonImageResults.length).toBe(0);
  }, 30000);

  it('should have avatar mappings for all course-reviewer combinations', () => {
    const courseIds = Object.keys(englishContent.courses);
    const allReviewerNames = new Set<string>();
    
    // Collect all unique reviewer names from all courses
    courseIds.forEach(courseId => {
      const course = englishContent.courses[courseId];
      if (course.reviews) {
        course.reviews.forEach(review => {
          allReviewerNames.add(review.name);
        });
      }
    });
    
    // Check if we have mappings for each course-reviewer combination
    const missingMappings: string[] = [];
    courseIds.forEach(courseId => {
      const course = englishContent.courses[courseId];
      if (course.reviews) {
        course.reviews.forEach(review => {
          const mappingKey = `${courseId}-${review.name}`;
          if (!reviewerAvatars[mappingKey]) {
            missingMappings.push(mappingKey);
          }
        });
      }
    });
    
    if (missingMappings.length > 0) {
      expect.fail(`Missing avatar mappings for course-reviewer combinations:\n${missingMappings.join('\n')}`);
    }
    
    expect(missingMappings.length).toBe(0);
  });
});
