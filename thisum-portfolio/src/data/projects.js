export const projects = [
  {
    title: "Smart Campus Operations Hub",
    category: "Collaborative Project",
    role: "Team Lead / Security Module",

    image: "/projects/smart-campus.png",
    github:
      "https://github.com/thisumdev/it3030-paf-2026-smart-campus-group171",

    imageLabel: "Smart Campus Dashboard",

    images: [
      {
        src: "/projects/smart-campus.png",
        label: "Smart Campus dashboard",
        alt: "Smart Campus Operations Hub dashboard preview",
        caption: "Main dashboard preview of the Smart Campus Operations Hub.",
      },
      // Add more images like this:
      // {
      //   src: "/projects/smart-campus-auth.png",
      //   label: "Authentication screen",
      //   alt: "Smart Campus authentication screen",
      //   caption: "Secure login and access-control workflow.",
      // },
    ],

    description:
      "A modern campus operations platform built to support structured workflows, secure access control and role-based digital services.",
    highlights: [
      "JWT authentication and Google OAuth2 integration",
      "Role-based access control and protected routes",
      "DevOps workflow with Git branching and pull requests",
      "Notifications and security-focused module design",
    ],
    stack: [
      "Java Spring Boot",
      "React",
      "Vite",
      "Tailwind CSS",
      "SQLite",
      "OAuth2",
      "JWT",
      "GitHub Actions",
    ],
    featured: true,
  },
  {
    title: "Weather Station Data Cleaning & Imputation Web App",
    category: "Individual Project",
    role: "Full-Stack Developer",

    image: "/projects/weather-cleaning.png",
    github: "https://github.com/thisumdev/ACCIMT-weather-data-cleaning-app",

    imageLabel: "Weather Analytics Interface",

    images: [
      {
        src: "/projects/weather-cleaning.png",
        label: "Weather analytics interface",
        alt: "Weather station data cleaning and imputation web app interface",
        caption:
          "Interface for uploading, cleaning, imputing and exporting weather-station datasets.",
      },
    ],

    description:
      "A full-stack web application for uploading raw weather-station Excel files and producing cleaned, imputed and analysis-ready outputs.",
    highlights: [
      "Excel upload, validation and quality cleaning workflow",
      "Short-gap imputation and EDA-based imputation support",
      "Flag matrix, summary reports and export options",
      "CSV, JSON and ZIP output generation",
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Spring Boot",
      "PostgreSQL",
      "Python",
      "REST API",
    ],
    featured: true,
  },
  {
    title: "AutoFiks",
    category: "Collaborative Project",
    role: "Full-Stack Contributor",

    image: "/projects/autofiks.jpg",
    github: "https://github.com/milindasandaru/AutoFiks-ITP-Project",

    imageLabel: "Vehicle Service Platform",

    images: [
      {
        src: "/projects/autofiks.jpg",
        label: "AutoFiks platform",
        alt: "AutoFiks vehicle service and spare parts management system",
        caption: "Vehicle service and spare-parts management workflow preview.",
      },
    ],

    description:
      "A real-world client-oriented vehicle service and spare-parts management system for streamlining service bookings and operational tracking.",
    highlights: [
      "Service booking and spare-parts ordering workflow",
      "Live service tracking experience",
      "Employee management and authentication",
      "Role-based access and chatbot support",
    ],
    stack: [
      "Full-Stack",
      "Authentication",
      "Role-Based Access",
      "Service Management",
      "Chatbot",
    ],
    featured: false,
  },
  {
    title: "MovieRazzi",
    category: "Collaborative Project",
    role: "Team Lead / NLP Agent",

    image: "/projects/movierazzi.jpg",
    github: "https://github.com/thisumdev/movierazzi-movie-planner",

    imageLabel: "AI Movie Planner",

    images: [
      {
        src: "/projects/movierazzi.jpg",
        label: "MovieRazzi interface",
        alt: "MovieRazzi intelligent movie night planner interface",
        caption:
          "AI/NLP-supported movie night planning and recommendation experience.",
      },
    ],

    description:
      "An intelligent movie night planning application using AI, LLM and NLP concepts to analyze user preferences and support personalized planning.",
    highlights: [
      "Preference Analyzer Agent",
      "Personalized recommendation flow",
      "Movie night scheduling support",
      "AI/LLM/NLP-based planning experience",
    ],
    stack: ["AI", "LLM", "NLP", "Recommendation Logic", "Agent Workflow"],
    featured: false,
  },
];
