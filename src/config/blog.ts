import pasadenaCohort from "@/assets/pasadenacohort.jpg";
import uscLecture from "@/assets/usc ai lecture.png";
import aiTalkVilla from "@/assets/ai talk villa.jpeg";

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  tags: string[];
  image: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "What I Learned About Hiring at a Startup",
    slug: "what-i-learned-about-hiring-at-a-startup",
    date: "2025-01-30",
    author: "Cho-Nan Tsai",
    excerpt: "Building a startup team taught me that the best hires aren't Ivy League pedigrees or 10x engineers. They're self-starters, learners, and people who lift the whole team. Here's what I learned while hiring at Camino Financial.",
    category: "Career Growth",
    tags: ["Hiring", "Startup", "Leadership"],
    image: aiTalkVilla
  },
  {
    title: "The AI Career Transformation Roadmap: From $50K to $500K in 18 Months",
    slug: "ai-career-transformation-roadmap",
    date: "2025-01-25",
    author: "Cho-Nan Tsai",
    excerpt: "A step-by-step blueprint showing how corporate employees are using AI to accelerate their careers and achieve massive salary growth without switching companies.",
    category: "Career Growth",
    tags: ["Career Growth", "AI Strategy", "Salary Increase"],
    image: pasadenaCohort
  },
  {
    title: "Why Claude Crushes ChatGPT for Strategic Thinking: A Data-Driven Comparison",
    slug: "claude-vs-chatgpt-strategic-thinking",
    date: "2025-01-20",
    author: "Cho-Nan Tsai",
    excerpt: "Discover why top executives prefer Claude for strategic analysis and long-form reasoning, backed by real case studies showing measurable business impact.",
    category: "AI Tools",
    tags: ["Claude", "ChatGPT", "Strategy", "Business Analysis"],
    image: uscLecture
  },
  {
    title: "Mastering ChatGPT for Career Growth: 15 Prompts Every Professional Needs",
    slug: "mastering-chatgpt-for-career-growth",
    date: "2025-01-15",
    author: "Cho-Nan Tsai",
    excerpt: "Learn the 15 essential ChatGPT prompts that executives use to accelerate their careers, automate workflows, and make smarter decisions.",
    category: "AI Tools",
    tags: ["ChatGPT", "Career Growth", "Productivity"],
    image: aiTalkVilla
  }
];

export const categories = [
  "All Posts",
  "AI Tools",
  "Career Growth",
  "Business Strategy",
  "Industry Insights"
];

