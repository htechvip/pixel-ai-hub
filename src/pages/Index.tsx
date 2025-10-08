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
import SEO from "@/components/SEO";
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "AI Jedi",
    "url": "https://aijedi.hyperionsoft.com",
    "logo": "https://aijedi.hyperionsoft.com/favicon.ico",
    "description": "Master AI skills through real-world case studies designed for finance, marketing, healthcare, and business professionals.",
    "sameAs": [
      "https://linkedin.com/in/chonantsai"
    ],
    "offers": {
      "@type": "Offer",
      "category": "AI Education",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={isZh ? "AI Jedi — 為職場專業人士提供實戰案例學習 AI" : "AI Jedi — Learn AI Through Real-World Case Studies for Career Professionals"}
        description={isZh 
          ? "透過為金融、行銷、醫療保健和商業專業人士設計的實戰案例掌握 AI 技能。無需編程 — 可立即應用的實用 AI 培訓。"
          : "Master AI skills through real-world case studies designed for finance, marketing, healthcare, and business professionals. No coding required — practical AI training you can apply immediately."}
        canonical={isZh ? "/zh-tw" : "/"}
        structuredData={structuredData}
      />
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
