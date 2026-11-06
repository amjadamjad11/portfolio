export interface ProjectItem {
  id: string;
  title: string;
  categoryBadge: string;
  description: string;
  tags: string[];
  category: 'all' | 'frontend' | 'ecommerce' | 'interactive' | 'fullstack' | 'mobile' | 'backend';
  accentColor: string;
  iconName: 'sparkles' | 'shopping-cart' | 'activity' | 'glasses' | 'shield' | 'layers';
  imageUrl?: string;
  imagePath?: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  fullDetails?: {
    overview: string;
    features: string[];
    technicalHighlights: string[];
  };
}

export interface FreelanceClient {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  icon: 'truck' | 'zap' | 'cake';
  iconColor: string;
  bgColor: string;
  details: string;
  liveUrl?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: 'code' | 'palette' | 'shopping-bag' | 'sparkles' | 'database' | 'terminal';
  skills: string[];
}

export const DEVELOPER_PROFILE = {
  name: 'Mohammed Amjad K',
  shortName: 'Mohammed Amjad',
  role: 'Full Stack Developer & Data Scientist',
  specialty: 'Node.js, Flutter & Data Science Specialist',
  location: 'Bengaluru, Karnataka, India',
  email: 'amjadamjadkondeth@gmail.com',
  phone: '+91-7994767824',
  availableForHire: true,
  statusText: 'Available for Opportunities',
  portfolioGithubUrl: 'https://github.com/amjadkondeth',
  social: {
    github: 'https://github.com/amjadkondeth',
    linkedin: 'https://linkedin.com/in/amjadkondeth',
    instagram: 'https://instagram.com/amjadkondeth',
  },
  bio: 'Computer Science graduate with six months of professional experience building a CCTV-based attendance system at Zoople Technologies. Skilled in backend development, REST APIs, database-driven systems, and Flutter mobile apps using Node.js, Express.js, MongoDB, SQL, and Dart.',
  stats: [
    { label: 'PROJECTS BUILT', value: '4+' },
    { label: 'MONTHS EXPERIENCE', value: '6' },
    { label: 'TECH SKILLS', value: '10+' },
  ],
  education: {
    degree: 'B.Tech Computer Science & Engineering',
    college: 'MEA Engineering College, Kerala',
    university: 'APJ Abdul Kalam Technological University, Kerala',
    period: '2022 – 2026',
    communityLeadership: 'CGPA: 7.86/10 — Active participant in college tech events and CSE department activities.',
  },
  researchPublication: {
    title: 'CCTV-Based Smart Attendance System for Employee Monitoring',
    description: 'Developed an automated attendance recording system using camera monitoring to eliminate manual employee check-in at Zoople Technologies, Calicut.',
    journal: 'Professional Experience at Zoople Technologies',
    issn: 'Duration: 6 Months (2026)',
    scope: 'Computer Vision & Data Processing',
    link: '#publication-modal',
  },
  certificates: [
    { name: 'Full Stack Development (Node.js, Express, MongoDB)', provider: 'Self-Directed Learning' },
    { name: 'Flutter & Dart Mobile Development', provider: 'Project-Based Practice' },
    { name: 'REST API Design & Testing', provider: 'Postman & Node.js' },
    { name: 'Database Systems (MySQL, MongoDB Atlas)', provider: 'Hands-on Projects' },
  ],
  careerGoals: [
    {
      title: 'Full Stack Developer Role',
      desc: 'Securing a role at a product company to build scalable web and mobile applications.',
    },
    {
      title: 'Backend Engineering',
      desc: 'Deepening expertise in Node.js microservices, API architecture, and cloud deployment.',
    },
    {
      title: 'Mobile Development',
      desc: 'Expanding Flutter skills to ship production-grade cross-platform apps for real users.',
    },
  ],
  languages: ['English', 'Malayalam', 'Hindi'],
  interests: ['Backend Systems', 'Mobile Apps', 'Problem Solving', 'Gaming'],
};

export const CODE_SNIPPET = `const developer = {
  name: 'Mohammed Amjad K',
  role: 'Full Stack Developer & Data Scientist',
  location: 'Bengaluru, India',
  degree: 'B.Tech CSE (2022-2026)',
  college: 'MEA Engineering College',
  focus: ['Node.js', 'Flutter', 'Data Science', 'MongoDB', 'REST APIs'],
  availableForHire: true
};`;

export const TICKER_ITEMS = [
  'FULL STACK DEVELOPER',
  'DATA SCIENTIST',
  'NODE.JS & EXPRESS',
  'REST APIs & CRUD',
  'FLUTTER & DART',
  'MONGODB & FIREBASE',
  'PYTHON & SQL',
  'CCTV AUTOMATION',
  'PROBLEM SOLVING',
];

