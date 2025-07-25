import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyJoinSection from "@/components/WhyJoinSection";
import InstructorSection from "@/components/InstructorSection";
import ProgramOverview from "@/components/ProgramOverview";
import StudentShowcase from "@/components/StudentShowcase";
import CallToAction from "@/components/CallToAction";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyJoinSection />
      <InstructorSection />
      <ProgramOverview />
      <StudentShowcase />
      <CallToAction />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
