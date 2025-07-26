type ButtonVariant = "cta" | "outline" | "link" | "default" | "destructive" | "secondary" | "ghost" | "hero";

type Content = {
  header: {
    logo: string;
    navigation: Array<{
      href: string;
      label: string;
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
      secondary: {
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

export const content: Content = {
  header: {
    logo: "AI Jedi",
    navigation: [
      { href: "#why-join", label: "Why Join" },
      { href: "#program", label: "What you will learn" },
      { href: "#instructor", label: "Instructor" },
      { href: "#showcase", label: "Success Stories" },
      { href: "#faq", label: "FAQ" }
    ]
  },

  hero: {
    title: "Idea to Product in just hours",
    description: "Skip months of development hell. Our intensive workshop transforms your raw ideas into working prototypes, MVPs, and test-ready products in just hours, not months. No coding required.",
    
    buttons: {
      primary: "Sign up for Cohort",
      secondary: "Join Waitlist"
    }
  },

  whyJoin: {
    title: "Why Join AI Jedi Vibe Coding Camp",
    subtitle: "Empowering the next generation of AI builders",
    mainText: [
      "Product creation shouldn't require a computer science degree or years of coding experience. With breakthrough AI tools like Cursor and Lovable, the game has completely changed. If you can articulate your vision, you can bring it to life.",
      "This hands-on course is built for complete beginners and product thinkers ready to go from concept to launch. No passive learning—you'll build real products from day one. In just one weekend, you'll ship a fully functional app that's ready for users. We'll walk you through every step using Cursor, Lovable, Supabase, and cutting-edge AI development workflows."
    ],
    features: [
      {
        icon: "🚀",
        title: "Learn by Building",
        description: "Hands-on experience with real projects from day one"
      },
      {
        icon: "🤖",
        title: "AI-First Approach",
        description: "Master the latest AI tools and workflows"
      },
      {
        icon: "💡",
        title: "Ship Prototypes Fast",
        description: "Iterate on ideas and create prototypes quickly"
      }
    ],
    cta: "Sign up for Cohort"
  },

  program: {
    title: "What you will learn",
    subtitle: "The fastest way to go from idea to product. Here is what you will learn over a weekend:",
    features: [
      {
        title: "Speedy Prototyping using AI",
        description: "Go straight implementation. Learn the pros and cons of each vibe coding tools. Focus on the best in class to use."
      },
      {
        title: "Full stack AI dev",
        description: "Go from zero to deploying a real web app using Lovable, Cursor and Supabase. Build both frontend and backend, and actually ship something you can use."
      },
      {
        title: "Launch real products",
        description: "Execute using AI on real world products and solve real problems."
      },
      {
        title: "Industry Projects",
        description: "Work on real-world AI projects with industry partners and build a portfolio that gets you hired."
      }
    ]
  },

  instructor: {
    title: "Meet Your Instructor",
    name: "Cho-Nan Tsai",
    role: "Founder & Lead Instructor",
    bio: [
      "With over a decade of experience in software development and AI, Cho-Nan Tsai has been at the forefront of technological innovation, helping companies leverage AI to solve complex problems. He currently serves as an adjunct professor teaching AI at USC, where he shares his expertise with the next generation of technologists.",
      "Throughout his career, Cho-Nan Tsai has served as founding CTO on three separate occasions, bringing deep technical leadership and strategic vision to early-stage companies. Previously a senior engineer at leading tech companies, he has developed and deployed AI solutions that have impacted millions of users.",
      "His passion for teaching stems from his belief that AI should be accessible to everyone who wants to learn. As the founder of AI Jedi, he has designed a curriculum that combines practical, hands-on experience with cutting-edge AI tools and methodologies. His teaching approach focuses on building real-world applications while ensuring students understand the fundamental concepts behind AI technology."
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
    subtitle: "Our graduates are working at the world's leading AI companies, building the future of technology.",
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
        question: "What prerequisites do I need for the AI Jedi program?",
        answer: "Our program is designed for beginners with basic programming knowledge. While prior experience with Python or JavaScript is helpful, it's not required. We provide pre-course materials to help you get up to speed with the basics before the program starts."
      },
      {
        question: "How long is the program and what's the time commitment?",
        answer: "The core program runs for 12 weeks, with approximately 20-25 hours per week of commitment including live sessions, project work, and self-paced learning. We offer both part-time (evenings/weekends) and full-time options to accommodate different schedules."
      },
      {
        question: "What technologies and tools will I learn?",
        answer: "You'll learn cutting-edge AI tools and frameworks including OpenAI's GPT models, Cursor IDE, Next.js, Supabase, and various AI-powered development tools. The curriculum is constantly updated to include the latest advancements in AI technology."
      },
      {
        question: "Do you offer job placement assistance?",
        answer: "Yes! We have a dedicated career services team that provides resume reviews, interview preparation, and connections to our network of hiring partners. Our program includes career workshops and 1-on-1 coaching sessions to help you transition into an AI role."
      },
      {
        question: "What kind of projects will I build during the program?",
        answer: "You'll build several real-world projects including AI-powered web applications, chatbots, and automation tools. All projects are production-ready and can be added to your portfolio. You'll also work on a capstone project that solves a real business problem."
      },
      {
        question: "Is there a payment plan or financing available?",
        answer: "We offer flexible payment options including monthly installments and income share agreements (ISA). We also partner with various financing providers to make the program accessible to everyone. Scholarships are available for underrepresented groups in tech."
      }
    ]
  },

  callToAction: {
    title: "Ready to Start Your AI Journey?",
    subtitle: "Join the next cohort of AI professionals. Limited spots available.",
    buttons: {
      primary: {
        text: "Sign up for Cohort",
        variant: "hero"
      },
      secondary: {
        text: "Join Waitlist",
        variant: "outline"
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