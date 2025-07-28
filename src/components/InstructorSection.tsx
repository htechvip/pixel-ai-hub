import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { content } from "@/config/content";
import instructorImage from "@/assets/cable co talk.jpg";
import googleLogo from "@/assets/google_logo.jpeg";
import abnormalLogo from "@/assets/abnormal_ai_logo.jpeg";
import alleviateLogo from "@/assets/alleviate_financial_logo.jpeg";
import alticeLogo from "@/assets/altice_usa_logo.jpeg";
import caminoLogo from "@/assets/camino_financial_logo.jpeg";
import dbtLogo from "@/assets/dbtlabs_logo.jpeg";
import dropboxLogo from "@/assets/dropbox_logo.jpeg";
import eabLogo from "@/assets/eab__logo.jpeg";
import nbcLogo from "@/assets/nbcuniversal_inc__logo.jpeg";
import objectSecurityLogo from "@/assets/objectsecurity_logo.jpeg";
import redBullLogo from "@/assets/red_bull_logo.jpeg";
import taboolaLogo from "@/assets/taboola_logo.jpeg";
// Affiliation logos
import uscLogo from "@/assets/Block-USC_on_black.png";
import uclaLogo from "@/assets/ucla.png";
import columbiaLogo from "@/assets/columbia.jpg";
import sonyLogo from "@/assets/sony.jpg";
import ricohLogo from "@/assets/ricoh.png";
import mckinseyLogo from "@/assets/mckinsey.png";

const InstructorSection = () => {
  const companyLogos = [
    { src: googleLogo, alt: "Google" },
    { src: abnormalLogo, alt: "Abnormal Security" },
    { src: dropboxLogo, alt: "Dropbox" },
    { src: nbcLogo, alt: "NBCUniversal" },
    { src: dbtLogo, alt: "dbt Labs" },
    { src: alticeLogo, alt: "Altice USA" },
    { src: taboolaLogo, alt: "Taboola" },
    { src: redBullLogo, alt: "Red Bull" },
    { src: alleviateLogo, alt: "Alleviate Financial" },
    { src: caminoLogo, alt: "Camino Financial" },
    { src: objectSecurityLogo, alt: "Object Security" },
    { src: eabLogo, alt: "EAB" }
  ];

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
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Instructor Info */}
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">{content.instructor.name}</h3>
                <p className="text-lg text-primary mb-6">{content.instructor.role}</p>
                {/* Affiliation Logos below name */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[uscLogo, uclaLogo, columbiaLogo, sonyLogo, ricohLogo, mckinseyLogo].map((logo, idx) => {
                    const sizeClass = logo === uclaLogo || logo === columbiaLogo ? "h-12" : "h-10";
                    return (
                      <img
                        key={idx}
                        src={logo}
                        alt="affiliation logo"
                        className={`${sizeClass} w-auto object-contain opacity-80 hover:opacity-100 transition-opacity`}
                      />
                    );
                  })}
                </div>
                
                <div className="prose prose-lg dark:prose-invert">
                  {content.instructor.bio.map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}

                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="gap-2" asChild>
                      <a href="https://www.linkedin.com/in/chonantsai/" target="_blank" rel="noopener noreferrer">
                        <LinkedInLogoIcon className="w-4 h-4" />
                        LinkedIn
                      </a>
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

                  {/* Removed bottom logos */}
                </div>
              </div>
            </div>
          </Card>

          {/* Company Logos Section */}
          <div className="mt-16">
            <h3 className="text-xl font-medium text-center text-muted-foreground mb-8">
              Many people mentored by Cho-Nan work at leading tech companies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {companyLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
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