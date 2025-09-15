import { Separator } from "@/components/ui/separator";
import { content } from "@/config/content";
import { Link } from "react-router-dom";

const Footer = () => {
  const isZh = window.location.pathname.startsWith("/zh-tw");
  const mainPagePath = isZh ? "/zh-tw" : "/";

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

            {/* Co-Organizers */}
            <div className="mt-6 space-y-2">
              <p className="text-sm font-medium">Co-Organizers</p>
              <div className="flex items-center gap-6 flex-wrap">
                <img src="/GTB+%20accel.png" alt="GTB+ Accelerator" className="h-10" />
                <img src="/gbtspace.png" alt="GTB Plaza" className="h-10" />
                <img src="/linkou.png" alt="Startup Terrace" className="h-10" />
                <span className="text-sm font-medium">Hyperionsoft Consulting</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Navigation */}
          <div className="grid grid-cols-1 gap-4">
            <nav className="flex flex-wrap gap-4">
              {content.header.navigation.map((item) => {
                // Always link to main page sections, never current page
                const link = `${mainPagePath}${item.href}`;
                
                return (
                  <a
                    key={item.href}
                    href={link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;