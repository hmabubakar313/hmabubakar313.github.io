export interface NavItem {
  id: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
}

export interface SocialLinks {
  linkedin: string;
  medium: string;
  github: string;
}

export interface HeroCTA {
  text: string;
  action: 'email' | 'whatsapp' | 'upwork';
  url?: string;
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  cta: {
    primary: HeroCTA;
    secondary: HeroCTA;
  };
}

export interface Education {
  degree: string;
  years: string;
  institution: string;
  location: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  status: string;
  github?: string;
  live?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  contact: ContactInfo;
  social: SocialLinks;
  hero: HeroConfig;
  navItems: NavItem[];
  education: Education[];
  experience: Experience[];
  skillCategories: SkillCategory[];
  projects: Project[];
  professionalSkills: string[];
  storyTitle: string;
  storyParagraphs: string[];
  storyQuote: string;
  nowContent: string;
}
