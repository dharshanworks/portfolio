import type { Project, Experience, SkillCategory, Achievement, Certification } from '../types';

export const personalInfo = {
  name: "Dharshan R",
  title: "Full-Stack Developer",
  subtitle: "Building scalable web applications with React, Node.js, TypeScript and SQL.",
  about: "I am a full-stack developer passionate about building practical software products, distributed architectures, and solving real-world challenges. I work across frontend and backend development using React.js, Node.js, Express.js, JavaScript, TypeScript and SQL. I also possess hands-on exposure to cloud and DevOps technologies including AWS, Docker and Kubernetes.",
  degree: "B.Tech Information Technology",
  college: "Sri Shakthi Institute of Engineering and Technology",
  educationPeriod: "2023 - 2027",
  cgpa: "7.7",
  location: "Coimbatore, Tamil Nadu, India",
  email: "iamdharshanrt@gmail.com",
  phone: "+91 7339386072",
  github: "https://github.com/dharshanworks",
  linkedin: "https://linkedin.com/in/dharshanworks",
  leetcode: "https://leetcode.com/u/dharshanworks",
  resumeUrl: "#contact"
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
    companyUrl: "https://cognifyz.com",
    startDate: "June 2024",
    endDate: "August 2024",
    responsibilities: [
      "Designed and developed responsive, mobile-first web user interfaces using modern HTML, CSS, JavaScript, and React.",
      "Collaborated with backend engineers to integrate RESTful endpoints, handle state management, and optimize page load performance.",
      "Conducted cross-browser compatibility testing and resolved UI/UX defects across multiple viewport sizes and mobile devices."
    ]
  }
];

