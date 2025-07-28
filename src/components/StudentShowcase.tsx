import { content } from "@/config/content";
import pasadenaCohort from "@/assets/pasadenacohort.jpg";
import panel from "@/assets/panel.jpg";

const StudentShowcase = () => {
  return (
    <section id="showcase" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content.showcase.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {content.showcase.subtitle}
          </p>
        </div>

        {/* Large showcase images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src={pasadenaCohort} 
              alt="Los Angeles Cohort" 
              loading="lazy"
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-foreground">
              <h3 className="text-xl font-bold">Los Angeles Cohort</h3>
              <p className="text-sm opacity-90">Building the future of AI together</p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src={panel} 
              alt="AI Industry Panel" 
              loading="lazy"
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-foreground">
              <h3 className="text-xl font-bold">Industry Insights</h3>
              <p className="text-sm opacity-90">Learning from industry experts</p>
            </div>
          </div>
        </div>

        {/* Student testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.showcase.testimonials.map((student, index) => (
            <div key={index} className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg hover:shadow-card transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">{student.name}</h3>
              <p className="text-primary font-medium mb-4">{student.role}</p>
              <blockquote className="text-muted-foreground italic">
                "{student.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentShowcase;