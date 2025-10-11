import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, ArrowLeft, Mail, TrendingUp, AlertCircle } from "lucide-react";

interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple';
  options: {
    value: string;
    label: string;
    score: number;
    category?: string;
  }[];
  category: 'role' | 'usage' | 'goals' | 'experience';
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What best describes your current role?',
    type: 'single',
    category: 'role',
    options: [
      { value: 'finance', label: 'Finance Professional', score: 0, category: 'Finance' },
      { value: 'marketing', label: 'Marketing Professional', score: 0, category: 'Marketing' },
      { value: 'healthcare', label: 'Healthcare Professional', score: 0, category: 'Healthcare' },
      { value: 'software', label: 'Software Developer', score: 0, category: 'Tech' },
      { value: 'product', label: 'Product Manager', score: 0, category: 'Product' },
      { value: 'business', label: 'Business Leader/Executive', score: 0, category: 'Leadership' },
      { value: 'other', label: 'Other', score: 0, category: 'General' },
    ]
  },
  {
    id: 'q2',
    question: 'How often do you currently use AI tools (ChatGPT, Claude, etc.)?',
    type: 'single',
    category: 'usage',
    options: [
      { value: 'never', label: 'Never used them', score: 0 },
      { value: 'rarely', label: 'A few times total', score: 2 },
      { value: 'monthly', label: 'Once a month', score: 4 },
      { value: 'weekly', label: 'Once a week', score: 6 },
      { value: 'daily', label: 'Daily', score: 8 },
      { value: 'constantly', label: 'Multiple times per day', score: 10 },
    ]
  },
  {
    id: 'q3',
    question: 'Which AI tool are you most familiar with?',
    type: 'single',
    category: 'usage',
    options: [
      { value: 'none', label: 'Haven\'t used any yet', score: 0 },
      { value: 'chatgpt', label: 'ChatGPT', score: 7 },
      { value: 'claude', label: 'Claude', score: 8 },
      { value: 'perplexity', label: 'Perplexity', score: 7 },
      { value: 'multiple', label: 'I use multiple tools regularly', score: 10 },
      { value: 'other', label: 'Other AI tools', score: 6 },
    ]
  },
  {
    id: 'q4',
    question: 'What do you primarily use AI for? (Choose what resonates most)',
    type: 'single',
    category: 'usage',
    options: [
      { value: 'nothing', label: 'I don\'t use AI yet', score: 0 },
      { value: 'basic', label: 'Basic questions and research', score: 3 },
      { value: 'writing', label: 'Writing emails and documents', score: 5 },
      { value: 'analysis', label: 'Data analysis and insights', score: 7 },
      { value: 'automation', label: 'Automating repetitive tasks', score: 9 },
      { value: 'strategic', label: 'Strategic decision-making and problem-solving', score: 10 },
    ]
  },
  {
    id: 'q5',
    question: 'How confident are you in writing effective AI prompts?',
    type: 'single',
    category: 'experience',
    options: [
      { value: 'beginner', label: 'Not confident - I struggle to get good results', score: 2 },
      { value: 'learning', label: 'Learning - Sometimes I get good results', score: 4 },
      { value: 'decent', label: 'Decent - I usually get what I need', score: 6 },
      { value: 'good', label: 'Good - I can craft detailed prompts', score: 8 },
      { value: 'expert', label: 'Expert - I use advanced techniques consistently', score: 10 },
    ]
  },
  {
    id: 'q6',
    question: 'What\'s your primary career goal for the next 12 months?',
    type: 'single',
    category: 'goals',
    options: [
      { value: 'current', label: 'Stay in current role, just be more efficient', score: 5 },
      { value: 'promotion', label: 'Get promoted in current company', score: 8 },
      { value: 'raise', label: 'Negotiate a significant raise', score: 7 },
      { value: 'switch', label: 'Switch to a better company/role', score: 9 },
      { value: 'leadership', label: 'Move into leadership/management', score: 9 },
      { value: 'expert', label: 'Become the AI expert in my organization', score: 10 },
    ]
  },
  {
    id: 'q7',
    question: 'How much time do you spend on repetitive tasks each week?',
    type: 'single',
    category: 'usage',
    options: [
      { value: '0-5', label: '0-5 hours', score: 8 },
      { value: '5-10', label: '5-10 hours', score: 6 },
      { value: '10-20', label: '10-20 hours', score: 4 },
      { value: '20+', label: '20+ hours', score: 2 },
    ]
  },
  {
    id: 'q8',
    question: 'Have you ever used AI to automate a work process?',
    type: 'single',
    category: 'experience',
    options: [
      { value: 'no', label: 'No, never tried', score: 0 },
      { value: 'tried', label: 'Tried but didn\'t work well', score: 3 },
      { value: 'once', label: 'Yes, once or twice successfully', score: 6 },
      { value: 'regularly', label: 'Yes, I do this regularly', score: 9 },
      { value: 'advanced', label: 'Yes, I\'ve built multiple AI workflows', score: 10 },
    ]
  },
  {
    id: 'q9',
    question: 'How do your colleagues view AI?',
    type: 'single',
    category: 'experience',
    options: [
      { value: 'scared', label: 'Scared/resistant to it', score: 7 },
      { value: 'curious', label: 'Curious but not using it', score: 6 },
      { value: 'some', label: 'Some are using it casually', score: 5 },
      { value: 'many', label: 'Many are actively using it', score: 4 },
      { value: 'advanced', label: 'Most are already AI-proficient', score: 2 },
    ]
  },
  {
    id: 'q10',
    question: 'What\'s your biggest challenge with AI right now?',
    type: 'single',
    category: 'goals',
    options: [
      { value: 'start', label: 'Don\'t know where to start', score: 2 },
      { value: 'prompts', label: 'Can\'t write effective prompts', score: 4 },
      { value: 'usecase', label: 'Don\'t know which tasks to automate', score: 5 },
      { value: 'advanced', label: 'Need more advanced techniques', score: 7 },
      { value: 'integration', label: 'Integrating AI into my workflow', score: 6 },
      { value: 'none', label: 'No major challenges - doing well', score: 10 },
    ]
  },
  {
    id: 'q11',
    question: 'How much has AI impacted your productivity so far?',
    type: 'single',
    category: 'experience',
    options: [
      { value: 'none', label: 'Not at all - I don\'t use it', score: 0 },
      { value: 'minimal', label: 'Minimal (less than 10% improvement)', score: 3 },
      { value: 'moderate', label: 'Moderate (10-30% improvement)', score: 6 },
      { value: 'significant', label: 'Significant (30-50% improvement)', score: 8 },
      { value: 'transformative', label: 'Transformative (50%+ improvement)', score: 10 },
    ]
  },
  {
    id: 'q12',
    question: 'What would make you feel like you\'ve "mastered" AI for your career?',
    type: 'single',
    category: 'goals',
    options: [
      { value: 'basics', label: 'Understanding the basics and using it occasionally', score: 3 },
      { value: 'daily', label: 'Using AI daily to save time', score: 6 },
      { value: 'workflows', label: 'Building automated workflows', score: 8 },
      { value: 'expert', label: 'Being the go-to AI expert at work', score: 9 },
      { value: 'promotion', label: 'Getting promoted because of my AI skills', score: 10 },
    ]
  },
];

const AICareerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;

    quizQuestions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const selectedOption = question.options.find(opt => opt.value === answer);
        if (selectedOption) {
          totalScore += selectedOption.score;
        }
      }
      // Max possible score for this question
      const maxOptionScore = Math.max(...question.options.map(opt => opt.score));
      maxScore += maxOptionScore;
    });

    return {
      score: totalScore,
      maxScore,
      percentage: Math.round((totalScore / maxScore) * 100),
      outOf10: Math.round((totalScore / maxScore) * 10)
    };
  };

  const getPersonalizedRecommendations = () => {
    const scoreData = calculateScore();
    const roleAnswer = answers['q1'];
    const usageAnswer = answers['q2'];
    const goalAnswer = answers['q6'];

    const role = quizQuestions[0].options.find(opt => opt.value === roleAnswer)?.category || 'General';
    
    let level = 'Beginner';
    let recommendations: string[] = [];
    let gaps: string[] = [];

    // Determine level based on score
    if (scoreData.outOf10 <= 3) {
      level = 'Beginner';
      gaps = [
        'Limited exposure to AI tools',
        'Need foundational understanding of AI capabilities',
        'Missing basic prompt engineering skills'
      ];
      recommendations = [
        'Start with ChatGPT basics and simple use cases',
        'Learn the fundamentals of prompt engineering',
        'Explore AI tools specific to your role',
        `Focus on "${role}" AI applications in our course`
      ];
    } else if (scoreData.outOf10 <= 6) {
      level = 'Intermediate';
      gaps = [
        'Inconsistent AI usage patterns',
        'Limited workflow automation experience',
        'Need advanced prompting techniques'
      ];
      recommendations = [
        'Develop consistent daily AI habits',
        'Learn advanced prompt engineering techniques',
        'Build your first automated AI workflow',
        'Study real-world case studies in your industry'
      ];
    } else if (scoreData.outOf10 <= 8) {
      level = 'Advanced';
      gaps = [
        'Could optimize more processes with AI',
        'Missing strategic AI implementation skills',
        'Not yet recognized as AI expert internally'
      ];
      recommendations = [
        'Position yourself as the AI expert in your organization',
        'Build comprehensive AI automation systems',
        'Share your AI knowledge with colleagues',
        'Leverage AI for strategic career advancement'
      ];
    } else {
      level = 'Expert';
      gaps = [
        'Could mentor others on AI adoption',
        'Opportunity to monetize AI expertise'
      ];
      recommendations = [
        'Consider teaching or mentoring others',
        'Share your AI workflows publicly',
        'Explore leadership roles focused on AI transformation',
        'Build a personal brand around AI expertise'
      ];
    }

    return { level, recommendations, gaps, role };
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const scoreData = calculateScore();
      const { level, recommendations, role } = getPersonalizedRecommendations();

      const apiKey = import.meta.env.VITE_MAILERLITE_API_KEY;
      const groupId = import.meta.env.VITE_MAILERLITE_GROUP_ID;

      if (!apiKey || !groupId) {
        console.error('MailerLite not configured');
        alert('Your quiz results have been calculated! Check below for your personalized recommendations.');
        setIsSubmitting(false);
        return;
      }

      // Submit to MailerLite with quiz data
      await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json",
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

      alert(`Success! Check your email for your personalized AI Career Readiness Report and learning path.`);
    } catch (err) {
      console.error("Form submission error:", err);
      alert('Your quiz results are ready! We had trouble sending the email, but you can see your results below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentQ = quizQuestions[currentQuestion];
  const isAnswered = answers[currentQ?.id];

  if (showResults) {
    const scoreData = calculateScore();
    const { level, recommendations, gaps, role } = getPersonalizedRecommendations();

    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Card className="border-2 border-primary/20">
          <CardHeader className="text-center pb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="text-3xl md:text-4xl mb-2">Your AI Career Readiness Score</CardTitle>
            <div className="text-6xl font-bold text-primary mb-2">{scoreData.outOf10}/10</div>
            <div className="text-xl text-muted-foreground">
              {level} Level • {scoreData.percentage}% Ready
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Score Interpretation */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                What This Means For You
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {scoreData.outOf10 <= 3 && (
                  <>You're at the beginning of your AI journey. The good news? You have massive room for growth, and early adopters in your field will have a significant competitive advantage. This is actually the perfect time to start.</>
                )}
                {scoreData.outOf10 > 3 && scoreData.outOf10 <= 6 && (
                  <>You're making progress, but you're leaving significant productivity gains on the table. With the right training, you could easily double your AI impact and become known as the AI-savvy professional in your team.</>
                )}
                {scoreData.outOf10 > 6 && scoreData.outOf10 <= 8 && (
                  <>You're ahead of most professionals! Now it's time to systematize your knowledge and position yourself as an AI expert. This is where career acceleration really begins.</>
                )}
                {scoreData.outOf10 > 8 && (
                  <>Impressive! You're in the top tier of AI adoption. Your next step is to leverage this expertise for career advancement, mentorship opportunities, or even thought leadership in your field.</>
                )}
              </p>
            </div>

            {/* Gaps Identified */}
            {gaps.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Gaps Identified</h3>
                <ul className="space-y-2">
                  {gaps.map((gap, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Personalized Recommendations */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Your Personalized Learning Path</h3>
              <ul className="space-y-2">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Course */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold mb-2">Recommended Course for You</h3>
              <p className="text-muted-foreground mb-4">
                Based on your {role} background and {level.toLowerCase()} AI proficiency, we recommend:
              </p>
              <div className="font-semibold text-lg mb-3">
                {role === 'Finance' && 'AI for Finance Professionals'}
                {role === 'Marketing' && 'AI for Marketing Professionals'}
                {role === 'Healthcare' && 'AI for Healthcare Professionals'}
                {role === 'Tech' && 'AI for Software Developers'}
                {role === 'Product' && 'AI for Product Managers - Vibe Coding 101'}
                {role === 'Leadership' && 'AI for Business Leaders'}
                {role === 'General' && 'AI for Product Managers - Vibe Coding 101'}
              </div>
              <Button className="w-full" size="lg">
                View Course Details
              </Button>
            </div>

            {/* Email Capture for Detailed Report */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get Your Detailed AI Career Readiness Report
              </h3>
              <p className="text-muted-foreground mb-4">
                Enter your email to receive a comprehensive PDF report with:
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Your complete quiz analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Personalized 30-day AI learning roadmap</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Recommended tools and resources for your role</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Weekly AI tips to accelerate your growth</span>
                </li>
              </ul>

              <form onSubmit={handleSubmitEmail} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Me My Detailed Report'}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </div>

            {/* Retake Quiz */}
            <div className="text-center">
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                  setEmail("");
                  setFirstName("");
                }}
              >
                Retake Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Question {currentQuestion + 1} of {quizQuestions.length}</span>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{currentQ.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={answers[currentQ.id] || ''}
            onValueChange={(value) => handleAnswer(currentQ.id, value)}
          >
            <div className="space-y-3">
              {currentQ.options.map((option) => (
                <div
                  key={option.value}
                  className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all ${
                    answers[currentQ.id] === option.value
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50 hover:bg-muted/50'
                  }`}
                  onClick={() => handleAnswer(currentQ.id, option.value)}
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label
                    htmlFor={option.value}
                    className="flex-1 cursor-pointer text-base"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!isAnswered}
            >
              {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Helper Text */}
      <p className="text-center text-sm text-muted-foreground mt-4">
        Your answers help us provide personalized recommendations
      </p>
    </div>
  );
};

export default AICareerQuiz;

