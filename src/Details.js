// Enter all your detials in this file
// Logo images
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import python from "./assets/techstack/python.png";
import js from "./assets/techstack/js.png";
import android from "./assets/techstack/android.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import docker from "./assets/techstack/docker.png";
import figma from "./assets/techstack/figma.png";
// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos

// Personal Details
export const personalDetails = {
  name: "Ilham Zakariya",
  tagline: "Android & Web Developer | Fresh Graduate Computer Science",
  img: profile,
  about: `Fresh graduate in Computer Science with a 3.96 GPA from Universitas Budi Luhur. An Android Developer (Bangkit Academy 2023) with experience as a Software Developer Intern at Telkomsel. Demonstrates strong skills in IT support, networking, software/hardware maintenance, and leadership as a Lab Supervisor. Adept at developing innovative solutions and collaborating with multidisciplinary teams.`,
};

// Social Media URLs
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/ilham-zakariya-233102127/",
  github: "https://github.com/Maxisud",
  twitter: "",
  instagram: "",
};

// Internship Experience (was workDetails)
export const internshipDetails = [
  {
    Position: "Software Development Intern (MSIB Batch 5)",
    Company: "Telkomsel",
    Location: "Jakarta, Indonesia",
    Type: "Internship",
    Duration: "Aug 2023 - Dec 2023",
    Description: [
      "Collaborated with team members to create a Software Development Standardization Document, improving the efficiency and consistency of backend development processes.",
      "Gained hands-on experience with corporate-level software development tools and workflows.",
      "Migrated an internal website from PHP to React.js, focusing on front-end development and ensuring seamless integration with the backend.",
      "Worked closely with a senior backend developer to align front-end and backend functionalities for a smooth user experience.",
    ],
  },
];

// Work Experience (Professional / Freelance)
export const workExperienceDetails = [
  {
    Position: "Freelance Web Developer",
    Company: "PatunganAja (Freelance)",
    Location: "Remote, Indonesia",
    Type: "Freelance",
    Duration: "Jan 2025 - Present",
    Description: [
      "Developed PatunganAja, a modern e-commerce web platform empowering group purchases and collaborative payments.",
      "Built rich user interfaces utilizing React.js, Tailwind CSS, and TypeScript for optimal performance and maintainability.",
      "Architected scalable state management with Zustand and handled robust data fetching, caching, and synchronization using React Query.",
      "Implemented responsive layouts, ensuring seamless experience across devices.",
      "Engaged in close collaboration with clients to iterate features based on feedback and evolving business requirements.",
      "Focused on code quality through reusable component design, modularization, and best software engineering practices.",
      "Integrated secure checkout, optimized UX flows, and implemented SEO and accessibility standards.",
    ],
  },
];

// Organization Experience
export const organizationDetails = [
  {
    Position: "Lab Assistant",
    Organization: "Lab ICT Universitas Budi Luhur",
    Location: "Jakarta, Indonesia",
    Type: "Organization",
    Duration: "Aug 2021 - Jul 2022",
    Description: [
      "Maintained and troubleshot over 200 PCs, handling hardware repairs, software installations, and network setups.",
      "Supported lecturers and students with technical assistance, including software installations (e.g., Android Studio, VS Code, JDK, etc).",
      "Developed user guides and managed the lab's software repository, ensuring accessibility of updated tools.",
    ],
  },
  {
    Position: "Computer Lab Supervisor (Discipline and Assistant Recruitment)",
    Organization: "Lab ICT Universitas Budi Luhur",
    Location: "Jakarta, Indonesia",
    Type: "Organization",
    Duration: "Aug 2022 - Jul 2023",
    Description: [
      "Supervised 30 Lab Assistants, ensuring smooth operations across labs with diverse functionalities.",
      "Designed and managed an assistant recruitment process, including technical assessments and mentorship programs.",
      "Trained vocational students (PKL) in IT support, PC assembly, troubleshooting, and basic coding skills.",
      "Conducted regular audits to ensure compliance with technical and safety standards.",
    ],
  },
];

// Education
export const eduDetails = [
  {
    Position: "Bachelor of Computer Science",
    Company: "Universitas Budi Luhur",
    Location: "Jakarta, Indonesia",
    Type: "Full Time",
    Duration: "Sep 2020 - Nov 2024",
    Description: [
      "GPA 3.96/4.00",
      "Best graduate of Informatics Engineering Study Program 2024",
    ],
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  python: python,
  android: android,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  docker: docker,
  github: github,
  figma: figma,
};

// Project Details (unchanged, sample)
export const projectDetails = [
  {
    title: "Scancare MSIB Batch 4 Bangkit Academy",
    image: projectImage1,
    description: `ScanCare is an AI-powered skincare application designed to analyze 
    facial skin conditions and provide personalized skincare recommendations. It helps users understand 
    their skin type and offers solutions for common concerns like acne.`,
    techstack: "Android Studio, Kotlin",
    githubLink:
      "https://github.com/ScanCare-C23-PS023/ScanCare-mobile-development",
  },
  {
    title: "Integrated Performance Measurement System",
    image: projectImage2,
    description: `The Internal Project Management System (IPMS) is a web-based tool used by Telkomsel 
    to manage and monitor internal projects efficiently. The platform streamlines project tracking, team collaboration, 
    and reporting, ensuring smoother workflows and better visibility for project stakeholders.`,
    techstack: "HTML/CSS, JavaScript, ReactJS",
  },
  {
    title: "Thesis Project : Text Mining with KNN Algorithm",
    image: projectImage3,
    description: `This project, developed as part of my thesis, uses Python to create a web-based text mining 
    application for hate speech detection. By implementing the K-Nearest Neighbors (KNN) classification algorithm, 
    the system effectively identifies harmful language in textual data, contributing to digital content moderation.`,
    techstack: "HTML/CSS, Python, Flask",
    githubLink: "https://github.com/Maxisud/hate_speech.git",
  },
  {
    title: "PatunganAja",
    image: projectImage4,
    description: `This project was a collaborative effort with my university peers. PatunganAja is designed to enable users to 
    collectively contribute (patungan) with others to purchase digital products, making them more affordable for 
    everyone involved.`,
    techstack: "HTML/CSS, Typescript, Tailwind, Zustand, React-query",
    previewLink: "https://patunganaja.my.id",
  },
  {
    title: "Patricia AI",
    image: projectImage5,
    description: `Patricia AI is a web-based chatbot platform enabling users and businesses to access advanced AI chat (DeepSeek, ChatGPT, Gemini) through a unified interface. Features include member management and custom AI workflows for enhanced productivity.`,
    techstack: "Docker, python",
    previewLink: "https://patricia.patunganaja.id/",
  },
  {
    title: "Resume Builder",
    image: projectImage6,
    description: `This is project is for practice to be good at react state management`,
    techstack: "HTML/CSS, JavaScript, ReactJS",
    previewLink: "https://odin-cv-eight.vercel.app/",
    githubLink: "https://github.com/Maxisud/odin-cv",
  },
];

// Contact Details
export const contactDetails = {
  email: "ilhamzakariya14@gmail.com",
  phone: "+62895322279587",
};
