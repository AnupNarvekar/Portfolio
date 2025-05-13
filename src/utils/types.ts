export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Basics {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  profiles: Profile[];
  resumeUrl: string;
}

export interface About {
  bio: string;
  photo: string;
}

export interface Skill {
  name: string;
  level: string;
  keywords: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
  repo: string;
  image: string;
}

export interface Experience {
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  courses: string[];
}

export interface Contact {
  email: string;
  message: string;
}

export interface PortfolioData {
  basics: Basics;
  about: About;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  contact: Contact;
}