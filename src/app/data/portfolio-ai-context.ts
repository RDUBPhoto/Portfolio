export const PORTFOLIO_AI_CONTEXT = {
  guardrailReply:
    "I'm trained to talk only about Robert's career and personal background. Ask about his projects, UX process, design systems, AI workflows, or personal interests.",
  personalFactsReply:
    'Outside of work Robert focuses on family life (married with 2 kids), golfing, high-speed off-roading, baseball, and travel across the U.S., Mexico, Canada, and more.',
  personalKeywords: [
    'golf',
    'off-road',
    'off road',
    'family',
    'married',
    'kids',
    'children',
    'baseball',
    'travel',
    'traveled',
    'travelled',
    'hobby',
    'hobbies',
    'interest',
    'interests',
    'outside work',
    'free time',
    'like to do',
    'what is robert like',
    'who is robert',
    'tell me about robert',
    'personality',
    'about robert'
  ],
  careerProfile: [
    'Robert Wojtow is a UI/UX Designer, Front-End Developer, and Design Systems expert with 12+ years of experience across enterprise SaaS and regulated industries.',
    'Professional summary: Senior Product Designer and UX Systems Lead focused on turning complex workflows into intuitive, scalable interfaces and rapidly translating Figma design into front-end code.',
    'Recent emphasis: AI-driven interaction design, onboarding automation, real-time dashboards, ServiceNow-integrated logic, and Angular implementation.',
    'VistaLumina / RiminiStreet (2025-present): Lead Senior Product Designer and UX Engineer for an AI-powered ERP in Angular 19+, reducing inventory tasks to 3 clicks or less through conversational UX.',
    'VistaLumina / RiminiStreet: Built AI onboarding with Azure AI Document Intelligence for scanned/handwritten W-9 parsing, field extraction, and completion prompts.',
    'VistaLumina / RiminiStreet: Built and maintained token-based, WCAG-aligned design systems in Figma and shipped persona-informed operational workflows.',
    'Teradata (2024-2025): Design Systems Architect and Front-End Developer; led multi-brand design system architecture in Figma + Angular.',
    'Teradata: Implemented CSS variable token architecture for brand switching, dark mode, and accessibility alignment; scaled handoff using Storybook/Napsack + CI/CD.',
    'BD/CareFusion (2017-2024): Senior Lead Product Designer and Front-End Architect; led global multi-brand healthcare design systems across 10+ internal platforms in HIPAA contexts.',
    'BD/CareFusion: Built atomic Angular component libraries, standardized accessibility and theming, and reduced legacy duplication through UX audits and consolidation.',
    'SNH/NCC (2015-2016): Lead Product Designer and UI Engineer; delivered next-gen automotive CRM MVP in under 3 months.',
    'ServiceNow (2014-2015): Sr. UI Designer and Front-End Developer; built scalable style-guide systems and reusable SCSS components for workflow products including Visual Task Boards.',
    'DealerSocket (2013-2014): Sr. UI/UX Designer and Front-End Developer; led CRM redesign with responsive Angular/SCSS/Kendo implementation.',
    'MaintenanceNet/Cisco (2011-2013): UI/UX Designer and Front-End Developer for ServiceExchange quoting and contract workflow UX.',
    'Core strengths: persona development, journey mapping, usability testing, accessibility (WCAG/HIPAA), design system governance, tokenized theming, and design-to-code execution.',
    'Technical stack: Angular (up to 19.2), TypeScript, JavaScript, HTML5, CSS3/SCSS, Storybook, Bootstrap, Material UI, Kendo UI, Chart.js, Power BI, Node.js.',
    'Tools: Figma (components/tokens/variables/Dev Mode), Adobe XD, Sketch, Axure, InVision, Miro, HotJar, CrazyEgg.',
    'Education: Bachelor of Fine Arts, The Illinois Institute of Art Chicago (GPA 3.8, 2000-2005).'
  ],
  personalProfile: [
    'Married with 2 kids.',
    'Interests: golfing, high-speed off-roading, family, baseball, travel.',
    'Travel references include: Playa del Carmen, Cancun, Baja Mexico, California, Arizona, New Mexico, Texas, Ohio, New England down to Pennsylvania, Washington, NYC, Canada, Florida, North Carolina, Georgia, Louisiana, Alaska, Tennessee, Kentucky, Indiana, Colorado, Nevada, Nebraska, Michigan, Mississippi, Alabama.'
  ],
  additionalPromptHints: [
    'When asked about design-to-code, mention token pipelines from Figma to source control and Angular usage across multiple products.',
    'When asked about leadership, highlight cross-functional collaboration with product, engineering, operations, and clinical stakeholders.',
    'When asked about AI, highlight practical workflow automation and document intelligence implementation in enterprise contexts.'
  ]
} as const;
