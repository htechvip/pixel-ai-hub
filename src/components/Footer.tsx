import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const navLinks = [
    { href: "#why-join", label: "Why Join" },
    { href: "#program", label: "What you will learn" },
    { href: "#instructor", label: "Instructor" },
    { href: "#showcase", label: "Success Stories" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Brand and Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              AI Jedi
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transform your career with our intensive AI program. Learn machine learning, deep learning, and cutting-edge AI technologies from industry experts.
            </p>
            <p className="text-sm text-muted-foreground">
              📍 Taipei & Los Angeles
            </p>
          </div>
          
          {/* Right side - Navigation */}
          <div className="grid grid-cols-1 gap-4">
            <nav className="flex flex-wrap gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 AI Jedi. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;