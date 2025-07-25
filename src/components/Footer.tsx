import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Pixel AI Hub
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              The premier AI bootcamp preparing the next generation of machine learning engineers and data scientists.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>📍 123 Tech Street, San Francisco, CA 94105</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ hello@pixelaihub.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Program</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instructors</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Schedule</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tuition</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Career Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Alumni Network</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Pixel AI Hub. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;