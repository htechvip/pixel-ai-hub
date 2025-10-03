import pasadenaCohort from "@/assets/pasadenacohort.jpg";
import uscLecture from "@/assets/usc ai lecture.png";
import aiTalkVilla from "@/assets/ai talk villa.jpeg";
import aiTalkSm from "@/assets/ai talk sm.jpg";
import cableCoTalk from "@/assets/cable co talk.jpg";
import chonantsai30 from "@/assets/chonantsai_30.jpeg";

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
    title: "The $10 Million Lesson: What Fortune 500s and Startups Get Wrong About AI",
    slug: "the-10-million-lesson-what-fortune-500s-and-startups-get-wrong-about-ai",
    date: "2025-10-03",
    author: "Cho-Nan Tsai",
    excerpt: "",
    category: "AI Tools",
    tags: ["General"],
    image: chonantsai30
  },

  {
    title: "Why Non-Technical People Are Better at AI Than They Think",
    slug: "why-non-technical-people-are-better-at-ai-than-they-think",
    date: "2025-09-01",
    author: "Cho-Nan Tsai",
    excerpt: "Non-technical people are often underestimated in their ability to use AI. Here's why they're actually better at it than they think.",
    category: "Career Growth",
    tags: ["General"],
    image: uscLecture
  },

  {
    title: "Explaining Machine Learning vs Deep Learning to Non-Technical Students",
    slug: "machine-learning-vs-deep-learning-explained",
    date: "2025-10-01",
    author: "Cho-Nan Tsai",
    excerpt: "Teaching AI can be tricky for students without a CS background. Here's how I explained the difference between machine learning and deep learning using simple examples.",
    category: "AI Tools",
    tags: ["Machine Learning", "Deep Learning", "AI Education", "Neural Networks"],
    image: aiTalkSm
  },
  {
    title: "What I Learned About Hiring at a Startup",
    slug: "what-i-learned-about-hiring-at-a-startup",
    date: "2025-09-30",
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

