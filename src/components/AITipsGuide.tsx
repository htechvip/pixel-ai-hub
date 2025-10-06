import bookCover from "@/assets/career growth book cover sm.jpg";
import AITipsInlineForm from "./AITipsInlineForm";

const AITipsGuide = () => {
  // Only show this component on English pages
  const isZh = typeof window !== "undefined" && window.location.pathname.startsWith("/zh-tw");
  
  if (isZh) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
              Download Your Free Copy
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              $50K to $500K: The AI Career Blueprint for Explosive Professional Growth
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              No credit card required. Instant access. Perfect for corporate professionals ready to accelerate their careers.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto mb-12 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              <div className="flex justify-center">
                <img 
                  src={bookCover} 
                  alt="AI Career Blueprint Book Cover"
                  className="w-full max-w-sm h-auto rounded-xl shadow-lg object-cover"
                />
              </div>
              
              <div>
                <AITipsInlineForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITipsGuide;
