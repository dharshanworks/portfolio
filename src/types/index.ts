export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category?: string;
  metrics?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  architectureDetails?: {
    architecture: string;
    frontend: string;
    backend: string;
    database: string;
    deployment: string;
    apiLayer: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
}
