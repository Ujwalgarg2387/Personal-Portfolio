// ─── UJWAL GARG — PORTFOLIO DATA ────────────────────────────────────────────

export const personal = {
  name: 'Ujwal Garg',
  title: 'Full Stack Software Developer',
  tagline: 'Building scalable web & mobile applications with clean architecture, RESTful APIs, and a strong CS foundation.',
  email: 'ujwalgarg2387@gmail.com',
  phone: '+91-8171384868',
  location: 'Noida, Uttar Pradesh, India',
  github: 'https://github.com/UjwalGarg2387',
  linkedin: 'https://www.linkedin.com/in/ujwal-garg-449974198',
  twitter: '',
  resume: 'https://drive.google.com/file/d/1wl4NEyvoJ9qgT0EwcFBU5hqG2HNL_vcT/view?usp=sharing',
  bio: `Software Engineer with 1.5+ year of experience in full-stack development using Java, Spring Boot, Python, Flutter,
    and React.js. I build scalable web and mobile applications, design RESTful APIs, and manage SQL
    databases — backed by a strong foundation in computer science, software architecture, and problem-solving.`,
  bio2: `Currently working as a Backend Developer at CliQ India Pvt Ltd, where I design Spring Boot APIs, model
    relational databases, and integrate cloud-hosted AI services using Python and Azure. I enjoy writing
    clean, maintainable code and collaborating across teams to ship features end-to-end.`,
  avatar: 'https://ui-avatars.com/api/?name=Ujwal+Garg&background=00d9cc&color=fff&size=128',
};

export const stats = [
  { label: 'Years Experience', value: '1.5+' },
  { label: 'Projects Built', value: '10+' },
  { label: 'Tech Stack', value: '15+' },
  { label: 'Certifications', value: '6+' },
];

