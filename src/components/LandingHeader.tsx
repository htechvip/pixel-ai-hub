import htechLogo from "@/assets/logo-htech-whitebg.png";
import { content } from "@/config/content";

const LandingHeader = () => {
  const isZh = window.location.pathname.startsWith("/zh-tw");
  const homePath = isZh ? "/zh-tw" : "/";
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href={homePath} 
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <img src={htechLogo} alt="Hyperonsoft AI Jedi" className="h-6 w-auto mr-2" />
            <h1 className="text-xl font-bold text-foreground">{content.header.logo}</h1>
          </a>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
