import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Award } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the next cohort of AI professionals. Limited spots available for our next 12-week intensive program.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Next Cohort</h3>
                <p className="text-muted-foreground">Starts March 15, 2024</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Class Size</h3>
                <p className="text-muted-foreground">Limited to 24 students</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Certification</h3>
                <p className="text-muted-foreground">Industry-recognized credential</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="lg" className="text-lg px-12 py-4">
              Apply Now - $2,500 Early Bird
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Schedule Info Session
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Regular price: $4,500. Early bird pricing ends February 1st.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;