import type { Project, Experience, SkillCategory, Achievement, Certification } from '../types';

export const personalInfo = {
  name: "Dharshan R",
  title: "Full-Stack Developer",
  subtitle: "Building scalable web applications with React, Node.js, TypeScript and SQL.",
  about: "I am a full-stack developer interested in building practical software products and solving real-world problems. I work across frontend and backend development using React.js, Node.js, Express.js, JavaScript, TypeScript and SQL. I also have hands-on exposure to cloud and DevOps technologies including AWS, Docker and Kubernetes.",
  degree: "B.Tech Information Technology",
  college: "Sri Shakthi Institute of Engineering and Technology",
  educationPeriod: "2023 - 2027",
  cgpa: "7.7",
  location: "Coimbatore, Tamil Nadu, India",
  email: "iamdharshanrt@gmail.com",
  phone: "+91 7339386072",
  github: "https://github.com/dharshanworks",
  linkedin: "[LINKEDIN URL]",
  leetcode: "[LEETCODE URL]",
  resumeUrl: "[RESUME PDF URL/PATH]"
};

export const techStrip = [
  "React.js", "TypeScript", "JavaScript", "Node.js", "Express.js", 
  "MySQL", "MongoDB", "REST APIs", "Git", "Docker", "Kubernetes", "AWS"
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Frontend Developer Intern",
    company: "Cognifyz Technologies",
    companyUrl: "[COGNIFYZ OFFICIAL WEBSITE]",
    startDate: "[INTERNSHIP START DATE]",
    endDate: "[INTERNSHIP END DATE]",
    responsibilities: [
      "[ACTUAL INTERNSHIP RESPONSIBILITY 1]",
      "[ACTUAL INTERNSHIP RESPONSIBILITY 2]",
      "[ACTUAL INTERNSHIP RESPONSIBILITY 3]"
    ]
  }
];

export const industryProject = {
  title: "Telecentric Image & System Architecture",
  collaboration: "CareSoft",
  description: "Selected by the college as part of a team to develop an industry-defined solution provided by CareSoft. Developed the complete project under the guidance of a dedicated project mentor, covering system architecture, implementation, testing and integration.",
  disclaimer: "Source code and problem statement are confidential and cannot be publicly shared.",
  technologies: ["[ACTUAL TECHNOLOGIES USED]"],
  contributions: ["[MY SPECIFIC CONTRIBUTIONS]"]
};

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "CloudCart",
    subtitle: "MERN E-Commerce Platform",
    description: "Built a full-stack e-commerce platform for managing users, products, authentication and core e-commerce workflows.",
    technologies: ["React.js", "Node.js", "Express.js", "JavaScript", "MongoDB Atlas", "REST APIs", "Docker", "Kubernetes", "AWS EKS", "Git"],
    highlights: [
      "Developed RESTful backend APIs using Node.js and Express.js.",
      "Integrated React.js frontend with backend APIs.",
      "Used MongoDB Atlas for application data.",
      "Designed a modular application structure.",
      "Containerized the application using Docker.",
      "Deployed the application using Kubernetes and AWS EKS.",
      "Used Git/GitHub for version control."
    ],
    liveUrl: "[CLOUDCART LIVE URL]",
    githubUrl: "[CLOUDCART GITHUB URL]",
    featured: true,
    architectureDetails: {
      architecture: "Client-Server architecture with containerized deployment",
      frontend: "React.js SPAs handling user interface and state",
      backend: "Node.js / Express.js REST API",
      database: "MongoDB Atlas (NoSQL)",
      deployment: "Dockerized application deployed on AWS EKS (Kubernetes)",
      apiLayer: "RESTful JSON APIs"
    }
  },
  {
    id: "proj-2",
    title: "AI Call Center Copilot",
    subtitle: "Real-Time AI Customer Support Platform",
    description: "Engineered a full-stack B2B outbound call-center platform for customer records, call workflows and real-time conversation monitoring.",
    technologies: ["Python", "FastAPI", "React.js", "REST APIs", "WebSockets", "SQLAlchemy", "SQLite", "Whisper", "LLaMA 3.1", "Text-to-Speech", "Git"],
    highlights: [
      "Developed REST APIs.",
      "Implemented WebSocket-based real-time communication.",
      "Built real-time call status and dashboard updates.",
      "Integrated Whisper for speech-to-text.",
      "Integrated LLaMA 3.1 for AI-assisted conversations.",
      "Implemented text-to-speech capabilities.",
      "Managed structured customer and call data."
    ],
    liveUrl: "[AI CALL CENTER LIVE URL]",
    githubUrl: "[AI CALL CENTER GITHUB URL]",
    featured: false
  },
  {
    id: "proj-3",
    title: "Hospital Management System",
    subtitle: "Java Application",
    description: "Built a Java-based application for managing patient records, appointments, billing and role-based authentication.",
    technologies: ["Java", "JDBC", "MySQL", "SQL", "OOP", "MVC", "DAO", "Service Layer", "RBAC"],
    highlights: [
      "Implemented JDBC-based CRUD operations.",
      "Used MySQL for relational data management.",
      "Applied DAO and service-layer architecture.",
      "Implemented role-based authentication.",
      "Applied MVC and object-oriented programming principles.",
      "Implemented exception handling and modular application design."
    ],
    githubUrl: "[HOSPITAL PROJECT GITHUB URL]",
    featured: false
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "SQL", "Python"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "API Design"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "AWS EKS", "Docker", "Kubernetes"]
  },
  {
    title: "Development",
    skills: ["Git", "GitHub", "Unit Testing", "Code Review", "Technical Documentation"]
  },
  {
    title: "Fundamentals",
    skills: ["DSA", "DBMS", "OOP", "MVC", "Software Architecture"]
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    title: "2nd Place — Pixel to Page 24-Hour Challenge",
    organization: "Unstop"
  },
  {
    id: "ach-2",
    title: "5th Place — National-Level Hackathon among 300+ teams",
    organization: "Unstop"
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS"
  },
  {
    id: "cert-2",
    title: "TCS iON Career Edge — Young Professional",
    issuer: "TCS"
  },
  {
    id: "cert-3",
    title: "Fundamentals of Cloud Computing",
    issuer: "Udemy"
  }
];
