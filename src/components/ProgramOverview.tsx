import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database } from "lucide-react";
import { content } from "@/config/content";

interface ProgramOverviewProps {
  minimal?: boolean;
}

const ProgramOverview = ({ minimal = false }: ProgramOverviewProps) => {
  // Add default icon in case title doesn't match
  const defaultIcon = Brain;
  
  const icons = {
    "Speedy Prototyping using AI": Brain,
    "Deep Learning & AI": Code,
    "Data Engineering": Database
  };

  return (
    <section
      id="program"
      className={
        minimal
          ? "py-20 border border-border rounded-lg"
          : "py-20 bg-secondary/50"
      }
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content.program.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {content.program.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.program.features.slice(0, 3).map((feature, index) => {
            const Icon = icons[feature.title] || defaultIcon;
            return (
              <Card key={index} className="bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;