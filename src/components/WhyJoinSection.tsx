import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { content } from "@/config/content";

const WhyJoinSection = () => {
  return (
    <section id="why-join" className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {content.whyJoin.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {content.whyJoin.subtitle}
          </p>
        </div>

        <Card className="p-8 backdrop-blur-sm border-primary/20">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            {content.whyJoin.mainText.map((text, index) => (
              <p key={index} className="text-lg leading-relaxed mb-6">
                {text}
              </p>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {content.whyJoin.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="hero" className="text-lg px-8">
                {content.whyJoin.cta}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WhyJoinSection; 