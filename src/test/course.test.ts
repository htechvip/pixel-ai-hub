import { describe, it, expect } from 'vitest'
import { englishContent, zhContent } from '../config/content'
// Import Course component to trigger test re-runs when Course.tsx changes
import '../pages/Course'

/**
 * Test suite for Course component functionality
 * This ensures Course.tsx changes trigger test re-runs and validates course data integrity
 */
describe('Course Component Data', () => {
  it('should have valid course data for AI for Finance Professionals', () => {
    const courseId = 'ai-for-finance-professionals'
    const englishCourse = englishContent.courses[courseId]
    const chineseCourse = zhContent.courses[courseId]
    
    // Verify English course exists and has required fields
    expect(englishCourse).toBeDefined()
    expect(englishCourse.title).toBeDefined()
    expect(englishCourse.description).toBeDefined()
    expect(englishCourse.price).toBeDefined()
    expect(englishCourse.originalPrice).toBeDefined()
    expect(englishCourse.features).toBeInstanceOf(Array)
    expect(englishCourse.features.length).toBeGreaterThan(0)
    
    // Verify Chinese course exists and has required fields
    expect(chineseCourse).toBeDefined()
    expect(chineseCourse.title).toBeDefined()
    expect(chineseCourse.description).toBeDefined()
    expect(chineseCourse.price).toBeDefined()
    expect(chineseCourse.originalPrice).toBeDefined()
  })

  it('should have consistent pricing across all courses', () => {
    const courseIds = Object.keys(englishContent.courses)
    
    courseIds.forEach(courseId => {
      const englishCourse = englishContent.courses[courseId]
      const chineseCourse = zhContent.courses[courseId]
      
      // Verify pricing format
      expect(englishCourse.price).toMatch(/^\$\d+$/)
      expect(englishCourse.originalPrice).toMatch(/^\$\d+$/)
      
      // Verify Chinese course has same pricing
      expect(chineseCourse.price).toBe(englishCourse.price)
      expect(chineseCourse.originalPrice).toBe(englishCourse.originalPrice)
    })
  })

  it('should have curriculum data for all courses', () => {
    const courseIds = Object.keys(englishContent.courses)
    
    courseIds.forEach(courseId => {
      const englishCourse = englishContent.courses[courseId]
      const chineseCourse = zhContent.courses[courseId]
      
      // Verify curriculum exists and has content
      expect(englishCourse.curriculum).toBeInstanceOf(Array)
      expect(englishCourse.curriculum.length).toBeGreaterThan(0)
      
      expect(chineseCourse.curriculum).toBeInstanceOf(Array)
      expect(chineseCourse.curriculum.length).toBeGreaterThan(0)
      
      // Verify each curriculum section has lessons
      englishCourse.curriculum.forEach((section, index) => {
        expect(section.section, `Course ${courseId} section ${index} should have a title`).toBeDefined()
        expect(section.lessons, `Course ${courseId} section ${index} should have lessons`).toBeInstanceOf(Array)
        expect(section.lessons.length, `Course ${courseId} section ${index} should have at least one lesson`).toBeGreaterThan(0)
        
        section.lessons.forEach((lesson, lessonIndex) => {
          expect(lesson.title, `Course ${courseId} section ${index} lesson ${lessonIndex} should have a title`).toBeDefined()
          expect(lesson.duration, `Course ${courseId} section ${index} lesson ${lessonIndex} should have duration`).toBeDefined()
          expect(lesson.type, `Course ${courseId} section ${index} lesson ${lessonIndex} should have type`).toBeDefined()
        })
      })
    })
  })

  it('should have reviews for all courses', () => {
    const courseIds = Object.keys(englishContent.courses)
    
    courseIds.forEach(courseId => {
      const englishCourse = englishContent.courses[courseId]
      const chineseCourse = zhContent.courses[courseId]
      
      // Verify reviews exist
      expect(englishCourse.reviews, `English course ${courseId} should have reviews`).toBeInstanceOf(Array)
      expect(englishCourse.reviews!.length, `English course ${courseId} should have at least one review`).toBeGreaterThan(0)
      
      expect(chineseCourse.reviews, `Chinese course ${courseId} should have reviews`).toBeInstanceOf(Array)
      expect(chineseCourse.reviews!.length, `Chinese course ${courseId} should have at least one review`).toBeGreaterThan(0)
      
      // Verify each review has required fields
      englishCourse.reviews!.forEach((review, index) => {
        expect(review.name, `Course ${courseId} English review ${index} should have name`).toBeDefined()
        expect(review.rating, `Course ${courseId} English review ${index} should have rating`).toBeGreaterThan(0)
        expect(review.rating, `Course ${courseId} English review ${index} rating should be <= 5`).toBeLessThanOrEqual(5)
        expect(review.comment, `Course ${courseId} English review ${index} should have comment`).toBeDefined()
        expect(review.timeAgo, `Course ${courseId} English review ${index} should have timeAgo`).toBeDefined()
      })
      
      chineseCourse.reviews!.forEach((review, index) => {
        expect(review.name, `Course ${courseId} Chinese review ${index} should have name`).toBeDefined()
        expect(review.rating, `Course ${courseId} Chinese review ${index} should have rating`).toBeGreaterThan(0)
        expect(review.rating, `Course ${courseId} Chinese review ${index} rating should be <= 5`).toBeLessThanOrEqual(5)
        expect(review.comment, `Course ${courseId} Chinese review ${index} should have comment`).toBeDefined()
        expect(review.timeAgo, `Course ${courseId} Chinese review ${index} should have timeAgo`).toBeDefined()
      })
    })
  })

  it('should have proper course metadata', () => {
    const courseIds = Object.keys(englishContent.courses)
    
    courseIds.forEach(courseId => {
      const englishCourse = englishContent.courses[courseId]
      const chineseCourse = zhContent.courses[courseId]
      
      // Verify required metadata fields
      expect(englishCourse.instructor).toBeDefined()
      expect(englishCourse.rating).toBeGreaterThan(0)
      expect(englishCourse.rating).toBeLessThanOrEqual(5)
      expect(englishCourse.ratingNum).toBeGreaterThan(0)
      expect(englishCourse.students).toBeGreaterThan(0)
      expect(englishCourse.duration).toBeDefined()
      expect(englishCourse.level).toBeDefined()
      expect(englishCourse.lastUpdated).toBeDefined()
      expect(englishCourse.language).toBeDefined()
      
      // Verify Chinese course has same metadata structure
      expect(chineseCourse.instructor).toBeDefined()
      expect(chineseCourse.rating).toBeGreaterThan(0)
      expect(chineseCourse.rating).toBeLessThanOrEqual(5)
      expect(chineseCourse.ratingNum).toBeGreaterThan(0)
      expect(chineseCourse.students).toBeGreaterThan(0)
      expect(chineseCourse.duration).toBeDefined()
      expect(chineseCourse.level).toBeDefined()
      expect(chineseCourse.lastUpdated).toBeDefined()
      expect(chineseCourse.language).toBeDefined()
    })
  })
})