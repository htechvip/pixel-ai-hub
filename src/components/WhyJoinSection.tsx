import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhyJoinSection = () => {
  return (
    <section id="why-join" className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Why Join AI Jedi
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Empowering the next generation of AI builders
          </p>
        </div>

        <Card className="p-8 backdrop-blur-sm border-primary/20">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              We believe anyone should be able to build and ship real products—fast. Modern AI tools like Cursor and lovable have shattered the old barriers to entry. You don't need years of experience or a CS degree to turn your ideas into working software. If you can describe it, you can build it.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Our course is designed for total beginners and product folks who want to go from zero to shipping. You'll learn by building, not just watching. By the end of the weekend, you'll have a production-ready app you can actually use and show off. We'll guide you step-by-step, using Next.js, Supabase, and the latest AI coding workflows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Learn by Building</h3>
                <p className="text-muted-foreground">Hands-on experience with real projects from day one</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">🤖</div>
                <h3 className="text-xl font-semibold mb-2">AI-First Approach</h3>
                <p className="text-muted-foreground">Master the latest AI tools and workflows</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">💡</div>
                <h3 className="text-xl font-semibold mb-2">Ship Products Fast</h3>
                <p className="text-muted-foreground">Create production-ready applications quickly</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="hero" className="text-lg px-8">
                Start Your Journey
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WhyJoinSection; 