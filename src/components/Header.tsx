import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">AI Jedi</h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#why-join" className="text-muted-foreground hover:text-foreground transition-colors">
              Why Join
            </a>
            <a href="#program" className="text-muted-foreground hover:text-foreground transition-colors">
              What you will learn
            </a>
            <a href="#instructor" className="text-muted-foreground hover:text-foreground transition-colors">
              Instructor
            </a>
            <a href="#showcase" className="text-muted-foreground hover:text-foreground transition-colors">
              Success Stories
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button>
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;