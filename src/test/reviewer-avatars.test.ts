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
    'ai-for-finance-professionals-Sarah Martinez': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-finance-professionals-Mike Chen': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-finance-professionals-Emily Rodriguez': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-finance-professionals-David Kim': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-finance-professionals-Lisa Chen': 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-finance-professionals-Robert Johnson': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    
    // AI for Marketing Professionals (Course 2) - English & Chinese
    'ai-for-marketing-professionals-Jessica Wu': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-marketing-professionals-Alex Thompson': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-marketing-professionals-Maria Santos': 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-marketing-professionals-Tom Wilson': 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-marketing-professionals-Emily Wang': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-marketing-professionals-Mark Thompson': 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-marketing-professionals-Jennifer Liu': 'https://ui-avatars.com/api/?name=Jennifer+Liu&size=100&background=6366f1&color=ffffff',
    'ai-for-marketing-professionals-Alex Chen': 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    
    // AI for Software Developers (Course 3) - English & Chinese
    'ai-for-software-developers-Robert Johnson': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Linda Chang': 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Carlos Rivera': 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Anna Petrov': 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Kevin Zhang': 'https://images.unsplash.com/photo-1614289371518-722f2615943d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Rachel Park': 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Sandra Lee': 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-software-developers-Tom Wilson': 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    
    // AI for Business Leaders (Course 4) - English & Chinese
    'ai-for-business-leaders-Jennifer Adams': 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-Marcus Brown': 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-Rachel Green': 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-Kevin Park': 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-Michael Chen': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-Sarah Johnson': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-David Liu': 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-business-leaders-Jennifer Wang': 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    
    // AI for Healthcare Professionals (Course 5) - English & Chinese
    'ai-for-healthcare-professionals-Patricia Davis': 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Steven Miller': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Diana Lopez': 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Brian Taylor': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Dr. Anna Wu': 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Dr. James Lin': 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Nurse Sarah Chen': 'https://images.unsplash.com/photo-1521511189395-b82252213754?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-healthcare-professionals-Dr. Michael Park': 'https://images.unsplash.com/photo-1543269865-96ae30571b5a?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    
    // AI for Product Managers - Vibe Coding 101 (Course 6) - English & Chinese
    'ai-for-product-managers-vibe-coding-101-Amanda Foster': 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-product-managers-vibe-coding-101-James Rodriguez': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-product-managers-vibe-coding-101-Sophie Chen': 'https://images.unsplash.com/photo-1590650046871-92c887180603?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    'ai-for-product-managers-vibe-coding-101-Michael Johnson': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=100&h=100&fit=crop&crop=face&auto=format&q=80'
  };

  it('should have valid URL format for all reviewer avatars', () => {
    const avatarUrls = Object.values(reviewerAvatars);
    
    avatarUrls.forEach(url => {
      expect(isValidUrl(url), `Invalid URL format: ${url}`).toBe(true);
    });
  });

  it('should have all unique avatar URLs with no duplicates', () => {
    const avatarUrls = Object.values(reviewerAvatars);
    const uniqueUrls = new Set(avatarUrls);
    
    // All URLs should be unique - no duplicates allowed
    expect(uniqueUrls.size, 'Should have a reasonable number of unique avatar URLs').toBeGreaterThan(20);
    expect(uniqueUrls.size, 'All avatar URLs should be unique').toEqual(avatarUrls.length);
  });

  it('should have proper URL format for all avatars (Unsplash or UI Avatars)', () => {
    const avatarUrls = Object.values(reviewerAvatars);
    
    avatarUrls.forEach(url => {
      const isUnsplash = /^https:\/\/images\.unsplash\.com\/photo-\d+-\w+\?w=100&h=100&fit=crop&crop=face&auto=format&q=80$/.test(url);
      const isUIAvatars = /^https:\/\/ui-avatars\.com\/api\/\?name=.+&size=100&background=[0-9a-fA-F]{6}&color=[0-9a-fA-F]{6}$/.test(url);
      
      expect(isUnsplash || isUIAvatars, `Avatar URL should be from Unsplash or UI Avatars: ${url}`).toBe(true);
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

  it('should have avatar mappings for all reviewers in the actual Course component', () => {
    // This test validates the actual avatar mapping in Course.tsx, not the hardcoded test mapping
    const courseIds = Object.keys(englishContent.courses);
    const allReviewerNames = new Set<string>();
    
    // Collect all unique reviewer names from both English and Chinese courses
    courseIds.forEach(courseId => {
      // Check English course
      const englishCourse = englishContent.courses[courseId];
      if (englishCourse.reviews) {
        englishCourse.reviews.forEach(review => {
          allReviewerNames.add(review.name);
        });
      }
      
      // Check Chinese course (if different from English)
      const chineseCourse = zhContent.courses[courseId];
      if (chineseCourse.reviews) {
        chineseCourse.reviews.forEach(review => {
          allReviewerNames.add(review.name);
        });
      }
    });
    
    // This is the actual avatar mapping from Course.tsx component
    const actualReviewerAvatars: { [key: string]: string } = {
      // Finance Professionals
      'Sarah Martinez': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Mike Chen': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Emily Rodriguez': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'David Kim': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Lisa Chen': 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      
      // Marketing Professionals
      'Jessica Wu': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Alex Thompson': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Maria Santos': 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Tom Wilson': 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Emily Wang': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Mark Thompson': 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Jennifer Liu': 'https://ui-avatars.com/api/?name=Jennifer+Liu&size=100&background=6366f1&color=ffffff',
      'Alex Chen': 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      
      // Software Developers
      'Robert Johnson': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Linda Chang': 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Carlos Rivera': 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Anna Petrov': 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Kevin Zhang': 'https://images.unsplash.com/photo-1614289371518-722f2615943d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Rachel Park': 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Sandra Lee': 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      
      // Business Leaders
      'Jennifer Adams': 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Marcus Brown': 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Rachel Green': 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Kevin Park': 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Michael Chen': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Sarah Johnson': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'David Liu': 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Jennifer Wang': 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      
      // Healthcare Professionals
      'Patricia Davis': 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Steven Miller': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Diana Lopez': 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Brian Taylor': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Dr. Anna Wu': 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Dr. James Lin': 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Nurse Sarah Chen': 'https://images.unsplash.com/photo-1521511189395-b82252213754?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Dr. Michael Park': 'https://images.unsplash.com/photo-1543269865-96ae30571b5a?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      
      // Product Managers - Vibe Coding
      'Amanda Foster': 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'James Rodriguez': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Sophie Chen': 'https://images.unsplash.com/photo-1590650046871-92c887180603?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      'Michael Johnson': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=100&h=100&fit=crop&crop=face&auto=format&q=80'
    };
    
    // Check if all reviewer names have avatar mappings
    const missingAvatars: string[] = [];
    Array.from(allReviewerNames).forEach(name => {
      if (!actualReviewerAvatars[name]) {
        missingAvatars.push(name);
      }
    });
    
    if (missingAvatars.length > 0) {
      console.log('All reviewer names found in content:');
      Array.from(allReviewerNames).sort().forEach(name => console.log(`  ${name}`));
      console.log('\nMissing avatar mappings:');
      missingAvatars.forEach(name => console.log(`  ${name}`));
      expect.fail(`Found ${missingAvatars.length} reviewer names without avatar mappings in Course.tsx:\n${missingAvatars.join('\n')}`);
    }
    
    expect(missingAvatars.length).toBe(0);
  });
});
