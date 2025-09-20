import { describe, it, expect } from 'vitest'
import { englishContent, zhContent } from '../config/content'

/**
 * Test suite for navigation and routing
 * Ensures navigation structure is valid and consistent
 */
describe('Navigation', () => {
  describe('English Navigation', () => {
    it('should have valid navigation structure', () => {
      expect(englishContent.header.navigation, 'English content should have navigation').toBeDefined();
      expect(Array.isArray(englishContent.header.navigation), 'Navigation should be an array').toBe(true);
      expect(englishContent.header.navigation.length, 'Navigation should not be empty').toBeGreaterThan(0);
    });

    it('should have valid navigation items', () => {
      englishContent.header.navigation.forEach((item, index) => {
        expect(item.label, `Navigation item ${index} should have a label`).toBeDefined();
        expect(item.href, `Navigation item ${index} should have an href`).toBeDefined();
        
        if (item.children) {
          expect(Array.isArray(item.children), `Navigation item ${index} children should be an array`).toBe(true);
          
          item.children.forEach((child, childIndex) => {
            expect(child.label, `Navigation item ${index} child ${childIndex} should have a label`).toBeDefined();
            expect(child.href, `Navigation item ${index} child ${childIndex} should have an href`).toBeDefined();
          });
        }
      });
    });

    it('should have AI Courses dropdown with valid course links', () => {
      const aiCoursesItem = englishContent.header.navigation.find(item => item.label === 'AI Courses');
      expect(aiCoursesItem, 'Should have AI Courses navigation item').toBeDefined();
      
      if (aiCoursesItem?.children) {
        const courseIds = Object.keys(englishContent.courses);
        
        aiCoursesItem.children.forEach((child, index) => {
          expect(child.label, `AI Courses child ${index} should have a label`).toBeDefined();
          expect(child.href, `AI Courses child ${index} should have an href`).toBeDefined();
          
          // Check if the href corresponds to a valid course (either hash link or course page link)
          if (child.href.startsWith('/course/')) {
            const courseIdFromHref = child.href.replace('/course/', '');
            expect(courseIds, `AI Courses child ${index} should link to a valid course`).toContain(courseIdFromHref);
          } else if (child.href.startsWith('#')) {
            // Hash links are also valid for navigation
            expect(child.href, `AI Courses child ${index} should have a valid hash link`).toMatch(/^#[a-z0-9-]+$/);
          }
        });
      }
    });

    it('should have unique navigation item labels', () => {
      const labels = englishContent.header.navigation.map(item => item.label);
      const uniqueLabels = new Set(labels);
      
      expect(uniqueLabels.size, 'All navigation item labels should be unique').toBe(labels.length);
    });
  });

  describe('Chinese Navigation', () => {
    it('should have valid navigation structure', () => {
      expect(zhContent.header.navigation, 'Chinese content should have navigation').toBeDefined();
      expect(Array.isArray(zhContent.header.navigation), 'Navigation should be an array').toBe(true);
      expect(zhContent.header.navigation.length, 'Navigation should not be empty').toBeGreaterThan(0);
    });

    it('should have AI Courses dropdown with valid course links', () => {
      const aiCoursesItem = zhContent.header.navigation.find(item => item.label === 'AI 課程');
      expect(aiCoursesItem, 'Should have AI 課程 navigation item').toBeDefined();
      
      if (aiCoursesItem?.children) {
        const courseIds = Object.keys(zhContent.courses);
        
        aiCoursesItem.children.forEach((child, index) => {
          expect(child.label, `AI 課程 child ${index} should have a label`).toBeDefined();
          expect(child.href, `AI 課程 child ${index} should have an href`).toBeDefined();
          
          // Check if the href corresponds to a valid course (either hash link or course page link)
          if (child.href.startsWith('/course/')) {
            const courseIdFromHref = child.href.replace('/course/', '');
            expect(courseIds, `AI 課程 child ${index} should link to a valid course`).toContain(courseIdFromHref);
          } else if (child.href.startsWith('#')) {
            // Hash links are also valid for navigation
            expect(child.href, `AI 課程 child ${index} should have a valid hash link`).toMatch(/^#[a-z0-9-]+$/);
          }
        });
      }
    });

    it('should have same number of navigation items as English', () => {
      const englishNavCount = englishContent.header.navigation.length;
      const chineseNavCount = zhContent.header.navigation.length;
      
      expect(chineseNavCount, 'Chinese navigation should have the same number of items as English').toBe(englishNavCount);
    });
  });

  describe('Course URLs', () => {
    it('should have valid course ID format', () => {
      const courseIds = Object.keys(englishContent.courses);
      
      courseIds.forEach(courseId => {
        expect(courseId, `Course ID ${courseId} should be lowercase with hyphens`).toMatch(/^[a-z0-9-]+$/);
        expect(courseId, `Course ID ${courseId} should not start or end with hyphen`).not.toMatch(/^-|-$/);
      });
    });

    it('should have unique course IDs', () => {
      const courseIds = Object.keys(englishContent.courses);
      const uniqueIds = new Set(courseIds);
      
      expect(uniqueIds.size, 'All course IDs should be unique').toBe(courseIds.length);
    });

    it('should have consistent course IDs between languages', () => {
      const englishCourseIds = Object.keys(englishContent.courses);
      const chineseCourseIds = Object.keys(zhContent.courses);
      
      expect(chineseCourseIds, 'Course IDs should be the same in both languages').toEqual(englishCourseIds);
    });
  });

  describe('Hash Links', () => {
    it('should have valid hash link format', () => {
      const allNavItems = [
        ...englishContent.header.navigation,
        ...englishContent.header.navigation.flatMap(item => item.children || [])
      ];
      
      const hashLinks = allNavItems.filter(item => item.href.startsWith('#'));
      
      hashLinks.forEach(item => {
        expect(item.href, `Hash link ${item.href} should start with #`).toMatch(/^#/);
        expect(item.href, `Hash link ${item.href} should be lowercase`).toMatch(/^#[a-z0-9-]+$/);
      });
    });

    it('should have unique hash link targets', () => {
      const allNavItems = [
        ...englishContent.header.navigation,
        ...englishContent.header.navigation.flatMap(item => item.children || [])
      ];
      
      const hashLinks = allNavItems.filter(item => item.href.startsWith('#'));
      const hashTargets = hashLinks.map(item => item.href);
      const uniqueTargets = new Set(hashTargets);
      
      expect(uniqueTargets.size, 'All hash link targets should be unique').toBe(hashTargets.length);
    });
  });
});
