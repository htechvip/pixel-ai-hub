import Aitalkvillajpeg from "@/assets/ai talk villa.jpeg";
import Chonantsai13jpg from "@/assets/chonantsai_13.jpg";
import Chonantsai1jpg from "@/assets/chonantsai_1.jpg";
import Chonantsai2jpg from "@/assets/chonantsai_2.jpg";
import Chonantsai30jpeg from "@/assets/chonantsai_30.jpeg";
import Chonantsai35jpeg from "@/assets/chonantsai_35.jpeg";
import Chonantsai49png from "@/assets/chonantsai_49.png";
import aiTalkSm from "@/assets/ai talk sm.jpg";

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
    title: "I Just Fired Myself (And Set People Free)",
    slug: "i-just-fired-myself-and-set-10-000-people-free",
    date: "2025-10-06",
    author: "Cho-Nan Tsai",
    excerpt: "A personal story about making the difficult decision to step down from leadership to set thousands of people free to pursue their own paths.",
    category: "Industry Insights",
    tags: ["General"],
    image: Chonantsai1jpg
  },

  {
    title: "The 3 Traits That Make Someone Worth $200K (From a CTO Who's Hired Hundreds)",
    slug: "the-3-traits-that-make-someone-worth-200k-from-a-cto-who-s-hired-hundreds",
    date: "2025-10-06",
    author: "Cho-Nan Tsai",
    excerpt: "As a founding CTO three times, I've hired hundreds of people. Here are the three traits that made someone worth $200K vs $50K—and it wasn't their degree or years of experience.",
    category: "Career Growth",
    tags: ["General"],
    image: Chonantsai49png
  },

  {
    title: "The Waning McKinsey & Co.",
    slug: "the-waning-mckinsey-co",
    date: "2025-10-06",
    author: "Cho-Nan Tsai",
    excerpt: "A reflection on McKinsey & Company's evolution from the inside, examining how the consulting giant has changed since the early 2000s and what it means for business strategy today.",
    category: "Business Strategy",
    tags: ["General"],
    image: Chonantsai13jpg
  },

  {
    title: "The $10 Million Lesson: What Fortune 500s and Startups Get Wrong About AI",
    slug: "the-10-million-lesson-what-fortune-500s-and-startups-get-wrong-about-ai",
    date: "2025-10-03",
    author: "Cho-Nan Tsai",
    excerpt: "After 20+ years in both Fortune 500s and startups, I've learned that both assume the other has figured out AI. Here's the $10 million lesson about what they're both getting wrong.",
    category: "AI Tools",
    tags: ["General"],
    image: Chonantsai30jpeg
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
    title: "Why Non-Technical People Are Better at AI Than They Think",
    slug: "why-non-technical-people-are-better-at-ai-than-they-think",
    date: "2025-10-01",
    author: "Cho-Nan Tsai",
    excerpt: "Non-technical professionals often underestimate their ability to leverage AI. Here’s why understanding the business and big picture makes them powerful AI users.",
    category: "AI Tools",
    tags: ["Career Growth"],
    image: Chonantsai2jpg
  },

  {
    title: "The $200 Solution That Beat the MIT Graduate",
    slug: "the-200-solution-that-beat-the-mit-graduate",
    date: "2025-09-15",
    author: "Cho-Nan Tsai",
    excerpt: "Sometimes the best solution isn't the most technically complex. Here's how a $200 approach outperformed an MIT graduate's $50,000 solution—and what it teaches us about practical problem-solving.",
    category: "Business Strategy",
    tags: ["General"],
    image: Chonantsai30jpeg
  },

  {
    title: "Mastering ChatGPT for Career Growth: 15 Prompts Every Professional Needs",
    slug: "mastering-chatgpt-for-career-growth",
    date: "2025-01-15",
    author: "Cho-Nan Tsai",
    excerpt: "Learn the 15 essential ChatGPT prompts that executives use to accelerate their careers, automate workflows, and make smarter decisions.",
    category: "AI Tools",
    tags: ["ChatGPT", "Career Growth", "Productivity"],
    image: Chonantsai35jpeg
  },

  {
    title: "What I Learned About Hiring at a Startup",
    slug: "what-i-learned-about-hiring-at-a-startup",
    date: "2024-09-30",
    author: "Cho-Nan Tsai",
    excerpt: "Building a startup team taught me that the best hires aren't Ivy League pedigrees or 10x engineers. They're self-starters, learners, and people who lift the whole team. Here's what I learned while hiring at Camino Financial.",
    category: "Career Growth",
    tags: ["Hiring", "Startup", "Leadership"],
    image: Aitalkvillajpeg
  }
];

export const categories = [
  "All Posts",
  "AI Tools",
  "Career Growth", 
  "Business Strategy",
  "Industry Insights"
];
