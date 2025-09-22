import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyJoinSection from "@/components/WhyJoinSection";
import ProgramOverview from "@/components/ProgramOverview";
import AITipsGuide from "@/components/AITipsGuide";
import AITipsGuideZh from "@/components/AITipsGuideZh";
import AIToolsSection from "@/components/AIToolsSection";
import VibeCodingWebApps from "@/components/VibeCodingWebApps";
import InstructorSection from "@/components/InstructorSection";
import PreviousLectures from "@/components/PreviousLectures";
import StudentShowcase from "@/components/StudentShowcase";
import CallToAction from "@/components/CallToAction";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { content } from "@/config/content";
import { useEffect } from "react";

const Index = () => {
  console.log("Content configuration:", content);
  console.log("Rendering Index page");

  // Handle hash scrolling on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for components to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const isZh = typeof window !== "undefined" && window.location.pathname.startsWith("/zh-tw");

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyJoinSection />
      <ProgramOverview />
      <AIToolsSection />
      <VibeCodingWebApps />
      <InstructorSection />
      <PreviousLectures />
      <StudentShowcase />
      <CallToAction />
      <FAQSection />
      {isZh ? <AITipsGuideZh /> : <AITipsGuide />}
      <Footer />
    </div>
  );
};

export default Index;
