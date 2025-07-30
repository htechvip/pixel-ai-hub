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
    description: "Skip months of development hell. Our intensive workshop transforms your raw ideas into working prototypes, MVPs, and real-world products in just hours, not months. No coding required.",
    
    buttons: {
      primary: "Sign up for Cohort",
      secondary: "Join Waitlist"
    }
  },

  whyJoin: {
    title: "Why Join AI Jedi Vibe Coding Bootcamp",
    subtitle: "Empowering the next generation of AI builders",
    mainText: [
      "Product creation shouldn't require a computer science degree or years of coding experience. With breakthrough AI tools like Cursor and Lovable, the game has completely changed. If you can articulate your vision, you can bring it to life.",
      "This hands-on course is built for complete beginners and product thinkers ready to go from concept to launch. No passive learning—you'll build real products from day one. In just one weekend, you'll ship a fully functional app that's ready for users. We'll walk you through every step using vibe coding tools and cutting-edge AI development workflows."
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
        description: "Go straight implementation. Learn the pros and cons of each vibe coding tools. Focus on the best in class software to use."
      },
      {
        title: "Full stack AI dev",
        description: "Go from zero to deploying a real web app using vibe coding tools. Build both frontend and backend, and actually ship something you can use."
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