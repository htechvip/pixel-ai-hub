import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AICareerQuiz from "@/components/AICareerQuiz";
import { Button } from "@/components/ui/button";
import { Brain, Target, Zap, Award, AlertCircle } from "lucide-react";

const AIQuiz = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": "AI Career Readiness Assessment",
    "description": "Discover your AI career readiness score and get personalized recommendations for leveraging AI in your professional career.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "AI Jedi"
    }
  };

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="AI Career Readiness Quiz | AI Jedi"
          description="Take our free 12-question quiz to discover your AI career readiness score and get personalized recommendations for your professional growth."
          canonical="/ai-quiz"
          structuredData={structuredData}
        />
        <Header />
        <div className="pt-24 pb-12">
          <AICareerQuiz />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Career Readiness Quiz | AI Jedi"
        description="Take our free 12-question quiz to discover your AI career readiness score and get personalized recommendations for your professional growth."
        canonical="/ai-quiz"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Free AI Career Assessment
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Your AI Career Readiness Score
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Take this 5-minute quiz to find out where you stand and get a personalized roadmap 
              to accelerate your career with AI
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">12</div>
                <div className="text-sm text-muted-foreground">Questions</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">5</div>
                <div className="text-sm text-muted-foreground">Minutes</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Free</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">1:1</div>
                <div className="text-sm text-muted-foreground">Personalized</div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => setShowQuiz(true)}
            >
              <Brain className="w-5 h-5 mr-2" />
              Start Your Free Assessment
            </Button>
          </div>
        </div>
      </div>

      {/* What You'll Get */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What You'll Discover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Your Readiness Score</h3>
                  <p className="text-muted-foreground">
                    Get an objective 0-10 score showing exactly where you stand compared to AI-proficient professionals in your field.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Skill Gaps Identified</h3>
                  <p className="text-muted-foreground">
                    Pinpoint specific areas where you're leaving productivity and career opportunities on the table.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Learning Path</h3>
                  <p className="text-muted-foreground">
                    Receive specific recommendations tailored to your role, experience level, and career goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Course Recommendations</h3>
                  <p className="text-muted-foreground">
                    Get matched with the exact AI training that will have the biggest impact on your career trajectory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join 9,432+ Professionals Already Accelerating Their Careers with AI
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the first step toward becoming an AI-powered professional
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => setShowQuiz(true)}
            >
              <Brain className="w-5 h-5 mr-2" />
              Take the Free Quiz Now
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIQuiz;

