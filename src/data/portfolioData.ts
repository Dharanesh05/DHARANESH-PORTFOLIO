import type {
  PersonalInfo,
  StatItem,
  AboutPillar,
  Skill,
  Project,
  EducationItem,
  Internship,
  Certification,
  Achievement,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'DHARANESH R',
  title: 'Electronics & Communication Engineering Student',
  college: 'VSB Engineering College, Karur',
  department: 'Electronics and Communication Engineering (ECE)',
  year: '3rd Year',
  email: 'rdharanesh5@gmail.com',
  phone: '9629250290',
  location: 'Karur, Tamil Nadu, India',
  github: 'https://github.com/Dharanesh05',
  linkedin: 'https://www.linkedin.com/in/dharanesh-r-72952a371',
  resumeUrl: '/Dharanesh_R_Resume.pdf',
  supportingText:
    'Building intelligent solutions at the intersection of Electronics, AI and Software Engineering.',
  bio: 'I am a 3rd-year Electronics and Communication Engineering student passionate about electronics, artificial intelligence, software development and emerging technologies. I enjoy transforming ideas into practical engineering solutions and building projects that combine hardware, software and AI.',
};

export const statsData: StatItem[] = [
  {
    label: 'Academic Standing',
    value: '3rd Year',
    description: 'B.E. ECE Student',
    iconName: 'GraduationCap',
  },
  {
    label: 'Certifications Completed',
    value: '12',
    description: 'AI, AWS, TCS & HP Verified',
    iconName: 'Award',
  },
  {
    label: 'Industry Internships',
    value: '2',
    description: 'Embedded IoT & Pega BPM',
    iconName: 'Briefcase',
  },
  {
    label: 'AI & Engineering Projects',
    value: '5+',
    description: 'Telemetry, Vision & Agents',
    iconName: 'Cpu',
  },
];

export const aboutPillars: AboutPillar[] = [
  {
    title: 'ECE Student',
    description:
      'Deep foundation in circuit design, embedded microcontrollers, signal processing, and communication networks.',
    iconName: 'CircuitBoard',
    gradient: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    title: 'AI Enthusiast',
    description:
      'Passionate about Generative AI, intelligent autonomous agents, machine learning algorithms, and computer vision models.',
    iconName: 'BrainCircuit',
    gradient: 'from-purple-500/20 to-pink-500/10',
  },
  {
    title: 'Software Developer',
    description:
      'Crafting scalable full-stack applications, REST APIs with FastAPI, modern React interfaces, and clean system architectures.',
    iconName: 'Terminal',
    gradient: 'from-blue-500/20 to-indigo-500/10',
  },
  {
    title: 'Problem Solver',
    description:
      'Bridging domain gaps between physical hardware sensors and intelligent cloud software systems to tackle real-world challenges.',
    iconName: 'Lightbulb',
    gradient: 'from-emerald-500/20 to-teal-500/10',
  },
];

