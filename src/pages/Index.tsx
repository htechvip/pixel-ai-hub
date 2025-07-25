import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyJoinSection from "@/components/WhyJoinSection";
import ProgramOverview from "@/components/ProgramOverview";
import VibeCodingWebApps from "@/components/VibeCodingWebApps";
import InstructorSection from "@/components/InstructorSection";
import StudentShowcase from "@/components/StudentShowcase";
import CallToAction from "@/components/CallToAction";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { content } from "@/config/content";

const Index = () => {
  console.log("Content configuration:", content);
  console.log("Rendering Index page");

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyJoinSection />
      <ProgramOverview />
      <VibeCodingWebApps />
      <InstructorSection />
      <StudentShowcase />
      <CallToAction />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
