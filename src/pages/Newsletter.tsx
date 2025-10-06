import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, CheckCircle, ChevronDown, ChevronUp, Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import { Helmet } from "react-helmet";
import bookCover from "@/assets/career growth book cover sm.jpg";
import AITipsModal from "@/components/AITipsModal";

const Newsletter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviews = [
    {
      name: "Sarah Chen",
      handle: "@sarahc_marketing",
      role: "Marketing Director",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      text: "Just finished reading this AI career blueprint and WOW. Implemented 3 new workflows this week that are already saving me 8+ hours. The ROI is insane. If you're in marketing and not using AI strategically, you're falling behind.",
      likes: 142,
      retweets: 23,
      replies: 8,
      timeAgo: "2h"
    },
    {
      name: "Michael Rodriguez",
      handle: "@mike_salespro",
      role: "Sales Manager",
      company: "Growth Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      text: "This book changed everything. My team's close rate went up 35% after implementing the AI strategies. We're now using AI for lead scoring, follow-ups, and even objection handling. Game changer.",
      likes: 89,
      retweets: 34,
      replies: 12,
      timeAgo: "4h"
    },
    {
      name: "Jennifer Park",
      handle: "@jennops",
      role: "Operations Lead",
      company: "StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      text: "From AI skeptic to company AI champion in 6 weeks thanks to this blueprint. The step-by-step approach made it click. Now I'm the one teaching others. Highly recommend.",
      likes: 156,
      retweets: 41,
      replies: 19,
      timeAgo: "6h"
    },
    {
      name: "David Thompson",
      handle: "@dthompson_cs",
      role: "Customer Success Manager",
      company: "SaaS Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      text: "Followed the promotion framework in this book and got promoted to Senior Manager with a 30% raise in 7 months. The internal positioning strategies are pure gold. Worth every penny.",
      likes: 203,
      retweets: 67,
      replies: 25,
      timeAgo: "1d"
    },
    {
      name: "Lisa Wang",
      handle: "@lisaw_hr",
      role: "HR Business Partner",
      company: "Fortune 500 Corp",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      text: "This isn't just about AI tools - it's about career mindset. The book helped me think differently about my value proposition. Now I'm leading our AI adoption initiative. Mind blown.",
      likes: 127,
      retweets: 29,
      replies: 15,
      timeAgo: "1d"
    },
    {
      name: "Robert Kim",
      handle: "@robpm_ai",
      role: "Product Manager",
      company: "Innovation Labs",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      text: "Automated 60% of my routine tasks using the workflow systems in this book. Now I focus on strategy and high-impact work. My productivity has never been higher. This is the future of work.",
      likes: 178,
      retweets: 52,
      replies: 21,
      timeAgo: "2d"
    },
    {
      name: "Amanda Foster",
      handle: "@amanda_finance",
      role: "Finance Analyst",
      company: "Investment Group",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      text: "Was skeptical about AI in finance, but this book changed my mind. My analysis accuracy improved while cutting processing time in half. The specific use cases are incredibly practical.",
      likes: 134,
      retweets: 38,
      replies: 17,
      timeAgo: "2d"
    },
    {
      name: "James Wilson",
      handle: "@jamesbizdev",
      role: "Business Development",
      company: "Enterprise Solutions",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      text: "The career transformation stories in this book are inspiring. Seeing how others leveraged AI to reach $200K+ salaries gave me the confidence to push for my own promotion. Here we go!",
      likes: 167,
      retweets: 45,
      replies: 22,
      timeAgo: "3d"
    }
  ];

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Career Blueprint - Free Newsletter | AI Jedi</title>
        <meta name="description" content="Get your free copy of '$50K to $500K: The AI Career Blueprint for Explosive Professional Growth' and join thousands of professionals accelerating their careers with AI." />
        <link rel="canonical" href="https://aijedi.com/newsletter" />
      </Helmet>

      <Header />

      {/* Hero Section - Download Your Free Copy */}
      <section className="pt-20 pb-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h1 className="text-base md:text-lg font-semibold text-primary mb-2">
                Download Your Free Copy
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                $50K to $500K: The AI Career Blueprint for Explosive Professional Growth
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="text-left">
                  <p className="text-lg font-semibold text-foreground mb-6">Inside this book, you'll discover:</p>
                  <ul className="space-y-4 text-base md:text-lg text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>AI Champion Playbook</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Role-Specific AI Tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Real Career Transformations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Internal Promotion Strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Workflow Systems Blueprint</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src={bookCover} 
                    alt="AI Career Blueprint Book Cover"
                    className="w-full max-w-sm h-auto rounded-xl shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Button 
                onClick={() => setIsModalOpen(true)}
                variant="hero"
                size="lg"
                className="text-lg px-8 py-4 animate-fade-in"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free Book
              </Button>
            </div>
            
            <p className="text-base text-muted-foreground mt-6 max-w-2xl mx-auto">
              No credit card required. Instant access. Perfect for corporate professionals ready to accelerate their careers.
            </p>
          </div>
        </div>
        
        {/* Modal */}
        <AITipsModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What People Are Saying
              </h2>
              <p className="text-lg text-muted-foreground">
                Real testimonials from professionals who transformed their careers with AI
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-4 mb-8">
              {displayedReviews.map((review, index) => (
                <Card key={index} className="p-4 hover:bg-gray-50/50 transition-colors border-gray-200">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-3">
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={review.avatar} 
                          alt={`${review.name} profile`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Tweet Content */}
                      <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-foreground text-sm">{review.name}</h4>
                          <span className="text-gray-500 text-sm">{review.handle}</span>
                          <span className="text-gray-500 text-sm">·</span>
                          <span className="text-gray-500 text-sm">{review.timeAgo}</span>
                        </div>
                        
                        {/* Role */}
                        <p className="text-xs text-gray-600 mb-2">{review.role} at {review.company}</p>
                        
                        {/* Tweet Text */}
                        <p className="text-foreground leading-relaxed mb-3 text-sm">
                          {review.text}
                        </p>
                        
                        {/* Engagement */}
                        <div className="flex items-center space-x-6 text-gray-500 text-xs">
                          <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span>{review.replies}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                            <Repeat2 className="w-4 h-4" />
                            <span>{review.retweets}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span>{review.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                            <Share className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {reviews.length > 5 && (
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="px-6 py-2"
                >
                  {showAllReviews ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Show More Reviews ({reviews.length - 5} more)
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;
