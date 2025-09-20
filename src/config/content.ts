type ButtonVariant = "cta" | "outline" | "link" | "default" | "destructive" | "secondary" | "ghost" | "hero";

type Content = {
  header: {
    logo: string;
    navigation: Array<{
      href: string;
      label: string;
      children?: Array<{
        href: string;
        label: string;
      }>;
    }>;
  };
  hero: {
    title: string;
    description: string;
    buttons: {
      primary: string;
      secondary: string;
    };
  };
  whyJoin: {
    title: string;
    subtitle: string;
    mainText: string[];
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    cta: string;
  };
  program: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  courses: {
    [key: string]: {
      title: string;
      description: string;
      instructor: string;
      rating: number;
      ratingNum: number;
      students: number;
      duration: string;
      level: string;
      price: string;
      originalPrice: string;
      lastUpdated: string;
      language: string;
      video?: string;
      features: string[];
      whatYouWillLearn: string[];
      curriculum: Array<{
        section: string;
        lessons: Array<{
          title: string;
          duration: string;
          type: string;
        }>;
      }>;
      reviews?: Array<{
        name: string;
        rating: number;
        comment: string;
        timeAgo: string;
      }>;
    };
  };
  instructor: {
    title: string;
    name: string;
    role: string;
    bio: string[];
    stats: Array<{
      value: string;
      label: string;
    }>;
    companies: {
      title: string;
      logos: string[];
    };
  };
  showcase: {
    title: string;
    subtitle: string;
    imageLabels: {
      graduation: {
        title: string;
        subtitle: string;
      };
      collaboration: {
        title: string;
        subtitle: string;
      };
    };
    testimonials: Array<{
      name: string;
      role: string;
      quote: string;
    }>;
  };
  callToAction: {
    title: string;
    subtitle: string;
    buttons: {
      primary: {
        text: string;
        variant: ButtonVariant;
      };
      secondary?: {
        text: string;
        variant: ButtonVariant;
      };
    };
  };
  faq: {
    title: string;
    subtitle: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    description: string;
    location: string;
    copyright: string;
    links: {
      privacy: string;
      terms: string;
    };
  };
};

