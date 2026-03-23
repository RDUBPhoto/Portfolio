export interface Project {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'teradata-ui-library',
    title: 'Teradata Enterprise UI Library',
    category: 'Enterprise SaaS',
    tags: ["design-system", "multi-brand", "storybook", "figma", "accessibility"],
    description: `Multi-theme design system and UI library across Teradata’s enterprise product lines. Token-based theming, Figma integration, and WCAG-compliant components.`,
    images: [
      "/assets/projects/teradata/teradata-3.png",
      "/assets/projects/teradata/teradata-4.png",
      "/assets/projects/teradata/teradata-5.png",
      "/assets/projects/teradata/teradata-1.png",
      "/assets/projects/teradata/teradata-2.png",
    ]
  },
  {
    slug: 'bd-design-system',
    title: 'BD Multi-Brand Design System',
    category: 'Healthcare',
    tags: ["design-system", "WCAG", "Figma", "Storybook", "CI/CD", "theme-tokens"],
    description: `Design system spanning 10+ internal platforms for BD, including token-based theming, dynamic brand switching, and HIPAA/WCAG compliance.`,
    images: [
      "/assets/projects/bd/bd-5.png",
      "/assets/projects/bd/bd-1.png",
      "/assets/projects/bd/bd-2.png",
      "/assets/projects/bd/bd-3.png",
      "/assets/projects/bd/bd-4.png",
      "/assets/projects/bd/bd-6.png"
    ]
  },
  {
    slug: 'snh-crm-platform',
    title: 'NCC Credit Automotive CRM',
    category: 'Automotive SaaS',
    tags: ["Angular", "HTML5", "SCSS", "UX testing", "personas"],
    description: `End-to-end design and front-end dev for a scalable CRM platform used by auto lenders and dealers, delivered as an MVP in 3 months.`,
    images: ["/assets/projects/snh/snh-1.png"]
  },
  {
    slug: 'servicenow-style-guide',
    title: 'ServiceNow Living Style Guide',
    category: 'Enterprise Tools',
    tags: ["SCSS", "design-system", "usability-testing"],
    description: `Created a style guide and reusable SCSS components for the ServiceNow platform, improving internal design cohesion and usability.`,
    images: ["/assets/projects/servicenow/snow-1.png"]
  },
  {
    slug: 'dealersocket-crm-redesign',
    title: 'DealerSocket CRM Redesign',
    category: 'Automotive CRM',
    tags: ["UX", "SCSS", "Angular", "responsive-design", "Kendo/Telerik"],
    description: `Led redesign of DealerSocket's CRM platform, modernizing legacy UI, implementing responsive design, and increasing usability.`,
    images: ["/assets/projects/dealersocket/ds-1.png"]
  },
  {
    slug: 'servicexchange-platform',
    title: 'ServiceExchange UX & Front-End',
    category: 'Enterprise SaaS',
    tags: ["LessCSS", "UX Testing", "HTML5", "prototyping", "performance"],
    description: `Designed and developed ServiceExchange application interfaces at MaintenanceNet (Cisco), focusing on cross-browser UX and high performance.`,
    images: ["/assets/projects/servicexchange/se-1.png"]
  },
  {
    slug: 'bisvine-emr',
    title: 'BisVine EMR for Allied Health',
    category: 'Healthcare',
    tags: ["EMR", "EHR", "WCAG", "Figma", "Vue"],
    description: `An electronic medical records system designed for acupuncture, chiropractic, and massage practices, built with accessibility and modern UX in mind.`,
    images: [
      "/assets/projects/bisvine/bisvine-1.png",
      "/assets/projects/bisvine/bisvine-2.png",
      "/assets/projects/bisvine/bisvine-3.png",
      "/assets/projects/bisvine/bisvine-4.png",
      "/assets/projects/bisvine/bisvine-5.png",
      "/assets/projects/bisvine/bisvine-6.png"
    ]
  },
  {
    slug: 'vistalumina-ai-erp',
    title: 'VistaLumina AI-Driven ERP',
    category: 'AI ERP',
    tags: ["AI", "ERP", "ServiceNow", "SAP", "Angular", "Figma", "Design Systems", "WCAG"],
    description: `A modern ERP platform enhanced with AI and design system scalability, integrated into ServiceNow and SAP environments.`,
    images: ["/assets/projects/vistalumina/vistalumina-1.png"]
  },
  {
    slug: 'federal-govt-portals',
    title: 'Federal Government Portals',
    category: 'Federal Portals',
    tags: ["Security Clearance", "Angular", "Figma", "Design Systems", "WCAG", "Node", "GitHub", "Freelance"],
    description: `Secure, accessible front-ends for federal agencies. Built under clearance with strict WCAG and design system requirements.`,
    images: ["/assets/projects/federal/federal-1.png"]
  }
];
