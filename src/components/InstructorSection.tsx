import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { content } from "@/config/content";
import instructorImage from "@/assets/cable co talk.jpg";

const InstructorSection = () => {
  return (
    <section id="instructor" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {content.instructor.title}
          </h2>
          
          <Card className="p-8 mt-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Instructor Image */}
              <div className="w-full md:w-1/3">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10" style={{ maxHeight: '400px' }}>
                  <img 
                    src={instructorImage}
                    alt={content.instructor.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Instructor Info */}
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">{content.instructor.name}</h3>
                <p className="text-lg text-primary mb-4">{content.instructor.role}</p>
                
                <div className="prose prose-lg dark:prose-invert">
                  {content.instructor.bio.map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}

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
                    {content.instructor.stats.map((stat, index) => (
                      <div key={index}>
                        <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Company Logos Section */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-medium text-muted-foreground mb-8">
              {content.instructor.companies.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {content.instructor.companies.logos.map((company) => (
                <div key={company} className="flex items-center justify-center">
                  <span className="text-xl font-bold text-muted-foreground/50 hover:text-muted-foreground/75 transition-colors tracking-wider">
                    {company}
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