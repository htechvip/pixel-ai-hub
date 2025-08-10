import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import htechLogo from "@/assets/logo-htech-whitebg.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { pathname, search, hash } = location;

  const isZh = pathname.startsWith("/zh-tw");
  const basePath = isZh ? "/zh-tw" : "";
  const signupPath = isZh ? "/zh-tw/signup" : "/signup";

  // Construct path for language toggle
  const toggleBase = isZh ? pathname.replace(/^\/zh-tw/, "") || "/" : `/zh-tw${pathname}`;
  const togglePath = `${toggleBase}${search}${hash}`;
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={isZh ? "/zh-tw" : "/"} className="flex items-center hover:opacity-90 transition-opacity">
            <img src={htechLogo} alt="Hyperonsoft AI Jedi" className="h-6 w-auto mr-2" />
            <h1 className="text-xl font-bold text-foreground">{content.header.logo}</h1>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {content.header.navigation.map((item) => {
              const link = item.href.startsWith("#") ? `${basePath}${item.href}` : item.href;
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
          
          {/* CTA & Language Switch */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href={togglePath}>{isZh ? "EN" : "中文"}</a>
            </Button>
            <Button asChild className="mr-2 sm:mr-0">
              <Link to={signupPath}>{content.hero.buttons.primary}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;