import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { content } from "@/config/content";
import genaiTools from "@/assets/genai tool copy.jpg";

const AIToolsSection = () => {
  const tools = [
    {
      name: "ChatGPT & Claude",
      description: "Master prompt engineering and conversation design for content creation and analysis"
    },
    {
      name: "Cursor & GitHub Copilot",
      description: "Build applications faster with AI-powered coding assistance and code generation"
    },
    {
      name: "Midjourney & DALL-E",
      description: "Create stunning visuals, graphics, and marketing materials with AI image generation"
    },
    {
      name: "Lovable & V0",
      description: "Build full-stack web applications using natural language descriptions"
    },
    {
      name: "Notion AI & Zapier",
      description: "Automate workflows and streamline business processes with AI integrations"
    },
    {
      name: "Perplexity & Research Tools",
      description: "Conduct deep research and analysis using AI-powered search and data tools"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            AI Tools We Teach
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Master the most powerful AI tools that are transforming how professionals work today
          </p>
        </div>

        {/* Full-width image */}
        <div className="mb-16">
          <div className="relative group">
            <img 
              src={genaiTools} 
              alt="AI Tools Dashboard" 
              className="w-full h-auto rounded-lg shadow-2xl group-hover:shadow-glow transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Tools list below image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tools.map((tool, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 group">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-muted-foreground">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Master These Tools?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join our hands-on courses and learn to use these AI tools to transform your work and boost your productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#online-courses" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Explore Courses
                </a>
                <a 
                  href="#instructor" 
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Meet the Instructor
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
