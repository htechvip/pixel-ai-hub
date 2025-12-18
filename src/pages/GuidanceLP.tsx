import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, Circle, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const GuidanceLP = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="You're Already Ahead — Now You Need Direction | AI Jedi"
        description="Actively using AI but unsure if you're doing it right? Learn to apply AI consistently, translate AI work into business value, and become the go-to person for AI-driven thinking."
        canonical="/lp/guidance"
      />
      
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient - same as home page */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Main content */}
        <main className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-secondary border border-border text-muted-foreground text-sm font-medium">
              <Target className="w-4 h-4" />
              <span>For professionals ready to level up</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-primary bg-clip-text text-transparent">
              You're already ahead
              <br />
              — now you need direction
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
              If you're actively using AI but feel unsure whether you're doing it right, this is for you.
            </p>

            {/* Body content card */}
            <Card className="text-left max-w-lg mx-auto mb-12 p-8 bg-card/50 backdrop-blur-sm shadow-card">
              <div className="space-y-6">
                <p className="text-foreground leading-relaxed">
                  At this stage, most people hit a <span className="font-semibold">ceiling</span>.
                </p>

                <div>
                  <p className="text-foreground leading-relaxed mb-4">
                    They:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-foreground">
                      <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span>Use AI occasionally</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground">
                      <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span>Get some wins</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground">
                      <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span>Still aren't seen as "AI-capable" at work</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-foreground leading-relaxed">
                    The difference between experimenting and <span className="font-semibold">career leverage</span> is structure.
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-foreground leading-relaxed mb-4">
                    With the right guidance, you can:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Apply AI consistently <span className="text-muted-foreground">(not randomly)</span></span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Translate AI work into business value</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Become the person others rely on for AI-driven thinking</span>
                    </li>
                  </ul>
                </div>

                <p className="text-foreground leading-relaxed pt-2 font-semibold">
                  That's what I teach.
                </p>
              </div>
            </Card>
          </div>
        </main>
      </section>

      <Footer />
    </div>
  );
};

export default GuidanceLP;