export const skillsData: Skill[] = [
  // ECE CORE
  {
    name: 'Circuit Analysis',
    category: 'ECE CORE',
    level: 'Advanced',
    iconName: 'Zap',
    description: 'KVL, KCL, AC/DC network theorems & transient response analysis.',
  },
  {
    name: 'Electronic Devices and Circuits',
    category: 'ECE CORE',
    level: 'Advanced',
    iconName: 'Cpu',
    description: 'Diodes, BJTs, MOSFETs, operational amplifiers & feedback circuits.',
  },
  {
    name: 'Digital Electronics',
    category: 'ECE CORE',
    level: 'Advanced',
    iconName: 'Binary',
    description: 'Boolean algebra, logic gates, flip-flops, counters & sequential state machines.',
  },
  {
    name: 'Analog Electronics',
    category: 'ECE CORE',
    level: 'Proficient',
    iconName: 'Activity',
    description: 'Op-amp filters, oscillators, power amplifiers & signal conditioning.',
  },
  {
    name: 'Signals and Systems',
    category: 'ECE CORE',
    level: 'Proficient',
    iconName: 'Waveform',
    description: 'Continuous & discrete time signals, Fourier, Laplace & Z-Transforms.',
  },
  {
    name: 'Digital Signal Processing',
    category: 'ECE CORE',
    level: 'Proficient',
    iconName: 'Radio',
    description: 'FIR/IIR filter design, FFT algorithms & digital spectrum analysis.',
  },
  {
    name: 'Communication Systems',
    category: 'ECE CORE',
    level: 'Proficient',
    iconName: 'RadioReceiver',
    description: 'AM/FM modulation, digital keying (ASK, FSK, PSK) & noise performance.',
  },
  {
    name: 'Satellite Communication',
    category: 'ECE CORE',
    level: 'Intermediate',
    iconName: 'Globe',
    description: 'Orbital mechanics, link budget analysis & satellite transponder payloads.',
  },
  {
    name: 'Microprocessors & Microcontrollers',
    category: 'ECE CORE',
    level: 'Proficient',
    iconName: 'Microchip',
    description: '8085/8086 architecture, ARM, Arduino, ESP32 & peripheral interfacing.',
  },
  {
    name: 'VLSI Basics',
    category: 'ECE CORE',
    level: 'Intermediate',
    iconName: 'Layers',
    description: 'CMOS inverter design, stick diagrams & ASIC synthesis concepts.',
  },

  // PROGRAMMING
  {
    name: 'Python',
    category: 'PROGRAMMING',
    level: 'Advanced',
    iconName: 'FileCode',
    description: 'Primary language for AI, data analysis, FastAPI & script automation.',
  },
  {
    name: 'Java',
    category: 'PROGRAMMING',
    level: 'Proficient',
    iconName: 'Code',
    description: 'Object-oriented programming, data structures & backend logic.',
  },
  {
    name: 'C',
    category: 'PROGRAMMING',
    level: 'Proficient',
    iconName: 'Terminal',
    description: 'Embedded systems programming, memory management & hardware drivers.',
  },
  {
    name: 'C++',
    category: 'PROGRAMMING',
    level: 'Proficient',
    iconName: 'Cpu',
    description: 'High-performance computing, STL algorithms & system applications.',
  },
  {
    name: 'SQL',
    category: 'PROGRAMMING',
    level: 'Proficient',
    iconName: 'Database',
    description: 'Relational database schema design, indexing & optimized SQL queries.',
  },

  // AI / SOFTWARE
  {
    name: 'Generative AI',
    category: 'AI / SOFTWARE',
    level: 'Advanced',
    iconName: 'Sparkles',
    description: 'LLM integration, RAG architectures, prompt chaining & multi-modal AI.',
  },
  {
    name: 'AI Agents',
    category: 'AI / SOFTWARE',
    level: 'Advanced',
    iconName: 'Bot',
    description: 'Autonomous tool-calling agents, task planning & multi-agent workflows.',
  },
  {
    name: 'Machine Learning',
    category: 'AI / SOFTWARE',
    level: 'Proficient',
    iconName: 'LineChart',
    description: 'Supervised/unsupervised algorithms, Isolation Forest & model evaluation.',
  },
  {
    name: 'Computer Vision',
    category: 'AI / SOFTWARE',
    level: 'Proficient',
    iconName: 'Eye',
    description: 'OpenCV image restoration, noise filtering, object detection & feature extraction.',
  },
  {
    name: 'Prompt Engineering',
    category: 'AI / SOFTWARE',
    level: 'Advanced',
    iconName: 'MessageSquareCode',
    description: 'System prompt design, few-shot conditioning & structured output generation.',
  },
  {
    name: 'REST APIs',
    category: 'AI / SOFTWARE',
    level: 'Advanced',
    iconName: 'Server',
    description: 'API endpoint design, middleware, request validation & CORS handling.',
  },
  {
    name: 'FastAPI',
    category: 'AI / SOFTWARE',
    level: 'Advanced',
    iconName: 'Zap',
    description: 'Asynchronous Python web framework for ultra-fast ML API deployments.',
  },
  {
    name: 'React',
    category: 'AI / SOFTWARE',
    level: 'Proficient',
    iconName: 'Layout',
    description: 'Modern component architectures, hooks, state management & responsive UIs.',
  },

  // TOOLS
  {
    name: 'Git',
    category: 'TOOLS',
    level: 'Advanced',
    iconName: 'GitBranch',
    description: 'Version control, branching strategies, merging & commit history.',
  },
  {
    name: 'GitHub',
    category: 'TOOLS',
    level: 'Advanced',
    iconName: 'Github',
    description: 'Repository hosting, GitHub Actions CI/CD & open-source collaboration.',
  },
  {
    name: 'VS Code',
    category: 'TOOLS',
    level: 'Advanced',
    iconName: 'Code2',
    description: 'Primary IDE customized with debugging, linting & extensions.',
  },
  {
    name: 'Google AI Studio',
    category: 'TOOLS',
    level: 'Advanced',
    iconName: 'Wand2',
    description: 'Prototyping & testing Gemini LLM prompts, parameters & API keys.',
  },
  {
    name: 'Antigravity',
    category: 'TOOLS',
    level: 'Advanced',
    iconName: 'Sparkle',
    description: 'Advanced AI agentic workflow integration & paired coding assistant.',
  },
  {
    name: 'Firebase',
    category: 'TOOLS',
    level: 'Intermediate',
    iconName: 'Flame',
    description: 'Authentication, Firestore database & cloud application hosting.',
  },
  {
    name: 'Vercel',
    category: 'TOOLS',
    level: 'Proficient',
    iconName: 'Globe',
    description: 'Continuous deployment for frontend apps & serverless edge functions.',
  },
];