const englishContent: Content = {
  header: {
    logo: "AI Jedi",
    navigation: [
      { href: "#why-join", label: "Why Join" },
      {
        href: "#online-courses",
        label: "AI Courses",
        children: [
          { href: "#courses-finance-professionals", label: "AI for Finance Professionals" },
          { href: "#courses-marketing-professionals", label: "AI for Marketing Professionals" },
          { href: "#courses-software-developers", label: "AI for Software Developers" },
          { href: "#courses-business-leaders", label: "AI for Business Leaders" },
          { href: "#courses-healthcare-professionals", label: "AI for Healthcare Professionals" },
          { href: "#courses-product-managers", label: "AI for Product Managers - Vibe Coding 101" }
        ]
      },
      { href: "#instructor", label: "Instructor" },
      { href: "#showcase", label: "Success Stories" },
      { href: "#faq", label: "FAQ" }
    ]
  },

  hero: {
    title: "Master AI through hands-on case studies",
    description: "Hands-on online courses designed for career professionals. Learn how to use AI tools to automate tasks, make better decisions, and drive business results — no coding required.",
    
    buttons: {
      primary: "Learn AI Online",
      secondary: "Learn AI In-Person"
    }
  },

  whyJoin: {
    title: "Why Join AI Jedi",
    subtitle: "Empowering the next generation of professionals to thrive with AI",
    mainText: [
      "You don't need a computer science degree to start using AI at work. With today's powerful no-code AI tools, you can automate tasks, streamline workflows, and create new opportunities — even without a technical background. If you can describe what you want, you can make it happen.",
      "But here's what you won't find anywhere else: This program is built on nearly three decades of real-world AI implementations across Fortune 200 companies and startups that got acquired. Every example, every workflow, every strategy comes from actual business battles — not theoretical classroom scenarios.",
      "This hands-on program is designed for non-technical professionals who want to advance their careers by applying AI that actually works in the real world. Zero passive learning. You'll be building with battle-tested frameworks from day one, using the exact same approaches that drove millions in revenue and operational savings at major corporations.",
      "In just one weekend, you'll design and implement AI workflows you can immediately deploy in your job or business — workflows proven in high-stakes corporate environments. We guide you step-by-step with the no-code tools and cutting-edge AI practices that survived the crucible of Fortune 200 boardrooms and startup scaling challenges.",
      "The bottom line: You're not just learning AI — you're learning AI that's been forged in the real world and proven to deliver results where it matters most."
    ],
    features: [
      {
        icon: "🚀",
        title: "Learn by Doing",
        description: "Gain real-world experience applying AI to everyday work challenges."
      },
      {
        icon: "🤖",
        title: "AI-First Workflows",
        description: "Master the latest no-code AI tools for text, images, video, and data — no programming required."
      },
      {
        icon: "💡",
        title: "Deliver Results Fast",
        description: "Design and launch an AI workflow you can take back to your job by the end of the program."
      }
    ],
    cta: "Explore Online Courses"
  },

  program: {
    title: "Explore AI Courses",
    subtitle: "Practical, no‑code AI tracks designed for business impact.",
    features: [
      {
        title: "AI for Finance Professionals",
        description: "Automate financial analysis, reporting, and decision-making with AI-powered tools."
      },
      {
        title: "AI for Marketing Professionals",
        description: "Learn to automate marketing tasks and create compelling campaigns using practical AI tools."
      },
      {
        title: "AI for Software Developers",
        description: "Learn to integrate AI APIs, use coding assistants, and build AI-powered features without becoming a data scientist."
      },
      {
        title: "AI for Business Leaders",
        description: "Turn complex data into strategic insights and make data-driven decisions with confidence."
      },
      {
        title: "AI for Healthcare Professionals",
        description: "Optimize patient care, streamline documentation, and improve healthcare operations with AI."
      },
      {
        title: "AI for Product Managers - Vibe Coding 101",
        description: "Build product prototypes and automations by describing what you want—no coding required."
      }
    ]
  },

  courses: {
    "ai-for-finance-professionals": {
      title: "AI for Finance Professionals",
      description: "Discover how AI can transform your finance workflows without writing a single line of code. This course introduces finance professionals to practical AI applications in forecasting, reporting, and automation. Learn how to leverage off-the-shelf AI tools to save time, reduce errors, and make smarter decisions.",
      instructor: "Cho-Nan Tsai",
      rating: 4.9,
      ratingNum: 1247,
      students: 1247,
      duration: "2 hours",
      level: "Beginner",
      price: "$299",
      originalPrice: "$599",
      lastUpdated: "December 2024",
      language: "English",
      video: "intro.mp4",
      features: [
        "4-8 minute lessons for easy learning",
        "Quizzes after each major module",
        "Downloadable resources: workflow checklist, prompt library, AI tool guide",
        "Certificate of Completion: AI-Ready Finance Professional",
        "No coding or technical background required"
      ],
      whatYouWillLearn: [
        "Understand the basics of AI, machine learning, and generative AI",
        "Identify finance tasks that can be automated with AI",
        "Use simple AI tools for forecasting, report writing, and analysis",
        "Communicate effectively with AI or data teams",
        "Apply practical AI skills immediately in your role"
      ],
      curriculum: [
        {
          section: "Module 1: Introduction to AI in Finance",
          lessons: [
            { title: "What is AI?", duration: "5 min", type: "video" },
            { title: "Why AI matters in finance", duration: "5 min", type: "video" },
            { title: "Real-world examples: FP&A, reporting, and fraud detection", duration: "5 min", type: "video" }
          ]
        },
        {
          section: "Module 2: AI Fundamentals for Finance Professionals",
          lessons: [
            { title: "Key concepts: models, predictions, and data", duration: "6 min", type: "video" },
            { title: "AI vs traditional analytics", duration: "5 min", type: "video" },
            { title: "Ethics, compliance, and bias", duration: "6 min", type: "video" },
            { title: "Quiz: Spot the AI use case", duration: "4 min", type: "quiz" }
          ]
        },
        {
          section: "Module 3: Automating Repetitive Finance Tasks",
          lessons: [
            { title: "Identifying tasks to automate", duration: "5 min", type: "video" },
            { title: "Using AI for invoice processing and reconciliation", duration: "6 min", type: "video" },
            { title: "Automating reporting and dashboards", duration: "6 min", type: "video" },
            { title: "Hands-on exercise: Map one task you could automate", duration: "7 min", type: "exercise" },
            { title: "Quick wins recap", duration: "6 min", type: "video" }
          ]
        },
        {
          section: "Module 4: AI for Forecasting & Analysis",
          lessons: [
            { title: "Introduction to AI forecasting", duration: "6 min", type: "video" },
            { title: "Using no-code AI tools for scenario analysis", duration: "6 min", type: "video" },
            { title: "Interpreting results & dashboards", duration: "6 min", type: "video" },
            { title: "Exercise: Build a simple forecast from your own data", duration: "7 min", type: "exercise" },
            { title: "Tips for actionable insights", duration: "5 min", type: "video" }
          ]
        },
        {
          section: "Module 5: AI for Communication & Reporting",
          lessons: [
            { title: "Drafting board decks and investor memos", duration: "5 min", type: "video" },
            { title: "Using AI to summarize financial reports", duration: "5 min", type: "video" },
            { title: "Hands-on exercise: Turn raw data into a narrative", duration: "6 min", type: "exercise" },
            { title: "Recap & next steps", duration: "4 min", type: "video" }
          ]
        },
        {
          section: "Final Assessment / Wrap-Up",
          lessons: [
            { title: "Mini-project: Identify 2 finance tasks in your role that could benefit from AI", duration: "6 min", type: "project" },
            { title: "Course summary & recommended next steps", duration: "4 min", type: "video" }
          ]
        }
      ],
      reviews: [
        {
          name: "Sarah Martinez",
          rating: 5,
          comment: "This course completely transformed how I approach financial analysis. The AI tools we learned have saved me 15 hours per week on routine reporting tasks. The instructor's real-world examples made everything click.",
          timeAgo: "2 weeks ago"
        },
        {
          name: "Mike Chen",
          rating: 5,
          comment: "As a CFO, I was skeptical about AI in finance. This course showed me practical applications that don't require technical expertise. Our forecasting accuracy improved by 30% using the techniques taught here.",
          timeAgo: "1 month ago"
        },
        {
          name: "Emily Rodriguez",
          rating: 4,
          comment: "The hands-on exercises were excellent. I implemented the automated reporting system and my team loves the real-time dashboards. The course material is well-structured and easy to follow.",
          timeAgo: "3 weeks ago"
        },
        {
          name: "David Kim",
          rating: 5,
          comment: "Perfect for finance professionals who want to stay ahead. The 4-8 minute lessons fit perfectly into my busy schedule, and I could immediately apply what I learned to automate our monthly reporting process.",
          timeAgo: "1 week ago"
        }
      ]
    },
    "ai-for-marketing-professionals": {
      title: "AI for Marketing Professionals: A Beginner's Hands-On Guide",
      description: "Transform your marketing workflow in just 2 hours using ChatGPT, Canva, and HubSpot AI. This hands-on course shows you exactly how to automate social media posts, optimize email subject lines, create content calendars, and build predictive models for lead scoring — all without writing a single line of code. You'll walk away with ready-to-use prompts, automation templates, and a complete AI-enhanced marketing process you can implement immediately.",
      instructor: "Cho-Nan Tsai",
      rating: 4.8,
      ratingNum: 892,
      students: 892,
      duration: "2 hours",
      level: "Beginner",
      price: "$199",
      originalPrice: "$399",
      lastUpdated: "December 2024",
      language: "English",
      features: [
        "All lessons are short and focused (4–8 minutes each)",
        "Hands-on demos with free or freemium AI tools (ChatGPT, Jasper, Canva, Zapier, HubSpot AI features, etc.)",
        "Quizzes after each major module",
        "Downloadable resources: AI prompt library for marketing, automation checklist, recommended tools list",
        "Certificate of Completion: AI-Ready Marketing Professional"
      ],
      whatYouWillLearn: [
        "Understand core AI concepts relevant to marketing",
        "Identify repetitive marketing tasks you can automate with AI",
        "Use AI tools to create content, analyze campaigns, and personalize customer experiences",
        "Build a simple AI-enhanced workflow for your own marketing tasks",
        "Apply practical AI experience quickly to real campaigns"
      ],
      curriculum: [
        {
          section: "Module 1: Introduction to AI in Marketing",
          lessons: [
            { title: "What is AI and why marketers should care", duration: "6 min", type: "video" },
            { title: "Real-world examples of AI in marketing: personalization, chatbots, content", duration: "8 min", type: "video" },
            { title: "Overview of no-code AI tools for marketers", duration: "6 min", type: "video" }
          ]
        },
        {
          section: "Module 2: AI Fundamentals for Marketers",
          lessons: [
            { title: "How AI \"thinks\": models, data, predictions", duration: "7 min", type: "video" },
            { title: "AI vs traditional analytics in marketing", duration: "6 min", type: "video" },
            { title: "Privacy, ethics, and compliance in AI marketing", duration: "7 min", type: "video" },
            { title: "Quiz: Spot the AI use case", duration: "4 min", type: "quiz" }
          ]
        },
        {
          section: "Module 3: Automating Marketing Tasks with AI",
          lessons: [
            { title: "Identifying tasks to automate", duration: "5 min", type: "video" },
            { title: "Hands-on: Using AI to create social media posts", duration: "8 min", type: "exercise" },
            { title: "Hands-on: AI-driven email subject line & copy optimization", duration: "8 min", type: "exercise" },
            { title: "Hands-on: Automating ad campaign reporting", duration: "7 min", type: "exercise" },
            { title: "Recap: Quick wins for your marketing workflow", duration: "5 min", type: "video" }
          ]
        },
        {
          section: "Module 4: AI for Content Creation & Personalization",
          lessons: [
            { title: "Generative AI for blog posts, captions, and ads", duration: "8 min", type: "video" },
            { title: "Hands-on: Build a content calendar with an AI tool", duration: "10 min", type: "exercise" },
            { title: "Personalizing email campaigns using AI segmentation", duration: "7 min", type: "video" },
            { title: "Hands-on: Creating a customer journey map with AI", duration: "8 min", type: "exercise" },
            { title: "Tips to keep brand voice consistent with AI tools", duration: "6 min", type: "video" }
          ]
        },
        {
          section: "Module 5: AI Analytics for Marketers",
          lessons: [
            { title: "Using AI to analyze campaign performance", duration: "7 min", type: "video" },
            { title: "Hands-on: Set up a simple predictive model for lead scoring or churn", duration: "10 min", type: "exercise" },
            { title: "Recap & next steps", duration: "5 min", type: "video" }
          ]
        },
        {
          section: "Final Assessment / Wrap-Up",
          lessons: [
            { title: "Mini-project: Pick one marketing process you run today and redesign it with at least one AI tool", duration: "8 min", type: "project" },
            { title: "Course summary & recommended next steps", duration: "4 min", type: "video" }
          ]
        }
      ],
        reviews: [
          {
            name: "Jessica Wu",
            rating: 5,
            comment: "Perfect for marketing beginners! The hands-on exercises with ChatGPT and Canva were incredibly practical. I immediately started using AI for our social media posts and email campaigns. Our engagement rates increased by 45%.",
            timeAgo: "1 week ago"
          },
          {
            name: "Alex Thompson",
            rating: 5,
            comment: "As a small business owner, I couldn't afford a marketing team. This course taught me to automate repetitive tasks and create professional campaigns using free AI tools. My lead generation improved by 150%!",
            timeAgo: "3 weeks ago"
          },
          {
            name: "Maria Santos",
            rating: 4,
            comment: "Excellent hands-on approach! The content calendar exercise with AI tools was a game-changer. I love how the course focuses on practical applications rather than theory. The prompt library is incredibly useful.",
            timeAgo: "2 weeks ago"
          },
          {
            name: "Tom Wilson",
            rating: 5,
            comment: "This course paid for itself in the first week! The AI-driven email optimization and automated reporting saved me 15 hours weekly. The mini-project helped me redesign our entire lead nurturing process.",
            timeAgo: "1 month ago"
          }
        ]
      },
    "ai-for-software-developers": {
      title: "AI for Software Developers: A Hands-On Beginner's Guide",
      description: "Master AI integration as a software developer using GitHub Copilot, OpenAI APIs, and Model Context Protocol. This hands-on course shows you exactly how to add intelligent features to your applications, automate coding tasks, and build AI-powered functionality using practical APIs and SDKs. You'll walk away with working code examples, integration templates, and a complete AI-enhanced development workflow you can implement immediately.",
      instructor: "Cho-Nan Tsai",
      rating: 4.9,
      ratingNum: 634,
      students: 634,
      duration: "2 hours",
      level: "Beginner",
      price: "$399",
      originalPrice: "$799",
      lastUpdated: "December 2024",
      language: "English",
      features: [
        "All lessons are short, focused, and practical",
        "Hands-on demos with widely used AI APIs, coding assistants, and MCP integration",
        "Downloadable resources: sample code, API cheat sheets, prompt library for developers",
        "Quizzes at the end of each module to reinforce learning",
        "Final mini-project to apply what you've learned",
        "Certificate of Completion: AI-Native Software Developer"
      ],
      whatYouWillLearn: [
        "Understand the key AI concepts relevant to software development",
        "Use popular AI APIs and SDKs to add features to your apps",
        "Leverage AI tools to speed up coding, testing, and documentation",
        "Plan and build a small AI-powered project from scratch",
        "Understand and apply Model Context Protocol to streamline AI integrations"
      ],
      curriculum: [
        {
          section: "Module 1: Introduction to AI for Developers",
          lessons: [
            { title: "What AI is (and isn't) for software developers", duration: "8 min", type: "video" },
            { title: "Real-world examples of AI in apps and services", duration: "10 min", type: "video" },
            { title: "Overview of popular AI platforms, APIs, and tools", duration: "8 min", type: "video" }
          ]
        },
        {
          section: "Module 2: AI Fundamentals for Developers",
          lessons: [
            { title: "Core concepts: models, training, inference, data", duration: "10 min", type: "video" },
            { title: "AI vs traditional algorithms", duration: "8 min", type: "video" },
            { title: "Key ethical and compliance considerations when using AI in software", duration: "7 min", type: "video" }
          ]
        },
        {
          section: "Module 3: Using AI Tools to Boost Developer Productivity",
          lessons: [
            { title: "Coding assistance with AI (code completion, refactoring, documentation)", duration: "10 min", type: "video" },
            { title: "AI for automated testing and bug detection", duration: "8 min", type: "video" },
            { title: "Hands-on: Using a code assistant tool in your IDE", duration: "12 min", type: "exercise" }
          ]
        },
        {
          section: "Module 4: Integrating AI APIs into Applications",
          lessons: [
            { title: "Overview of text, image, and speech APIs", duration: "8 min", type: "video" },
            { title: "Hands-on: Calling an AI API from a simple app", duration: "15 min", type: "exercise" },
            { title: "Handling authentication, rate limits, and data privacy", duration: "8 min", type: "video" },
            { title: "Best practices for error handling and model updates", duration: "7 min", type: "video" }
          ]
        },
        {
          section: "Module 5: Working with Model Context Protocol (MCP)",
          lessons: [
            { title: "What Model Context Protocol is and why it matters", duration: "8 min", type: "video" },
            { title: "How MCP improves context sharing between models and applications", duration: "10 min", type: "video" },
            { title: "Hands-on: Implementing a simple MCP-enabled integration", duration: "15 min", type: "exercise" },
            { title: "Best practices for secure and efficient context exchange", duration: "7 min", type: "video" }
          ]
        },
        {
          section: "Module 6: Building an AI-Powered Feature from Scratch",
          lessons: [
            { title: "Selecting a use case (chatbot, summarizer, recommender, etc.)", duration: "6 min", type: "video" },
            { title: "Designing the feature architecture", duration: "8 min", type: "video" },
            { title: "Hands-on: Implementing a minimal AI feature using a no-code or low-code SDK", duration: "20 min", type: "exercise" },
            { title: "Testing and deploying your AI-powered feature", duration: "10 min", type: "video" }
          ]
        },
        {
          section: "Module 7: Planning Your AI Journey as a Developer",
          lessons: [
            { title: "Identifying where AI can add value in your projects", duration: "8 min", type: "video" },
            { title: "Choosing between build vs. buy vs. integrate", duration: "7 min", type: "video" },
            { title: "Staying up to date with AI trends and tools", duration: "5 min", type: "video" },
            { title: "Course wrap-up and next steps", duration: "5 min", type: "video" }
          ]
        }
      ],
      reviews: [
        {
          name: "Robert Johnson",
          rating: 5,
          comment: "Perfect introduction to AI for developers! The hands-on API integration exercises were incredibly practical. I immediately started using GitHub Copilot and integrated OpenAI's API into our customer support chatbot. Development time reduced by 40%.",
          timeAgo: "2 weeks ago"
        },
        {
          name: "Linda Chang",
          rating: 4,
          comment: "Excellent practical approach to AI development. The Model Context Protocol section was eye-opening - I had no idea how much context sharing could improve AI integrations. The sample code repository is incredibly useful.",
          timeAgo: "1 month ago"
        },
        {
          name: "Carlos Rivera",
          rating: 5,
          comment: "Great beginner-friendly course! As a backend developer, I was intimidated by AI, but this course made it accessible. Built my first AI-powered feature (document summarizer) in just one weekend using the techniques learned.",
          timeAgo: "3 weeks ago"
        },
        {
          name: "Anna Petrov",
          rating: 5,
          comment: "Best investment for developers wanting to stay current! The coding assistant demos alone saved me hours weekly. The mini-project helped me add intelligent search to our app. Clients love the new AI features!",
          timeAgo: "1 week ago"
        }
      ]
    },
    "ai-for-business-leaders": {
      title: "AI for Business Leaders",
      description: "This course introduces non-technical business leaders to artificial intelligence, its applications in strategy and operations, and practical ways to start using AI responsibly within an organization. It blends concise lectures with hands-on exercises and real-world examples so learners can immediately apply insights to their own context.",
      instructor: "Cho-Nan Tsai",
      rating: 4.7,
      ratingNum: 1156,
      students: 1156,
      duration: "2 hours",
      level: "Beginner",
      price: "$249",
      originalPrice: "$499",
      lastUpdated: "December 2024",
      language: "English",
      features: [
        "Concise lectures with hands-on exercises and real-world examples",
        "No-code AI tools demonstrations and practice sessions",
        "Strategic frameworks and templates for AI implementation",
        "Ethical AI guidelines and policy templates",
        "30-Day AI Leadership Action Plan template",
        "Certificate of completion for business leaders"
      ],
      whatYouWillLearn: [
        "Understand core AI concepts relevant to business leadership",
        "Identify and prioritize AI opportunities aligned with business strategy",
        "Manage AI initiatives and teams more effectively",
        "Navigate ethical, legal, and risk considerations of AI deployment",
        "Experiment hands-on with no-code AI tools for immediate productivity gains"
      ],
      curriculum: [
        {
          section: "Module 1: Understanding AI & Its Strategic Value",
          lessons: [
            { title: "What AI Really Is (and Isn't) for Business", duration: "8 min", type: "video" },
            { title: "Key AI Concepts Every Leader Should Know (ML, NLP, Generative AI, Automation)", duration: "10 min", type: "video" },
            { title: "The Competitive Advantage of AI: Case Studies Across Industries", duration: "12 min", type: "video" },
            { title: "Exercise: Identify AI Opportunities in Your Organization", duration: "10 min", type: "exercise" }
          ]
        },
        {
          section: "Module 2: Integrating AI into Business Strategy",
          lessons: [
            { title: "AI and Digital Transformation – Aligning with Business Goals", duration: "10 min", type: "video" },
            { title: "Building a Data-Driven Culture", duration: "8 min", type: "video" },
            { title: "Selecting the Right AI Use Cases: Cost, ROI, and Risk", duration: "12 min", type: "video" },
            { title: "Exercise: Draft a Simple AI Opportunity Matrix for Your Company", duration: "10 min", type: "exercise" }
          ]
        },
        {
          section: "Module 3: Managing AI Projects and Teams",
          lessons: [
            { title: "How AI Projects Differ from Traditional IT Projects", duration: "8 min", type: "video" },
            { title: "Partnering with Data Scientists and Vendors", duration: "10 min", type: "video" },
            { title: "Budgeting & Timeline Basics for AI Initiatives", duration: "8 min", type: "video" },
            { title: "Exercise: Map Stakeholders for a Hypothetical AI Initiative", duration: "8 min", type: "exercise" }
          ]
        },
        {
          section: "Module 4: Ethical, Legal, and Risk Considerations",
          lessons: [
            { title: "Responsible AI: Bias, Fairness, and Transparency", duration: "10 min", type: "video" },
            { title: "Regulatory Landscape and Governance (GDPR, AI Act, etc.)", duration: "8 min", type: "video" },
            { title: "Creating an Internal AI Policy or Framework", duration: "8 min", type: "video" },
            { title: "Exercise: Draft 3 Key Principles for Your Company's AI Policy", duration: "8 min", type: "exercise" }
          ]
        },
        {
          section: "Module 5: Hands-On with AI Tools for Leaders",
          lessons: [
            { title: "Quick Demo of No-Code AI Tools (text analysis, dashboards, or AI writing assistants)", duration: "12 min", type: "video" },
            { title: "Prompt Engineering Basics for Leaders", duration: "8 min", type: "video" },
            { title: "Exercise: Use a No-Code AI Tool to Summarize a Report or Build a Quick Insight", duration: "15 min", type: "exercise" }
          ]
        },
        {
          section: "Module 6: The Future of AI in Business Leadership",
          lessons: [
            { title: "Emerging Trends (Agentic AI, Model Context Protocol, Autonomous Decisioning)", duration: "10 min", type: "video" },
            { title: "Building Long-Term AI Readiness and Capabilities", duration: "8 min", type: "video" },
            { title: "Final Reflection: Your 30-Day AI Leadership Action Plan", duration: "12 min", type: "exercise" }
          ]
        }
      ],
      reviews: [
        {
          name: "Jennifer Adams",
          rating: 5,
          comment: "Perfect for non-technical executives! This course demystified AI for me and my leadership team. The strategic frameworks helped us identify 5 high-impact AI opportunities. We're now confidently leading our digital transformation.",
          timeAgo: "1 week ago"
        },
        {
          name: "Marcus Brown",
          rating: 4,
          comment: "Excellent strategic perspective on AI implementation. The ethical considerations module was particularly valuable. I now feel equipped to guide AI initiatives and work effectively with our technical teams.",
          timeAgo: "2 weeks ago"
        },
        {
          name: "Rachel Green",
          rating: 5,
          comment: "As a CEO, this course was invaluable for understanding AI's business impact. The hands-on exercises with no-code tools showed immediate productivity gains. My 30-day action plan is already delivering results.",
          timeAgo: "3 weeks ago"
        },
        {
          name: "Kevin Park",
          rating: 5,
          comment: "Game-changer for business leadership! The course helped me build our company's AI policy and select the right vendors. Our AI initiatives are now aligned with business strategy and delivering measurable ROI.",
          timeAgo: "1 month ago"
        }
      ]
    },
    "ai-for-healthcare-professionals": {
      title: "AI for Healthcare Professionals",
      description: "This beginner-friendly course explains how AI is transforming healthcare and gives professionals a hands-on look at three leading tools they can explore right away: Keragon (AI automation for workflows), Aidoc (AI radiology), and PathAI (AI pathology). In under two hours, you'll learn how AI is applied in diagnostics, operations, and patient care — plus how to evaluate tools safely and ethically.",
      instructor: "Cho-Nan Tsai",
      rating: 4.6,
      ratingNum: 743,
      students: 743,
      duration: "2 hours",
      level: "Beginner",
      price: "$179",
      originalPrice: "$359",
      lastUpdated: "December 2024",
      language: "English",
      features: [
        "Beginner-friendly approach to AI in healthcare",
        "Hands-on demos of three leading AI healthcare tools: Keragon, Aidoc, PathAI",
        "HIPAA, GDPR compliance and ethical AI guidelines",
        "Real-world case studies and practical exercises",
        "30-day action plan for implementing AI in your practice",
        "Certificate of completion for healthcare professionals"
      ],
      whatYouWillLearn: [
        "Understand key AI concepts relevant to healthcare",
        "Recognize practical AI applications in clinical, administrative, and patient experience contexts",
        "Identify ethical and regulatory considerations",
        "Evaluate three leading AI healthcare tools: Keragon, Aidoc, PathAI",
        "Build a personal plan for incorporating AI into their professional practice"
      ],
      curriculum: [
        {
          section: "Module 1: Introduction to AI in Healthcare",
          lessons: [
            { title: "What AI Means for Healthcare Professionals", duration: "8 min", type: "video" },
            { title: "Core Concepts: Machine Learning, NLP, Predictive Analytics", duration: "10 min", type: "video" },
            { title: "Real-World Examples Across Clinical and Administrative Settings", duration: "12 min", type: "video" },
            { title: "Exercise: Identify one area in your work where AI could help", duration: "8 min", type: "exercise" }
          ]
        },
        {
          section: "Module 2: AI in Clinical Practice & Diagnostics",
          lessons: [
            { title: "Imaging and Radiology: How AI Prioritizes Critical Cases", duration: "12 min", type: "video" },
            { title: "Pathology and Precision Medicine", duration: "10 min", type: "video" },
            { title: "Exercise: Review a case study of AI-assisted diagnosis and list benefits & risks", duration: "10 min", type: "exercise" }
          ]
        },
        {
          section: "Module 3: AI in Operations & Patient Experience",
          lessons: [
            { title: "Automating Administrative Tasks (intake, insurance, scheduling)", duration: "10 min", type: "video" },
            { title: "AI-Powered Chatbots and Remote Patient Monitoring", duration: "8 min", type: "video" },
            { title: "Exercise: Map a simple workflow in your department that could be automated", duration: "8 min", type: "exercise" }
          ]
        },
        {
          section: "Module 4: Data, Privacy, and Ethics",
          lessons: [
            { title: "HIPAA, GDPR and Patient Data Security in AI Systems", duration: "10 min", type: "video" },
            { title: "Bias, Fairness, and Transparency in Healthcare AI", duration: "8 min", type: "video" },
            { title: "Building Trust with Patients and Stakeholders", duration: "8 min", type: "video" },
            { title: "Exercise: Draft three guidelines for responsible AI use in your organization", duration: "8 min", type: "exercise" }
          ]
        },
        {
          section: "Module 5: Hands-On With Leading AI Tools",
          lessons: [
            { title: "Keragon – HIPAA-compliant AI automation for clinical/operational workflows", duration: "8 min", type: "video" },
            { title: "Aidoc – AI radiology for urgent findings in CT imaging", duration: "8 min", type: "video" },
            { title: "PathAI – Deep learning to improve pathology accuracy (esp. cancer)", duration: "8 min", type: "video" },
            { title: "Exercise: Pick one of these tools, explore its website/demo, and outline how it could fit into your workflow", duration: "12 min", type: "exercise" }
          ]
        },
        {
          section: "Module 6: Preparing for the Future of AI in Healthcare",
          lessons: [
            { title: "Emerging Trends: Digital Twins, Personalized Medicine, Model Context Protocol", duration: "10 min", type: "video" },
            { title: "Upskilling Yourself and Your Team", duration: "8 min", type: "video" },
            { title: "Final Reflection: Create a 30-day action plan for applying AI in your role", duration: "10 min", type: "exercise" }
          ]
        }
      ],
      reviews: [
        {
          name: "Patricia Davis",
          rating: 5,
          comment: "Perfect for healthcare professionals! This course demystified AI for our clinical team. The hands-on demos of Keragon, Aidoc, and PathAI showed real applications we could implement. Our workflow automation project is already saving 2 hours daily.",
          timeAgo: "2 weeks ago"
        },
        {
          name: "Steven Miller",
          rating: 4,
          comment: "Excellent overview of AI in healthcare. The HIPAA compliance section was particularly valuable. As a radiologist, I'm now confident in evaluating AI tools like Aidoc for our department. The ethical considerations were eye-opening.",
          timeAgo: "1 month ago"
        },
        {
          name: "Diana Lopez",
          rating: 5,
          comment: "As a nurse manager, this course was exactly what I needed to understand AI's potential in patient care. The 30-day action plan helped me identify specific areas where AI could improve our operations and patient outcomes.",
          timeAgo: "3 weeks ago"
        },
        {
          name: "Brian Taylor",
          rating: 4,
          comment: "Great beginner-friendly approach to healthcare AI. The case studies were relevant and practical. I'm now exploring PathAI for our pathology department. The course gave me the confidence to lead AI initiatives in our hospital.",
          timeAgo: "1 week ago"
        }
      ]
    },
    "ai-for-product-managers-vibe-coding-101": {
      title: "AI for Product Managers - Vibe Coding 101",
      description: "Transform your product ideas into reality in just 6 hours using Lovable, Cursor, v0, and Bolt. This hands-on course shows non-technical professionals exactly how to build marketing websites, landing pages, and SaaS MVPs by simply describing what you want. You'll walk away with ready-to-use prompt templates, a deployed project, and the confidence to prototype any idea instantly.",
      instructor: "Cho-Nan Tsai",
      rating: 4.9,
      ratingNum: 2156,
      students: 2156,
      duration: "6 hours",
      level: "Beginner",
      price: "$149",
      originalPrice: "$299",
      lastUpdated: "December 2024",
      language: "English",
      features: [
        "No coding experience required - perfect for non-technical professionals",
        "Hands-on experience with top AI tools: Cursor, Lovable, v0, Bolt",
        "Step-by-step guidance through individual projects",
        "Ready-to-use prompt templates for landing pages and web apps",
        "Complete project deployment and presentation experience",
        "Certificate of completion in Vibe Coding"
      ],
      whatYouWillLearn: [
        "How to use Vibe Coding tools to build websites without coding",
        "Writing effective natural language prompts to communicate with AI",
        "Navigating user-friendly interfaces of popular Vibe Coding platforms",
        "Using prompt templates to speed up app and webpage creation",
        "Rapid prototyping, building and deploying MVPs independently",
        "Creating marketing websites, landing pages, and internal tools"
      ],
      curriculum: [
        {
          section: "Introduction to Vibe Coding for non-coders",
          lessons: [
            { title: "What is vibe coding?", duration: "20 min", type: "video" },
            { title: "Vibe coding for startups vs. larger companies", duration: "15 min", type: "video" },
            { title: "Comparison of top AI tools: Cursor, Lovable, v0, Bolt", duration: "25 min", type: "video" }
          ]
        },
        {
          section: "Mastering Prompts for Vibe Coding",
          lessons: [
            { title: "How to write great prompts?", duration: "20 min", type: "video" },
            { title: "Prompt templates you can steal for making landing page, web apps quickly", duration: "30 min", type: "video" }
          ]
        },
        {
          section: "Vibe Coding Best Practices",
          lessons: [
            { title: "Best use cases of vibe coding", duration: "15 min", type: "video" },
            { title: "Dangers of vibe coding", duration: "10 min", type: "video" },
            { title: "Do's and Don'ts", duration: "15 min", type: "video" }
          ]
        },
        {
          section: "Using Lovable AI",
          lessons: [
            { title: "What is Lovable?", duration: "10 min", type: "video" },
            { title: "Lovable UI overview", duration: "15 min", type: "video" },
            { title: "Best Lovable prompt templates", duration: "20 min", type: "video" },
            { title: "Building on Lovable without a developer", duration: "25 min", type: "exercise" },
            { title: "Creating marketing websites and landing pages", duration: "30 min", type: "exercise" }
          ]
        },
        {
          section: "Using Supabase",
          lessons: [
            { title: "What is Supabase?", duration: "10 min", type: "video" },
            { title: "Authentication setup", duration: "15 min", type: "video" },
            { title: "Database setup", duration: "20 min", type: "video" },
            { title: "Building Software-As-A-Service software MVP using Lovable and Supabase", duration: "45 min", type: "project" }
          ]
        },
        {
          section: "Step-by-step Vibe Coding Your Own Project",
          lessons: [
            { title: "Creating a Product Requirement Document with AI", duration: "20 min", type: "video" },
            { title: "Instructor guiding students through individual projects", duration: "40 min", type: "exercise" },
            { title: "Iterating through your software", duration: "30 min", type: "exercise" },
            { title: "Deploying your project online", duration: "25 min", type: "video" }
          ]
        },
        {
          section: "Project Presentation",
          lessons: [
            { title: "Each group presents their project", duration: "30 min", type: "project" },
            { title: "Conclusion and networking", duration: "15 min", type: "video" }
          ]
        }
      ],
      reviews: [
        {
          name: "Amanda Foster",
          rating: 5,
          comment: "Mind-blowing course! Using Lovable and the prompt templates, I built a complete landing page for my startup in just 2 hours. The step-by-step guidance through individual projects was invaluable. This is the future of product development!",
          timeAgo: "1 week ago"
        },
        {
          name: "James Rodriguez",
          rating: 5,
          comment: "As a non-technical founder, this course was a revelation. The comparison of Cursor, Lovable, v0, and Bolt helped me choose the right tools. I now prototype ideas instantly and built a functional SaaS MVP using Lovable and Supabase.",
          timeAgo: "2 weeks ago"
        },
        {
          name: "Sophie Chen",
          rating: 4,
          comment: "Excellent hands-on approach! The prompt templates for web apps are pure gold. I created multiple marketing websites for clients using vibe coding. The project presentation aspect really helped solidify my learning.",
          timeAgo: "3 weeks ago"
        },
        {
          name: "Michael Johnson",
          rating: 5,
          comment: "Revolutionary approach to building software! The course taught me to communicate effectively with AI tools. I went from idea to deployed application in one weekend using the techniques learned. Perfect for product managers!",
          timeAgo: "1 month ago"
        }
      ]
    }
  },

  instructor: {
    title: "Meet Your Instructor",
    name: "Cho-Nan Tsai",
    role: "Founder & Lead Instructor",
    bio: [
      "Cho-Nan Tsai is a technology entrepreneur and educator with over two decades of experience in AI, machine learning, and fintech. He currently serves as an adjunct professor teaching AI at USC and as CEO of Hyperionsoft, an AI consulting firm.",
      "Cho-Nan has served as founding CTO three times and successfully raised millions for multiple startups, scaling them exponentially through innovative AI solutions. His corporate experience includes managing tech projects at Fortune 500 companies such as Sony, Ricoh, and McKinsey & Company. He has developed and deployed AI solutions impacting millions of users across data analytics, digital advertising, and lending platforms.",
      "As founder of AI Jedi, Cho-Nan has designed curriculum combining hands-on experience with cutting-edge AI tools and methodologies. His teaching philosophy centers on building real-world applications while ensuring students grasp fundamental AI concepts, driven by his belief that AI should be accessible to all learners.",
      "He holds a B.S. in Computer Engineering from Columbia University and an M.S. in Computer Science from UCLA."      
    ],
    stats: [
      { value: "27+", label: "Years of Experience" },
      { value: "3x", label: "Founding CTO" },
      { value: "500+", label: "Students Mentored" }
    ],
    companies: {
      title: "Many people mentored by Cho-Nan work at leading tech companies",
      logos: []  // Now using actual logo images in the component
    }
  },

  showcase: {
    title: "Read Our Success Stories",
    subtitle: "Our alumni are working at the world's leading AI companies, building the future of technology.",
    imageLabels: {
      graduation: {
        title: "Graduation Day 2024",
        subtitle: "95% of our graduates got job offers within 3 months"
      },
      collaboration: {
        title: "Collaborative Learning",
        subtitle: "Work in teams on real industry projects"
      }
    },
    testimonials: [
      {
        name: "Richard Lieu",
        role: "Director of Engineering at Simplexam",
        quote: "Cho-Nan is a great leader and instructor. You can't go wrong with him."
      },
      {
        name: "Saravana Moorthi",
        role: "Software Engineering Lead at Federal Reserve Bank of San Francisco",
        quote: "The hands-on projects and industry mentorship made all the difference in my learning journey."
      },
      {
        name: "Supratik Mukherjee",
        role: "Director of Product at Quantum",
        quote: "Cho-Nan knows product, AI and engineering. His influence certainly prepared me for the most challenging roles in my career."
      }
    ]
  },

  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our AI training programs",
    questions: [
      {
        question: "Who are these courses designed for?",
        answer: "Our courses are designed for working professionals across various industries - finance, marketing, healthcare, software development, and business leadership. No technical background required, just a desire to leverage AI in your career."
      },
      {
        question: "Do I need coding or technical experience?",
        answer: "Not at all! All our courses are designed for non-technical professionals. We focus on practical, no-code AI tools and applications that you can use immediately in your current role."
      },
      {
        question: "What will I learn in these courses?",
        answer: "You'll learn to use industry-leading AI tools relevant to your profession - from ChatGPT and GitHub Copilot for developers, to Keragon and PathAI for healthcare professionals, to Lovable and Cursor for product managers. Each course includes hands-on exercises and real-world case studies."
      },
      {
        question: "How are the courses structured?",
        answer: "Each course is 2-6 hours of focused, practical training with short 4-8 minute lessons, hands-on exercises, and downloadable resources. You'll complete real projects and receive certificates of completion."
      },
      {
        question: "What AI tools and platforms will I use?",
        answer: "Depending on your course, you'll work with tools like ChatGPT, GitHub Copilot, Canva, HubSpot AI, Keragon, Aidoc, PathAI, Lovable, Cursor, v0, Bolt, and Supabase. All tools are chosen for their practical business applications."
      },
      {
        question: "Will I get support during the course?",
        answer: "Yes! Each course includes instructor guidance, practical exercises, and comprehensive resources like prompt libraries, templates, and implementation checklists. Our focus is on immediate, practical application."
      },
      {
        question: "How do I choose the right course for me?",
        answer: "Browse our course catalog and select the one that matches your professional role: Finance Professionals, Marketing Professionals, Software Developers, Business Leaders, Healthcare Professionals, or Product Managers. Each course is tailored to specific industry needs."
      },
      {
        question: "How can I enroll?",
        answer: "Simply click 'Start Course' on any course page or 'Learn AI Online' to browse all available courses. You can start learning immediately!"
      }
    ]
  },

  callToAction: {
    title: "Ready to Start Your AI Journey?",
    subtitle: "Join the next cohort of AI professionals.",
    buttons: {
      primary: {
        text: "Learn AI Online",
        variant: "hero"
      }
    }
  },

  footer: {
    description: "Transform your career with our intensive AI program. Learn machine learning, deep learning, and cutting-edge AI technologies from industry experts.",
    location: "📍 Taipei & Los Angeles",
    copyright: "© 2025 AI Jedi. All rights reserved.",
    links: {
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  }
} as const;

