import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import SignupZh from "./pages/SignupZh";
import Course from "./pages/Course";
import LandingPage from "./pages/LandingPage";
import CareerAIAdvantage from "./pages/CareerAIAdvantage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Newsletter from "./pages/Newsletter";
import AIQuiz from "./pages/AIQuiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

console.log("App component initializing");

const App = () => {
  console.log("App component rendering");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/course/:courseId" element={<Course />} />
            <Route path="/lp/:courseId" element={<LandingPage />} />
            <Route path="/career-ai-advantage" element={<CareerAIAdvantage />} />
            <Route path="/ai-quiz" element={<AIQuiz />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* Traditional Chinese routes */}
            <Route path="/zh-tw" element={<Index />} />
            <Route path="/zh-tw/signup" element={<SignupZh />} />
            <Route path="/zh-tw/course/:courseId" element={<Course />} />
            <Route path="/zh-tw/lp/:courseId" element={<LandingPage />} />
            <Route path="/zh-tw/blog" element={<Blog />} />
            <Route path="/zh-tw/blog/:slug" element={<BlogPost />} />
            <Route path="/zh-tw/newsletter" element={<Newsletter />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
