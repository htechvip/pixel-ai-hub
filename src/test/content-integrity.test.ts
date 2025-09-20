import { describe, it, expect } from 'vitest'
import { englishContent, zhContent } from '../config/content'

/**
 * Test suite for content integrity
 * Ensures content structure is valid and consistent
 */
describe('Content Integrity', () => {
  describe('English Content', () => {
    it('should have all required course properties', () => {
      Object.entries(englishContent.courses).forEach(([courseId, course]) => {
        expect(course.title, `Course ${courseId} should have a title`).toBeDefined();
        expect(course.description, `Course ${courseId} should have a description`).toBeDefined();
        expect(course.instructor, `Course ${courseId} should have an instructor`).toBeDefined();
        expect(course.rating, `Course ${courseId} should have a rating`).toBeDefined();
        expect(course.ratingNum, `Course ${courseId} should have a rating number`).toBeDefined();
        expect(course.duration, `Course ${courseId} should have a duration`).toBeDefined();
        expect(course.level, `Course ${courseId} should have a level`).toBeDefined();
        expect(course.features, `Course ${courseId} should have features`).toBeDefined();
        expect(course.whatYouWillLearn, `Course ${courseId} should have learning outcomes`).toBeDefined();
        expect(course.curriculum, `Course ${courseId} should have a curriculum`).toBeDefined();
      });
    });

    it('should have valid rating values', () => {
      Object.entries(englishContent.courses).forEach(([courseId, course]) => {
        expect(course.rating, `Course ${courseId} rating should be a number`).toBeTypeOf('number');
        expect(course.rating, `Course ${courseId} rating should be between 0 and 5`).toBeGreaterThanOrEqual(0);
        expect(course.rating, `Course ${courseId} rating should be between 0 and 5`).toBeLessThanOrEqual(5);
        
        expect(course.ratingNum, `Course ${courseId} rating number should be a number`).toBeTypeOf('number');
        expect(course.ratingNum, `Course ${courseId} rating number should be positive`).toBeGreaterThan(0);
      });
    });

    it('should have valid level values', () => {
      const validLevels = ['Beginner', 'Intermediate', 'Advanced'];
      
      Object.entries(englishContent.courses).forEach(([courseId, course]) => {
        expect(validLevels, `Course ${courseId} should have a valid level`).toContain(course.level);
      });
    });

    it('should have reviews with valid properties', () => {
      Object.entries(englishContent.courses).forEach(([courseId, course]) => {
        if (course.reviews) {
          course.reviews.forEach((review, index) => {
            expect(review.name, `Course ${courseId} review ${index} should have a name`).toBeDefined();
            expect(review.rating, `Course ${courseId} review ${index} should have a rating`).toBeDefined();
            expect(review.comment, `Course ${courseId} review ${index} should have a comment`).toBeDefined();
            expect(review.timeAgo, `Course ${courseId} review ${index} should have a time ago`).toBeDefined();
            
            expect(review.rating, `Course ${courseId} review ${index} rating should be between 1 and 5`).toBeGreaterThanOrEqual(1);
            expect(review.rating, `Course ${courseId} review ${index} rating should be between 1 and 5`).toBeLessThanOrEqual(5);
          });
        }
      });
    });

    it('should have curriculum with valid structure', () => {
      Object.entries(englishContent.courses).forEach(([courseId, course]) => {
        course.curriculum.forEach((section, sectionIndex) => {
          expect(section.section, `Course ${courseId} curriculum section ${sectionIndex} should have a section`).toBeDefined();
          expect(section.lessons, `Course ${courseId} curriculum section ${sectionIndex} should have lessons`).toBeDefined();
          
          section.lessons.forEach((lesson, lessonIndex) => {
            expect(lesson.title, `Course ${courseId} curriculum section ${sectionIndex} lesson ${lessonIndex} should have a title`).toBeDefined();
            expect(lesson.type, `Course ${courseId} curriculum section ${sectionIndex} lesson ${lessonIndex} should have a type`).toBeDefined();
            
            const validTypes = ['video', 'quiz', 'exercise', 'reading', 'project'];
            expect(validTypes, `Course ${courseId} curriculum section ${sectionIndex} lesson ${lessonIndex} should have a valid type`).toContain(lesson.type);
          });
        });
      });
    });
  });

  describe('Chinese Content', () => {
    it('should have all required course properties', () => {
      Object.entries(zhContent.courses).forEach(([courseId, course]) => {
        expect(course.title, `Course ${courseId} should have a title`).toBeDefined();
        expect(course.description, `Course ${courseId} should have a description`).toBeDefined();
        expect(course.instructor, `Course ${courseId} should have an instructor`).toBeDefined();
        expect(course.rating, `Course ${courseId} should have a rating`).toBeDefined();
        expect(course.ratingNum, `Course ${courseId} should have a rating number`).toBeDefined();
        expect(course.duration, `Course ${courseId} should have a duration`).toBeDefined();
        expect(course.level, `Course ${courseId} should have a level`).toBeDefined();
        expect(course.features, `Course ${courseId} should have features`).toBeDefined();
        expect(course.whatYouWillLearn, `Course ${courseId} should have learning outcomes`).toBeDefined();
        expect(course.curriculum, `Course ${courseId} should have a curriculum`).toBeDefined();
      });
    });

    it('should have same course IDs as English content', () => {
      const englishCourseIds = Object.keys(englishContent.courses);
      const chineseCourseIds = Object.keys(zhContent.courses);
      
      expect(chineseCourseIds, 'Chinese content should have the same course IDs as English content').toEqual(englishCourseIds);
    });

    it('should have valid rating values', () => {
      Object.entries(zhContent.courses).forEach(([courseId, course]) => {
        expect(course.rating, `Course ${courseId} rating should be a number`).toBeTypeOf('number');
        expect(course.rating, `Course ${courseId} rating should be between 0 and 5`).toBeGreaterThanOrEqual(0);
        expect(course.rating, `Course ${courseId} rating should be between 0 and 5`).toBeLessThanOrEqual(5);
        
        expect(course.ratingNum, `Course ${courseId} rating number should be a number`).toBeTypeOf('number');
        expect(course.ratingNum, `Course ${courseId} rating number should be positive`).toBeGreaterThan(0);
      });
    });
  });

  describe('Content Consistency', () => {
    it('should have same number of courses in both languages', () => {
      const englishCourseCount = Object.keys(englishContent.courses).length;
      const chineseCourseCount = Object.keys(zhContent.courses).length;
      
      expect(chineseCourseCount, 'Chinese content should have the same number of courses as English content').toBe(englishCourseCount);
    });

    it('should have same rating values in both languages', () => {
      Object.keys(englishContent.courses).forEach(courseId => {
        const englishCourse = englishContent.courses[courseId];
        const chineseCourse = zhContent.courses[courseId];
        
        expect(chineseCourse.rating, `Course ${courseId} should have the same rating in both languages`).toBe(englishCourse.rating);
        expect(chineseCourse.ratingNum, `Course ${courseId} should have the same rating number in both languages`).toBe(englishCourse.ratingNum);
        // Level should be translated in Chinese, not the same as English
        expect(chineseCourse.level, `Course ${courseId} should have a translated level in Chinese`).toBeDefined();
        expect(chineseCourse.level, `Course ${courseId} Chinese level should not be empty`).not.toBe('');
      });
    });

    it('should have same number of reviews in both languages', () => {
      Object.keys(englishContent.courses).forEach(courseId => {
        const englishCourse = englishContent.courses[courseId];
        const chineseCourse = zhContent.courses[courseId];
        
        const englishReviewCount = englishCourse.reviews?.length || 0;
        const chineseReviewCount = chineseCourse.reviews?.length || 0;
        
        expect(chineseReviewCount, `Course ${courseId} should have the same number of reviews in both languages`).toBe(englishReviewCount);
      });
    });
  });
});
