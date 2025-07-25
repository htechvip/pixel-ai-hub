import studentCoding from "@/assets/student-coding.jpg";
import graduationCelebration from "@/assets/graduation-celebration.jpg";
import studentPresenting from "@/assets/student-presenting.jpg";
import studentsCollaborating from "@/assets/students-collaborating.jpg";
import womanAiWork from "@/assets/woman-ai-work.jpg";

const StudentShowcase = () => {
  const students = [
    {
      image: studentCoding,
      name: "Sarah Chen",
      role: "ML Engineer at Google",
      quote: "The bootcamp transformed my career. I went from zero AI knowledge to landing my dream job at Google."
    },
    {
      image: womanAiWork,
      name: "Maria Rodriguez",
      role: "Data Scientist at Meta",
      quote: "The hands-on projects and industry mentorship made all the difference in my learning journey."
    },
    {
      image: studentPresenting,
      name: "James Wilson",
      role: "AI Researcher at OpenAI",
      quote: "The program's depth and practical approach prepared me for the most challenging AI roles."
    }
  ];

  return (
    <section id="showcase" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our graduates are working at the world's leading AI companies, building the future of technology.
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
              <h3 className="text-xl font-bold">Graduation Day 2024</h3>
              <p className="text-sm opacity-90">95% of our graduates got job offers within 3 months</p>
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
              <h3 className="text-xl font-bold">Collaborative Learning</h3>
              <p className="text-sm opacity-90">Work in teams on real industry projects</p>
            </div>
          </div>
        </div>

        {/* Student testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 mx-auto w-32 h-32 overflow-hidden rounded-full">
                <img 
                  src={student.image} 
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