export const skills = {
  backend: [
    { name: 'Java / Spring Boot', level: 80 },
    { name: 'Python (Core Fundamentals)', level: 80 },
    { name: 'RESTful API Design', level: 88 },
    { name: 'PostgreSQL / MySQL / Database Design', level: 82 },
    { name: 'Firebase / Supabase', level: 74 },
  ],
  frontend: [
    { name: 'React.js', level: 82 },
    { name: 'Javascript', level: 65 },
    { name: 'HTML / CSS', level: 88 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Material UI', level: 75 },
  ],
  devops: [
    { name: 'Git / GitHub', level: 88 },
    { name: 'Azure (Cloud Hosting)', level: 68 },
    { name: 'Postman / API Testing', level: 85 },
    { name: 'Docker', level: 50 },
    { name: 'JWT / Auth Systems', level: 80 },
  ],
  other: [
    'DSA', 'OOP', 'DBMS', 'OS',
    'Machine Learning Basics', 'Database Design',
    'Spring Boot', 'REST APIs', 'SQL Databases',
    'Agile', 'Microservices', 'CI/CD Concepts',
  ],
};

export const projects = [
  {
    id: 1,
    title: 'SquadMatch — Gamers Matchmaking Platform',
    description: 'Full-stack matchmaking platform enabling players to find teammates based on game, role, and skill level. Implemented swipe-based matching with mutual likes, premium filters, and dynamic user profiles with real-time interaction.',
    tech: ['Supabase', 'PostgreSQL', 'Authentication', 'Real-time APIs', 'Vite + React.js', 'Tailwind CSS', 'Razorpay'],
    github: 'https://github.com/Ujwalgarg2387/SquadMatch',
    live: 'https://github.com/Ujwalgarg2387/SquadMatch',
    featured: true,
    color: '#ff4d6d',
    icon: '🎮',
    year: '2025',
  },
  {
    id: 2,
    title: 'Ecommerce Platform',
    description: 'Full-stack e-commerce site with product discovery, search, cart, checkout, favorites, payment integration, and order tracking. JWT + OTP auth with role-based access control and scalable order management.',
    tech: ['Vite + React.js', 'Java', 'Spring Boot', 'PostgreSQL', 'JWT Auth', 'Material UI', 'Tailwind CSS'],
    github: 'https://github.com/Ujwalgarg2387/Ecommerce-Website',
    live: 'https://github.com/Ujwalgarg2387/Ecommerce-Website',
    featured: true,
    color: '#0066ff',
    icon: '🛒',
    year: '2025',
  },
  {
    id: 3,
    title: 'NexChat',
    description: 'Full-stack real-time chat app with 1-on-1 and group conversations, live typing indicators, online presence, and file sharing. Messages are encrypted with AES-256-GCM before storage, backed by a Spring Boot REST API and WebSocket (STOMP) for live communication.',
    tech: ['React.js', 'Spring Boot', 'MongoDB', 'WebSockets', 'Tailwind CSS', 'JWT Auth', 'AES-256-GCM'],
    github: 'https://github.com/Ujwalgarg2387/NexChat',
    live: 'https://github.com/Ujwalgarg2387/NexChat',
    featured: true,
    color: '#00b4d8',
    icon: '💬',
    year: '2026',
  },
  {
    id: 4,
    title: 'Panditjee — Spiritual Platform',
    description: 'Full-stack platform for online puja booking, astrology consultations, and live video sessions connecting users with verified spiritual experts. Java Spring Boot backend + Flutter frontend + Python/Llama AI service on Azure.',
    tech: ['Java', 'Spring Boot', 'Flutter', 'Python', 'Azure', 'PostgreSQL', 'GetX', 'REST APIs', 'JWT Auth', 'Llama LLM'],
    github: null,
    live: null,
    featured: true,
    color: '#00d9cc',
    icon: '🙏',
    year: '2026',
  },
  {
    id: 5,
    title: 'Agriculture Crop Predictor',
    description: 'ML model recommending the most suitable crop based on climatic and soil conditions (N, P, pH, rainfall, humidity, temperature). Achieved 96% accuracy — 10% above baseline — using fine-tuned classification algorithms.',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'React.js', 'HTML', 'CSS'],
    github: 'https://github.com/Ujwalgarg2387/Agriculture-Crop-Predictor',
    live: 'https://github.com/Ujwalgarg2387/Agriculture-Crop-Predictor',
    featured: false,
    color: '#5dab7a',
    icon: '🌾',
    year: '2023',
  },
  {
    id: 6,
    title: 'Custom Blob Generator',
    description: 'Interactive web app to generate and customize blobs with dynamic shapes, colors, gradients, opacity, randomness, and complexity — all with real-time preview. Built with React Context API for state management.',
    tech: ['React.js', 'Vite', 'Chakra UI', 'Tailwind CSS', 'React Context API', 'HTML', 'CSS'],
    github: 'https://github.com/Ujwalgarg2387/Custom-Blob-Generator',
    live: 'https://ujwalgarg-custom-blob-generator.netlify.app/',
    featured: false,
    color: '#ff6b35',
    icon: '🫧',
    year: '2024',
  }
];

export const education = [
  {
    degree: 'B.E. Computer Science (AIML)',
    institution: 'Chandigarh University',
    year: '2019 – 2023',
    gpa: '7.77 / 10',
    highlights: [
      'Specialisation in Artificial Intelligence & Machine Learning',
      'Projects in ML, DBMS, OS, and Software Engineering Principles',
      'Jumpstart Publicis Sapient Campus Quiz — Participant 2022',
      'Strong foundation in DSA, OOP, and System Design',
    ],
    icon: '🎓',
  },
  {
    degree: 'High School + Intermediate (CBSE)',
    institution: 'Army Public School 1, Roorkee',
    year: '2018 – 2019',
    gpa: '9.43 / 10',
    highlights: [
      'Science stream with Mathematics & Computer Science',
      'CGPA 9.43 — among top performers in school',
      'TATA Crucible Campus Quiz — Participant 2024',
    ],
    icon: '📚',
  }
];

