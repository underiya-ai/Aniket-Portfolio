// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Aniket Underiya',
  firstName: 'Aniket',
  initials: 'AU',
  role: 'AI / ML Engineer',
  titles: ['AI/ML Engineer', 'Agentic AI Engineer', 'GenAI & LLM Engineer'],
  tagline:
    'Agentic AI developer building multi-agent systems, RAG pipelines and LLM-powered applications with LangChain, LangGraph, MCP and FastAPI.',
  taglineShort: 'Building multi-agent systems, RAG pipelines and LLM-powered apps.',
  // Drop a photo at public/profile.jpg — the initials avatar is shown until then.
  photo: '/aniket-Image.jpeg',
  resume: '/resume.pdf',
  email: 'aniketunderiya20@gmail.com',
  phone: '+91 8477930875',
  linkedin: 'https://linkedin.com/in/aniket-underiya',
  github: 'https://github.com/underiya-ai',
  // TODO: replace with your X profile URL, e.g. https://x.com/your-handle
  x: 'https://x.com/',
  available: 'Open to AI/ML & GenAI roles',
}

export const about = [
  "I'm Aniket, an AI/ML Engineer and Agentic AI developer currently in my 3rd year of B.Tech in Information Technology at Kamla Nehru Institute of Technology, Sultanpur.",
  'I work hands-on across Generative AI, Large Language Models, Machine Learning, Deep Learning and NLP. I enjoy turning LLMs into dependable products: designing agentic workflows, wiring up tool/function calling, building retrieval pipelines and exposing it all through clean FastAPI services.',
  "I've built 4 end-to-end AI projects, including multi-agent systems, RAG pipelines and LLM-powered applications using LangChain, LangGraph, Model Context Protocol (MCP) servers, FastAPI and PostgreSQL.",
  "I'm looking for an AI/ML Engineer, GenAI Engineer or LLM Engineer role where I can build scalable, production-ready AI solutions.",
]