export const projectsData: Project[] = [
  {
    id: 'personalized-idp',
    title: 'Intelligent Recommendation System for Personalized IDPs',
    description:
      'An AI-powered Individual Development Plan recommender that analyzes a student\'s academic specialization, current skills, and career aspirations to generate personalized development paths.',
    problemSolved:
      'Students often struggle with fragmented learning resources and lack targeted roadmaps aligned with evolving industry standards. This system automates personalized skill-gap analysis and delivers tailored career paths.',
    category: ['AI', 'Software'],
    features: [
      'Skill analysis & diagnostic gap evaluation',
      'Career goal mapping with target industry roles',
      'Personalized learning roadmap with milestone tracking',
      'Curated certification recommendations',
      'GitHub project recommendations based on skill gaps',
      'Coding challenges & aptitude preparation suites',
      'AI resume improvement suggestions',
      'AI interview preparation with domain-specific QA',
      'Career XP & progress gamification tracking',
    ],
    technologies: ['React', 'Next.js', 'FastAPI', 'Gemini API', 'SQLite'],
    githubUrl: 'https://github.com/Dharanesh05/Intelligent-IDP-Recommender',
    liveUrl: 'https://idp-recommender.demo.dev',
    imageVisual: 'idp-visual',
    architectureDetails:
      'The architecture comprises a Next.js/React frontend providing interactive career dashboards, communicating with a FastAPI backend. Gemini API is leveraged for dynamically evaluating student profiles against industry skill benchmarks, while SQLite stores skill taxonomies and historical user milestones.',
    metrics: [
      { label: 'Skill Gap Accuracy', value: '94%' },
      { label: 'Roadmap Personalization', value: 'Dynamic' },
    ],
  },
  {
    id: 'semiconductor-image-restoration',
    title: 'AI-Based Restoration of Degraded Images for Semiconductor Inspection',
    description:
      'An AI-based computer vision system designed to restore degraded semiconductor inspection images and recover useful visual information.',
    problemSolved:
      'Micro-chip optical and electron microscopy images during wafer manufacturing suffer from sensor noise, blur, and lighting artifacts. This project restores fine detail to enable accurate defect inspection.',
    category: ['AI', 'ECE', 'Computer Vision'],
    features: [
      'Synthetic image degradation simulator (Gaussian, Poisson, Blur)',
      'Advanced spatial & frequency domain noise reduction',
      'AI deep learning & edge-preserving image restoration',
      'Structural Similarity Index (SSIM) & PSNR quality comparison',
      'Semiconductor wafer defect detection inspection use case',
      'Interactive side-by-side before/after comparative inspection tool',
    ],
    technologies: ['Python', 'Computer Vision', 'AI', 'Image Processing'],
    githubUrl: 'https://github.com/Dharanesh05/Semiconductor-Image-Restoration',
    liveUrl: 'https://semicon-vision.demo.dev',
    imageVisual: 'semicon-visual',
    architectureDetails:
      'Combines OpenCV signal processing routines with deep convolutional autoencoders to denoise and deblur silicon wafer microscopy images. Achieves high SSIM reconstruction scores without introducing false wafer artifacts.',
    metrics: [
      { label: 'PSNR Improvement', value: '+8.4 dB' },
      { label: 'SSIM Index', value: '0.92' },
    ],
  },
  {
    id: 'jarvis-voice-assistant',
    title: 'AI Voice Assistant / Jarvis',
    description:
      'A voice-based personal AI assistant capable of answering questions and interacting through natural voice conversations.',
    problemSolved:
      'Traditional text chatbots lack hands-free accessibility for engineers working on hardware setups. Jarvis provides ultra-low latency conversational interaction using voice AI.',
    category: ['AI', 'Software'],
    features: [
      'Low-latency voice activity detection (VAD)',
      'Natural speech recognition & speech-to-text pipeline',
      'Gemini API conversational reasoning core',
      'Expressive natural text-to-speech voice output',
      'Real-time WebRTC audio streaming via LiveKit',
      'Custom hardware control commands & Q&A assistance',
    ],
    technologies: ['Python', 'Gemini', 'LiveKit', 'Voice AI'],
    githubUrl: 'https://github.com/Dharanesh05/Jarvis-AI-Voice-Assistant',
    liveUrl: 'https://jarvis-voice.demo.dev',
    imageVisual: 'jarvis-visual',
    architectureDetails:
      'Leverages LiveKit WebRTC pipeline to stream low-latency bidirectional audio. Gemini API handles fast natural language understanding while custom Python audio hooks provide voice activity management.',
    metrics: [
      { label: 'Voice Latency', value: '<400ms' },
      { label: 'Audio Quality', value: 'HD 48kHz' },
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.E. Electronics and Communication Engineering',
    institution: 'VSB Engineering College, Karur',
    location: 'Karur, Tamil Nadu',
    period: '2022 – 2026',
    status: '3rd Year (Currently Pursuing)',
    isCurrent: true,
    highlights: [
      'Specializing in Embedded Systems, Signal Processing, AI Applications & VLSI Basics.',
      'Active participant in technical symposiums, hackathons, and engineering workshops.',
      'Developing AI-driven electronics & computer vision projects.',
    ],
  },
  {
    degree: 'Higher Secondary Education (HSC - Class XII)',
    institution: 'State Board Secondary Education',
    location: 'Tamil Nadu, India',
    period: '2020 – 2022',
    status: 'Completed with Distinction',
    highlights: [
      'Focused on Mathematics, Physics, Chemistry, and Computer Science.',
      'Strong academic foundation in analytical problem solving.',
    ],
  },
];

export const internshipsData: Internship[] = [
  {
    id: 'internship-1',
    title: 'Embedded Systems + IoT Intern',
    company: 'Vaidsys Technologies',
    type: 'Hardware & IoT Engineering',
    duration: '1 Month',
    period: 'July 24, 2026 – August 23, 2026',
    certId: 'VST0726696',
    skillsAcquired: [
      'Microcontroller Programming',
      'Hardware-Software Integration',
      'IoT Protocol Implementation',
      'Real-world Project Execution',
      'Embedded Systems Design',
    ],
    highlights: [
      'Programmed microcontrollers for real-time sensor data acquisition and wireless telemetry.',
      'Engineered firmware-level hardware-software interfacing using standard IoT protocols.',
      'Executed end-to-end embedded system design for real-world deployment testbeds.',
    ],
  },
  {
    id: 'internship-2',
    title: 'Workflow Automation & Low-Code Developer Intern',
    company: 'Pegasystems Worldwide India Private Limited',
    type: 'Enterprise BPM & Automation',
    duration: '60 Hours (Industry-Integrated)',
    period: 'August 4, 2026 – September 3, 2026',
    certId: 'PEGA-SW-NIP-2026-1000',
    recognizedBy: 'AICTE National Internship Program (SmartBridge)',
    skillsAcquired: [
      'Workflow Automation',
      'Business Process Management (BPM)',
      'Low-Code Development',
      'Enterprise Application Development',
      'Real-World Project Implementation',
    ],
    highlights: [
      'Designed enterprise business process workflows using Pega Low-Code platform.',
      'Implemented automated case management architectures recognized by AICTE.',
      'Developed industry-integrated application prototypes for enterprise processes.',
    ],
  },
];

export const certificationsData: Certification[] = [
  // AI & Machine Learning (6)
  {
    id: 'cert-1',
    title: 'TCS iON Career Edge — IT Primer',
    organization: 'TCS iON',
    category: 'AI & Machine Learning',
    date: 'June 15, 2026',
    certId: '8752-32379024-1016',
    skillsGained: ['IT Fundamentals', 'Software Development Life Cycle', 'System Concepts'],
  },
  {
    id: 'cert-2',
    title: 'TCS iON Career Edge — Interview and Job Readiness',
    organization: 'TCS iON',
    category: 'AI & Machine Learning',
    date: 'June 15, 2026',
    certId: '8751-32379024-1016',
    skillsGained: ['Technical Interviewing', 'Professional Communication', 'Corporate Preparedness'],
  },
  {
    id: 'cert-3',
    title: 'TCS iON Career Edge — Young Professional',
    organization: 'TCS iON',
    category: 'AI & Machine Learning',
    date: 'June 15, 2026',
    certId: '275492-32379024-1016',
    skillsGained: ['Business Etiquette', 'Problem Solving', 'Workplace Agility'],
  },
  {
    id: 'cert-4',
    title: 'TCS iON Career Edge — Generative AI Essentials',
    organization: 'TCS iON',
    category: 'AI & Machine Learning',
    date: 'June 14, 2026',
    certId: '8773-32379024-1016',
    skillsGained: ['Generative AI', 'LLM Architectures', 'Prompt Design', 'AI Application Concepts'],
  },
  {
    id: 'cert-5',
    title: 'YUVA AI For All',
    organization: 'IndiaAI × TCS iON',
    category: 'AI & Machine Learning',
    date: 'June 15, 2026',
    skillsGained: ['National AI Ecosystem', 'AI Ethics', 'Machine Learning Foundations'],
    recognizingOrg: 'Ministry of Electronics & IT (MeitY)',
  },
  {
    id: 'cert-6',
    title: 'ChatGPT for Everyone: Complete Generative AI & Prompt Engineering',
    organization: 'GUVI × HCL',
    category: 'AI & Machine Learning',
    date: 'June 22, 2026',
    certId: '8bx1Z211TM60J71C1I',
    skillsGained: ['Prompt Engineering', 'ChatGPT Workflows', 'Generative Content Creation', 'AI Tools'],
  },

  // Critical Thinking & Ethics (1)
  {
    id: 'cert-7',
    title: 'Critical Thinking in the AI Era',
    organization: 'HP LIFE × HP Foundation',
    category: 'Critical Thinking & Ethics',
    date: 'July 6, 2026',
    certId: '53806d29-a013-4b3c-b7c9-c8c7a274bd01',
    skillsGained: ['AI Bias Analysis', 'Critical Problem Solving', 'Ethical Decision Making'],
  },

  // Cybersecurity (1)
  {
    id: 'cert-8',
    title: 'Cybersecurity Mastery',
    organization: 'Unstop',
    category: 'Cybersecurity',
    date: '2026',
    signatory: 'Ankit Aggarwal, CEO — Unstop',
    skillsGained: ['Network Security', 'Vulnerability Assessment', 'Threat Mitigation', 'Security Protocols'],
  },

  // AWS Cloud & AI (2)
  {
    id: 'cert-9',
    title: 'Exam Prep Plan Overview: AWS Certified AI Practitioner (AIF-C01)',
    organization: 'AWS Training & Certification',
    category: 'AWS Cloud & AI',
    date: 'September 2, 2026',
    skillsGained: ['AWS AI Services', 'Amazon Bedrock', 'SageMaker Basics', 'AIF-C01 Exam Strategy'],
  },
  {
    id: 'cert-10',
    title: 'Exploring Artificial Intelligence Use Cases and Applications',
    organization: 'AWS Training & Certification',
    category: 'AWS Cloud & AI',
    date: 'September 16, 2026',
    skillsGained: ['Cloud AI Implementations', 'Computer Vision on AWS', 'Natural Language Processing'],
  },

  // Professional Development (1)
  {
    id: 'cert-11',
    title: 'National Internship Program Certificate (60 hours)',
    organization: 'Pegasystems × SmartBridge',
    category: 'Professional Development',
    date: 'September 23, 2026',
    certId: 'PEGA-SW-NIP-2026-1000',
    recognizingOrg: 'AICTE Approved Program',
    skillsGained: ['Workflow Automation', 'Low-Code Pega Platform', 'Enterprise Software Design'],
  },
];

export const achievementsData: Achievement[] = [
  // 4 Competitions & Contests
  {
    id: 'contest-1',
    title: 'QuizOff 2026: India\'s Biggest AI Quiz',
    category: 'Competition',
    organization: 'CampusCrew × Unstop',
    date: 'July 19, 2026',
    description:
      'Selected national competitor in India\'s largest AI knowledge contest spanning over 5.25 Lakh students across 35 countries.',
    badgeText: 'Select Competitor',
    scale: '5,25,000+ Students | 48,500+ Institutions | 35+ Countries',
    details: ['Tested on Generative AI, Machine Learning, Deep Learning, and AI Ethics.'],
  },
  {
    id: 'contest-2',
    title: 'ArduFusion Contest',
    category: 'Contest',
    organization: 'V.S.B. Engineering College Electronics Club',
    date: 'July 25, 2026',
    description:
      'Participated in hands-on Arduino microcontroller programming and hardware sensor fusion challenges.',
    badgeText: 'ECE Club Winner / Participant',
    motto: 'Department: III ECE – B',
  },
  {
    id: 'contest-3',
    title: 'HackDevengers 1.0',
    category: 'Hackathon',
    organization: 'Devengers × Unstop',
    date: '2026',
    description:
      'National hackathon entry building software and AI prototype solutions under competitive project constraints.',
    badgeText: 'National Hackathon',
  },
  {
    id: 'contest-4',
    title: 'Crack & Act Contest',
    category: 'Contest',
    organization: 'V.S.B. Engineering College Electronics Club',
    date: 'August 29, 2026',
    description:
      'Circuit debugging and rapid logic design contest held by the ECE Department.',
    badgeText: 'ECE Competition',
    motto: 'Decode, Design, Deliver (III ECE – B)',
  },

  // 1 Real-World Impact
  {
    id: 'impact-1',
    title: 'Voluntary Blood Donation',
    category: 'Real-World Impact',
    organization: 'Tamil Nadu State Blood Transfusion Council',
    date: 'August 9, 2026',
    description:
      'Awarded Blood Donor Appreciation Certificate for voluntary blood donation at the Government Blood Centre.',
    badgeText: 'AB+ve Voluntary Donor',
    scale: 'Potentially saved 3 lives',
    details: ['Issued by: Government Blood Centre, Tamil Nadu'],
  },
];
