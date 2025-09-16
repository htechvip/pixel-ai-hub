import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import htechLogo from "@/assets/logo-htech-whitebg.png";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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
          <a 
            href={isZh ? "/zh-tw" : "/"} 
            className="flex items-center hover:opacity-90 transition-opacity" 
            onClick={(e) => { 
              // If we're on the main page, scroll to top instead of navigating
              if (pathname === "/" || pathname === "/zh-tw") {
                e.preventDefault(); 
                window.scrollTo(0, 0); 
              }
              // Otherwise, let the default navigation happen
            }}
          >
            <img src={htechLogo} alt="Hyperonsoft AI Jedi" className="h-6 w-auto mr-2" />
            <h1 className="text-xl font-bold text-foreground">{content.header.logo}</h1>
          </a>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {content.header.navigation.map((item) => {
                  // For hash links, always go to main page with hash
                  const link = item.href.startsWith("#") ? `${isZh ? "/zh-tw" : "/"}${item.href}` : item.href;
                  if (item.children && item.children.length > 0) {
                    return (
                      <NavigationMenuItem key={item.label}>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid gap-2 p-4 w-[260px]">
                            {item.children.map((child) => {
                              // For AI Courses, generate course page URLs
                              let childLink;
                              if (item.label === "AI Courses") {
                                const courseId = child.label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                                childLink = `${basePath}/course/${courseId}`;
                              } else {
                                // For hash links, always go to main page with hash
                                childLink = child.href.startsWith("#") ? `${isZh ? "/zh-tw" : "/"}${child.href}` : child.href;
                              }
                              
                              return (
                                <NavigationMenuLink key={child.label} asChild>
                                  <a href={childLink} className="text-sm text-muted-foreground hover:text-foreground">
                                    {child.label}
                                  </a>
                                </NavigationMenuLink>
                              );
                            })}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }
                  return (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuLink asChild>
                        <a href={link} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
                          {item.label}
                        </a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
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