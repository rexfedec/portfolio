export const siteConfig = {
  name: 'Sameer Mann',
  title: 'Software Engineer',
  description: 'Final-year B.Tech CSE student. Problem solver who ships.',
  author: 'Sameer Mann',
  email: 'sameer@smann.cc',
  github: 'REXFEDEC',
  linkedIn: 'sameer-mann',
  instagram: 'sameer.mkv',
  buyMeACoffee: 'sameermannand',
}

// Used for absolute URLs in SEO/OpenGraph/Twitter metadata.
export const siteUrl = 'https://projects.smann.cc'

export const heroContent = {
  name: 'Sameer Mann',
  title: 'Final-year B.Tech CSE student. Delhi, India.',
  bio: `I build things that are needed and I build them quick.
Currently finishing my CS degree at GGSIPU (graduating 2026). 
Spent 5 months at an Antler-backed venture studio shipping SaaS MVPs.

Working stack includes: Python, Azure, React, Firebase, and more.

Open to full-time roles, remote work, and freelance projects.`,
}

export const stats = [
  { label: 'Projects shipped', value: '9+' },
  { label: 'Live products', value: '7' },
  { label: 'Currently Learning', value: 'DevOps' },
  { label: 'Work status', value: 'Open to work' },
]

export type Project = {
  id: string
  title: string
  slug: string
  tagline: string
  description: string
  badge?: 'Latest' | 'Live' | 'Active' | 'Deprecated'
  builtIn: string
  stack: string[]
  links: {
    github?: string
    live?: string
    website?: string
    download?: string
  }
  featured?: boolean
  content?: {
    subheading: string
    overview: string
    metadata?: Record<string, string>
    sections?: Array<{
      title: string
      content: string
    }>
    features?: string[]
    providers?: string[]
    whyItMatters?: string
  }
}

