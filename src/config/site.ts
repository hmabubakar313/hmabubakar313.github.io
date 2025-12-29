import type { SiteConfig } from '../types';

// Contact info from environment variables for protection
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || '';
const contactPhone = import.meta.env.VITE_CONTACT_PHONE || '';
const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL || '';

export const SITE: SiteConfig = {
  name: "Hafiz Muhammad Abubakar",
  title: "Backend Developer",
  description: "Backend-focused full-stack engineer building scalable APIs, integrating AI, and shipping features that work.",

  contact: {
    email: contactEmail,
    phone: contactPhone,
    whatsapp: whatsappUrl,
    location: "Lahore, Pakistan"
  },

  social: {
    linkedin: "https://linkedin.com/in/hmabubakar313",
    medium: "https://medium.com/@hmabubakar313",
    github: "https://github.com/hmabubakar313"
  },

  hero: {
    title: "I don't just write code—I solve problems with Python, FastAPI, React, and a lot of persistence.",
    subtitle: "Backend-focused full-stack engineer building scalable APIs, integrating AI, and shipping features that work.",
    cta: {
      primary: { text: "Hire Me", action: "upwork", url: "https://upwork.com/freelancers/~019dd94674bee61035" },
      secondary: { text: "Let's Talk", action: "whatsapp" }
    }
  },

  navItems: [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Story' },
    { id: 'journey', label: 'Journey' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ],

  storyTitle: "The Long Way Around",

  storyParagraphs: [
    "I failed my first programming course. That failure hit hard, but it taught me I could fall and get back up. I retook it, passed, and never stopped building.",

    "After graduating from FAST-NUCES in 2023, I joined a software company building AI-powered assessments, helping recruiters create technical tests using OpenAI.",

    "Now at 360 Solutions, I build FastAPI microservices, advertisement platforms, and LLM-powered knowledge systems. I also contribute to open-source and explore how AI can make legal and healthcare systems more accessible.",
  ],

  storyQuote: "That first programming failure taught me something no success ever could: consistency beats talent, and persistence beats everything.",

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      years: "2019-2023",
      institution: "National University of Computer and Emerging Sciences (FAST-NUCES)",
      location: "Islamabad"
    }
  ],

  experience: [
    {
      title: "Backend Developer",
      company: "360 Solutions",
      period: "Jan 2025 – Present",
      location: "Lahore",
      achievements: [
        "Developed AI-driven processing features with OpenAI Azure, reducing manual data enrichment efforts by ~30%",
        "Extended an LLM-based knowledge platform with smart document search, reducing query resolution time from minutes to seconds",
        "Built retargeting pipeline backend logic that improved campaign targeting efficiency by ~25%",
        "Maintained Celery + Redis background tasks for reliable asynchronous job execution"
      ]
    },
    {
      title: "Software Engineer",
      company: "Code Genesis",
      period: "Sep 2023 – Dec 2024",
      location: "Lahore",
      achievements: [
        "Enhanced ERP functionality for 100+ internal users using AJAX and jQuery",
        "Delivered unit tests and bug fixes in Django, achieving ~80% coverage on core modules",
        "Contributed to AI-powered test suggestion engine that improved customer adoption rates",
        "Implemented end-to-end testing using Playwright and monitoring with Datadog and Sentry"
      ]
    }
  ],

  skillCategories: [
    {
      name: "Core Backend Stack",
      skills: ["Python", "Django / Django REST Framework", "FastAPI", "PostgreSQL / MySQL", "Celery + Redis", "Docker"]
    },
    {
      name: "Frontend & Full-Stack",
      skills: ["React / Next.js", "TypeScript", "Tailwind CSS / MUI", "jQuery / AJAX"]
    },
    {
      name: "AI & Integrations",
      skills: ["OpenAI API / Azure OpenAI", "Claude AI / RAG Systems", "LLM Integration", "AWS Bedrock"]
    },
    {
      name: "DevOps & Tools",
      skills: ["Git / GitHub", "AWS (EC2, S3)", "Postman / API Testing", "JIRA / Agile Workflows", "Datadog / Sentry", "Playwright Testing"]
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "MySQL", "ArangoDB", "SQLite"]
    }
  ],

  professionalSkills: [
    "REST API Design & Development",
    "Microservices Architecture",
    "AI/LLM Integration",
    "Asynchronous Task Processing",
    "Unit Testing & TDD",
    "Agile Development",
    "Cross-functional Collaboration"
  ],

  projects: [
    {
      title: "Aggriconnect",
      subtitle: "Open-source farmers marketplace",
      description: [
        "Platform connecting local farmers directly with customers, eliminating middlemen",
        "Django backend with Next.js frontend for a modern full-stack experience",
        "Helps build healthier communities by improving access to locally grown produce"
      ],
      tech: ["Django", "Next.js", "Tailwind CSS", "PostgreSQL"],
      status: "Active Development",
      github: "https://github.com/hmabubakar313/connect-farmer"
    },
    {
      title: "Sentiment Tracker",
      subtitle: "Real-time social mood analysis",
      description: [
        "Analyzes public sentiment using Twitter API with real-time data collection",
        "Track mood patterns during elections, events, or campaigns by searching hashtags",
        "Data-driven insights to understand public opinion and make informed decisions"
      ],
      tech: ["Python", "Twitter API", "Sentiment Analysis", "Data Visualization"],
      status: "Completed",
      github: "https://github.com/hmabubakar313/sentiment-tracker"
    },
    {
      title: "Healthcare RBAC System",
      subtitle: "Role-based access control for medical data",
      description: [
        "Building comprehensive healthcare management application with RBAC",
        "Secure patient data handling with fine-grained permissions",
        "Integration with FHIR standards for interoperability"
      ],
      tech: ["Django", "PostgreSQL", "FHIR", "React"],
      status: "In Progress (2025)"
    },
    {
      title: "Vali-Med Legal Scoring",
      subtitle: "AI-powered case evaluation",
      description: [
        "RAG system using Claude AI for legal case evaluation and prediction",
        "Analyzes cases against 10 criteria to predict success probability",
        "Helps individuals understand their legal standing before filing"
      ],
      tech: ["Claude AI", "RAG", "Python", "FastAPI"],
      status: "Completed",
      github: "https://github.com/hmabubakar313/vali-med-legal-scoring"
    },
    {
      title: "OutlookSync",
      subtitle: "Email digest automation",
      description: [
        "Django application integrating Outlook Graph API for daily email summaries",
        "Webhooks for real-time data collection, reducing email clutter",
        "Delivers concise digests instead of scattered notifications"
      ],
      tech: ["Django", "Outlook Graph API", "Webhooks", "Celery"],
      status: "Completed",
      github: "https://github.com/hmabubakar313/outlook_sync"
    },
    {
      title: "EarlySafe",
      subtitle: "Disaster alert system",
      description: [
        "MVP for disaster prevention and early warning alert system",
        "Real-time notifications for potential emergencies",
        "Collaborated with Brainy Startups organization"
      ],
      tech: ["Django", "Real-time Notifications", "APIs"],
      status: "Completed",
      github: "https://github.com/Brainy-Startups/earlysafe"
    }
  ],

  nowContent: "Right now I'm building a healthcare management system with RBAC, exploring microservice patterns in FastAPI, and helping farmers sell produce directly through Aggriconnect. I'm also diving deeper into RAG systems and exploring how AI can democratize access to legal and medical information."
};
