import { Separator } from "@/components/ui/separator";
import { content } from "@/config/content";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Brand and Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              {content.header.logo}
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              {content.footer.description}
            </p>
            <p className="text-sm text-muted-foreground">
              {content.footer.location}
            </p>
          </div>
          
          {/* Right side - Navigation */}
          <div className="grid grid-cols-1 gap-4">
            <nav className="flex flex-wrap gap-4">
              {content.header.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>{content.footer.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              {content.footer.links.privacy}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {content.footer.links.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;