export const projects: Project[] = [
  {
    id: 'sieve',
    title: 'Sieve',
    slug: 'sieve',
    tagline: 'Free, open source cross-platform app that uses AI to classify and organise image collections.',
    description: 'Sort anything, automatically.',
    badge: 'Latest',
    builtIn: '3 days',
    stack: ['Flutter', 'Dart', 'Next.js', 'Cloudflare Pages'],
    links: {
      github: 'https://github.com/sieve-labs',
      download: 'https://github.com/sieve-labs/sieve-app/releases',
      website: 'https://sieve.smann.cc',
    },
    featured: true,
    content: {
      subheading: 'Sort anything, automatically.',
      overview:
        'Sieve is a free, open source, cross-platform app that uses vision AI to automatically classify and organise image collections. Point it at a folder, define your labels, and get a clean sorted structure back — every file renamed and filed automatically.\n\nNo accounts. No cloud storage. No subscriptions. Everything runs on your device using your own AI key.',
      metadata: {
        Status: 'Active — v1.0.1 released Mar 17, 2026',
        'Built in': '3 days (Flutter app + landing page + documentation)',
        Platforms: 'Android, Linux, Windows, macOS',
        License: 'MIT',
      },
      features: [
        'Classifies images against any label set you define',
        'Renames files to a clean `date_time_label` format',
        'Organises images into folders by label',
        'Flags uncertain results for manual review',
        'Exports a CSV summary of every classification decision',
        'Works fully offline with Ollama — no internet required',
      ],
      providers: ['OpenRouter (free tier available)', 'Ollama (local/offline)', 'OpenAI', 'Anthropic', 'Google Gemini'],
    },
  },
  {
    id: 'factorsphere',
    title: 'FactorSphere',
    slug: 'factorsphere',
    tagline: 'Open-source academic journal ranking platform with transparent methodology.',
    description: 'Bringing transparency to academic journal rankings through community-driven data.',
    badge: 'Live',
    builtIn: '~1 month',
    stack: ['Next.js', 'TypeScript', 'Cloudflare Workers', 'shadcn/ui'],
    links: {
      github: 'https://github.com/FactorSphere',
      live: 'https://factorsphere.smann.cc',
      website: 'https://lander.factorsphere.smann.cc',
    },
    featured: true,
    content: {
      subheading: 'Bringing transparency to academic journal rankings through community-driven data.',
      overview:
        'FactorSphere is an open-source academic journal ranking platform that aggregates citation and quality data from multiple sources, documents its methodology publicly, and provides a fast, searchable interface — for free.\n\nBuilt because journal quality data is paywalled, scattered, or methodologically opaque. Researchers without institutional access have nowhere transparent to evaluate journals before submitting their work.',
      metadata: {
        Status: 'Live and maintained',
        'Built in': '~1 month (maintained since)',
        'Journals indexed': '4,000+',
      },
      features: [
        'Indexes 4,000+ academic journals across multiple disciplines',
        'Multi-dimensional ranking using: Impact Factor, CiteScore, SNIP, SJR, Peer Review Quality, Publication Speed',
        'Instant search by name, field, or impact factor',
        'AI-powered journal recommendations via semantic search on abstracts',
        'Fully documented methodology — no black boxes',
        'Open data under Unlicense — free to use, fork, or extend',
      ],
    },
  },
  {
    id: 'aipdf',
    title: 'AiPDF Summarizer',
    slug: 'aipdf',
    tagline: 'Upload any PDF — text or scanned — and get an AI-generated summary.',
    description: 'Upload any PDF. Get a summary. Works even on scanned documents.',
    badge: 'Live',
    builtIn: '1 day',
    stack: ['React', 'Cloudflare Workers AI', 'PDF.js', 'OCR.space'],
    links: {
      github: 'https://github.com/REXFEDEC/AiPdfSummarizer',
      live: 'https://pdf.smann.cc',
    },
    featured: true,
    content: {
      subheading: 'Upload any PDF. Get a summary. Works even on scanned documents.',
      overview:
        'A web tool that accepts any PDF — whether text-based or a scanned image — and returns an AI-generated summary. The key insight was handling the failure case: most PDF tools silently return nothing when the file is image-based. AiPDF detects this and falls back to OCR automatically.\n\nAI inference runs on Cloudflare Workers AI — on the edge, with no server to maintain and no latency overhead.',
      metadata: {
        Status: 'Live',
        'Built in': '1 day',
      },
    },
  },
  {
    id: 'scanweb',
    title: 'ScanWeb',
    slug: 'scanweb',
    tagline: 'Web vulnerability scanner with AI-assisted reporting.',
    description: 'A web-based vulnerability scanner with AI-assisted reporting.',
    badge: 'Live',
    builtIn: '1 day',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'shadcn/ui'],
    links: {
      github: 'https://github.com/REXFEDEC/ScanWeb',
      live: 'not live',
    },
    content: {
      subheading: 'A web-based vulnerability scanner with AI-assisted reporting.',
      overview:
        'ScanWeb is a professional web vulnerability scanner built as a college project. It detects common security weaknesses, generates actionable reports with AI-assisted prioritisation, and wraps it in a clean interface with full user accounts. Built in a single day.',
      metadata: {
        Status: 'Live (code complete; not actively continued)',
        'Built in': '1 day',
      },
      features: [
        'XSS (multiple attack vectors)',
        'SQL injection patterns in URLs',
        'CSRF vulnerabilities',
        'Security misconfigurations',
        '10+ critical HTTP security headers',
        'Technology stack fingerprinting and information disclosure',
        'Real-time scan progress via polling',
        'AI-powered vulnerability summarisation and prioritisation',
        'Exportable reports with severity ratings',
        'Full user authentication and accounts',
        'PWA — installable, offline-capable',
        'OWASP Top 10 methodology',
      ],
    },
  },
  {
    id: 'securenotes',
    title: 'SecureNotes',
    slug: 'securenotes',
    tagline: 'Secure notes with Markdown and Supabase auth.',
    description: 'A secure, Markdown-first note-taking app with cloud storage.',
    badge: 'Live',
    builtIn: '1 day',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'shadcn/ui'],
    links: {
      github: 'https://github.com/REXFEDEC/SecureNotes',
      live: 'not live',
    },
    content: {
      subheading: 'A secure, Markdown-first note-taking app with cloud storage.',
      overview:
        'A clean note-taking app with email/password authentication, Markdown editor with live preview, dark/light mode, and cloud storage backed by Supabase. Row-Level Security on all database queries — users can only ever access their own notes. Built for no particular reason, in a single day.',
      metadata: {
        Status: 'Live',
        'Built in': '1 day (same day as ScanWeb)',
      },
      features: [
        'Email/password auth via Supabase Auth',
        'Markdown editor with live preview (GitHub-flavored Markdown)',
        'Notes stored as files in Supabase Storage',
        'Row-Level Security (RLS) on all tables and storage buckets',
        'Dark/light mode toggle',
        'Real-time updates, full CRUD',
        'Responsive — works on desktop, tablet, and mobile',
      ],
    },
  },
  {
    id: 'dreambit',
    title: 'Dreambit',
    slug: 'dreambit',
    tagline: 'Full-stack e-commerce site built from scratch.',
    description: 'A full-stack e-commerce site built from scratch.',
    badge: 'Live',
    builtIn: '3 weeks',
    stack: ['HTML/CSS/JS', 'Node.js', 'Express', 'MySQL'],
    links: {
      github: 'https://github.com/REXFEDEC/dreambit',
      live: 'https://dreambittech.rf.gd',
    },
    content: {
      subheading: 'A full-stack e-commerce site built from scratch.',
      overview:
        'A complete e-commerce website built deliberately without shortcuts — vanilla HTML, CSS, and JavaScript on the frontend; Node.js and Express on the backend; MySQL for the database. The goal was to understand how everything connects before relying on abstractions.',
      metadata: {
        Status: 'Live',
        'Built in': '3 weeks',
      },
      features: [
        'Product catalogue with filtering, sorting, and search',
        'Shopping cart with real-time updates',
        'Wishlist management',
        'User accounts and personalised dashboards (Clerk auth)',
        'Order history, tracking, and invoice generation',
        'Admin panel: inventory management, order processing, analytics, CMS',
        'CSRF protection, XSS prevention, rate limiting, security headers',
      ],
    },
  },
  {
    id: 'musik',
    title: 'Musik',
    slug: 'musik',
    tagline: 'Flutter music player. First mobile app.',
    description: 'A Flutter music player. My first mobile app.',
    builtIn: '1 week',
    stack: ['Flutter', 'Dart', 'just_audio', 'SQLite'],
    links: {
      github: 'https://github.com/REXFEDEC/musik',
    },
    content: {
      subheading: 'A Flutter music player. My first mobile app.',
      overview:
        'Musik was built during college coursework as a first exploration of Flutter and cross-platform mobile development. It works — local library management, background audio playback, a clean UI. The main value was learning: state management, platform-specific implementations, audio handling, and SQLite on mobile.',
      metadata: {
        Status: 'v1.0 released Jun 2025 — not actively developed',
        'Built in': '1 week',
        Platforms: 'Android, iOS, Web, Windows, Linux, macOS',
      },
    },
  },
  {
    id: 'shtick',
    title: 'Shtick',
    slug: 'shtick',
    tagline: 'Scripts that make running local AI models less annoying.',
    description: 'Scripts that make running local AI models less annoying.',
    builtIn: '1 day',
    stack: ['Shell', 'Python', 'Bash'],
    links: {
      github: 'https://github.com/rexfedec/shtick',
    },
    content: {
      subheading: 'Scripts that make running local AI models less annoying.',
      overview:
        'A collection of binaries and shell scripts that remove the repetitive setup boilerplate when spinning up local AI models. Built for personal use — the kind of thing that\'s boring to explain but saves time every single day.',
      metadata: {
        'Built in': '1 day',
      },
    },
  },
  {
    id: 'labi-old',
    title: 'labi-old',
    slug: 'labi-old',
    tagline: 'Data collection platform. The experiment that became Sieve.',
    description: 'The experiment that became Sieve.',
    badge: 'Deprecated',
    builtIn: '1 week',
    stack: ['Next.js', 'TypeScript', 'Cloudflare R2', 'Supabase'],
    links: {
      github: 'https://github.com/rexfedec/labi-old',
    },
    content: {
      subheading: 'The experiment that became Sieve.',
      overview:
        'labi-old was a data collection platform built to explore the problem of collecting, storing, and structuring large amounts of data. It never shipped as a product — but it identified the real problem clearly enough to pivot into something that did. That project is Sieve.',
      metadata: {
        Status: 'Deprecated — superseded by Sieve',
        'Built in': '1 week',
      },
      whyItMatters:
        'Every good product has a failed first attempt behind it. labi-old is that attempt — and the fact that it produced Sieve in 3 days is because the problem was already fully understood by the time building started.',
    },
  },
]

