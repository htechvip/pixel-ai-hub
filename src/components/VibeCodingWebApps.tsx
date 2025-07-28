import { Card } from "@/components/ui/card";
import sampleSites from "@/assets/sample ai gen sites.png";

const VibeCodingWebApps = () => {
  return (
    <section id="web-apps" className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Vibe Coding Web Apps
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Explore the diverse range of web applications our students have built using AI-powered development tools.
          </p>

          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300">
            <div className="p-4 md:p-6">
              <div className="relative rounded-lg overflow-hidden bg-background/5">
                <img 
                  src={sampleSites} 
                  alt="Sample AI Generated Websites"
                  loading="lazy"
                  className="w-full object-contain"
                  style={{ maxHeight: '600px' }}
                />
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rapid Prototyping</h3>
                  <p className="text-muted-foreground">
                    Build functional prototypes in hours instead of weeks using AI-assisted development.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
                  <p className="text-muted-foreground">
                    Create beautiful, responsive interfaces with modern UI components and design patterns.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Full Stack</h3>
                  <p className="text-muted-foreground">
                    Develop end-to-end applications with both frontend and backend functionality.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VibeCodingWebApps; 