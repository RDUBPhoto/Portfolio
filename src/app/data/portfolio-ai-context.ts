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
  faqAnswers: [
    {
      key: 'work-style',
      keywords: [
        'what is robert like to work with',
        'what is he like to work with',
        'working with robert',
        'work with him',
        'team player',
        'collaborative'
      ],
      response:
        'Robert is known as a calm, high-ownership teammate who bridges UX, product, and engineering without handoff friction. He listens first, frames problems clearly, and then drives practical decisions that teams can ship. Partners value him for raising quality while keeping momentum, especially in complex, high-pressure enterprise environments.',
      filter: 'all',
      relatedProjectIds: ['rimini', 'teradata', 'bd', 'servicenow']
    },
    {
      key: 'design-system-wins',
      keywords: [
        'biggest design systems wins',
        'design systems wins',
        'design system impact',
        'design system accomplishments',
        'what did he do with design systems'
      ],
      response:
        'His biggest design systems wins include leading multi-brand token architectures at Teradata and BD, standardizing reusable Angular component libraries, and tightening design-to-code consistency across distributed teams. At enterprise scale, this reduced UI duplication, improved accessibility alignment, and accelerated delivery across many product surfaces.',
      filter: 'design-systems',
      relatedProjectIds: ['teradata', 'bd', 'rimini']
    },
    {
      key: 'engineering-partnership',
      keywords: [
        'how does he partner with engineering',
        'partner with engineering',
        'works with engineering',
        'collaborate with engineers',
        'design to dev handoff'
      ],
      response:
        'Robert partners with engineering through shared artifacts and shared accountability: tokenized foundations, reusable component specs, Storybook-ready patterns, and implementation checkpoints built into delivery. He translates UX intent into production-ready detail, aligns early on technical constraints, and stays hands-on through release so quality survives handoff.',
      filter: 'angular-front-end',
      relatedProjectIds: ['teradata', 'bd', 'servicenow', 'dealersocket']
    }
  ],
  additionalPromptHints: [
    'When asked about design-to-code, mention token pipelines from Figma to source control and Angular usage across multiple products.',
    'When asked about leadership, highlight cross-functional collaboration with product, engineering, operations, and clinical stakeholders.',
    'When asked about AI, highlight practical workflow automation and document intelligence implementation in enterprise contexts.'
  ]
} as const;
