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
    title: "AI Skills for Career Professionals — skip the grind and get ahead",
    description: "Hands-on online courses designed for managers and specialists. Learn how to use AI tools to automate tasks, make better decisions, and drive business results — no coding required.",
    
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
        description: "Produce on-brand copy, visuals, and campaigns faster with review-ready outputs."
      },
      {
        title: "AI for Software Developers",
        description: "Streamline development workflows, automate testing, and accelerate code delivery."
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
      title: "AI for Marketing Professionals",
      description: "Produce on-brand copy, visuals, and campaigns faster with review-ready outputs.",
      instructor: "Cho-Nan Tsai",
      rating: 4.8,
      ratingNum: 892,
      students: 892,
      duration: "3 hours",
      level: "Beginner",
      price: "$199",
      originalPrice: "$399",
      lastUpdated: "December 2024",
      language: "English",
      features: [
        "No coding experience required",
        "Hands-on projects included",
        "Certificate of completion",
        "Lifetime access",
        "Mobile and desktop access"
      ],
      whatYouWillLearn: [
        "Create compelling marketing copy with AI",
        "Generate visual content and graphics",
        "Develop campaign strategies",
        "Automate content workflows",
        "Maintain brand consistency"
      ],
      curriculum: [
        {
          section: "Content Creation Basics",
          lessons: [
            { title: "AI Writing Tools Overview", duration: "15 min", type: "video" },
            { title: "Brand Voice and Tone", duration: "20 min", type: "video" },
            { title: "Creating Effective Prompts", duration: "25 min", type: "video" }
          ]
        },
          {
            section: "Visual Content & Campaigns",
            lessons: [
              { title: "Image Generation with DALL-E", duration: "30 min", type: "video" },
              { title: "Campaign Strategy Development", duration: "35 min", type: "video" },
              { title: "Project: Complete Marketing Campaign", duration: "40 min", type: "project" }
            ]
          }
        ],
        reviews: [
          {
            name: "Jessica Wu",
            rating: 5,
            comment: "Amazing course for marketers! I went from spending days on campaign copy to creating compelling content in hours. The brand voice consistency techniques are game-changing. Our engagement rates increased by 60%.",
            timeAgo: "1 week ago"
          },
          {
            name: "Alex Thompson",
            rating: 5,
            comment: "As a small business owner, I couldn't afford a marketing team. This course taught me to create professional-quality visuals and copy using AI. My social media following grew 200% in just 2 months!",
            timeAgo: "3 weeks ago"
          },
          {
            name: "Maria Santos",
            rating: 4,
            comment: "Excellent practical approach to AI marketing. The DALL-E section was incredibly useful for creating unique visuals. Only wish there was more content on video marketing with AI tools.",
            timeAgo: "2 weeks ago"
          },
          {
            name: "Tom Wilson",
            rating: 5,
            comment: "This course paid for itself in the first week! The automated content workflows I built save me 20 hours monthly. My clients love the consistent, high-quality output I can now deliver.",
            timeAgo: "1 month ago"
          }
        ]
      },
    "ai-for-software-developers": {
      title: "AI for Software Developers",
      description: "Streamline development workflows, automate testing, and accelerate code delivery.",
      instructor: "Cho-Nan Tsai",
      rating: 4.9,
      ratingNum: 634,
      students: 634,
      duration: "5 hours",
      level: "Advanced",
      price: "$399",
      originalPrice: "$799",
      lastUpdated: "December 2024",
      language: "English",
      features: [
        "No coding experience required",
        "Hands-on projects included",
        "Certificate of completion",
        "Lifetime access",
        "Mobile and desktop access"
      ],
      whatYouWillLearn: [
        "Build intelligent workflow automations",
        "Create SOP (Standard Operating Procedure) agents",
        "Develop forecasting models",
        "Optimize business processes",
        "Implement predictive analytics"
      ],
      curriculum: [
        {
          section: "Operations Intelligence",
          lessons: [
            { title: "AI for Process Optimization", duration: "25 min", type: "video" },
            { title: "Building SOP Agents", duration: "30 min", type: "video" },
            { title: "Workflow Automation Design", duration: "35 min", type: "video" }
          ]
        },
        {
          section: "Forecasting & Analytics",
          lessons: [
            { title: "Predictive Analytics with AI", duration: "40 min", type: "video" },
            { title: "Data Visualization and Insights", duration: "35 min", type: "video" },
            { title: "Project: Complete Operations Dashboard", duration: "50 min", type: "project" }
          ]
        }
      ],
      reviews: [
        {
          name: "Robert Johnson",
          rating: 5,
          comment: "This advanced course revolutionized our supply chain operations. The SOP agents we built reduced manual processes by 70%. The forecasting models helped us avoid $200K in inventory waste this quarter.",
          timeAgo: "2 weeks ago"
        },
        {
          name: "Linda Chang",
          rating: 5,
          comment: "As an operations director, I was skeptical about AI forecasting. This course proved me wrong! Our demand prediction accuracy improved from 65% to 92%. The ROI was immediate and substantial.",
          timeAgo: "1 month ago"
        },
        {
          name: "Carlos Rivera",
          rating: 4,
          comment: "Comprehensive coverage of operations AI. The workflow automation section saved our team countless hours. The predictive analytics models are sophisticated yet easy to implement. Challenging but rewarding.",
          timeAgo: "3 weeks ago"
        },
        {
          name: "Anna Petrov",
          rating: 5,
          comment: "Best investment for operations professionals! The SOP agents handle routine decisions automatically, freeing up my team for strategic work. Our operational efficiency increased by 45%.",
          timeAgo: "1 week ago"
        }
      ]
    },
    "ai-for-business-leaders": {
      title: "AI for Business Leaders",
      description: "Turn complex data into strategic insights and make data-driven decisions with confidence.",
      instructor: "Cho-Nan Tsai",
      rating: 4.7,
      ratingNum: 1156,
      students: 1156,
      duration: "3.5 hours",
      level: "Intermediate",
      price: "$249",
      originalPrice: "$499",
      lastUpdated: "December 2024",
      language: "English",
      features: [
        "No coding experience required",
        "Hands-on projects included",
        "Certificate of completion",
        "Lifetime access",
        "Mobile and desktop access"
      ],
      whatYouWillLearn: [
        "Transform sales data into actionable insights",
        "Create automated reporting systems",
        "Build lead scoring models",
        "Develop sales forecasting tools",
        "Optimize sales processes with AI"
      ],
      curriculum: [
        {
          section: "Sales Data Intelligence",
          lessons: [
            { title: "AI for Sales Analytics", duration: "20 min", type: "video" },
            { title: "Lead Scoring with AI", duration: "25 min", type: "video" },
            { title: "Sales Forecasting Models", duration: "30 min", type: "video" }
          ]
        },
        {
          section: "Automation & Optimization",
          lessons: [
            { title: "Automated Sales Reporting", duration: "35 min", type: "video" },
            { title: "CRM Integration and AI", duration: "30 min", type: "video" },
            { title: "Project: Complete Sales Dashboard", duration: "45 min", type: "project" }
          ]
        }
      ],
      reviews: [
        {
          name: "Jennifer Adams",
          rating: 5,
          comment: "Game-changer for sales analytics! I transformed our messy CRM data into beautiful dashboards that actually drive decisions. My conversion rate increased 35% using the lead scoring models from this course.",
          timeAgo: "1 week ago"
        },
        {
          name: "Marcus Brown",
          rating: 4,
          comment: "Solid course for sales professionals. The automated reporting saved me 10 hours weekly. The forecasting tools helped me exceed my quarterly targets by 20%. Could use more advanced CRM integrations.",
          timeAgo: "2 weeks ago"
        },
        {
          name: "Rachel Green",
          rating: 5,
          comment: "As a sales director, this course was invaluable. The AI-powered insights helped identify our best prospects and optimize our sales funnel. Team productivity improved dramatically across the board.",
          timeAgo: "3 weeks ago"
        },
        {
          name: "Kevin Park",
          rating: 5,
          comment: "Excellent practical approach to sales data. The no-code solutions made it easy to implement immediately. Our sales team now makes data-driven decisions instead of relying on gut feelings.",
          timeAgo: "1 month ago"
        }
      ]
    },
    "ai-for-healthcare-professionals": {
      title: "AI for Healthcare Professionals",
      description: "Optimize patient care, streamline documentation, and improve healthcare operations with AI.",
      instructor: "Cho-Nan Tsai",
      rating: 4.6,
      ratingNum: 743,
      students: 743,
      duration: "2.5 hours",
      level: "Beginner",
      price: "$179",
      originalPrice: "$359",
      lastUpdated: "December 2024",
      language: "English",
      features: [
        "No coding experience required",
        "Hands-on projects included",
        "Certificate of completion",
        "Lifetime access",
        "Mobile and desktop access"
      ],
      whatYouWillLearn: [
        "Automate HR document creation",
        "Streamline recruitment processes",
        "Build employee communication systems",
        "Create policy templates",
        "Implement HR analytics"
      ],
      curriculum: [
        {
          section: "HR Automation Basics",
          lessons: [
            { title: "AI for HR Documentation", duration: "15 min", type: "video" },
            { title: "Recruitment Process Automation", duration: "20 min", type: "video" },
            { title: "Employee Communication Tools", duration: "25 min", type: "video" }
          ]
        },
        {
          section: "Advanced HR Systems",
          lessons: [
            { title: "Policy Template Creation", duration: "30 min", type: "video" },
            { title: "HR Analytics and Insights", duration: "25 min", type: "video" },
            { title: "Project: Complete HR System", duration: "35 min", type: "project" }
          ]
        }
      ],
      reviews: [
        {
          name: "Patricia Davis",
          rating: 5,
          comment: "Perfect for HR professionals! This course streamlined our entire recruitment process. The AI-powered candidate screening saves us 15 hours per position. Our hiring quality has improved significantly.",
          timeAgo: "2 weeks ago"
        },
        {
          name: "Steven Miller",
          rating: 4,
          comment: "Great practical HR applications. The policy drafting templates are incredibly useful - what used to take days now takes hours. The employee communication automation is a game-changer for our team.",
          timeAgo: "1 month ago"
        },
        {
          name: "Diana Lopez",
          rating: 5,
          comment: "As an HR director at a growing startup, this course was exactly what I needed. The automated onboarding workflows and performance review templates scaled our HR operations beautifully.",
          timeAgo: "3 weeks ago"
        },
        {
          name: "Brian Taylor",
          rating: 4,
          comment: "Solid foundation for HR automation. The analytics section helped us identify retention patterns we never noticed before. Implementation was straightforward even for non-technical HR staff.",
          timeAgo: "1 week ago"
        }
      ]
    },
    "ai-for-product-managers-vibe-coding-101": {
      title: "AI for Product Managers - Vibe Coding 101",
      description: "Build product prototypes and automations by describing what you want—no coding required.",
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
        "No coding experience required",
        "Hands-on projects included",
        "Certificate of completion",
        "Lifetime access",
        "Mobile and desktop access"
      ],
      whatYouWillLearn: [
        "Build web applications with natural language",
        "Create automation workflows",
        "Develop simple mobile apps",
        "Integrate APIs and services",
        "Deploy applications to the cloud"
      ],
      curriculum: [
        {
          section: "Vibe Coding Fundamentals",
          lessons: [
            { title: "Introduction to Vibe Coding", duration: "30 min", type: "video" },
            { title: "Natural Language to Code", duration: "35 min", type: "video" },
            { title: "Building Your First App", duration: "40 min", type: "video" }
          ]
        },
        {
          section: "Advanced Applications",
          lessons: [
            { title: "API Integration and Automation", duration: "45 min", type: "video" },
            { title: "Mobile App Development", duration: "50 min", type: "video" },
            { title: "Project: Complete Web Application", duration: "60 min", type: "project" }
          ]
        }
      ],
      reviews: [
        {
          name: "Amanda Foster",
          rating: 5,
          comment: "Mind-blowing course! I built my first web app in just 2 hours without writing a single line of code. The natural language approach makes app development accessible to everyone. This is the future!",
          timeAgo: "1 week ago"
        },
        {
          name: "James Rodriguez",
          rating: 5,
          comment: "As a non-technical founder, this course was a revelation. I can now prototype ideas instantly and build functional apps for my business. The API integration section opened up endless possibilities.",
          timeAgo: "2 weeks ago"
        },
        {
          name: "Sophie Chen",
          rating: 4,
          comment: "Incredible technology! The course makes app development feel like having a conversation. I created automation tools that save my team hours daily. Some advanced features could be explained more clearly.",
          timeAgo: "3 weeks ago"
        },
        {
          name: "Michael Johnson",
          rating: 5,
          comment: "Revolutionary approach to coding! I went from idea to deployed application in one weekend. The mobile app development section was particularly impressive. This democratizes software development.",
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
    subtitle: "Everything you need to know about the AI Jedi program",
    questions: [
      {
        question: "Who should take this course?",
        answer: "This course is perfect for anyone eager to create and launch real web applications quickly, whether you're a complete beginner or a product professional with no coding background."
      },
      {
        question: "Do I need programming knowledge?",
        answer: "Not at all! We've built this course specifically for people starting from zero. AI tools will guide your learning process as you create your projects."
      },
      {
        question: "What kind of project will I create?",
        answer: "You'll develop and launch a fully functional, professional-grade web application that you can proudly showcase. Previous participants have created diverse projects ranging from interactive learning games to AI-enhanced product demonstrations."
      },
      {
        question: "How is the course delivered?",
        answer: "We offer both formats! Currently running hands-on workshops in Los Angeles and Taipei, with an online version launching soon. Sign up for our waitlist to get priority access."
      },
      {
        question: "Which technologies and platforms do you cover?",
        answer: "We focus on practical skills for transforming concepts, prompts, or product requirements into working applications using modern tools like Lovable and Cursor. Your final project will be built with vibe coding tools."
      },
      {
        question: "What support is available if I encounter problems?",
        answer: "You'll receive personalized guidance from our instructors plus support from fellow participants. Our approach emphasizes hands-on problem-solving and successful deployment, not passive learning."
      },
      {
        question: "How can I enroll?",
        answer: "Simply click on Sign Up for Cohort. We'll send you enrollment details!"
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
      { href: "#program", label: "你將學到什麼" },
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

// Export the appropriate content based on the URL locale prefix
export const content: Content =
  typeof window !== "undefined" && window.location.pathname.startsWith("/zh-tw")
    ? zhContent
    : englishContent; 