export const experience = [
  {
    role: 'Backend Developer',
    company: 'CliQ India Pvt. Ltd.',
    period: 'March 2025 – Present',
    bullets: [
      'Designed and developed RESTful APIs using Java Spring Boot for user authentication, session scheduling, and service management modules',
      'Created scalable database schemas and entity mappings to manage users, bookings, payments, and service details efficiently',
      'Built a Python-based AI service integrated with the Llama LLM on Azure, using prompt engineering and external APIs for astrology-related queries',
      'Developed and maintained the Flutter frontend with GetX state management and secure API integration for a smooth mobile UX',
      'Collaborated end-to-end ensuring consistent data flow between Flutter frontend, Java backend, and Python AI services',
    ],
    color: '#00d9cc',
  },
  {
    role: 'Software Developer Intern',
    company: 'Debug Solutions Pvt. Ltd.',
    period: 'April 2024 – July 2024',
    bullets: [
      'Designed and implemented automated Python scripts for data extraction from complex business websites — boosting retrieval efficiency by 30%',
      'Built reusable navigation logic across 50+ subcategories, significantly improving code maintainability',
      'Organised and stored 10,000+ extracted data entries for downstream analysis and business applications',
    ],
    color: '#0066ff',
  },
  {
    role: 'Data Science and Business Analytics Intern',
    company: 'The Sparks Foundation',
    period: 'September 2023 – October 2023',
    bullets: [
      'Built and trained a classification model on the Iris dataset using Python and Scikit-learn, achieving 96% accuracy in species prediction',
      'Developed a customer churn classification project applying Logistic Regression and Random Forest, improving prediction accuracy by 20%',
      'Performed exploratory data analysis (EDA) and data visualisation on business datasets using Pandas and Matplotlib to derive actionable insights',
    ],
    color: '#00c896',
  }
];

