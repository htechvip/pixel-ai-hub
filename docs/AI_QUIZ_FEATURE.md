# AI Career Readiness Quiz - Feature Documentation

## Overview
An interactive 12-question quiz that assesses users' AI career readiness and provides personalized recommendations based on their role, experience, and goals.

## Features

### 1. **Interactive Quiz Flow**
- 12 carefully crafted questions covering:
  - Current role (Finance, Marketing, Healthcare, Software, Product, Business Leader)
  - AI tool usage frequency and familiarity
  - Prompt engineering confidence
  - Career goals (promotion, raise, leadership)
  - Time spent on repetitive tasks
  - Automation experience
  - Workplace AI adoption
  - Current challenges with AI
  - Productivity impact
  - Definition of AI mastery

### 2. **Smart Scoring System**
- Each answer has a weighted score (0-10 points)
- Total score calculated out of maximum possible
- Converted to percentage and 0-10 scale
- Example: 65/100 points = 65% = 6.5/10 readiness score

### 3. **Personalized Results**
Results page includes:
- **Overall Score**: X/10 with percentage
- **Proficiency Level**: Beginner, Intermediate, Advanced, or Expert
- **Gaps Identified**: Specific areas for improvement
- **Personalized Recommendations**: Tailored learning path
- **Course Recommendation**: Matched to user's role and level

### 4. **Data Collection**
Quiz captures:
- User's professional role/category
- Current AI proficiency level
- Career goals and challenges
- Email and name (for follow-up)

### 5. **Email Integration**
- Integrates with MailerLite API
- Sends custom fields with subscriber:
  - `quiz_score`: User's score (0-10)
  - `quiz_level`: Beginner/Intermediate/Advanced/Expert
  - `career_role`: Finance/Marketing/Healthcare/etc.
  - `quiz_date`: Date quiz was taken
- Triggers personalized email sequence based on score/role

## User Flow

### Step 1: Landing Page (`/ai-quiz`)
- Hero section explaining the quiz
- Social proof (9,432+ professionals)
- What users will discover
- Clear CTA to start quiz

### Step 2: Quiz Questions (12 questions)
- Progress bar showing completion
- One question at a time
- Radio button selection
- Back/Next navigation
- Disabled Next button until answer selected

### Step 3: Results Page
- Score display with visual feedback
- Level assessment
- Gaps identified
- Personalized recommendations
- Course recommendation based on role
- Email capture form for detailed report

### Step 4: Email Follow-up
- Subscriber added to MailerLite with custom fields
- Triggers automated email sequence:
  - Immediate: Quiz results PDF
  - Day 1: Personalized learning path
  - Day 3: Recommended tools for their role
  - Weekly: AI tips and strategies

## Scoring Algorithm

### Level Determination
```
0-3 points  = Beginner (0-30%)
4-6 points  = Intermediate (31-60%)
7-8 points  = Advanced (61-80%)
9-10 points = Expert (81-100%)
```

### Personalized Recommendations by Level

**Beginner (0-30%)**:
- Start with ChatGPT basics
- Learn prompt engineering fundamentals
- Explore role-specific AI applications
- Focus on simple use cases

**Intermediate (31-60%)**:
- Develop daily AI habits
- Learn advanced prompting techniques
- Build first automated workflow
- Study industry case studies

**Advanced (61-80%)**:
- Position as internal AI expert
- Build comprehensive automation systems
- Share knowledge with colleagues
- Leverage for career advancement

**Expert (81-100%)**:
- Mentor others on AI adoption
- Share workflows publicly
- Explore AI leadership roles
- Build personal brand around AI

## Technical Implementation

### Files Created
- `/src/components/AICareerQuiz.tsx` - Quiz component
- `/src/pages/AIQuiz.tsx` - Quiz landing page
- `/src/App.tsx` - Added `/ai-quiz` route

### Dependencies
Uses existing components:
- `Button`, `Card`, `Input`, `Label` from shadcn/ui
- `RadioGroup` for answer selection
- `Progress` for completion bar
- Lucide icons for visual elements

### State Management
```tsx
const [currentQuestion, setCurrentQuestion] = useState(0);
const [answers, setAnswers] = useState<Record<string, string>>({});
const [showResults, setShowResults] = useState(false);
const [email, setEmail] = useState("");
const [firstName, setFirstName] = useState("");
```

### MailerLite Integration
Submits to same endpoint as newsletter signup:
```tsx
fetch("https://connect.mailerlite.com/api/subscribers", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email,
    fields: {
      name: firstName,
      quiz_score: scoreData.outOf10.toString(),
      quiz_level: level,
      career_role: role,
      quiz_date: new Date().toISOString().split("T")[0]
    },
    groups: [groupId],
    status: "unconfirmed",
  }),
});
```

## Marketing Use Cases

### 1. **Lead Qualification**
- Identify serious prospects (high scorers looking for advancement)
- Segment by role and proficiency level
- Personalize follow-up messaging

### 2. **Course Matching**
- Automatically recommend appropriate course
- Show relevant case studies
- Highlight specific curriculum sections

### 3. **Email Segmentation**
Trigger different sequences based on:
- Score (0-3, 4-6, 7-8, 9-10)
- Role (Finance, Marketing, etc.)
- Goal (promotion, raise, expertise)

### 4. **Content Personalization**
Use quiz data to:
- Send relevant blog posts
- Share role-specific tips
- Provide targeted resources

## Conversion Optimization

### Trust Builders
- "Free" emphasized multiple times
- "5 minutes" - Low time commitment
- "Personalized" - High value
- Social proof (9,432+ professionals)

### Engagement Hooks
- Progress bar creates completion desire
- Immediate gratification (instant results)
- Curiosity gap (What's my score?)
- Personalized recommendations (not generic)

### CTAs
1. Primary: "Start Your Free Assessment"
2. Secondary: "Send Me My Detailed Report"
3. Retake: "Retake Quiz" (for improvement tracking)

## Future Enhancements

### Phase 2
- [ ] Save quiz results to database
- [ ] Show improvement over time (retake tracking)
- [ ] Compare score to industry averages
- [ ] Add more detailed analytics

### Phase 3
- [ ] A/B test question order
- [ ] Add conditional questions based on previous answers
- [ ] Create shareable results (social sharing)
- [ ] Add quiz completion badge/certificate

### Phase 4
- [ ] Build admin dashboard to view aggregate results
- [ ] Export quiz data for analysis
- [ ] Create industry benchmarking reports
- [ ] Offer paid detailed consultations for low scorers

## URL Structure
- Main quiz: `/ai-quiz`
- Future: `/zh-tw/ai-quiz` (Chinese version)

## SEO Benefits
- Engaging interactive content (longer page sessions)
- Increased email list growth
- Better user segmentation
- More qualified leads for courses
- Shareable content (future social sharing feature)

## Analytics to Track
1. Quiz start rate (visitors → quiz starters)
2. Completion rate (starters → finishers)
3. Email capture rate (finishers → subscribers)
4. Average score by role
5. Most common gaps/challenges
6. Course click-through rate from results

---

**Created:** January 11, 2025  
**Status:** ✅ Implemented and Ready for Testing  
**URL:** https://aijedi.hyperionsoft.com/ai-quiz

