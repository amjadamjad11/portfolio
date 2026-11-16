export interface ProjectItem {
  id: string;
  title: string;
  categoryBadge: string;
  description: string;
  tags: string[];
  category: Array<'frontend' | 'ecommerce' | 'interactive' | 'fullstack' | 'mobile' | 'backend'>;
  accentColor: string;
  iconName: 'sparkles' | 'shopping-cart' | 'activity' | 'glasses' | 'shield' | 'layers' | 'brain' | 'calendar' | 'cpu';
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
  icon: 'truck' | 'zap' | 'cake' | 'cpu';
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
  shortName: 'Mohammed Amjad K',
  role: 'Full Stack Developer & Data Scientist',
  specialty: 'Node.js, Flutter & Data Science Specialist',
  location: 'Bengaluru, Karnataka, India',
  email: 'amjadamjadkondeth@gmail.com',
  phone: '+91-7994767824',
  availableForHire: true,
  statusText: 'Available for Opportunities',
  portfolioGithubUrl: 'https://github.com/amjadamjad11',
  social: {
    github: 'https://github.com/amjadamjad11',
    linkedin: 'https://www.linkedin.com/in/mohammed-amjad-k/',
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
    title: 'NeuroLex – Dyslexia Support System',
    description: 'Developed an interactive web-based dyslexia support platform featuring a 45-question adaptive assessment to evaluate key cognitive and language-related domains, identify potential dyslexia risk, and provide personalized learning insights.',
    journal: 'IEEE Publication',
    issn: 'See Official IEEE Publication',
    scope: 'Artificial Intelligence, Dyslexia Assessment & Educational Technology',
    link: 'https://ieeexplore.ieee.org/document/11712595',
  },
  certificates: [
    { name: 'Full Stack Development (Node.js, Express, MongoDB)', provider: 'Self-Directed Learning' },
    { name: 'Flutter & Dart Mobile Development', provider: 'Project-Based Practice' },
    { name: 'REST API Design & Testing', provider: 'Postman & Node.js' },
    { name: 'Database Systems (MySQL, MongoDB Atlas)', provider: 'Hands-on Projects' },
  ],
  careerGoals: [
    {
      title: 'Data Scientist / AI-ML Engineer',
      desc: 'Building intelligent solutions using machine learning, deep learning, data analysis, and AI to solve real-world problems.',
    },
    {
      title: 'Full Stack Developer Role',
      desc: 'Securing a role at a product company to build scalable web and mobile applications.',
    },
    {
      title: 'Backend Engineering',
      desc: 'Deepening expertise in Node.js, RESTful APIs, database architecture, and cloud deployment.',
    },
    {
      title: 'Mobile Development',
      desc: 'Expanding Flutter skills to develop production-ready cross-platform applications.',
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
    subtitle: 'AI Developer – CCTV Attendance Automation',
    type: 'AI & Computer Vision',
    icon: 'zap',
    iconColor: '#f87171',
    bgColor: 'rgba(239, 68, 68, 0.12)',
    details: 'Developed an AI-powered CCTV attendance system to automate student and staff attendance recording using computer vision and camera monitoring.',
  },
  {
    id: 'furniture-ai',
    title: 'Furniture Recommendation AI',
    subtitle: 'Data Science & AI Engineering',
    type: 'Hybrid Multimodal Recommendation Engine',
    icon: 'cpu',
    iconColor: '#22d3ee',
    bgColor: 'rgba(34, 211, 238, 0.12)',
    details: 'Built a multimodal product search and recommendation engine combining NLP, computer vision, collaborative filtering, and semantic similarity to deliver personalized furniture recommendations.',
  },
  {
    id: 'clinicflow',
    title: 'ClinicFlow Backend',
    subtitle: 'REST API & Database Engineering',
    type: 'Clinic Management Platform',
    icon: 'truck',
    iconColor: '#a855f7',
    bgColor: 'rgba(168, 85, 247, 0.12)',
    details: 'Developing backend services, REST APIs, authentication, and database architecture for a clinic management platform.',
  },
  {
    id: 'craveguard',
    title: 'CraveGuard App',
    subtitle: 'Flutter & Firebase Mobile App',
    type: 'Smoking Cessation Support App',
    icon: 'cake',
    iconColor: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.12)',
    details: 'Developing a mobile application focused on smoking cessation with tracking, location-based insights, and AI-powered support.',
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
    category: ['fullstack', 'backend', 'frontend'],
    accentColor: '#ec4899',
    iconName: 'shield',
    description: 'A modular clinic-management backend with REST APIs, structured data models, MVC controllers, and routing layers. Full CRUD operations for patient, doctor, and appointment management.',
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
    category: ['fullstack', 'mobile', 'backend', 'frontend'],
    accentColor: '#a855f7',
    iconName: 'sparkles',
    description: 'with secure user authentication, real-time map-based location tracking, and geographic safety zone monitoring with continuous background location updates.',
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
    category: ['mobile', 'backend'],
    accentColor: '#06b6d4',
    iconName: 'activity',
    description: 'with habit tracking, craving support modules, money-saved visualizations, and location-based risk zone monitoring powered by Firebase real-time sync.',
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
    category: ['fullstack', 'backend', 'frontend'],
    accentColor: '#f59e0b',
    iconName: 'glasses',
    description: 'using CCTV-based camera monitoring to eliminate manual check-in. Built at Zoople Technologies with data processing, debugging, and system validation.',
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
  {
    id: 'neurolex',
    title: 'NeuroLex – Web-Based Dyslexia Support and Assessment Platform',
    categoryBadge: 'IEEE Published',
    category: ['frontend', 'backend'],
    accentColor: '#6366f1',
    iconName: 'brain',
    description: 'featuring a 45-question adaptive assessment covering five key domains: phonological awareness, rapid automatized naming (RAN), reading fluency, orthographic processing, and working memory. Evaluates responses to identify potential risk patterns and provides personalized learning insights.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Adaptive Assessment Logic'],
    metrics: 'IEEE Published · 45-Question Adaptive Assessment',
    liveUrl: 'https://ieeexplore.ieee.org/document/11712595',
    fullDetails: {
      overview:
        'NeuroLex is a web-based dyslexia support platform designed to assist in the early identification of potential dyslexia-related learning difficulties. It features a 45-question adaptive assessment covering five key cognitive and language domains.',
      features: [
        '45-question adaptive assessment interface',
        'Five-domain evaluation: phonological awareness, RAN, reading fluency, orthographic processing, working memory',
        'Potential dyslexia risk pattern identification',
        'Personalized learning insights generation',
        'Interactive web-based assessment interface',
      ],
      technicalHighlights: [
        'Adaptive assessment logic with dynamic question flow',
        'Domain-wise scoring and risk evaluation engine',
        'Responsive web interface built with vanilla HTML5, CSS3, and JavaScript',
      ],
    },
  },
  {
    id: 'turf-billing',
    title: 'Turf Billing System – Turf Booking and Billing Management Application',
    categoryBadge: 'Mobile App',
    category: ['mobile', 'backend'],
    accentColor: '#10b981',
    iconName: 'calendar',
    description: ' billing management application designed to simplify the daily operations of sports turf facilities.Streamlines turf reservations, scheduling, customer management, and automated billing to reduce manual operations.',
    tags: ['Flutter', 'Dart'],
    metrics: 'Automated Booking & Billing',
    fullDetails: {
      overview:
        'A mobile application built to manage turf facility operations including reservations, scheduling, customer management, and automated billing — reducing manual overhead for sports facility owners.',
      features: [
        'Turf booking and reservation management',
        'Booking schedule management',
        'Customer information management',
        'Automated billing',
        'Payment and booking status management',
        'Mobile-friendly interface',
      ],
      technicalHighlights: [
        'Flutter cross-platform mobile development with Dart',
        'Booking state management and scheduling logic',
        'Automated billing calculation and status tracking',
      ],
    },
  },
  {
    id: 'furniture-ai',
    title: 'FurnitureRecommendationAI – Hybrid Multimodal Product Search and Recommendation Engine',
    categoryBadge: 'AI/ML Project',
    category: ['fullstack', 'backend', 'frontend'],
    accentColor: '#f97316',
    iconName: 'cpu',
    description: 'using the Amazon Reviews 2023 Home & Kitchen dataset. Combines collaborative filtering, NLP, and computer vision with text and image embeddings, semantic similarity, and AI-based preference extraction for personalized furniture recommendations.',
    tags: ['Python', 'PyTorch', 'DistilBERT', 'ResNet-50', 'Mistral', 'Streamlit'],
    metrics: '~30K Products · 187K+ Images · Amazon 2023 Dataset',
    fullDetails: {
      overview:
        'A hybrid multimodal product search and recommendation engine built using the Amazon Reviews 2023 Home & Kitchen dataset. The system combines collaborative filtering, NLP, and computer vision to deliver relevant and personalized furniture recommendations.',
      features: [
        'Hybrid recommendation combining collaborative and content-based signals',
        'Multimodal product understanding using text and images',
        'Semantic search using natural-language queries',
        'AI-based user preference extraction',
        'Image captioning for product understanding',
        'Price and customer-rating filtering',
        'Product ranking using normalized weighted scores',
        'Large-scale product catalog processing (~30K products, 187K+ images)',
      ],
      technicalHighlights: [
        'ALS (Alternating Least Squares) for collaborative filtering',
        'Sentence Transformers (MiniLM) and DistilBERT for text embeddings',
        'ResNet-50 for visual feature extraction',
        'BLIP for image captioning',
        'Mistral for AI-based preference extraction',
        'CUDA / GPU acceleration for large-scale processing',
        'Streamlit dashboard for interactive search and recommendations',
      ],
    },
  },
];
