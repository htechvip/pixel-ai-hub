import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const InstructorSection = () => {
  const companies = [
    { name: "GOOGLE" },
    { name: "META" },
    { name: "AMAZON" },
    { name: "MICROSOFT" },
    { name: "APPLE" }
  ];

  return (
    <section id="instructor" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Meet Your Instructor
          </h2>
          
          <Card className="p-8 mt-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Instructor Image */}
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10">
                  <img 
                    src="/placeholder.svg" 
                    alt="Cho-Nan Tsai"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-center text-sm text-muted-foreground">
                  Photo coming soon
                </div>
              </div>

              {/* Instructor Info */}
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">Cho-Nan Tsai</h3>
                <p className="text-lg text-primary mb-4">Lead AI Instructor & Tech Entrepreneur</p>
                
                <div className="prose prose-lg dark:prose-invert">
                  <p className="mb-4">
                    With over a decade of experience in software development and AI, Cho-Nan has been at the forefront of technological innovation, helping companies leverage AI to solve complex problems.
                  </p>
                  
                  <p className="mb-4">
                    Previously a senior engineer at leading tech companies, Cho-Nan has developed and deployed AI solutions that have impacted millions of users. His passion for teaching stems from his belief that AI should be accessible to everyone who wants to learn.
                  </p>

                  <p className="mb-6">
                    As the founder of AI Jedi, he has designed a curriculum that combines practical, hands-on experience with cutting-edge AI tools and methodologies. His teaching approach focuses on building real-world applications while ensuring students understand the fundamental concepts behind AI technology.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="gap-2">
                      <LinkedInLogoIcon className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <GitHubLogoIcon className="w-4 h-4" />
                      GitHub
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">10+</div>
                      <div className="text-sm text-muted-foreground">Years in Tech</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">500+</div>
                      <div className="text-sm text-muted-foreground">Students Mentored</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">50+</div>
                      <div className="text-sm text-muted-foreground">AI Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Company Logos Section */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-medium text-muted-foreground mb-8">
              Many people mentored by Cho-Nan work at leading tech companies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {companies.map((company) => (
                <div key={company.name} className="flex items-center justify-center">
                  <span className="text-xl font-bold text-muted-foreground/50 hover:text-muted-foreground/75 transition-colors tracking-wider">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection; 