// Traditional Chinese (zh-TW) content override
const zhContent: Content = {
  ...englishContent,

  header: {
    logo: "AI Jedi",
    navigation: [
      { href: "#why-join", label: "為何加入" },
      {
        href: "#online-courses",
        label: "AI 課程",
        children: [
          { href: "#courses-finance-professionals", label: "AI 金融專業課程" },
          { href: "#courses-marketing-professionals", label: "AI 行銷專業課程" },
          { href: "#courses-software-developers", label: "AI 軟體開發課程" },
          { href: "#courses-business-leaders", label: "AI 企業領導課程" },
          { href: "#courses-healthcare-professionals", label: "AI 醫療專業課程" },
          { href: "#courses-product-managers", label: "AI 產品經理課程 - Vibe Coding 101" }
        ]
      },
      { href: "#instructor", label: "講師" },
      { href: "#showcase", label: "成功案例" },
      { href: "#faq", label: "常見問題" }
    ]
  },

  hero: {
    ...englishContent.hero,
    title: "從想法到產品只需數小時",
    description: "跳過數月的開發痛苦。我們的密集工作坊可在數小時內將你的想法轉化為可運作的原型、MVP 與真實產品，完全不需要程式背景。",
    buttons: {
      primary: "報名梯次",
      secondary: "加入候補名單"
    }
  },

  whyJoin: {
    ...englishContent.whyJoin,
    title: "為何加入 AI Jedi Vibe Coding Bootcamp",
    subtitle: "賦能下一代 AI 創造者",
    mainText: [
      "產品創造不該需要電腦科學學位或多年程式經驗。隨著 Cursor 與 Lovable 等突破性 AI 工具問世，遊戲規則已徹底改變。只要能清楚描述你的願景，你就能將它實現。",
      "這是一堂為零基礎學員及產品思考者打造的實戰課程，從第一天起就動手打造真實產品；沒有被動學習——你將從零開始，在短短一週末內完成可上線使用的 App。我們將帶你一步步使用 vibe coding 工具與最前沿的 AI 開發流程。"
    ],
    features: [
      {
        icon: "🚀",
        title: "以做中學",
        description: "從第一天起就透過真實專案獲得實戰經驗"
      },
      {
        icon: "🤖",
        title: "AI 優先思維",
        description: "掌握最新 AI 工具與工作流程"
      },
      {
        icon: "💡",
        title: "快速推出原型",
        description: "快速迭代想法並產出原型"
      }
    ],
    cta: "報名梯次"
  },

  program: {
    ...englishContent.program,
    title: "你將學到什麼",
    subtitle: "從想法到產品的最快途徑。以下是你在一個週末將學到的內容：",
    features: [
      {
        title: "運用 AI 迅速原型開發",
        description: "直接進入實作。了解每款 vibe coding 工具的優缺點，專注於業界最佳解。"
      },
      {
        title: "全端 AI 開發",
        description: "從零開始，使用 vibe coding 工具建置並部署完整的 Web App，前後端一次搞定，確實交付可用作品。"
      },
      {
        title: "推出真實產品",
        description: "以 AI 解決真實世界問題並推出產品。"
      },
      {
        title: "產業專案",
        description: "與企業合作的真實 AI 專案，建立能助你就業的作品集。"
      }
    ]
  },

  instructor: {
    ...englishContent.instructor,
    title: "認識你的講師",
    name: "蔡卓男（Cho-Nan Tsai）",
    role: "創辦人兼首席講師",
    bio: [
      "蔡卓男（Cho-Nan Tsai）是一位擁有二十年以上 AI、機器學習與金融科技經驗的科技企業家與教育者，現任 USC 兼任教授教授 AI，同時也是 AI 顧問公司 Hyperionsoft 的執行長。",
      "蔡卓男曾三度擔任創辦 CTO，成功為多家新創募資數百萬美元，並透過創新 AI 解決方案將其業務大幅擴張。他也曾在 Sony、Ricoh、McKinsey & Company 等《財星》500 大企業領導科技專案，部署影響數百萬使用者的 AI 解決方案，涵蓋資料分析、數位廣告與貸款平台。",
      "作為 AI Jedi 的創辦人，蔡卓男設計的課程融合實戰經驗與最前沿的 AI 工具與方法論。他的教學理念著重於在打造真實應用的同時，讓學生理解 AI 基礎，並堅信 AI 應對所有學習者開放。",
      "他畢業於哥倫比亞大學電腦工程學士與 UCLA 電腦科學碩士。"
    ],
    stats: [
      { value: "27+", label: "年業界經驗" },
      { value: "3x", label: "創辦 CTO 次數" },
      { value: "500+", label: "指導學生" }
    ],
    companies: {
      ...englishContent.instructor.companies,
      title: "Cho-Nan 指導過的學生任職於以下頂尖科技公司"
    }
  },

  showcase: {
    ...englishContent.showcase,
    title: "閱讀我們的成功案例",
    subtitle: "我們的校友在世界頂尖 AI 公司工作，正打造科技未來。",
    imageLabels: {
      graduation: {
        title: "2024 畢業典禮",
        subtitle: "95% 的畢業生在 3 個月內獲得工作機會"
      },
      collaboration: {
        title: "協作式學習",
        subtitle: "在真實產業專案中進行團隊合作"
      }
    },
    testimonials: [
      {
        name: "Richard Lieu",
        role: "Simplexam 工程總監",
        quote: "Cho-Nan 是位出色的領導者與講師，跟著他準沒錯。"
      },
      {
        name: "Saravana Moorthi",
        role: "舊金山聯邦儲備銀行軟體工程主管",
        quote: "動手專案與業界導師的指導讓我的學習歷程大不相同。"
      },
      {
        name: "Supratik Mukherjee",
        role: "Quantum 產品總監",
        quote: "Cho-Nan 精通產品、AI 與工程，他的影響確實讓我準備好面對職涯中最具挑戰的角色。"
      }
    ]
  },

  courses: {
    "ai-for-finance-professionals": {
      ...englishContent.courses["ai-for-finance-professionals"],
      title: "AI 金融專業課程",
      description: "了解 AI 如何改變你的財務工作流程，無需編寫任何程式碼。本課程為財務專業人士介紹預測、報告和自動化中的實用 AI 應用。學習如何運用現成的 AI 工具節省時間、減少錯誤並做出更明智的決策。",
      instructor: "蔡卓南",
      duration: "2 小時",
      level: "初學者",
      language: "繁體中文",
      features: [
        "4-8 分鐘課程，輕鬆學習",
        "每個主要模組後的測驗",
        "可下載資源：工作流程檢查清單、提示庫、AI 工具指南",
        "完成證書：AI 就緒財務專業人士",
        "無需程式設計或技術背景"
      ],
      whatYouWillLearn: [
        "了解 AI、機器學習和生成式 AI 的基礎知識",
        "識別可用 AI 自動化的財務任務",
        "使用簡單的 AI 工具進行預測、報告撰寫和分析",
        "與 AI 或數據團隊有效溝通",
        "立即在你的角色中應用實用的 AI 技能"
      ],
      curriculum: [
        {
          section: "模組 1：金融 AI 介紹",
          lessons: [
            { title: "什麼是 AI？", duration: "5 分鐘", type: "video" },
            { title: "為什麼 AI 對金融很重要", duration: "5 分鐘", type: "video" },
            { title: "真實案例：財務規劃與分析、報告和詐欺檢測", duration: "5 分鐘", type: "video" }
          ]
        },
        {
          section: "模組 2：財務專業人士的 AI 基礎",
          lessons: [
            { title: "核心概念：模型、預測和數據", duration: "6 分鐘", type: "video" },
            { title: "AI vs 傳統分析", duration: "5 分鐘", type: "video" },
            { title: "倫理、合規和偏見", duration: "6 分鐘", type: "video" },
            { title: "測驗：識別 AI 使用案例", duration: "4 分鐘", type: "quiz" }
          ]
        },
        {
          section: "模組 3：自動化重複性財務任務",
          lessons: [
            { title: "識別可自動化的任務", duration: "5 分鐘", type: "video" },
            { title: "使用 AI 進行發票處理和對帳", duration: "6 分鐘", type: "video" },
            { title: "自動化報告和儀表板", duration: "6 分鐘", type: "video" },
            { title: "實作練習：規劃一個你可以自動化的任務", duration: "7 分鐘", type: "exercise" },
            { title: "快速獲勝回顧", duration: "6 分鐘", type: "video" }
          ]
        },
        {
          section: "模組 4：預測與分析的 AI",
          lessons: [
            { title: "AI 預測介紹", duration: "6 分鐘", type: "video" },
            { title: "使用無程式碼 AI 工具進行情境分析", duration: "6 分鐘", type: "video" },
            { title: "解釋結果和儀表板", duration: "6 分鐘", type: "video" },
            { title: "練習：從你自己的數據建立簡單預測", duration: "7 分鐘", type: "exercise" },
            { title: "可行洞察的提示", duration: "5 分鐘", type: "video" }
          ]
        },
        {
          section: "模組 5：溝通與報告的 AI",
          lessons: [
            { title: "起草董事會簡報和投資者備忘錄", duration: "5 分鐘", type: "video" },
            { title: "使用 AI 總結財務報告", duration: "5 分鐘", type: "video" },
            { title: "實作練習：將原始數據轉化為敘述", duration: "6 分鐘", type: "exercise" },
            { title: "回顧與下一步", duration: "4 分鐘", type: "video" }
          ]
        },
        {
          section: "最終評估 / 總結",
          lessons: [
            { title: "迷你專案：識別你角色中 2 個可受益於 AI 的財務任務", duration: "5 分鐘", type: "project" },
            { title: "課程總結和建議的下一步", duration: "5 分鐘", type: "video" }
          ]
        }
      ],
      reviews: [
        {
          name: "Sarah Martinez",
          rating: 5,
          comment: "這門課程徹底改變了我對財務中 AI 的看法。我現在使用 AI 工具自動化月度報告，節省了數小時的工作時間。實用性極高！",
          timeAgo: "1 週前"
        },
        {
          name: "David Kim",
          rating: 4,
          comment: "作為財務分析師，這門課程為我提供了在日常工作中應用 AI 的實用策略。預測模組特別有價值。",
          timeAgo: "2 週前"
        },
        {
          name: "Lisa Chen",
          rating: 5,
          comment: "無需技術背景就能學習 AI 在財務中的應用，這門課程做得很好。我已經開始在預算規劃中使用所學的技能。",
          timeAgo: "3 週前"
        },
        {
          name: "Robert Johnson",
          rating: 4,
          comment: "課程結構清晰，實用性強。我特別喜歡關於合規和倫理的討論，這在財務領域非常重要。",
          timeAgo: "1 個月前"
        }
      ]
    },
    "ai-for-marketing-professionals": {
      ...englishContent.courses["ai-for-marketing-professionals"],
      title: "AI 行銷專業課程",
      description: "掌握 AI 驅動的行銷策略和工具，提升你的行銷效果。本課程涵蓋內容創作、客戶分析、廣告優化和自動化行銷流程，讓你成為 AI 時代的行銷專家。",
      instructor: "蔡卓南",
      duration: "2.5 小時",
      level: "初學者",
      language: "繁體中文",
      features: [
        "學習最新的 AI 行銷工具和平台",
        "實作內容創作和廣告優化",
        "客戶分析和個人化行銷策略",
        "行銷自動化工作流程設計",
        "完成證書：AI 行銷專家"
      ],
      whatYouWillLearn: [
        "使用 AI 工具進行內容創作和優化",
        "實施 AI 驅動的客戶分析",
        "自動化行銷活動和電子郵件序列",
        "優化廣告投放和 ROI",
        "建立個人化的客戶體驗"
      ],
      curriculum: [
        {
          section: "模組 1：AI 行銷基礎",
          lessons: [
            { title: "AI 如何改變行銷格局", duration: "10 分鐘", type: "video" },
            { title: "關鍵 AI 行銷工具概覽", duration: "15 分鐘", type: "video" },
            { title: "行銷中的 AI 倫理考量", duration: "10 分鐘", type: "video" }
          ]
        },
        {
          section: "模組 2：AI 內容創作",
          lessons: [
            { title: "AI 文案寫作工具", duration: "15 分鐘", type: "video" },
            { title: "視覺內容生成", duration: "20 分鐘", type: "video" },
            { title: "內容優化和 A/B 測試", duration: "15 分鐘", type: "exercise" }
          ]
        },
        {
          section: "模組 3：客戶分析與個人化",
          lessons: [
            { title: "AI 客戶細分", duration: "15 分鐘", type: "video" },
            { title: "預測客戶行為", duration: "15 分鐘", type: "video" },
            { title: "個人化行銷策略", duration: "20 分鐘", type: "exercise" }
          ]
        },
        {
          section: "模組 4：廣告與 ROI 優化",
          lessons: [
            { title: "AI 廣告投放優化", duration: "15 分鐘", type: "video" },
            { title: "預測廣告效果", duration: "15 分鐘", type: "video" },
            { title: "ROI 測量和優化", duration: "15 分鐘", type: "exercise" }
          ]
        }
      ],
      reviews: [
        {
          name: "Emily Wang",
          rating: 5,
          comment: "這門課程幫助我大幅提升了內容創作的效率。AI 工具讓我能快速生成高品質的行銷材料，效果驚人！",
          timeAgo: "1 週前"
        },
        {
          name: "Mark Thompson",
          rating: 4,
          comment: "客戶分析模組特別實用。我現在能更好地了解客戶行為並制定更有效的行銷策略。",
          timeAgo: "2 週前"
        },
        {
          name: "Jennifer Liu",
          rating: 5,
          comment: "廣告優化部分改變了我的遊戲規則。使用 AI 工具後，我的廣告 ROI 提升了 40%。",
          timeAgo: "3 週前"
        },
        {
          name: "Alex Chen",
          rating: 4,
          comment: "課程內容實用且易於理解。即使沒有技術背景，也能輕鬆掌握 AI 行銷工具的使用。",
          timeAgo: "1 個月前"
        }
      ]
    },
    "ai-for-software-developers": {
      ...englishContent.courses["ai-for-software-developers"],
      title: "AI 軟體開發課程",
      description: "學習如何將 AI 整合到你的軟體開發工作流程中，無需成為數據科學家。本實用課程向開發者展示如何使用現代 AI 工具、API 和平台來提升生產力、增強應用程式並在 AI 驅動的未來中保持領先。",
      instructor: "蔡卓南",
      duration: "2 小時",
      level: "初學者",
      language: "繁體中文",
      features: [
        "學習流行的 AI API 和 SDK",
        "使用 AI 工具加速編碼、測試和文檔",
        "從零開始規劃和建構 AI 驅動專案",
        "理解和應用模型上下文協議",
        "完成證書：AI 原生軟體開發者"
      ],
      whatYouWillLearn: [
        "了解與軟體開發相關的關鍵 AI 概念",
        "使用流行的 AI API 和 SDK 為應用程式添加功能",
        "利用 AI 工具加速編碼、測試和文檔",
        "從零開始規劃和建構小型 AI 驅動專案",
        "理解和應用模型上下文協議以簡化 AI 整合"
      ],
      curriculum: [
        {
          section: "模組 1：開發者的 AI 介紹",
          lessons: [
            { title: "對軟體開發者而言什麼是 AI（以及什麼不是）", duration: "10 分鐘", type: "video" },
            { title: "應用程式和服務中 AI 的真實案例", duration: "15 分鐘", type: "video" },
            { title: "流行 AI 平台、API 和工具概覽", duration: "15 分鐘", type: "video" }
          ]
        },
        {
          section: "模組 2：開發者的 AI 基礎",
          lessons: [
            { title: "核心概念：模型、訓練、推理、數據", duration: "15 分鐘", type: "video" },
            { title: "AI vs 傳統算法", duration: "10 分鐘", type: "video" },
            { title: "在軟體中使用 AI 的關鍵倫理和合規考量", duration: "15 分鐘", type: "video" }
          ]
        },
        {
          section: "模組 3：使用 AI 工具提升開發者生產力",
          lessons: [
            { title: "AI 編碼輔助（代碼完成、重構、文檔）", duration: "15 分鐘", type: "video" },
            { title: "AI 自動化測試和錯誤檢測", duration: "15 分鐘", type: "video" },
            { title: "實作：在你的 IDE 中使用代碼輔助工具", duration: "20 分鐘", type: "exercise" }
          ]
        },
        {
          section: "模組 4：將 AI API 整合到應用程式中",
          lessons: [
            { title: "文本、圖像和語音 API 概覽", duration: "15 分鐘", type: "video" },
            { title: "實作：從簡單應用程式調用 AI API", duration: "20 分鐘", type: "exercise" },
            { title: "處理身份驗證、速率限制和數據隱私", duration: "15 分鐘", type: "video" },
            { title: "錯誤處理和模型更新的最佳實踐", duration: "15 分鐘", type: "video" }
          ]
        },
        {
          section: "模組 5：使用模型上下文協議",
          lessons: [
            { title: "什麼是模型上下文協議以及為什麼重要", duration: "15 分鐘", type: "video" },
            { title: "MCP 如何改善模型和應用程式之間的上下文共享", duration: "15 分鐘", type: "video" },
            { title: "實作：實現簡單的 MCP 啟用整合", duration: "20 分鐘", type: "exercise" },
            { title: "安全和高效上下文交換的最佳實踐", duration: "15 分鐘", type: "video" }
          ]
        },
        {
          section: "模組 6：從零開始建構 AI 驅動功能",
          lessons: [
            { title: "選擇用例（聊天機器人、摘要器、推薦器等）", duration: "15 分鐘", type: "video" },
            { title: "設計功能架構", duration: "15 分鐘", type: "video" },
            { title: "實作：使用無程式碼或低程式碼 SDK 實現最小 AI 功能", duration: "25 分鐘", type: "exercise" },
            { title: "測試和部署你的 AI 驅動功能", duration: "15 分鐘", type: "video" }
          ]
        },
        {
          section: "模組 7：規劃你作為開發者的 AI 旅程",
          lessons: [
            { title: "識別 AI 可以在你的專案中添加價值的地方", duration: "15 分鐘", type: "video" },
            { title: "在建構 vs 購買 vs 整合之間選擇", duration: "15 分鐘", type: "video" },
            { title: "跟上 AI 趨勢和工具", duration: "10 分鐘", type: "video" },
            { title: "課程總結和下一步", duration: "10 分鐘", type: "video" }
          ]
        }
      ],
      reviews: [
        {
          name: "Kevin Zhang",
          rating: 5,
          comment: "這門課程完美地展示了如何將 AI 整合到現有的開發工作流程中。API 整合部分特別實用，我已經開始在專案中使用這些技術。",
          timeAgo: "1 週前"
        },
        {
          name: "Rachel Park",
          rating: 4,
          comment: "作為一名資深開發者，我學到了很多關於 AI 工具的新知識。代碼輔助工具的使用讓我大幅提升了開發效率。",
          timeAgo: "2 週前"
        },
        {
          name: "Tom Wilson",
          rating: 5,
          comment: "模型上下文協議的部分讓我大開眼界。這將徹底改變我們如何設計和建構 AI 驅動的應用程式。",
          timeAgo: "3 週前"
        },
        {
          name: "Sandra Lee",
          rating: 4,
          comment: "課程結構清晰，實作練習很有價值。我特別喜歡從零開始建構 AI 功能的部分，讓我對 AI 開發有了更深的理解。",
          timeAgo: "1 個月前"
        }
      ]
    },
    "ai-for-business-leaders": {
      ...englishContent.courses["ai-for-business-leaders"],
      title: "AI 企業領導課程",
      description: "本課程向非技術企業領導者介紹人工智慧、其在策略和營運中的應用，以及在組織內負責任地開始使用 AI 的實用方法。它將簡潔的講座與實作練習和真實案例相結合，讓學習者能夠立即將洞察應用到自己的情境中。",
      instructor: "蔡卓南",
      duration: "2 小時",
      level: "初學者",
      language: "繁體中文",
      video: "intro.mp4",
      features: [
        "了解 AI 及其戰略價值",
        "將 AI 整合到業務策略中",
        "管理 AI 專案和團隊",
        "導航 AI 部署的倫理、法律和風險考量",
        "完成證書：AI 就緒企業領導者"
      ],
      whatYouWillLearn: [
        "了解與業務領導相關的核心 AI 概念",
        "識別並優先考慮與業務策略一致的 AI 機會",
        "更有效地管理 AI 計劃和團隊",
        "導航 AI 部署的倫理、法律和風險考量",
        "親手實驗無程式碼 AI 工具以獲得即時生產力提升"
      ],
      curriculum: [
        {
          section: "模組 1：了解 AI 及其戰略價值",
          lessons: [
            { title: "對企業而言什麼是 AI（以及什麼不是）", duration: "10 分鐘", type: "video" },
            { title: "每位領導者都應該知道的關鍵 AI 概念", duration: "15 分鐘", type: "video" },
            { title: "AI 的競爭優勢：跨行業案例研究", duration: "15 分鐘", type: "video" },
            { title: "練習：識別你組織中的 AI 機會", duration: "10 分鐘", type: "exercise" }
          ]
        },
        {
          section: "模組 2：將 AI 整合到業務策略中",
          lessons: [
            { title: "AI 和數位轉型 - 與業務目標對齊", duration: "15 分鐘", type: "video" },
            { title: "建立數據驅動文化", duration: "15 分鐘", type: "video" },
            { title: "選擇正確的 AI 用例：成本、ROI 和風險", duration: "15 分鐘", type: "video" },
            { title: "練習：為你的公司起草簡單的 AI 機會矩陣", duration: "10 分鐘", type: "exercise" }
          ]
        },
        {
          section: "模組 3：管理 AI 專案和團隊",
          lessons: [
            { title: "AI 專案與傳統 IT 專案的差異", duration: "15 分鐘", type: "video" },
            { title: "與數據科學家和供應商合作", duration: "15 分鐘", type: "video" },
            { title: "AI 計劃的預算和時間線基礎", duration: "15 分鐘", type: "video" },
            { title: "練習：為假設的 AI 計劃映射利益相關者", duration: "10 分鐘", type: "exercise" }
          ]
        },
        {
          section: "模組 4：倫理、法律和風險考量",
          lessons: [
            { title: "負責任的 AI：偏見、公平性和透明度", duration: "15 分鐘", type: "video" },
            { title: "監管環境和治理（GDPR、AI 法案等）", duration: "15 分鐘", type: "video" },
            { title: "建立內部 AI 政策或框架", duration: "15 分鐘", type: "video" },
            { title: "練習：為你的公司起草 3 個關鍵原則", duration: "10 分鐘", type: "exercise" }
          ]
        },
        {
          section: "模組 5：領導者使用 AI 工具的實作",
          lessons: [
            { title: "無程式碼 AI 工具的快速演示", duration: "15 分鐘", type: "video" },
            { title: "領導者的提示工程基礎", duration: "15 分鐘", type: "video" },
            { title: "練習：使用無程式碼 AI 工具總結報告或建立快速洞察", duration: "10 分鐘", type: "exercise" }
          ]
        },
        {
          section: "模組 6：業務領導中 AI 的未來",
          lessons: [
            { title: "新興趨勢（代理 AI、模型上下文協議、自主決策）", duration: "15 分鐘", type: "video" },
            { title: "建立長期 AI 準備和能力", duration: "10 分鐘", type: "video" },
            { title: "最終反思：你的 30 天 AI 領導行動計劃", duration: "10 分鐘", type: "exercise" }
          ]
        }
      ],
      reviews: [
        {
          name: "Michael Chen",
          rating: 5,
          comment: "這門課程為我提供了領導 AI 轉型所需的所有工具。策略模組特別有價值，幫助我為公司制定了清晰的 AI 路線圖。",
          timeAgo: "1 週前"
        },
        {
          name: "Sarah Johnson",
          rating: 4,
          comment: "作為非技術領導者，這門課程讓我對 AI 有了更深入的理解。倫理考量部分讓我能夠做出更負責任的決策。",
          timeAgo: "2 週前"
        },
        {
          name: "David Liu",
          rating: 5,
          comment: "實作練習讓我親身體驗了 AI 工具的能力。我現在對如何在我的組織中實施 AI 有了更清晰的願景。",
          timeAgo: "3 週前"
        },
        {
          name: "Jennifer Wang",
          rating: 4,
          comment: "課程內容全面且實用。我特別喜歡關於管理 AI 專案和團隊的部分，這對我作為 CIO 來說非常有價值。",
          timeAgo: "1 個月前"
        }
      ]
    },
    "ai-for-healthcare-professionals": {
      ...englishContent.courses["ai-for-healthcare-professionals"],
      title: "AI 醫療專業課程",
      description: "這門初學者友善的課程解釋 AI 如何改變醫療保健，並讓專業人士親身體驗三種領先工具：Keragon（工作流程的 AI 自動化）、Aidoc（AI 放射學）和 PathAI（AI 病理學）。在不到兩小時內，你將學習 AI 如何應用於診斷、營運和患者護理，以及如何安全且合乎倫理地評估工具。",
      instructor: "蔡卓南",
      duration: "2 小時",
      level: "初學者",
      language: "繁體中文",
      features: [
        "了解醫療保健中的關鍵 AI 概念",
        "識別臨床、行政和患者體驗情境中的實用 AI 應用",
        "識別倫理和監管考量",
        "評估三種領先的 AI 醫療工具：Keragon、Aidoc、PathAI",
        "完成證書：AI 就緒醫療專業人士"
      ],
      whatYouWillLearn: [
        "了解與醫療保健相關的關鍵 AI 概念",
        "識別臨床、行政和患者體驗情境中的實用 AI 應用",
        "識別倫理和監管考量",
        "評估三種領先的 AI 醫療工具：Keragon、Aidoc、PathAI",
        "建立將 AI 融入專業實踐的個人計劃"
      ],
      curriculum: [
        {
          section: "模組 1：醫療保健中的 AI 介紹",
          lessons: [
            { title: "AI 對醫療保健專業人士的意義", duration: "10 分鐘", type: "video" },
            { title: "核心概念：機器學習、NLP、預測分析", duration: "15 分鐘", type: "video" },
            { title: "臨床和行政環境中的真實案例", duration: "15 分鐘", type: "video" },
            { title: "練習：識別你工作中 AI 可以幫助的一個領域", duration: "10 分鐘", type: "exercise" }
          ]
        },
        {
          section: "模組 2：臨床實踐和診斷中的 AI",
          lessons: [
            { title: "影像和放射學：AI 如何優先處理關鍵案例", duration: "15 分鐘", type: "video" },
            { title: "病理學和精準醫學", duration: "15 分鐘", type: "video" },
            { title: "練習：回顧 AI 輔助診斷的案例研究並列出好處和風險", duration: "10 分鐘", type: "exercise" }
          ]
        },
        {
          section: "模組 3：營運和患者體驗中的 AI",
          lessons: [
            { title: "自動化行政任務（登記、保險、排程）", duration: "15 分鐘", type: "video" },
            { title: "AI 驅動的聊天機器人和遠程患者監測", duration: "15 分鐘", type: "video" },
            { title: "練習：映射你部門中一個可以自動化的簡單工作流程", duration: "10 分鐘", type: "exercise" }
          ]
        },
        {
          section: "模組 4：數據、隱私和倫理",
          lessons: [
            { title: "HIPAA、GDPR 和 AI 系統中的患者數據安全", duration: "15 分鐘", type: "video" },
            { title: "醫療保健 AI 中的偏見、公平性和透明度", duration: "15 分鐘", type: "video" },
            { title: "與患者和利益相關者建立信任", duration: "15 分鐘", type: "video" },
            { title: "練習：為你的組織起草三項負責任 AI 使用指南", duration: "10 分鐘", type: "exercise" }
          ]
        },
        {
          section: "模組 5：領先 AI 工具的實作",
          lessons: [
            { title: "Keragon - 臨床/營運工作流程的 HIPAA 合規 AI 自動化", duration: "15 分鐘", type: "video" },
            { title: "Aidoc - CT 影像中緊急發現的 AI 放射學", duration: "15 分鐘", type: "video" },
            { title: "PathAI - 改善病理學準確性的深度學習", duration: "15 分鐘", type: "video" },
            { title: "練習：選擇其中一個工具，探索其網站/演示，並概述它如何融入你的工作流程", duration: "15 分鐘", type: "exercise" }
          ]
        },
        {
          section: "模組 6：為醫療保健 AI 的未來做準備",
          lessons: [
            { title: "新興趨勢：數位雙胞胎、個人化醫學、模型上下文協議", duration: "15 分鐘", type: "video" },
            { title: "提升你自己和你的團隊", duration: "10 分鐘", type: "video" },
            { title: "最終反思：建立將 AI 融入你角色的 30 天行動計劃", duration: "10 分鐘", type: "exercise" }
          ]
        }
      ],
      reviews: [
        {
          name: "Dr. Anna Wu",
          rating: 5,
          comment: "這門課程為我提供了在醫療實踐中實施 AI 所需的所有基礎知識。工具演示特別有價值，讓我對可用的選項有了清晰的了解。",
          timeAgo: "1 週前"
        },
        {
          name: "Dr. James Lin",
          rating: 4,
          comment: "作為放射科醫師，我對 Aidoc 的演示印象深刻。這門課程幫助我了解如何在我們的實踐中評估和實施 AI 工具。",
          timeAgo: "2 週前"
        },
        {
          name: "Nurse Sarah Chen",
          rating: 5,
          comment: "倫理考量部分讓我能夠更好地理解在患者護理中使用 AI 的責任。這門課程對所有醫療專業人士都很有價值。",
          timeAgo: "3 週前"
        },
        {
          name: "Dr. Michael Park",
          rating: 4,
          comment: "實用性強，易於理解。我特別喜歡關於數據隱私和合規的部分，這在醫療保健中至關重要。",
          timeAgo: "1 個月前"
        }
      ]
    },
    "ai-for-product-managers-vibe-coding-101": {
      ...englishContent.courses["ai-for-product-managers-vibe-coding-101"],
      title: "AI 產品經理課程 - Vibe Coding 101",
      description: "使用 Lovable、Cursor、v0 和 Bolt 在短短 6 小時內將你的產品想法轉化為現實。這門實作課程向非技術專業人士展示如何通過簡單描述你想要的內容來建構行銷網站、登陸頁面和 SaaS MVP。你將帶著現成的提示範本、已部署的專案以及立即原型化任何想法的信心離開。",
      instructor: "蔡卓南",
      duration: "6 小時",
      level: "初學者",
      language: "繁體中文",
      features: [
        "無需程式設計經驗 - 完美適合非技術專業人士",
        "頂級 AI 工具的實作經驗：Cursor、Lovable、v0、Bolt",
        "個人專案的逐步指導",
        "登陸頁面和 Web 應用的現成提示範本",
        "完整的專案部署和演示體驗",
        "Vibe Coding 完成證書"
      ],
      whatYouWillLearn: [
        "如何使用 Vibe Coding 工具建構無需程式設計的網站",
        "撰寫有效的自然語言提示與 AI 溝通",
        "導航流行 Vibe Coding 平台的用戶友善界面",
        "使用提示範本加速應用程式和網頁創建",
        "獨立進行快速原型設計、建構和部署 MVP",
        "創建行銷網站、登陸頁面和內部工具"
      ],
      curriculum: [
        {
          section: "非程式設計師的 Vibe Coding 介紹",
          lessons: [
            { title: "什麼是 vibe coding？", duration: "20 分鐘", type: "video" },
            { title: "新創公司 vs 大型公司的 Vibe Coding", duration: "15 分鐘", type: "video" },
            { title: "頂級 AI 工具比較：Cursor、Lovable、v0、Bolt", duration: "25 分鐘", type: "video" }
          ]
        },
        {
          section: "掌握 Vibe Coding 的提示",
          lessons: [
            { title: "如何撰寫出色的提示？", duration: "20 分鐘", type: "video" },
            { title: "你可以偷用的提示範本，快速製作登陸頁面、Web 應用", duration: "30 分鐘", type: "video" }
          ]
        },
        {
          section: "Vibe Coding 最佳實踐",
          lessons: [
            { title: "Vibe Coding 的最佳用例", duration: "15 分鐘", type: "video" },
            { title: "Vibe Coding 的危險", duration: "10 分鐘", type: "video" },
            { title: "該做和不該做的事", duration: "15 分鐘", type: "video" }
          ]
        },
        {
          section: "使用 Lovable AI",
          lessons: [
            { title: "什麼是 Lovable？", duration: "10 分鐘", type: "video" },
            { title: "Lovable UI 概覽", duration: "15 分鐘", type: "video" },
            { title: "最佳 Lovable 提示範本", duration: "20 分鐘", type: "video" },
            { title: "無需開發者在 Lovable 上建構", duration: "25 分鐘", type: "exercise" },
            { title: "創建行銷網站和登陸頁面", duration: "30 分鐘", type: "exercise" }
          ]
        },
        {
          section: "使用 Supabase",
          lessons: [
            { title: "什麼是 Supabase？", duration: "10 分鐘", type: "video" },
            { title: "身份驗證設置", duration: "15 分鐘", type: "video" },
            { title: "數據庫設置", duration: "20 分鐘", type: "video" },
            { title: "使用 Lovable 和 Supabase 建構軟體即服務軟體 MVP", duration: "45 分鐘", type: "project" }
          ]
        },
        {
          section: "逐步 Vibe Coding 你自己的專案",
          lessons: [
            { title: "使用 AI 創建產品需求文件", duration: "20 分鐘", type: "video" },
            { title: "講師指導學生完成個人專案", duration: "40 分鐘", type: "exercise" },
            { title: "迭代你的軟體", duration: "30 分鐘", type: "exercise" },
            { title: "線上部署你的專案", duration: "25 分鐘", type: "video" }
          ]
        },
        {
          section: "專案演示",
          lessons: [
            { title: "每組演示他們的專案", duration: "30 分鐘", type: "project" },
            { title: "結論和網路交流", duration: "15 分鐘", type: "video" }
          ]
        }
      ],
      reviews: [
        {
          name: "Amanda Foster",
          rating: 5,
          comment: "令人驚嘆的課程！使用 Lovable 和提示範本，我在短短 2 小時內為我的新創公司建構了一個完整的登陸頁面。個人專案的逐步指導非常寶貴。這就是產品開發的未來！",
          timeAgo: "1 週前"
        },
        {
          name: "James Rodriguez",
          rating: 5,
          comment: "作為非技術創始人，這門課程是一個啟示。Cursor、Lovable、v0 和 Bolt 的比較幫助我選擇了正確的工具。我現在可以立即原型化想法，並使用 Lovable 和 Supabase 建構了一個功能性的 SaaS MVP。",
          timeAgo: "2 週前"
        },
        {
          name: "Sophie Chen",
          rating: 4,
          comment: "優秀的實作方法！Web 應用的提示範本是純金。我使用 vibe coding 為客戶創建了多個行銷網站。專案演示方面確實有助於鞏固我的學習。",
          timeAgo: "3 週前"
        },
        {
          name: "Michael Johnson",
          rating: 5,
          comment: "建構軟體的革命性方法！這門課程教會我如何與 AI 工具有效溝通。我使用所學的技術在一個週末內從想法到部署應用程式。對產品經理來說完美！",
          timeAgo: "1 個月前"
        }
      ]
    }
  },

  faq: {
    ...englishContent.faq,
    title: "常見問題",
    subtitle: "關於 AI Jedi 計畫，你需要知道的一切",
    questions: [
      {
        question: "誰適合參加此課程？",
        answer: "此課程適合任何渴望快速打造並上線 Web 應用的人，無論你是零基礎新手或無程式背景的產品專業人士。"
      },
      {
        question: "需要程式基礎嗎？",
        answer: "完全不需要！我們特別為零基礎學員設計此課程，AI 工具將在你創建專案的過程中引導你。"
      },
      {
        question: "我將會打造什麼樣的專案？",
        answer: "你將開發並上線一個功能完整、達到專業水準的 Web 應用，可作為你的作品展示。過去學員曾打造互動學習遊戲到 AI 強化產品示範等多元專案。"
      },
      {
        question: "課程如何進行？",
        answer: "我們同時提供兩種形式！目前在洛杉磯與台北舉辦實體工作坊，線上版本即將推出。加入候補名單即可優先取得資訊。"
      },
      {
        question: "課程涵蓋哪些技術與平台？",
        answer: "我們聚焦於將概念、提示或產品需求轉化為可運作應用所需的實戰技能，使用如 Lovable 與 Cursor 的現代工具。你最終的專案將以 vibe coding 工具打造。"
      },
      {
        question: "遇到問題時有什麼支援？",
        answer: "你將獲得講師的一對一指導以及同儕支持。我們的重點是實際解決問題並成功部署，而非被動學習。"
      },
      {
        question: "如何報名？",
        answer: "只要點擊「報名梯次」按鈕，我們會寄送報名資訊給你！"
      }
    ]
  },

  callToAction: {
    ...englishContent.callToAction,
    title: "準備好展開你的 AI 旅程？",
    subtitle: "加入下一梯次 AI 專業人才養成班，名額有限。",
    buttons: {
      primary: {
        ...englishContent.callToAction.buttons.primary,
        text: "報名梯次"
      },
      secondary: {
        ...englishContent.callToAction.buttons.secondary,
        text: "加入候補名單"
      }
    }
  },

  footer: {
    description: "透過我們的密集 AI 計劃，改變你的職涯。向業界專家學習機器學習、深度學習與最前沿的 AI 技術。",
    location: "📍 台北 & 洛杉磯",
    copyright: "© 2025 AI Jedi。保留所有權利。",
    links: {
      privacy: "隱私政策",
      terms: "服務條款"
    }
  }
} as const;

// Export static content objects for testing
export { englishContent, zhContent };

// Export the appropriate content based on the URL locale prefix
export const content: Content =
  typeof window !== "undefined" && window.location.pathname.startsWith("/zh-tw")
    ? zhContent
    : englishContent; 