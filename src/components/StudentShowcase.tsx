import { content } from "@/config/content";
import studentCoding from "@/assets/student-coding.jpg";
import graduationCelebration from "@/assets/graduation-celebration.jpg";
import studentPresenting from "@/assets/student-presenting.jpg";
import studentsCollaborating from "@/assets/students-collaborating.jpg";
import womanAiWork from "@/assets/woman-ai-work.jpg";

const StudentShowcase = () => {
  const studentImages = {
    "Sarah Chen": studentCoding,
    "Maria Rodriguez": womanAiWork,
    "James Wilson": studentPresenting
  };

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
              src={graduationCelebration} 
              alt="Graduation celebration" 
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{content.showcase.imageLabels.graduation.title}</h3>
              <p className="text-sm opacity-90">{content.showcase.imageLabels.graduation.subtitle}</p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src={studentsCollaborating} 
              alt="Students collaborating" 
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{content.showcase.imageLabels.collaboration.title}</h3>
              <p className="text-sm opacity-90">{content.showcase.imageLabels.collaboration.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Student testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.showcase.testimonials.map((student, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 mx-auto w-32 h-32 overflow-hidden rounded-full">
                <img 
                  src={studentImages[student.name as keyof typeof studentImages]} 
                  alt={student.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
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