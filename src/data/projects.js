// Project content is copied/paraphrased directly from Rani's resume.
// Repository links are only included where the resume itself linked to one.
// No live demo URLs exist in the resume, so no live-demo buttons are created.
export const projects = [
  {
    id: 'skillmint',
    name: 'SkillMint Exchange Platform',
    tagline: 'Full-stack skill-sharing platform with secured REST APIs',
    categories: ['Java', 'Spring Boot', 'Backend', 'Full Stack'],
    tech: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'JPA/Hibernate',
      'PostgreSQL',
      'REST APIs',
    ],
    problem:
      'People who want to trade skills need a place to register, prove who they are, and manage a profile safely, with an API layer other clients could eventually build on.',
    solution:
      'A full-stack skill-sharing platform covering registration, authentication, authorization and profile management, backed by a set of RESTful APIs.',
    features: [
      'User registration, authentication and authorization',
      'Profile management for platform users',
      'RESTful APIs with CRUD operations for skills, user profiles and platform workflows',
      'Spring Security + JWT-based authentication and authorization securing endpoints',
      'PostgreSQL persistence via JPA/Hibernate with relational entity mapping',
      'Validation and exception handling for more reliable APIs',
    ],
    contribution:
      'Designed and built the backend end to end — the API layer, the security/auth flow, and the persistence layer.',
    github: 'https://github.com/Jadhavrani1208/skillMint-exchange-Platform',
    demo: null,
  },
  {
    id: 'flower-shop',
    name: 'Flower Shop Website',
    tagline: 'Admin + customer management system for a flower shop',
    categories: ['Java', 'Backend'],
    tech: ['MySQL'],
    problem:
      'A flower shop needs a simple, organized way for staff to manage products and categories while customers browse and buy.',
    solution:
      'A flower shop management system with separate admin and user modules, backed by a MySQL database.',
    features: [
      'Separate admin and user modules',
      'Category and product management',
      'Cart management workflow for customers',
      'Organized, database-backed data handling',
    ],
    contribution:
      'Built the application workflows and MySQL data model for both the admin and user sides.',
    github: null, // Not linked on the resume — placeholder below.
    demo: null,
  },
  {
    id: 'quiztube',
    name: 'QuizTube',
    tagline: 'AI-powered YouTube transcript summarizer',
    categories: ['Backend'],
    tech: ['Gemini AI', 'YouTube Transcript API', 'Streamlit'],
    problem:
      'Long YouTube videos are slow to sift through when you just need the gist of what was said.',
    solution:
      'An AI-powered tool that pulls a video transcript and summarizes it, wrapped in a simple Streamlit interface.',
    features: [
      'YouTube transcript retrieval via the YouTube Transcript API',
      'AI summarization powered by Gemini AI',
      'Interface built with Streamlit',
    ],
    contribution:
      'Integrated the transcript and Gemini AI APIs and built the Streamlit interface.',
    github: null, // Not linked on the resume — placeholder below.
    demo: null,
  },
];

export const projectFilters = ['All', 'Java', 'Spring Boot', 'Backend', 'Full Stack'];
