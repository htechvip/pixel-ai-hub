import { Button } from "@/components/ui/button";
import { content } from "@/config/content";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {content.callToAction.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {content.callToAction.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant={content.callToAction.buttons.primary.variant}
              size="lg" 
              className="text-lg px-8 py-4 animate-fade-in"
            >
              {content.callToAction.buttons.primary.text}
            </Button>
            <Button 
              variant={content.callToAction.buttons.secondary.variant}
              size="lg" 
              className="text-lg px-8 py-4 animate-fade-in"
            >
              {content.callToAction.buttons.secondary.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;