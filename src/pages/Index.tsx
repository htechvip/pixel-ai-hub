import Hero from "@/components/Hero";
import ProgramOverview from "@/components/ProgramOverview";
import StudentShowcase from "@/components/StudentShowcase";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProgramOverview />
      <StudentShowcase />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