export const FREELANCE_CLIENTS: FreelanceClient[] = [
  {
    id: 'zoople',
    title: 'Zoople Technologies',
    subtitle: 'Data Scientist — CCTV Attendance Automation',
    type: 'AI & Computer Vision Project',
    icon: 'zap',
    iconColor: '#f87171',
    bgColor: 'rgba(239, 68, 68, 0.12)',
    details: 'Developed a CCTV-based employee attendance system to automate attendance recording through real-time camera monitoring, reducing manual effort significantly.',
  },
  {
    id: 'clinicflow',
    title: 'ClinicFlow Backend',
    subtitle: 'REST API & Database Engineering',
    type: 'Clinic Management Platform',
    icon: 'truck',
    iconColor: '#a855f7',
    bgColor: 'rgba(168, 85, 247, 0.12)',
    details: 'Architected a modular clinic-management backend with RESTful APIs, MongoDB data models, MVC controllers, and full CRUD operations for patient, doctor, and appointment management.',
  },
  {
    id: 'craveguard',
    title: 'CraveGuard App',
    subtitle: 'Flutter & Firebase Mobile App',
    type: 'Smoking Cessation Support App',
    icon: 'cake',
    iconColor: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.12)',
    details: 'Designed smoking-habit survey flows, craving support modules, habit tracking, money-saved visualizations, and location-based risk zone monitoring with Firebase real-time sync.',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core languages & scripting',
    icon: 'code',
    skills: ['JavaScript', 'Java', 'Python', 'C', 'SQL', 'Dart'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'APIs, servers & databases',
    icon: 'terminal',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'CRUD Operations', 'Routing', 'API Testing'],
  },
  {
    id: 'database',
    title: 'Databases',
    subtitle: 'Data modeling & persistence',
    icon: 'database',
    skills: ['MongoDB', 'MongoDB Atlas', 'MySQL', 'Firebase'],
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    subtitle: 'UI & cross-platform apps',
    icon: 'palette',
    skills: ['HTML', 'CSS', 'JavaScript', 'Flutter', 'Android Studio'],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    subtitle: 'Development & workflow tools',
    icon: 'sparkles',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Android Studio'],
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'clinicflow',
    title: 'ClinicFlow',
    categoryBadge: 'Backend API',
    category: 'fullstack',
    accentColor: '#ec4899',
    iconName: 'shield',
    description:
      'A modular clinic-management backend with REST APIs, structured data models, MVC controllers, and routing layers. Full CRUD operations for patient, doctor, and appointment management.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    metrics: 'Full CRUD API + MongoDB Atlas',
    githubUrl: 'https://github.com/amjadkondeth/clinicflow',
    fullDetails: {
      overview:
        'ClinicFlow is a backend-first clinic management platform built with a RESTful architecture, designed to handle multi-entity CRUD operations for patients, doctors, and appointments.',
      features: [
        'RESTful API endpoints for patients, doctors, and appointments',
        'MongoDB Atlas cloud database with structured data models',
        'MVC architecture with dedicated controllers and route layers',
        'Input validation and error handling on all endpoints',
      ],
      technicalHighlights: [
        'Express.js router modularization for scalable endpoint management',
        'Mongoose ODM schemas with relationships and validations',
        'Postman-tested HTTP endpoints with structured JSON responses',
      ],
    },
  },
  {
    id: 'location-safety',
    title: 'Flutter Location Safety App',
    categoryBadge: 'Mobile App',
    category: 'fullstack',
    accentColor: '#a855f7',
    iconName: 'sparkles',
    description:
      'A cross-platform mobile app with secure user authentication, real-time map-based location tracking, and geographic safety zone monitoring with continuous background location updates.',
    tags: ['Flutter', 'Dart', 'Location APIs', 'Maps'],
    metrics: 'Real-Time GPS + Safety Zones',
    githubUrl: 'https://github.com/amjadkondeth/location-safety-app',
    fullDetails: {
      overview:
        'A Flutter-based safety application providing real-time GPS tracking, geographic fence alerts, and location-based monitoring to enhance personal safety.',
      features: [
        'Secure authentication with session management',
        'Real-time map-based location tracking',
        'Geographic safety zone definition and monitoring',
        'Background location updates with push alerts',
      ],
      technicalHighlights: [
        'Dart async/await for non-blocking location stream processing',
        'Platform-specific permissions handling for iOS and Android',
        'Custom map overlay for safety zone visualization',
      ],
    },
  },
  {
    id: 'craveguard',
    title: 'CraveGuard',
    categoryBadge: 'Mobile App',
    category: 'fullstack',
    accentColor: '#06b6d4',
    iconName: 'activity',
    description:
      'A smoking cessation support app with habit tracking, craving support modules, money-saved visualizations, and location-based risk zone monitoring powered by Firebase real-time sync.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Location Services'],
    metrics: 'Firebase Real-Time + Location Alerts',
    githubUrl: 'https://github.com/amjadkondeth/craveguard',
    fullDetails: {
      overview:
        'CraveGuard is a behavior-change mobile app that supports users in quitting smoking through data-driven habit tracking, craving management, and location-based risk awareness.',
      features: [
        'Smoking-habit survey onboarding flow',
        'Daily craving support and habit streak tracking',
        'Money-saved and health-progress visualizations',
        'Location-based high-risk zone alerts',
      ],
      technicalHighlights: [
        'Firebase Firestore for real-time habit and progress data sync',
        'Flutter geolocator for continuous background location monitoring',
        'Custom chart widgets for progress and savings visualization',
      ],
    },
  },
  {
    id: 'cctv-attendance',
    title: 'CCTV Smart Attendance',
    categoryBadge: 'AI System',
    category: 'fullstack',
    accentColor: '#f59e0b',
    iconName: 'glasses',
    description:
      'An automated employee attendance system using CCTV-based camera monitoring to eliminate manual check-in. Built at Zoople Technologies with data processing, debugging, and system validation.',
    tags: ['Camera Monitoring', 'Data Processing', 'Automation', 'Python'],
    metrics: 'Automated Attendance Recording',
    fullDetails: {
      overview:
        'A professional attendance automation system developed at Zoople Technologies that leverages CCTV camera feeds to identify and record employee attendance without manual intervention.',
      features: [
        'CCTV feed integration for real-time employee monitoring',
        'Automated attendance recording and timestamping',
        'Data processing pipeline for attendance analytics',
        'System validation and debugging workflows',
      ],
      technicalHighlights: [
        'Camera monitoring pipeline with frame-by-frame processing',
        'Attendance data storage and query optimization',
        'Debugging and testing methodology for edge cases in monitoring',
      ],
    },
  },
];