export const skills = [
  { group: 'Languages', items: ['Python', 'C++'] },
  {
    group: 'Generative AI & LLMs',
    items: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Embeddings', 'Fine-Tuning LLMs', 'LLM Evaluation', 'Inference Optimization', 'Groq LLM'],
  },
  {
    group: 'RAG & Vector Search',
    items: ['Retrieval-Augmented Generation', 'Vector Databases', 'Semantic Search', 'Document Q&A'],
  },
  {
    group: 'Agentic AI',
    items: ['AI Agents', 'Agentic Workflows', 'LangChain', 'LangGraph', 'MCP Servers', 'Multi-Agent Orchestration', 'Tool / Function Calling', 'Human-in-the-Loop'],
  },
  {
    group: 'ML, DL & NLP',
    items: ['Machine Learning', 'Deep Learning (ANN, RNN, CNN)', 'NLP', 'Transformers', 'Transfer Learning', 'Scikit-learn', 'Hugging Face', 'EDA'],
  },
  { group: 'Backend & Frontend', items: ['FastAPI', 'REST APIs', 'React.js'] },
  { group: 'Database', items: ['PostgreSQL', 'SQL'] },
  { group: 'Tools & Libraries', items: ['PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'Docker', 'Git & GitHub'] },
]

export const experience = [
  {
    org: '',
    role: '',
    period: '',
    description:
        ''  
      },
  {
    org: '',
    role: '',
    period: '',
    description:
          ''
          },
]

export const education = {
  degree: 'B.Tech, Information Technology',
  school: 'Kamla Nehru Institute of Technology, Sultanpur',
  status: 'Currently in 3rd Year',
  cgpa: '7.86',
}

export const projects = [
  {
    title: 'Resume Analyzer',
    subtitle: 'AI Resume Evaluation Tool',
    description:
      'A LangGraph-based multi-step AI agent workflow that compares a resume PDF against a job description to compute ATS score, keyword match, skills gap and experience alignment — then generates strengths, weaknesses, improvement suggestions, project feedback and a final hiring recommendation.',
    tags: ['LangGraph', 'LangChain', 'FastAPI', 'MCP Server', 'LLM'],
    github: 'https://github.com/underiya-ai',
    live: '',
  },
  {
    title: 'Automate Job Search Agent',
    subtitle: 'AI-Powered Job Search Automation',
    description:
      'An autonomous AI agent that converts a resume or job description into live searches across multiple job platforms, automating keyword extraction and eliminating manual tab-switching.',
    tags: ['LangGraph', 'LangChain', 'AI Agents', 'LLM', 'Python'],
    github: 'https://github.com/underiya-ai',
    live: '',
  },
  {
    title: 'Chatbot with FastAPI',
    subtitle: 'Conversational AI Application',
    description:
      'An LLM-powered chatbot served through FastAPI REST APIs, persisting conversation history in PostgreSQL and using Groq LLM for low-latency inference.',
    tags: ['FastAPI', 'REST API', 'LangChain', 'Groq LLM', 'PostgreSQL'],
    github: 'https://github.com/underiya-ai',
    live: '',
  },
  {
    title: 'Follow-up Agent',
    subtitle: 'AI-Powered Sales Assistant',
    description:
      'An AI sales assistant that analyzes customer conversations, identifies high-value leads and recommends the next best action using LLM reasoning — plus automated, personalized follow-up email generation and scheduling.',
    tags: ['LangGraph', 'LangChain', 'AI Agents', 'FastAPI', 'LLM'],
    github: 'https://github.com/underiya-ai',
    live: '',
  },
]

// Your posts. Replace these samples with your own write-ups (LinkedIn / Medium / Hashnode links).
export const learnings = [
  {
    title: 'Building a multi-step resume analyzer with LangGraph',
    excerpt:
      'How I broke resume evaluation into graph nodes — parsing, keyword matching, skills-gap analysis and scoring — and why state graphs beat a single giant prompt.',
    date: '2026-09-12',
    readTime: '6 min read',
    tags: ['LangGraph', 'Agents'],
    link: '',
  },
  {
    title: 'MCP servers, explained by actually wiring one up',
    excerpt:
      'Notes from integrating a Model Context Protocol server into an agent: tool schemas, transport, and the gotchas I hit along the way.',
    date: '2026-08-20',
    readTime: '5 min read',
    tags: ['MCP', 'Tool Calling'],
    link: '',
  },
  {
    title: 'Persisting chat history with FastAPI + PostgreSQL',
    excerpt:
      'A practical walkthrough of storing and replaying conversation memory for an LLM chatbot, and why Groq made the UX feel instant.',
    date: '2026-07-30',
    readTime: '4 min read',
    tags: ['FastAPI', 'PostgreSQL', 'Groq'],
    link: '',
  },
  {
    title: 'RAG pipelines: what moved my retrieval quality the most',
    excerpt:
      'Chunking, embeddings and re-ranking — the small decisions that made the biggest difference in document Q&A answers.',
    date: '2026-06-18',
    readTime: '7 min read',
    tags: ['RAG', 'Embeddings'],
    link: '',
  },
]

export const certificates = [
  {
    title: 'Campus Ambassador — eDC, IIT Delhi',
    issuer: 'Entrepreneurship Development Cell, IIT Delhi',
    date: '2025 – 26',
    description:
      'Selected for a 45-day program; recognized with a certificate and a Letter of Recommendation.',
    link: '',
  },
  {
    title: 'Python Programming',
    issuer: 'Kaggle',
    date: '',
    description: 'Earned a Kaggle badge for demonstrating proficiency in Python programming and practical coding skills.',
    link: '',
  },
]

// Replace these samples with the hackathons you've participated in.
export const hackathons = [
  {
    name: 'Your Hackathon Name',
    result: 'Participant',
    date: '2025',
    project: 'Project you built',
    description: 'One or two lines on what you built, the stack, and what you learned.',
    link: '',
  },
  {
    name: 'Another Hackathon',
    result: 'Finalist',
    date: '2026',
    project: 'Project you built',
    description: 'One or two lines on what you built, the stack, and what you learned.',
    link: '',
  },
]
