import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { content } from "@/config/content";
import pasadenaClass from "@/assets/pasadenaclass.jpg";
import aiTalkVilla from "@/assets/ai talk villa.jpeg";
import fridayMorningCoffee from "@/assets/friday morning coffee - villa staff.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              {content.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 animate-fade-in" asChild>
                <Link to="/signup">
                  {content.hero.buttons.primary}
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 animate-fade-in" asChild>
                <a href="https://forms.gle/UEqKeNwjD67odXhS7" target="_blank" rel="noopener noreferrer">
                  {content.hero.buttons.secondary}
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Image showcase */}
          <div className="relative">
            {/* Main large image */}
            <div className="relative group mb-6">
              <img 
                src={pasadenaClass} 
                alt="AI Jedi class in session" 
                className="w-full h-80 md:h-96 object-cover rounded-lg shadow-card group-hover:shadow-glow transition-all duration-300 animate-scale-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-foreground">
                <h3 className="text-lg font-bold">AI Jedi Class</h3>
                <p className="text-sm opacity-90">Learning and building together</p>
              </div>
            </div>

            {/* Grid of smaller images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src={aiTalkVilla} 
                  alt="AI talk at Villa" 
                  className="w-full h-32 md:h-40 object-cover transition-transform duration-300 group-hover:scale-110 animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-foreground">
                  <p className="text-xs font-medium">AI Talks</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src={fridayMorningCoffee} 
                  alt="Friday morning coffee with staff" 
                  className="w-full h-32 md:h-40 object-cover transition-transform duration-300 group-hover:scale-110 animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-foreground">
                  <p className="text-xs font-medium">Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;