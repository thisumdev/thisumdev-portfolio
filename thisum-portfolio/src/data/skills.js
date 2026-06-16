import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const skillGroups = [
  {
    title: "Data Science & AI",
    icon: BrainCircuit,
    description:
      "Working with data pipelines, machine learning concepts, analytics workflows and AI-assisted development.",
    skills: [
      "Python",
      "Machine Learning",
      "Data Cleaning",
      "Data Analytics",
      "AI Workflows",
      "Notebooks",
      "ML Libraries",
    ],
  },
  {
    title: "Full-Stack Development",
    icon: Code2,
    description:
      "Building responsive interfaces and backend APIs for structured, secure and scalable applications.",
    skills: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Java Spring Boot",
      "MERN",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description:
      "Designing and working with relational and NoSQL databases for application and analytics use cases.",
    skills: [
      "PostgreSQL",
      "SQLite",
      "MongoDB",
      "Oracle",
      "Microsoft SQL Server",
      "SQL",
    ],
  },
  {
    title: "DevOps & Engineering Practice",
    icon: GitBranch,
    description:
      "Using collaborative development workflows with version control, branching and CI/CD practices.",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Branching Strategy",
      "Pull Requests",
      "Team Workflow",
    ],
  },
  {
    title: "Security & Authentication",
    icon: ShieldCheck,
    description:
      "Implementing secure access control patterns for modern web systems and protected user experiences.",
    skills: [
      "JWT",
      "OAuth2",
      "Role-Based Access Control",
      "Protected Routes",
      "Authentication",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    description:
      "Comfortable with development, analytics and cloud-adjacent tools used in technical project workflows.",
    skills: ["RStudio", "AWS", "Notebook", "Excel Data Workflows", "APIs"],
  },
];
