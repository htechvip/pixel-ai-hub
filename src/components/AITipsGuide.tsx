import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import talkImage from "@/assets/ai talk sm.jpg";
import AITipsModal from "./AITipsModal";

const AITipsGuide = () => {
  // Only show this component on English pages
  const isZh = typeof window !== "undefined" && window.location.pathname.startsWith("/zh-tw");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  if (isZh) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: Text + Logos */}
                <div className="text-center md:text-left">
                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                    Discover How Easy It Is to Master AI Tools Like a Pro
                  </h2>
                  
                  {/* Description */}
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-6 max-w-2xl md:max-w-none mx-auto md:mx-0">
                    Looking for superior AI training that will differentiate you in a crowded job market? Download a free tips guide for general tips on using ChatGPT, Claude and Perplexity for any career professionals.
                  </p>
                  
                  {/* Features with AI Tool Logos */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 md:mb-6">
                    <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200">
                      <img 
                        src="/logos/chatgpt_logo.jpeg" 
                        alt="ChatGPT Logo" 
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">ChatGPT Tips</h3>
                    <p className="text-sm text-muted-foreground">Professional prompts and workflows</p>
                    </div>
                    <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200">
                      <img 
                        src="/logos/claude_logo.jpeg" 
                        alt="Claude Logo" 
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">Claude Strategies</h3>
                    <p className="text-sm text-muted-foreground">Advanced reasoning and analysis</p>
                    </div>
                    <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200">
                      <img 
                        src="/logos/perplexity_ai_logo.jpeg" 
                        alt="Perplexity AI Logo" 
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">Perplexity Research</h3>
                    <p className="text-sm text-muted-foreground">Efficient information gathering</p>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-gradient-primary hover:bg-gradient-primary/90 rounded-lg transition-colors"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Start Now
                  </Button>
                  
                  {/* Subtext */}
                  <p className="text-sm text-muted-foreground mt-4">
                    Free download • Instant access
                  </p>
                </div>
                
                {/* Right: Image */}
                <div className="order-first md:order-last">
                  <img 
                    src={talkImage} 
                    alt="AI Jedi talk"
                    className="w-full h-auto rounded-xl shadow-lg object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Modal */}
      <AITipsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default AITipsGuide;
