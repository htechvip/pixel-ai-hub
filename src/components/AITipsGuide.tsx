import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";
import { useState } from "react";
import bookCover from "@/assets/career growth book cover sm.jpg";
import AITipsModal from "./AITipsModal";

const AITipsGuide = () => {
  // Only show this component on English pages
  const isZh = typeof window !== "undefined" && window.location.pathname.startsWith("/zh-tw");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  if (isZh) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
              Download Your Free Copy
            </h3>
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
  );
};

export default AITipsGuide;
