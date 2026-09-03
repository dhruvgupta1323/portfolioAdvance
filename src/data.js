export const skills = [
  'Python',
  'TensorFlow',
  'PyTorch',
  'FastAPI',
  'Computer Vision',
  'NLP Systems',
  'React',
  'JavaScript',
  'Video Editing',
  'Color Grading',
  'DaVinci / Premiere',
  'MediaPipe',
  'REST APIs',
  'Docker',
]

export const skillBars = [
  { name: 'Machine Learning & Deep Learning', level: 92, tag: 'Neural Nets' },
  { name: 'Computer Vision & MediaPipe', level: 88, tag: 'Real-time Vision' },
  { name: 'FastAPI & Backend Systems', level: 86, tag: 'Production ML' },
  { name: 'Video Editing & Visual Pacing', level: 85, tag: 'Cinema & FX' },
  { name: 'Natural Language Processing', level: 82, tag: 'Transformers' },
  { name: 'Full-Stack Architecture', level: 84, tag: 'React & APIs' },
]

export const projects = [
  {
    title: 'Finex AI - Privacy-First Financial Intelligence',
    category: 'AI / ML',
    tag: 'Flagship AI',
    description:
      'Built an on-device AI assistant with full local browser processing for secure, zero-latency financial telemetry and insights.',
    highlights: [
      'Zero cloud dependency and complete data sovereignty',
      'Client-side inference for private financial telemetry',
      'Real-time streaming ledger and analytical insights',
    ],
    stack: ['React', 'Local LLM', 'WebAssembly', 'JavaScript'],
    github: 'https://github.com/dhruvgupta1323',
    demo: '#',
  },
  {
    title: 'HireAgain – AI-Powered Hyperlocal Service Engine',
    category: 'Full Stack',
    tag: 'Hackathon Finalist (IIT Roorkee)',
    description:
      'Full-stack intelligent orchestration platform that matches verified workforce candidates using real-time spatial recommendations and instant booking.',
    highlights: [
      'AI worker recommendation engine with spatial matching',
      'Real-time booking, live tracking, and socket telemetry',
      'Role-based granular dashboards with JWT security',
      'Integrated emergency request dispatch protocol',
    ],
    stack: ['React', 'Tailwind CSS', 'FastAPI', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/dhruvgupta1323',
    demo: 'https://certificate.givemycertificate.com/c/7c7a1c81-9c7d-4d05-8caa-0ccae2e2a02d',
  },
  {
    title: 'Hand Gesture Hardware Automation Matrix',
    category: 'Computer Vision',
    tag: 'Edge Vision',
    description:
      'Low-latency edge computer vision pipeline integrating real-time gesture landmark recognition with ESP32 microcontrollers and relay actuators.',
    highlights: [
      'MediaPipe + MobileNetV2 hand landmark tracking',
      'Sub-50ms control loop between vision model and physical relays',
      'End-to-end deployment from camera feed to smart lighting',
    ],
    stack: ['MediaPipe', 'MobileNetV2', 'ESP32', 'Python', 'C++'],
    github: 'https://github.com/dhruvgupta1323',
    demo: '#',
  },
  {
    title: 'Cinematic Visual Showreel & Creative Edits',
    category: 'Video & Cinema',
    tag: 'Creative Direction',
    description:
      'Dynamic visual storytelling featuring rhythmic pacing, custom color grade pipelines, audio-visual sound design, and high-impact motion transitions.',
    highlights: [
      'Precision beat-synced cuts and seamless speed ramping',
      'Advanced color science and mood LUT mastery',
      'Multi-track Foley sound design and atmospheric synth beds',
    ],
    stack: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Color Grading'],
    github: 'https://www.instagram.com/_.dhruv._.x/',
    demo: 'https://www.instagram.com/_.dhruv._.x/',
  },
  {
    title: 'High-Throughput Spam Classifier API',
    category: 'AI / ML',
    tag: 'NLP Engine',
    description:
      'Production-ready NLP API utilizing custom TF-IDF feature extraction and ensemble scikit-learn models for instant spam filtering at scale.',
    highlights: [
      'Automated text normalization and token vectorization',
      'Sub-20ms prediction response benchmarks',
      'RESTful microservice designed for plug-and-play scaling',
    ],
    stack: ['NLP', 'TF-IDF', 'FastAPI', 'scikit-learn'],
    github: 'https://github.com/dhruvgupta1323',
    demo: '#',
  },
  {
    title: 'HPCL Lead Intelligence & Automation Agent',
    category: 'AI / ML',
    tag: 'Enterprise AI',
    description:
      'Intelligent enterprise backend agent executing automated lead scoring, prioritization algorithms, and multi-channel real-time alerts.',
    highlights: [
      'Dynamic lead prioritization decision matrix',
      'Automated multi-channel dispatch pipelines',
      'Designed for resilient industrial operations',
    ],
    stack: ['Python', 'FastAPI', 'Automation', 'AsyncIO'],
    github: 'https://github.com/dhruvgupta1323',
    demo: '#',
  },
]

export const certificates = [
  {
    title: 'Hackathon Finalist – IIT Roorkee',
    issuer: 'Indian Institute of Technology Roorkee',
    year: '2026',
    badge: 'National Finalist',
    details: 'Selected as a national finalist for engineering HireAgain — an AI-powered hyperlocal service platform with real-time workforce matching.',
    link: 'https://certificate.givemycertificate.com/c/7c7a1c81-9c7d-4d05-8caa-0ccae2e2a02d',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera / Stanford Online',
    year: '2025',
    badge: 'Specialization',
    details: 'Mastery in supervised & unsupervised learning, cost function optimization, model evaluation, and deployment architectures.',
  },
  {
    title: 'Deep Learning Fundamentals',
    issuer: 'NPTEL / IIT Madras',
    year: '2025',
    badge: 'Neural Architectures',
    details: 'Deep neural networks, backpropagation calculus, regularization, CNNs, and computer vision training loops.',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM Skills Network',
    year: '2025',
    badge: 'Data Engineering',
    details: 'Advanced data wrangling, scientific visualization, and statistical modeling with NumPy, pandas, and Matplotlib.',
  },
  {
    title: 'Full Stack Web Engineering',
    issuer: 'Udemy Masterclass',
    year: '2025',
    badge: 'Full Stack',
    details: 'Modern frontend engineering, asynchronous backend APIs, database indexing, and microservice deployment.',
  },
]

export const services = [
  {
    id: '01',
    title: 'Computer Vision & Edge AI',
    tag: 'Spatial AI',
    description:
      'Gesture tracking, object recognition, and sub-50ms edge model optimization deployed across edge chips and web environments.',
  },
  {
    id: '02',
    title: 'Production ML & FastAPI',
    tag: 'Scalable Systems',
    description:
      'Low-latency ML REST endpoints, model serialization, caching, and automated asynchronous inference pipelines.',
  },
  {
    id: '03',
    title: 'Videography & Cinematic Editing',
    tag: 'Visual Direction',
    description:
      'High-impact visual narratives, rhythm-locked motion cutting, cinematic color science, and soundscapes.',
  },
  {
    id: '04',
    title: 'NLP & Intent Classification',
    tag: 'Language Models',
    description:
      'Contextual text understanding, intent extraction, token embeddings, and real-time semantic classification.',
  },
  {
    id: '05',
    title: 'Privacy-First Architecture',
    tag: 'Local Intelligence',
    description:
      'On-device client processing architectures that guarantee zero data leakage and eliminate external cloud dependency.',
  },
]

export const resume = [
  {
    period: 'Aug 2024 – Present',
    title: 'Data Science Trainee',
    org: 'We RNS IT Solutions, Alwar',
    type: 'Experience',
    bullets: [
      'Architected end-to-end data pipelines, exploratory analysis, and predictive models.',
      'Developed machine learning models delivering actionable business intelligence and automated scoring.',
    ],
  },
  {
    period: '2024 – 2028',
    title: 'B.Tech – Computer Science & Engineering (AI/ML)',
    org: 'University of Technology, Jaipur',
    type: 'Degree',
    bullets: [
      'Core focus on Deep Learning, Computer Vision, Algorithms, and Mathematics for Machine Intelligence.',
      'Building practical open-source prototypes and competing in hackathons.',
    ],
  },
  {
    period: '2024',
    title: 'Senior Secondary – CBSE',
    org: 'Science & Mathematics Foundation',
    type: 'Education',
    bullets: [
      'Rigorous academic foundation in Physics, Chemistry, and Advanced Mathematics.',
    ],
  },
]
