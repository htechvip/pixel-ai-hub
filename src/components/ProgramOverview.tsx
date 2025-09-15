import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, Users, PieChart, MessageSquare } from "lucide-react";
import { content } from "@/config/content";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProgramOverviewProps {
  minimal?: boolean;
}

const ProgramOverview = ({ minimal = false }: ProgramOverviewProps) => {
  // Add default icon in case title doesn't match
  const defaultIcon = Brain;
  const signupPath = window.location.pathname.startsWith("/zh-tw") ? "/zh-tw/signup" : "/signup";
  
  const icons = {
    "Customer Engagement": MessageSquare,
    "Marketing Content": PieChart,
    "Operations & Forecasting": Database,
    "Data Insights": Brain,
    "Human Resources": Users,
    "Vibe Coding": Code,
  };

  return (
    <section
      id="online-courses"
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
          {content.program.features.map((feature, index) => {
            const Icon = icons[feature.title] || defaultIcon;
            return (
              <Card
                key={index}
                id={`courses-${feature.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                className="relative overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 group"
              >
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

                {/* Desktop hover overlay */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-6 text-center space-y-4 max-w-xs">
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                    <Button asChild variant="hero">
                      <Link to={`${window.location.pathname.startsWith("/zh-tw") ? "/zh-tw" : ""}/course/${feature.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}>
                        Start Course
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;