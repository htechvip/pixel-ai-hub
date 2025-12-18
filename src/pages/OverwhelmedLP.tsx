import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const OverwhelmedLP = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="You Don't Need More AI Tools — You Need a Clearer Approach | AI Jedi"
        description="Feeling overwhelmed by AI? The problem isn't your ability. Learn practical use cases, simple mental models, and how to apply AI without technical skills."
        canonical="/lp/overwhelmed"
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
              <Lightbulb className="w-4 h-4" />
              <span>For professionals who want clarity, not more noise</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-primary bg-clip-text text-transparent">
              You don't need more AI tools
              <br />
              — you need a clearer approach
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
              Feeling overwhelmed usually means you're trying to learn AI the wrong way.
            </p>

            {/* Body content card */}
            <Card className="text-left max-w-lg mx-auto mb-12 p-8 bg-card/50 backdrop-blur-sm shadow-card">
              <div className="space-y-6">
                <div>
                  <p className="text-foreground leading-relaxed mb-4">
                    Most professionals get stuck because:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-foreground">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>They learn tools instead of workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>They watch random tutorials without context</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>They don't know what applies to their job</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-foreground leading-relaxed">
                    <span className="font-semibold">The problem isn't your ability.</span>
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    It's that no one shows you where AI fits into real work, step by step.
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-foreground leading-relaxed mb-4">
                    Over the next few weeks, I'll send you:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Practical use cases <span className="text-muted-foreground">(not demos)</span></span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Simple mental models you can reuse</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Applying AI without needing technical skills</span>
                    </li>
                  </ul>
                </div>

                <p className="text-foreground leading-relaxed pt-2">
                  Once this clicks, AI stops feeling overwhelming—and starts feeling <span className="font-semibold">useful</span>.
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

export default OverwhelmedLP;