export const industryProject = {
  title: "Telecentric Image & System Architecture",
  collaboration: "CareSoft",
  description: "Selected by college faculty as part of an elite team to design and develop an industry-grade machine vision and system architecture solution provided by CareSoft. Developed the end-to-end system under the active guidance of an industry project mentor, covering pipeline design, processing architecture, testing and integration.",
  disclaimer: "Source code and proprietary datasets are confidential under NDA and cannot be publicly distributed.",
  technologies: ["Image Processing", "System Architecture", "Python", "Data Pipelines", "Performance Profiling", "Quality Inspection"],
  contributions: [
    "Designed the core modular architecture pipeline for telecentric optical data ingestion.",
    "Engineered robust image preprocessing algorithms for automated dimensional analysis and feature extraction.",
    "Conducted rigorous edge-case testing, error handling, and latency profiling for real-time industrial inspection."
  ]
};

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "CloudCart",
    subtitle: "MERN E-Commerce Platform",
    description: "Architected a full-stack e-commerce ecosystem managing product catalogues, customer authentication, order processing, and containerized cloud deployment.",
    category: "Full-Stack & Cloud",
    metrics: ["Microservices Architecture", "AWS EKS Cloud Deployment", "Docker Containerized"],
    technologies: ["React.js", "Node.js", "Express.js", "JavaScript", "MongoDB Atlas", "REST APIs", "Docker", "Kubernetes", "AWS EKS", "Git"],
    highlights: [
      "Developed secure RESTful backend APIs with Node.js and Express.js with JWT authentication.",
      "Integrated React.js single-page application frontend with asynchronous state and cart caching.",
      "Managed schema design and query indexing with MongoDB Atlas cloud database.",
      "Designed a decoupled, modular microservice-ready folder structure.",
      "Containerized backend and frontend services into production-ready Docker containers.",
      "Orchestrated cluster deployments on AWS Elastic Kubernetes Service (EKS) with declarative manifests."
    ],
    liveUrl: "https://cloudcart.example.com",
    githubUrl: "https://github.com/dharshanworks/cloudcart",
    featured: true,
    architectureDetails: {
      architecture: "Client-Server decoupled architecture with containerized cloud orchestration",
      frontend: "React.js SPA with state management, responsive UI & API client layer",
      backend: "Node.js & Express.js REST service handling business logic & auth tokens",
      database: "MongoDB Atlas NoSQL cluster with optimized indexes",
      deployment: "Multi-stage Docker images deployed on AWS EKS with Kubernetes pods & services",
      apiLayer: "RESTful JSON APIs with middleware validation and error interception"
    }
  },
  {
    id: "proj-2",
    title: "AI Call Center Copilot",
    subtitle: "Real-Time AI Customer Support Platform",
    description: "Engineered a full-stack B2B outbound call-center intelligence platform for CRM records, automated call workflows, and live speech-to-text AI conversation monitoring.",
    category: "AI & Real-Time",
    metrics: ["Whisper Speech-to-Text", "LLaMA 3.1 LLM Inference", "WebSocket Event Streaming"],
    technologies: ["Python", "FastAPI", "React.js", "REST APIs", "WebSockets", "SQLAlchemy", "SQLite", "Whisper", "LLaMA 3.1", "Text-to-Speech", "Git"],
    highlights: [
      "Engineered high-throughput asynchronous endpoints using Python FastAPI.",
      "Implemented bi-directional WebSocket channels for low-latency live audio and transcript streaming.",
      "Built real-time agent dashboard updating agent cues and sentiment analysis on the fly.",
      "Integrated OpenAI Whisper models for local and cloud speech transcription.",
      "Connected Meta LLaMA 3.1 LLM pipeline for contextual next-step recommendations during calls.",
      "Implemented Text-to-Speech (TTS) voice generation with customizable acoustic styles."
    ],
    liveUrl: "https://ai-copilot.example.com",
    githubUrl: "https://github.com/dharshanworks/ai-call-center-copilot",
    featured: true,
    architectureDetails: {
      architecture: "Event-driven real-time streaming pipeline with AI inference workers",
      frontend: "React.js dashboard with live WebSocket listener and audio player",
      backend: "FastAPI async Python server with ASGI background tasks",
      database: "SQLAlchemy ORM with relational SQLite/PostgreSQL storage",
      deployment: "Containerized Python AI worker with GPU/CPU model inference orchestration",
      apiLayer: "WebSocket bidirectional event channels + RESTful JSON configuration APIs"
    }
  },
  {
    id: "proj-3",
    title: "Hospital Management System",
    subtitle: "Enterprise Java Application",
    description: "Engineered a robust enterprise Java application for managing clinical patient records, doctor appointments, automated billing, and secure role-based access control.",
    category: "Systems & Java",
    metrics: ["MVC + DAO Design Pattern", "Role-Based Access Control", "Relational MySQL Database"],
    technologies: ["Java", "JDBC", "MySQL", "SQL", "OOP", "MVC", "DAO", "Service Layer", "RBAC"],
    highlights: [
      "Designed and implemented clean DAO (Data Access Object) and Service Layer architecture.",
      "Constructed relational database schema in MySQL with foreign key integrity and ACID transactions.",
      "Implemented strict Role-Based Access Control (RBAC) distinguishing Admins, Doctors, and Receptionists.",
      "Architected clean Model-View-Controller (MVC) separation of concerns.",
      "Built resilient error-handling routines, input sanitization, and SQL injection prevention via PreparedStatements."
    ],
    githubUrl: "https://github.com/dharshanworks/hospital-management-system",
    featured: false,
    architectureDetails: {
      architecture: "3-Tier Enterprise MVC Architecture with DAO and Service separation",
      frontend: "Java desktop interface / Presentation tier rendering patient views",
      backend: "Java Business Logic and Service Layer with transaction managers",
      database: "MySQL Relational DBMS with normalized tables and relational foreign keys",
      deployment: "Java Virtual Machine (JVM) standalone package with JDBC drivers",
      apiLayer: "JDBC Connection Pool and Prepared Statement abstraction layer"
    }
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "SQL", "Python", "HTML5/CSS3"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "Vite", "Responsive Design", "State Management"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "API Design", "WebSockets"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "MongoDB Atlas", "SQLAlchemy", "Relational Modeling"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "AWS EKS", "Docker", "Kubernetes", "CI/CD", "Linux/Bash"]
  },
  {
    title: "Engineering Practices",
    skills: ["Git", "GitHub", "Unit Testing", "Code Review", "Technical Documentation", "System Architecture"]
  },
  {
    title: "CS Fundamentals",
    skills: ["Data Structures & Algorithms", "DBMS", "Object-Oriented Programming (OOP)", "MVC", "Operating Systems"]
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    title: "2nd Place — Pixel to Page 24-Hour Challenge",
    organization: "Unstop National Competition"
  },
  {
    id: "ach-2",
    title: "5th Place — National-Level Hackathon (Top 1.6% among 300+ teams)",
    organization: "Unstop Hackathon"
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)"
  },
  {
    id: "cert-2",
    title: "TCS iON Career Edge — Young Professional",
    issuer: "Tata Consultancy Services (TCS)"
  },
  {
    id: "cert-3",
    title: "Fundamentals of Cloud Computing",
    issuer: "Udemy Certified"
  }
];