export const testimonials = [
  {
    quote:
      'In the rapidly evolving landscape of scientific research, identifying the most suitable journal for publication can be a challenging task for a PhD student. This website serves as a valuable resource by bringing together comprehensive information about a wide range of journals, including direct links and their respective impact factors — everything on one platform. An added advantage is the AI-assisted journal recommender, which provides tailored recommendations based on the abstract, making the process even more efficient and user-friendly.',
    author: 'Atharva Mahajan',
  },
  {
    quote:
      'Factorsphere is an extremely simple portal to utilise in searching for your academic needs. The layout is extremely nice and lucid to use — the interface is contemporary to any research journal page. The catalogue creation is structured and minimalistic, which is what any academic individual wishes for. It can truly democratize rankings by trying to preserve the integrity of academic studies.',
    author: 'Abhishek Rajwade',
  },
  {
    quote:
      'FactorSphere is an amazing tool with an easy user interface, that helps one quickly access the impact factor of journals in multiple fields and decide which journals one could consider to publish their work in.',
    author: 'Mincy Kunjumon',
  },
  {
    quote:
      'Using this website has helped to narrow down the journals I would like to publish my paper in. Thank you so much! It has been of a great help!',
    author: 'Sristi Pradhan',
  },
]

export const experience = {
  work: [
    {
      title: 'Full Stack Developer',
      company: 'Antler-backed Venture Studio',
      duration: '5 months (two stints)',
      description:
        'Worked as a junior software developer at a startup studio operating under the Antler investment firm, building and shipping SaaS MVPs across multiple startup ideas. Each project had a different domain — the last one was in robotics. The expectation was to ship production-ready prototypes fast, sometimes within a week.',
      responsibilities: [
        'React frontends',
        'Python backends',
        'Supabase integration',
        'Cloud infrastructure setup',
        'Brand/logo work',
      ],
      stack: ['React', 'Python', 'Supabase', 'Various cloud platforms'],
      note: 'Work is under NDA — specifics of individual projects are not public.',
    },
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      school: 'GGSIPU (Guru Gobind Singh Indraprastha University)',
      status: 'Final year — graduating 2026',
    },
  ],
  certifications: [],
}

