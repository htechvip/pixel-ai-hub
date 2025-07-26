import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import htechLogo from "@/assets/logo-htech-whitebg.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={htechLogo} alt="HTech Logo" className="h-6 w-auto mr-2" />
            <h1 className="text-xl font-bold text-foreground">{content.header.logo}</h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {content.header.navigation.map((item) => {
              const link = item.href.startsWith("#") ? `/${item.href}` : item.href;
              return (
                <a
                  key={item.href}
                  href={link}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          
          {/* CTA Button */}
          <div>
            <Button>
              {content.hero.buttons.primary}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;