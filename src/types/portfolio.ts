export interface PersonalInfo {
  name: string;
  title: string;
  college: string;
  department: string;
  year: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  bio: string;
  supportingText: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
  iconName: string;
}

export interface AboutPillar {
  title: string;
  description: string;
  iconName: string;
  gradient: string;
}

export type SkillCategory = 'ECE CORE' | 'PROGRAMMING' | 'AI / SOFTWARE' | 'TOOLS';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: string;
  iconName: string;
  description: string;
}

export type ProjectCategory = 'All' | 'AI' | 'ECE' | 'Software' | 'Computer Vision';

export interface Project {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  category: ProjectCategory[];
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageVisual: string;
  architectureDetails: string;
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
  isCurrent?: boolean;
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  duration: string;
  period: string;
  certId?: string;
  skillsAcquired: string[];
  recognizedBy?: string;
  highlights?: string[];
  type: string;
}

export type CertCategory =
  | 'All'
  | 'AI & Machine Learning'
  | 'Critical Thinking & Ethics'
  | 'Cybersecurity'
  | 'AWS Cloud & AI'
  | 'Professional Development';

export interface Certification {
  id: string;
  title: string;
  organization: string;
  category: CertCategory;
  date: string;
  certId?: string;
  skillsGained: string[];
  credentialUrl?: string;
  signatory?: string;
  recognizingOrg?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Competition' | 'Hackathon' | 'Real-World Impact' | 'Contest';
  organization: string;
  date: string;
  description: string;
  badgeText: string;
  scale?: string;
  motto?: string;
  details?: string[];
}
