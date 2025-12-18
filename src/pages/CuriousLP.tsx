import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const CuriousLP = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="You're Not Behind — You're Just Early | AI Jedi"
        description="Curious about AI but not ready to dive in? Get clear explanations, real examples, and signals that tell you when it's worth acting. No jargon, no hype."
        canonical="/lp/curious"
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
              <Sparkles className="w-4 h-4" />
              <span>For the curious, not the panicked</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-primary bg-clip-text text-transparent">
              You're not behind
              <br />
              — you're just early
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
              If you're curious about AI but not ready to dive in yet, you're exactly where many smart professionals start.
            </p>

            {/* Body content card */}
            <Card className="text-left max-w-lg mx-auto mb-12 p-8 bg-card/50 backdrop-blur-sm shadow-card">
              <div className="space-y-6">
                <p className="text-foreground leading-relaxed">
                  Most people jump into AI because they feel <span className="font-semibold text-primary">panic</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  That's not the best way to learn.
                </p>
                <p className="text-foreground leading-relaxed">
                  Right now, your job isn't to master tools or chase trends.
                  <br />
                  It's to understand <span className="font-semibold">where AI actually matters</span>—and where it doesn't.
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground mb-4">Over the next few weeks, I'll send you:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Clear explanations <span className="text-muted-foreground">(no jargon, no hype)</span></span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Real examples of how AI shows up in everyday work</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Signals that tell you when it's worth acting</span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground text-sm italic pt-2">
                  No pressure. No selling every email.
                </p>
              </div>
            </Card>

            {/* Footer micro-copy */}
            <p className="text-muted-foreground text-sm max-w-sm mx-auto">
              When you're ready to take action, I'll make it obvious what to do next.
            </p>
          </div>
        </main>
      </section>

      <Footer />
    </div>
  );
};

export default CuriousLP;