export const buildTimes = [
  { project: 'FactorSphere', description: 'Academic journal ranking platform', time: '~1 month' },
  { project: 'Dreambit', description: 'Full-stack e-commerce from scratch', time: '3 weeks' },
  { project: 'Sieve', description: 'Cross-platform AI image sorter + lander + docs', time: '3 days' },
  { project: 'labi-old', description: 'Data collection platform (R2 + auth)', time: '1 week' },
  { project: 'Musik', description: 'First mobile app (Flutter)', time: '1 week' },
  { project: 'ScanWeb', description: 'Vulnerability scanner + auth + AI reports', time: '1 day' },
  { project: 'SecureNotes', description: 'Notes app with auth, storage, Markdown', time: '1 day' },
  { project: 'AiPDF Summarizer', description: 'PDF + OCR + edge AI summariser', time: '1 day' },
  { project: 'Shtick', description: 'Local AI model scripts', time: '1 day' },
]

export const contactLinks = [
  { label: 'Email', value: 'sameer@smann.cc', href: 'mailto:sameer@smann.cc' },
  { label: 'GitHub', value: 'github.com/REXFEDEC', href: 'https://github.com/REXFEDEC' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sameer-mann', href: 'https://linkedin.com/in/sameer-mann' },
  { label: 'Instagram', value: 'instagram.com/sameer.mkv', href: 'https://instagram.com/sameer.mkv' },
]
