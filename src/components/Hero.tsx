import { Button } from "@/components/ui/button";
import studentsWorking from "@/assets/students-working.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={studentsWorking} 
          alt="Students working together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Master AI in 12 Weeks
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your career with our intensive AI bootcamp. Learn machine learning, deep learning, and cutting-edge AI technologies from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Job Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$120K+</div>
              <div className="text-muted-foreground">Average Starting Salary</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Graduates Placed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;