// ─── TERMINAL COMMANDS ───────────────────────────────────────────────────────
export const terminalCommands = {
  help: {
    output: [
      { text: '╔══════════════════════════════════════════╗', type: 'info' },
      { text: '║      AVAILABLE COMMANDS               ║', type: 'info' },
      { text: '╚══════════════════════════════════════════╝', type: 'info' },
      { text: '', type: 'output' },
      { text: '  about          →  About me', type: 'success' },
      { text: '  skills         →  Technical skills', type: 'success' },
      { text: '  projects       →  View my projects', type: 'success' },
      { text: '  education      →  Education & certifications', type: 'success' },
      { text: '  experience     →  Work experience', type: 'success' },
      { text: '  contact-info   →  Contact details', type: 'success' },
      { text: '  view-resume    →  Open resume PDF', type: 'success' },
      { text: '  social         →  Social media links', type: 'success' },
      { text: '  whoami         →  Quick intro', type: 'success' },
      { text: '  achievements   →  Competitions & awards', type: 'success' },
      { text: '  clear          →  Clear terminal', type: 'success' },
      { text: '', type: 'output' },
      { text: '  Type any command and press Enter ↵', type: 'output' },
    ],
  },
  whoami: {
    output: [
      { text: '> Ujwal Garg', type: 'success' },
      { text: '> Full Stack Software Developer', type: 'info' },
      { text: '> India  ·  1+ Year Experience', type: 'output' },
      { text: '> Java · Python · React.js · Flutter · Spring Boot', type: 'output' },
    ],
  },
  about: {
    output: [
      { text: '── About Ujwal Garg ────────────────────────', type: 'info' },
      { text: '', type: 'output' },
      { text: '  Software Engineer with 1+ year of experience', type: 'output' },
      { text: '  in full-stack dev using Java, Python, Flutter,', type: 'output' },
      { text: '  React.js, Spring Boot, and Azure cloud services.', type: 'output' },
      { text: '', type: 'output' },
      { text: '  📍  India', type: 'output' },
      { text: '  💼  Backend Developer @ CliQ India (current)', type: 'output' },
      { text: '  🎓  B.E. CS (AIML) — Chandigarh University', type: 'output' },
      { text: '  🚀  Open to new opportunities', type: 'output' },
    ],
  },
  skills: {
    output: [
      { text: '── Technical Skills ───────────────────────', type: 'info' },
      { text: '', type: 'output' },
      { text: '  Backend    ›  Java, Spring Boot, Python, Django', type: 'success' },
      { text: '  Frontend   ›  React.js, Flutter, Tailwind CSS, MUI', type: 'success' },
      { text: '  Database   ›  PostgreSQL, MySQL, Firebase, MongoDB', type: 'success' },
      { text: '  Cloud/AI   ›  Azure, Llama LLM, Prompt Engineering', type: 'success' },
      { text: '  Tools      ›  Git, GitHub, Postman, JWT, REST APIs', type: 'success' },
      { text: '  Core CS    ›  DSA, OOP, DBMS, OS, ML', type: 'success' },
    ],
  },
  projects: {
    output: [
      { text: '── Projects ───────────────────────────────', type: 'info' },
      { text: '', type: 'output' },
      { text: '  01. SquadMatch              (React.js, Supabase, PostgreSQL, Razorpay)', type: 'success' },
      { text: '  02. Ecommerce Platform      (React.js, Spring Boot, PostgreSQL)', type: 'success' },
      { text: '  03. NexChat                 (React.js, Spring Boot, MongoDB, WebSockets)', type: 'success' },
      { text: '  04. CliQ India App          (Java, Flutter, Python, Azure)', type: 'success' },
      { text: '  05. Agriculture Crop Predictor ML       (Python, Scikit-learn — 96% acc.)', type: 'success' },
      { text: '  06. Custom Blob Generator   (React.js, Chakra UI, Tailwind CSS)', type: 'success' },
      { text: '', type: 'output' },
      { text: '  → Scroll to Projects section for full details', type: 'output' },
    ],
  },
  education: {
    output: [
      { text: '── Education ──────────────────────────────', type: 'info' },
      { text: '', type: 'output' },
      { text: '  🎓  B.E. Computer Science (AIML)', type: 'success' },
      { text: '      Chandigarh University  ·  2019–2023  ·  CGPA 7.77', type: 'output' },
      { text: '', type: 'output' },
      { text: '  🤖  ML & Data Science — IBM / Coursera  ·  2023', type: 'success' },
      { text: '', type: 'output' },
      { text: '  🐍  Python Development + SQL Certifications', type: 'success' },
      { text: '', type: 'output' },
      { text: '  📚  CBSE — Army Public School 1, Roorkee  ·  CGPA 9.43', type: 'success' },
    ],
  },
  experience: {
    output: [
      { text: '── Work Experience ────────────────────────', type: 'info' },
      { text: '', type: 'output' },
      { text: '  Backend Developer', type: 'success' },
      { text: '  CliQ India Pvt. Ltd.  ·  March 2025 – Present', type: 'output' },
      { text: '  → Spring Boot APIs, Flutter, Python/Llama on Azure', type: 'output' },
      { text: '', type: 'output' },
      { text: '  Software Developer Intern', type: 'success' },
      { text: '  Debug Solutions Pvt. Ltd.  ·  April 2024 – July 2024', type: 'output' },
      { text: '  → Python scraping — 10k+ entries, +30% efficiency', type: 'output' },
    ],
  },
  'contact-info': {
    output: [
      { text: '── Contact Information ─────────────────────', type: 'info' },
      { text: '', type: 'output' },
      { text: '  📧  ujwalgarg2387@gmail.com', type: 'success' },
      { text: '  📞  +91-8171384868', type: 'success' },
      { text: '  📍  India', type: 'success' },
      { text: '  💼  linkedin.com/in/UjwalGarg', type: 'success' },
      { text: '', type: 'output' },
      { text: '  → Scroll to Contact section to send a message', type: 'output' },
    ],
  },
  'view-resume': {
    output: [
      { text: '── Resume ─────────────────────────────────', type: 'info' },
      { text: '', type: 'output' },
      { text: '  Opening Ujwal_Resume_.pdf ...', type: 'success' },
      { text: '  Ujwal Garg — Full Stack Software Developer', type: 'output' },
      { text: '  CliQ India (current) · Debug Solutions (intern)', type: 'output' },
    ],
  },
  social: {
    output: [
      { text: '── Social Links ───────────────────────────', type: 'info' },
      { text: '', type: 'output' },
      { text: '  🐙  GitHub   →  github.com/UjwalGarg', type: 'success' },
      { text: '  💼  LinkedIn →  linkedin.com/in/UjwalGarg', type: 'success' },
      { text: '  📧  Email    →  ujwalgarg2387@gmail.com', type: 'success' },
    ],
  },
  achievements: {
    output: [
      { text: '── Achievements ───────────────────────────', type: 'info' },
      { text: '', type: 'output' },
      { text: '  🏆  Jumpstart Publicis Sapient Campus Quiz', type: 'success' },
      { text: '      Participant  ·  2022', type: 'output' },
      { text: '', type: 'output' },
      { text: '  🏆  TATA Crucible Campus Quiz', type: 'success' },
      { text: '      Participant  ·  2024', type: 'output' },
      { text: '', type: 'output' },
      { text: '  🌾  Crop Predictor ML — 96% accuracy', type: 'success' },
      { text: '      10% above standard baseline models', type: 'output' },
    ],
  },
};