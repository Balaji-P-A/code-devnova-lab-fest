export const fest = {
  title: "NOVAFEST 2026",
  eyebrow: "A CODE DEVNOVA LAB EXPERIENCE",
  tagline: "Think beyond. Create what's next.",
  description:
    "A gathering for curious minds, creative builders, problem-solvers, and future innovators. Explore challenges, share ideas, and turn what you know into what you can create.",
  status: "EVENT DETAILS COMING SOON",
  eligibility:
    "Open to college students (UG, PG, and PhD), freshers, employees, and community members. Confirm any event-specific eligibility before registering."
};

// Replace registrationUrl values with the actual registration form or Upstop event URLs.
// Dates, prizes, coordinator contacts, and round formats are intentionally placeholders until confirmed.
export const events = [
  {
    id: "novamind",
    name: "NovaMind",
    image: "/images/novamind-logo.webp",
    type: "General Quiz",
    category: "QUIZ / KNOWLEDGE",
    number: "01",
    accent: "violet",
    icon: "✳",
    short: "Curiosity meets quick thinking. Put your general knowledge to the test.",
    description: "A fast-paced knowledge challenge covering a broad mix of topics, from culture and current affairs to science, sports, and everyday discoveries.",
    skills: ["Knowledge", "Recall", "Teamwork"],
    teamSize: "Set by organizer",
    registrationUrl: "https://unstop.com/o/IFqP4bw",
    rounds: [
      { name: "Round 01 — Qualifier", detail: "A timed preliminary quiz to identify participants moving forward." },
      { name: "Round 02 — Challenge", detail: "A deeper set of questions testing breadth, accuracy, and speed." },
      { name: "Round 03 — Final", detail: "Finalists compete in a live or organizer-defined final format." }
    ],
    updates: [
      { date: "20 Oct 26, 00:00 AM IST", title: "NOVAMIND 2026 – THE ULTIMATE QUIZ CHALLENGE!", detail: "17 Oct 26, 12:00 AM IST - 20 Oct 26, 12:00 PM IST, Individual, and registration deadline is published as 20 Oct 26, 00:00 AM IST." }
    ]
  },
  {
    id: "techpulse",
    name: "TechPulse",
    image: "/images/techpulse-logo.webp",
    type: "Technical Quiz",
    category: "TECHNOLOGY",
    number: "02",
    accent: "cyan",
    icon: "⌘",
    short: "Test your tech awareness across programming, computing, and emerging technology.",
    description: "A technical knowledge contest for participants who enjoy computing concepts, programming fundamentals, digital systems, and new technology.",
    skills: ["Technology", "Logic", "Accuracy"],
    teamSize: "Set by organizer",
    registrationUrl: "",
    rounds: [
      { name: "Round 01 — Fundamentals", detail: "Questions on computing basics, programming, and core technology concepts." },
      { name: "Round 02 — Tech Sprint", detail: "A timed challenge with applied technical questions." },
      { name: "Round 03 — Final Showdown", detail: "Qualified participants compete in the final quiz." }
    ],
    updates: [
      { date: "Announcement pending", title: "Technical scope to be confirmed", detail: "Topic coverage and round rules will be added when finalized." }
    ]
  },
  {
    id: "casestorm",
    name: "CaseStorm",
    image: "/images/casestorm-logo.webp",
    type: "Scenario-Based Quiz",
    category: "PROBLEM SOLVING",
    number: "03",
    accent: "orange",
    icon: "⌁",
    short: "Read the situation, connect the clues, and choose the smartest response.",
    description: "A scenario-driven challenge that rewards clear reasoning, situational awareness, and thoughtful decisions under time pressure.",
    skills: ["Critical thinking", "Decision-making", "Analysis"],
    teamSize: "Set by organizer",
    registrationUrl: "",
    rounds: [
      { name: "Round 01 — Decode", detail: "Analyze short scenarios and identify the key issue." },
      { name: "Round 02 — Decide", detail: "Select or justify a response using the available information." },
      { name: "Round 03 — Case Finale", detail: "Resolve a more complex scenario and explain your reasoning." }
    ],
    updates: [
      { date: "Announcement pending", title: "Scenario format coming soon", detail: "The final case format, rules, and timing will be posted here." }
    ]
  },
  {
    id: "novaresearch",
    name: "NovaResearch",
    image: "/images/novaresearch-logo.webp",
    type: "Paper Presentation",
    category: "RESEARCH / PRESENTATION",
    number: "04",
    accent: "violet",
    icon: "⌗",
    short: "Present a clear idea, defend your research, and share what you discovered.",
    description: "A platform for presenting research, explaining methodology, communicating findings, and answering questions from reviewers.",
    skills: ["Research", "Communication", "Presentation"],
    teamSize: "Set by organizer",
    registrationUrl: "",
    rounds: [
      { name: "Round 01 — Abstract / Submission", detail: "Submit the required title, abstract, and paper materials through the official channel." },
      { name: "Round 02 — Presentation", detail: "Present your work within the time limit announced by the organizers." },
      { name: "Round 03 — Review & Q&A", detail: "Respond to questions about your approach, evidence, and conclusions." }
    ],
    updates: [
      { date: "Announcement pending", title: "Submission guidelines pending", detail: "Paper format, presentation duration, and submission deadline will be announced." }
    ]
  },
  {
    id: "ideaspark",
    name: "IdeaSpark",
    image: "/images/ideaspark-logo.webp",
    bannerImage: "/images/ideaspark-banner.webp",
    type: "Idea Presentation",
    category: "INNOVATION",
    number: "05",
    accent: "yellow",
    icon: "✧",
    short: "Turn a real problem into a bold, useful, and well-explained idea.",
    description: "An innovation pitch where participants communicate a problem, proposed solution, target users, impact, and feasibility.",
    skills: ["Innovation", "Pitching", "Product thinking"],
    teamSize: "Set by organizer",
    registrationUrl: "",
    rounds: [
      { name: "Round 01 — Idea Submission", detail: "Share the problem statement, proposed solution, and intended impact." },
      { name: "Round 02 — Pitch", detail: "Present the idea using the format and time limit provided by organizers." },
      { name: "Round 03 — Jury Q&A", detail: "Explain feasibility, differentiation, and how the idea could be developed." }
    ],
    updates: [
      { date: "Announcement pending", title: "Pitch format to be announced", detail: "Slide limits, judging criteria, and submission instructions will be added here." }
    ]
  },
  {
    id: "promptx",
    name: "PromptX",
    image: "/images/promptx-logo.webp",
    type: "Prompt War",
    category: "GENERATIVE AI",
    number: "06",
    accent: "pink",
    icon: "⌘",
    short: "Shape the output with the power of precise prompts and creative direction.",
    description: "A prompt-crafting challenge that explores how clearly participants can communicate intent, constraints, and creative goals to AI tools.",
    skills: ["Prompt engineering", "Creativity", "Iteration"],
    teamSize: "Set by organizer",
    registrationUrl: "",
    rounds: [
      { name: "Round 01 — Prompt Basics", detail: "Create a prompt that meets a defined objective and constraints." },
      { name: "Round 02 — Prompt Remix", detail: "Improve an initial result through focused prompt iteration." },
      { name: "Round 03 — Final Output", detail: "Deliver a result and explain the choices behind your prompt." }
    ],
    updates: [
      { date: "Announcement pending", title: "Tool policy to be announced", detail: "Permitted tools, evaluation criteria, and task details will be published here." }
    ]
  },
  {
    id: "pixelcraft",
    name: "PixelCraft",
    image: "/images/pixelcraft-logo.webp",
    bannerImage: "/images/pixelcraft-banner.webp",
    type: "UI Designing",
    category: "DESIGN",
    number: "07",
    accent: "cyan",
    icon: "▦",
    short: "Craft a thoughtful interface where visual clarity meets user experience.",
    description: "A user-interface design challenge focused on visual hierarchy, usability, consistency, and communicating a product idea through screens.",
    skills: ["UI/UX", "Visual design", "User empathy"],
    teamSize: "Set by organizer",
    registrationUrl: "",
    rounds: [
      { name: "Round 01 — Design Brief", detail: "Review the challenge brief and identify user needs." },
      { name: "Round 02 — Create", detail: "Design the required screen or flow using the announced tools." },
      { name: "Round 03 — Walkthrough", detail: "Present your design decisions and explain the user journey." }
    ],
    updates: [
      { date: "Announcement pending", title: "Design brief pending", detail: "Tool requirements, canvas size, and judging criteria will be confirmed." }
    ]
  },
  {
    id: "frameforge",
    name: "FrameForge",
    image: "/images/frameforge-logo.webp",
    bannerImage: "/images/frameforge-banner.webp",
    type: "Frame Designing",
    category: "VISUAL CREATIVITY",
    number: "08",
    accent: "orange",
    icon: "▧",
    short: "Build a striking visual frame with a clear idea and a memorable finish.",
    description: "A visual-design challenge to create a frame, poster treatment, or composition that balances concept, layout, typography, and detail.",
    skills: ["Composition", "Typography", "Creativity"],
    teamSize: "Set by organizer",
    registrationUrl: "",
    rounds: [
      { name: "Round 01 — Concept", detail: "Interpret the theme and outline a visual direction." },
      { name: "Round 02 — Design Build", detail: "Create the frame using the specified dimensions and tools." },
      { name: "Round 03 — Showcase", detail: "Submit and briefly explain the final composition." }
    ],
    updates: [
      { date: "Announcement pending", title: "Theme to be revealed", detail: "The final theme, output dimensions, and submission format will appear here." }
    ]
  },
  {
    id: "codenova",
    name: "CodeNova",
    image: "/images/codenova-logo.webp",
    bannerImage: "/images/codenova-banner.webp",
    type: "Hackathon",
    category: "BUILD / INNOVATION",
    number: "09",
    accent: "violet",
    icon: "</>",
    short: "Build a working solution, validate the idea, and show what your team can do.",
    description: "A hands-on build challenge where teams turn a problem statement into a demonstrable prototype and communicate the value of their solution.",
    skills: ["Programming", "Teamwork", "Prototyping"],
    teamSize: "Set by organizer",
    registrationUrl: "",
    rounds: [
      { name: "Round 01 — Problem / Idea", detail: "Choose or receive a problem statement and outline your proposed solution." },
      { name: "Round 02 — Build Sprint", detail: "Develop a prototype and prepare the required demonstration." },
      { name: "Round 03 — Demo & Jury", detail: "Present the working solution, explain the approach, and answer questions." }
    ],
    updates: [
      { date: "Announcement pending", title: "Hackathon rules pending", detail: "Team size, duration, allowed technologies, and judging criteria will be published here." }
    ]
  },
  {
    id: "motionx",
    name: "MotionX",
    image: "/images/motionx-logo.webp",
    bannerImage: "/images/motionx-banner.webp",
    type: "Video Editing Challenge",
    category: "VIDEO / MEDIA",
    number: "10",
    accent: "pink",
    icon: "▶",
    short: "Turn raw clips into a compelling story through rhythm, timing, and motion.",
    description: "A video-editing challenge focused on storytelling, pacing, transitions, sound, and a polished final export.",
    skills: ["Editing", "Storytelling", "Timing"],
    teamSize: "Set by organizer",
    registrationUrl: "",
    rounds: [
      { name: "Round 01 — Brief", detail: "Review the theme, source assets, and export requirements." },
      { name: "Round 02 — Edit", detail: "Produce the edit within the announced time and tool constraints." },
      { name: "Round 03 — Screening", detail: "Submit the final export for review against the judging criteria." }
    ],
    updates: [
      { date: "Announcement pending", title: "Assets and format pending", detail: "Video duration, aspect ratio, audio policy, and submission method will be announced." }
    ]
  },
  {
    id: "logiccanvas",
    name: "LogicCanvas",
    image: "/images/logiccanvas-logo.webp",
    bannerImage: "/images/logiccanvas-banner.webp",
    type: "Diagram Explanation Challenge",
    category: "LOGIC / EXPLANATION",
    number: "11",
    accent: "yellow",
    icon: "⌘",
    short: "Make complex ideas easier to understand by explaining the diagram behind them.",
    description: "A visual reasoning and explanation challenge where participants interpret a diagram, identify relationships, and communicate the logic clearly.",
    skills: ["Logical reasoning", "Explanation", "Visual literacy"],
    teamSize: "Set by organizer",
    registrationUrl: "",
    rounds: [
      { name: "Round 01 — Observe", detail: "Study a diagram and identify its elements and relationships." },
      { name: "Round 02 — Interpret", detail: "Explain the process, system, or concept represented in the visual." },
      { name: "Round 03 — Present", detail: "Deliver a clear explanation and respond to follow-up questions." }
    ],
    updates: [
      { date: "Announcement pending", title: "Diagram topics pending", detail: "Topics, preparation rules, and evaluation criteria will be published here." }
    ]
  }
];

export const announcements = [
  {
    tag: "FEST UPDATE",
    date: "Details pending",
    title: "Welcome to NOVAFEST 2026",
    detail: "The Code DevNova Lab fest hub is being prepared. Event schedules, registration links, and finalized rules will be added here as they are confirmed."
  },
  {
    tag: "REGISTRATION",
    date: "Details pending",
    title: "Registration links will appear on event pages",
    detail: "Open an event page to find its official registration link once it has been published."
  },
  {
    tag: "IMPORTANT",
    date: "Details pending",
    title: "Check event rules before registering",
    detail: "Round formats, eligibility, and submission requirements may differ by event. Please review the relevant event page."
  }
];
