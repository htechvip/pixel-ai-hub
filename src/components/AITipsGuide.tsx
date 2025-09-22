import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
import { useState } from "react";
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
              <div className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                  Master AI Tools Like a Pro
                </h2>
                
                {/* Description */}
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Discover how easy it is to master AI with AI Jedi. Download a free tips guide for general tips on using ChatGPT, Claude and Perplexity for any career professionals.
                </p>
                
                {/* Features with AI Tool Logos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">GPT</span>
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">ChatGPT Tips</h3>
                    <p className="text-sm text-muted-foreground">Professional prompts and workflows</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Claude</span>
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">Claude Strategies</h3>
                    <p className="text-sm text-muted-foreground">Advanced reasoning and analysis</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">Perplexity</span>
                      </div>
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
