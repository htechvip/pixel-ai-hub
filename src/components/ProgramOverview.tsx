import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, TrendingUp } from "lucide-react";

const ProgramOverview = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning Fundamentals",
      description: "Master supervised and unsupervised learning algorithms, neural networks, and model optimization techniques."
    },
    {
      icon: Code,
      title: "Deep Learning & AI",
      description: "Build sophisticated neural networks using TensorFlow, PyTorch, and implement computer vision and NLP projects."
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Learn to work with big data, data pipelines, and cloud platforms for scalable AI solutions."
    },
    {
      icon: TrendingUp,
      title: "Industry Projects",
      description: "Work on real-world AI projects with industry partners and build a portfolio that gets you hired."
    }
  ];

  return (
    <section id="program" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What you will learn
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our 12-week intensive program covers everything you need to become an AI engineer, from fundamentals to advanced applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
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