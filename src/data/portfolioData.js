import {
  FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
  FaLinkedin, FaTwitter, FaEnvelope, FaDatabase, FaServer,
  FaCode, FaTools, FaMobileAlt, FaRoute, FaAward, FaCalendarAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import {
  SiSpringboot, SiHibernate, SiMysql, SiJavascript,
  SiPostman, SiIntellijidea, SiTailwindcss, SiVite,
  SiNetlify, SiExpo, SiEclipseide, SiApachemaven
} from 'react-icons/si';

/* ─────────────── Personal Info ─────────────── */
export const personalInfo = {
  name: 'Sahil Madhukar Bhendarkar',
  firstName: 'Sahil',
  lastName: 'Bhendarkar',
  roles: [
    'Full Stack Java Developer',
    'Spring Boot Developer',
    'React.js Developer',
    'Java Backend Engineer',
    'REST API Developer',
  ],
  tagline: 'Crafting Scalable Full Stack Applications with Java, Spring Boot & React.js',
  bio: `I’m Sahil Bhendarkar, a Full Stack Java Developer skilled in building modern web and mobile applications using Java, Spring Boot, React.js, MySQL, and REST APIs. I enjoy creating scalable backend systems and responsive frontend experiences with clean architecture and modern UI/UX.`,
  email: 'sahilbhendarkar19@gmail.com',
  phone: '+91-9356595332',
  location: 'Nagpur, Maharashtra, India',
  resumeUrl: '/Sahil_Resume.pdf',
  social: {
    github: 'https://github.com/SahilBhendarkar',
    linkedin: 'https://linkedin.com/in/sahil-bhendarkar-b36905282',
    email: 'mailto:sahilbhendarkar19@gmail.com',
  },
};

/* ─────────────── Navigation ─────────────── */
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

/* ─────────────── Statistics ─────────────── */
export const stats = [
  { label: 'Projects Completed', value: 5, suffix: '' },
  { label: 'Technologies', value: 15, suffix: '+' },
  { label: 'GitHub Contributions', value: 140, suffix: '+' },
  { label: 'CGPA B.Tech', value: 8.4, suffix: '/10' },
];

/* ─────────────── Skills ─────────────── */
export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    icon: FaReact,
    skills: [
      { name: 'React.js', icon: FaReact, level: 90, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, level: 85, color: '#F7DF1E' },
      { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: '#06B6D4' },
      { name: 'React Native', icon: FaMobileAlt, level: 80, color: '#61DAFB' },
      { name: 'Expo', icon: SiExpo, level: 80, color: '#ffffff' },
      { name: 'React Navigation', icon: FaRoute, level: 80, color: '#7B1FA2' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: FaServer,
    skills: [
      { name: 'Java', icon: FaJava, level: 90, color: '#ED8B00' },
      { name: 'Spring Boot', icon: SiSpringboot, level: 90, color: '#6DB33F' },
      { name: 'Hibernate', icon: SiHibernate, level: 85, color: '#59666C' },
      { name: 'REST APIs', icon: FaServer, level: 90, color: '#6366F1' },
      { name: 'OOP Concepts', icon: FaCode, level: 90, color: '#34D399' },
      { name: 'JWT Auth', icon: FaCode, level: 85, color: '#FB7185' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: FaDatabase,
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 85, color: '#4479A1' },
      { name: 'SQL & Queries', icon: FaDatabase, level: 85, color: '#F59E0B' },
      { name: 'CRUD Workflows', icon: FaDatabase, level: 90, color: '#10B981' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Utilities',
    icon: FaTools,
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 85, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, level: 90, color: '#ffffff' },
      { name: 'Postman', icon: SiPostman, level: 85, color: '#FF6C37' },
      { name: 'Maven', icon: SiApachemaven, level: 80, color: '#C71A36' },
      { name: 'Netlify', icon: SiNetlify, level: 85, color: '#00C4B6' },
      { name: 'IntelliJ IDEA', icon: SiIntellijidea, level: 90, color: '#FC801D' },
      { name: 'Eclipse IDE', icon: SiEclipseide, level: 80, color: '#2C2255' },
      { name: 'VS Code', icon: FaCode, level: 90, color: '#007ACC' },
    ],
  },
];

/* ─────────────── Projects ─────────────── */
export const projects = [
  {
    id: 1,
    title: 'Hospital Management System',
    shortDesc: 'A comprehensive full-stack web application designed to streamline patient registration, doctor management, and appointment scheduling.',
    fullDesc: `Developed and deployed a full-stack Hospital Management System using React.js, Spring Boot, REST APIs, and MySQL to streamline patient registration, doctor management, and appointment scheduling workflows. Designed and integrated secure RESTful APIs with JWT-based authentication and role-based access control for protected application workflows. Implemented CRUD operations with MySQL and optimized SQL queries using JDBC for efficient backend data management and API performance.`,
    techStack: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'JWT Authentication'],
    features: [
      'Patient Management',
      'Doctor Management',
      'Appointment Scheduling',
      'JWT Authentication',
      'Role-Based Access',
      'REST API Integration',
    ],
    liveUrl: 'https://hospital-management-appp.netlify.app',
    githubUrl: 'https://github.com/SahilBhendarkar/hospital-management',
    category: 'Full Stack Web',
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'Hospital Management Mobile App',
    shortDesc: 'A cross-platform mobile application developed using React Native (Expo) featuring secure REST API integration and role-based access.',
    fullDesc: `Developed a cross-platform mobile application using React Native (Expo) for Android and iOS platforms with secure REST API integration. Implemented JWT-based authentication, protected navigation workflows, and role-based access control using React Navigation. Integrated backend APIs with Spring Boot and MySQL to support healthcare management workflows and real-time data handling.`,
    techStack: ['React Native', 'Expo', 'REST APIs', 'JWT Authentication', 'React Navigation', 'Spring Boot', 'MySQL'],
    features: [
      'Cross Platform App',
      'JWT Authentication',
      'Protected Navigation',
      'REST API Integration',
      'Real-Time Data Handling',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/SahilBhendarkar',
    category: 'Cross-Platform Mobile',
    color: '#3b82f6',
  },
  {
    id: 3,
    title: 'MediOptiSOS',
    shortDesc: 'A location-based pharmacy discovery and medicine inventory lookup platform integrated with Google Maps.',
    fullDesc: `Developed a location-based medicine search platform using Google Maps API and MySQL for pharmacy discovery and inventory lookup workflows. Built backend APIs and integrated database workflows for medicine inventory management and location-based search functionality. Implemented SEO optimization techniques to improve application visibility and search engine indexing.`,
    techStack: ['Java', 'React.js', 'MySQL', 'Google Maps API', 'REST APIs'],
    features: [
      'Nearby Pharmacy Finder',
      'Medicine Inventory Search',
      'Google Maps Integration',
      'Location-Based Search',
      'SEO Optimization',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/SahilBhendarkar',
    category: 'Location-Based Web',
    color: '#8b5cf6',
  },
  {
    id: 4,
    title: 'Emma Event Management System',
    shortDesc: 'A modern event scheduling and booking platform enabling creation, tracking, and RSVP management.',
    fullDesc: `Developed a modern event management platform that allows users to create, manage, and RSVP to events. Implemented responsive UI design, backend APIs, and database integration for efficient event handling workflows. Integrated modern frontend architecture with secure backend functionality and dynamic event management features.`,
    techStack: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs'],
    features: [
      'Event Creation',
      'RSVP System',
      'Event Management',
      'Responsive UI',
      'REST APIs',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/SahilBhendarkar',
    category: 'Full Stack Web',
    color: '#ec4899',
  },
  {
    id: 5,
    title: 'E-Commerce Platform',
    shortDesc: 'Full stack online shopping store with complete catalogs, cart systems, and responsive user layout modules.',
    fullDesc: `Developed a modern e-commerce platform with product listings, shopping cart functionality, authentication, and responsive design. Implemented backend APIs, database integration, and dynamic frontend components for seamless user experience.`,
    techStack: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
    features: [
      'Product Listings',
      'Shopping Cart',
      'Authentication',
      'Responsive Design',
      'Backend APIs',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/SahilBhendarkar',
    category: 'Full Stack Web',
    color: '#10b981',
  },
];

/* ─────────────── Experience / Internships ─────────────── */
export const experiences = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'GTasterix IT Services Pvt. Ltd.',
    location: 'Pune, Maharashtra',
    duration: 'Oct 2025 – Feb 2026',
    description: [
      'Developed full-stack web and mobile applications using Java, Spring Boot, React.js, REST APIs, and MySQL following Agile development practices.',
      'Implemented secure JWT-based authentication and role-based access control for protected application workflows.',
      'Built and optimized CRUD operations with MySQL integration, improving backend data handling and API performance.',
      'Performed API integration, debugging, testing, and issue resolution across frontend and backend modules.',
      'Managed project dependencies and build workflows using Maven during backend development and API integration.',
      'Collaborated in code reviews, sprint planning, and technical discussions within cross-functional development teams.',
    ],
    techUsed: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'JWT', 'Maven', 'Git'],
  },
  {
    id: 2,
    role: 'Software Developer Intern',
    company: 'Asterisc Technocrat Pvt. Ltd.',
    location: 'Nagpur, Maharashtra',
    duration: 'Jul 2024 – Jan 2025',
    description: [
      'Worked on Java-based application development using Spring Boot, REST APIs, Servlets, and MySQL.',
      'Developed and tested RESTful APIs using Postman and performed debugging using IntelliJ IDEA and Eclipse IDE.',
      'Applied object-oriented programming concepts including inheritance, encapsulation, polymorphism, and abstraction in Java projects.',
      'Contributed to frontend-backend integration and feature development within Agile sprint cycles.',
    ],
    techUsed: ['Java', 'Spring Boot', 'REST APIs', 'Servlets', 'MySQL', 'Postman', 'IntelliJ IDEA', 'Eclipse IDE'],
  },
];

/* ─────────────── Education Timeline ─────────────── */
export const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'RTMNU KDK College of Engineering',
    duration: '2021 – 2024',
    grade: 'CGPA: 8.44/10',
  },
  {
    id: 2,
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Chhatrapati Shivaji Preparatory Jr. College',
    duration: '2020',
    grade: 'Percentage: 68%',
  },
  {
    id: 3,
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Alphonsa Sr. Sec. School',
    duration: '2018',
    grade: 'Percentage: 76%',
  },
];

/* ─────────────── Achievements ─────────────── */
export const achievements = [
  {
    id: 1,
    title: 'Sports Head – PICSEL Committee',
    description: 'Coordinated sports event planning, scheduling, and team management for college-level activities.',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'Version Control Master',
    description: 'Worked with Git and GitHub for version control, branching, merging, and collaborative development workflows.',
    icon: '💻',
  },
  {
    id: 3,
    title: 'Agile & Scrum Practices',
    description: 'Participated in Agile/Scrum ceremonies including sprint planning, standups, and retrospective meetings during professional experience.',
    icon: '⚡',
  },
];

export const achievementStats = [
  { label: 'B.Tech CGPA', value: 8.44, icon: '🎓' },
  { label: 'Projects Built', value: 6, icon: '🚀' },
  { label: 'Agile Months', value: 9, icon: '📅' },
  { label: 'Git Repos', value: 10, icon: '⭐' },
];

/* ─────────────── EmailJS Config (Replace with your own) ─────────────── */
export const emailjsConfig = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
};
