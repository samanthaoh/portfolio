// Edit everything in this file to update the site — components just read from here.
// Anything in [brackets] is a placeholder you should fill in.

export const profile = {
  firstName: "Samantha",
  lastName: "Oh",
  role: "Informatics - Data Science, University of Washington",
  tagline:
    "I build agentic systems that cut down the friction between people and the services they depend on.",
  location: "Seattle, WA and Washington DC",
  email: "sgoh6@uw.edu",
  linkedin: "https://linkedin.com/in/samantha-oh",
  github: "https://github.com/samanthaoh",
  resumeUrl: "/resume.pdf",
};

// Labels used in the hero schematic — the "facets" of your work.
export const facets = [
  { tag: "A", label: "Agentic AI Systems" },
  { tag: "B", label: "Data Science" },
  { tag: "C", label: "Product Thinking" },
  { tag: "D", label: "Human-Centered Design" },
];

export const experience = [
  {
    org: "CACI International",
    role: "Agentic AI Engineering Intern",
    period: "Summer 2026",
    location: "Chantilly, VA",
    points: [
      "Building LLM-powered agents with the Agno framework to analyze government contract documents",
      "Deploying and orchestrating agents on AWS EC2 using Docker",
      "Working across the full agent pipeline in Python — prompt design, tool calls, output validation",
    ],
    stack: ["Python", "AWS EC2", "Docker", "Agno"],
  },
  {
    org: "NT Concepts",
    role: "Software Development Intern",
    period: "Summer 2024",
    location: "Vienna, VA",
    points: [
      "Shipped features in a React, Redux, and Electron desktop application",
      "Wrote and maintained test coverage with Jest",
    ],
    stack: ["React", "Redux", "Electron", "Jest"],
  },
  {
    org: "George Mason University",
    role: "Information Systems Researcher — with Dr. Xie",
    period: "Summer 2025",
    location: "Fairfax, VA",
    points: [
      "Ran Python-based marketing analytics research",
      "Co-authored a published research abstract",
    ],
    stack: ["Python", "Research"],
  },
];

export const projects = [
  {
    name: "Sip (CafeConnect)",
    tagline: "A social app for finding your people at your café",
    points: [
      "Built the Updates page — Firebase real-time data, react-leaflet maps, friend-based filtering",
      "Built a state-driven NavBar drawer component",
      "Deployed to Firebase Hosting with a 4-person team",
    ],
    stack: ["React", "Firebase", "react-leaflet"],
    link: "[project or repo link]",
  },
  {
    name: "Media Sensationalism Tracker",
    tagline: "Scores news headlines for sensationalized language",
    points: [
      "FastAPI backend running a HuggingFace NLP model",
      "React frontend, deployed on Render and Vercel",
    ],
    stack: ["FastAPI", "HuggingFace", "React"],
    link: "[project or repo link]",
  },
  {
    name: "Workout Tracker",
    tagline: "Full-stack app for logging and visualizing training",
    points: [
      "Angular frontend backed by a Node/Express API",
      "PostgreSQL data layer",
    ],
    stack: ["Angular", "Node.js", "Express", "PostgreSQL"],
    link: "[project or repo link]",
  },
  {
    name: "Girl Scout Gold Award — CS Accessibility",
    tagline: "Coding workshops and tutorials to lower the barrier into CS",
    points: [
      "Ran beginner coding workshops",
      "Built a tutorial site and a YouTube series on accessible CS education",
    ],
    stack: ["Education", "Web"],
    link: "[project or repo link]",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "R", "SQL"] },
  { group: "Frameworks", items: ["React", "FastAPI", "Node / Express", "Angular"] },
  { group: "Data", items: ["Pandas", "HuggingFace", "Statistics", "Data Viz"] },
  { group: "Infra", items: ["AWS EC2", "Docker", "Firebase", "PostgreSQL"] },
];

export const leadership = {
  org: "IUGA — Informatics Undergraduate Association",
  role: "Director of PR  ·  formerly First Year Representative",
  points: [
    "Led the iFormal marketing campaign — roughly 250 attendees",
    "Organized the Pike Place field trip and recurring community events",
    "Direct IUGA marketing strategy and manage brand image",
  ],
};
