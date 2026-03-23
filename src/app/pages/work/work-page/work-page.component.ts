import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AiChatService, WorkFilterKey } from '../../../services/ai-chat.service';
import { ChatComponent } from '../../../components/chat/chat.component';

type WorkEntry = {
  id: string;
  company: string;
  title: string;
  role: string;
  timeframe: string;
  category: string;
  summary: string;
  personaFocus: string;
  highlights: string[];
  images: string[];
};

@Component({
  selector: 'app-work-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ChatComponent],
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit, OnChanges {
  @Input() embedded = false;
  @Input() externalFilter: WorkFilterKey | null = null;
  @Input() externalPrompt = '';
  @Input() externalAgentReply = '';

  activeFilter: WorkFilterKey = 'all';
  agentReply =
    'These are the related projects Robert has worked on. Ask about design systems, healthcare UX, AI workflows, Angular execution, or personal background.';
  queryPrompt = '';

  activeImageIndexByEntryId: Record<string, number> = {};
  modalEntryId: string | null = null;
  modalImageIndex = 0;

  readonly filterOptions: { key: WorkFilterKey; label: string }[] = [
    { key: 'all', label: 'All work' },
    { key: 'design-systems', label: 'Design systems' },
    { key: 'healthcare-ux', label: 'Healthcare UX' },
    { key: 'ai-workflows', label: 'AI workflows' },
    { key: 'angular-front-end', label: 'Angular + front-end' },
    { key: 'automotive-crm', label: 'Automotive CRM' },
    { key: 'gov-healthcare', label: 'Gov healthcare' },
    { key: 'fintech', label: 'Fintech' },
    { key: 'enterprise-platform', label: 'Enterprise platform' }
  ];

  readonly entries: WorkEntry[] = [
    {
      id: 'rimini',
      company: 'Rimini',
      title: 'AI ERP + Workflow Orchestration',
      role: 'Lead Senior Product Designer + UX Engineer',
      timeframe: '2025 - Present',
      category: 'AI Product + Enterprise UX',
      summary:
        'Designed and built conversational ERP experiences that convert dense operations workflows into guided, role-aware actions for logistics, onboarding, and financial requests.',
      personaFocus:
        'Used persona-driven journey mapping for operations managers, onboarding specialists, and fulfillment teams to tune prompts, decision points, and exception states by user intent.',
      highlights: [
        'Shipped AI onboarding assistant and document-intelligence submission flow',
        'Designed KPI dashboards and task-routing patterns driven by role-based priorities',
        'Built reusable UI patterns for charting, workspace states, and approval workflows'
      ],
      images: [
        'ui-examples/RiminiStreet-vistalumina/Dashboard_Desktop.jpg',
        'ui-examples/RiminiStreet-vistalumina/Workspace%20-%20Desktop.jpg',
        'ui-examples/RiminiStreet-vistalumina/Landing%20page-1.jpg',
        'ui-examples/RiminiStreet-vistalumina/Chart.jpg',
        'ui-examples/RiminiStreet-vistalumina/Chart-1.jpg',
        'ui-examples/RiminiStreet-vistalumina/Donut%20Element.jpg',
        'ui-examples/RiminiStreet-vistalumina/Widgets.jpg',
        'ui-examples/RiminiStreet-vistalumina/Refunded_Desktop.jpg',
        'ui-examples/RiminiStreet-vistalumina/Requisition%20Request%20form%20-%20Filling....jpg'
      ]
    },
    {
      id: 'teradata',
      company: 'Teradata',
      title: 'Enterprise Multi-Brand Design System',
      role: 'Design Systems Architect + Front-End Developer',
      timeframe: '2024 - 2025',
      category: 'Design Systems + Angular',
      summary:
        'Led design and front-end architecture for a scalable multi-brand design system and analytics workflows across enterprise product suites.',
      personaFocus:
        'Mapped admin, analyst, and executive personas to prioritize what each role needs first: setup clarity, analytical depth, and decision-ready summaries.',
      highlights: [
        'Tokenized theming architecture with brand switching and accessible contrast',
        'Component library implementation in Angular with Storybook documentation',
        'Built workflow-heavy consoles for usage, cost visibility, and database tooling'
      ],
      images: [
        'ui-examples/teradata/teradata1.jpg',
        'ui-examples/teradata/teradata2.jpg',
        'ui-examples/teradata/teradata3.jpg',
        'ui-examples/teradata/teradata4.jpg',
        'ui-examples/teradata/teradata5.png',
        'ui-examples/teradata/Cost-Calculator-Console---New-Branding.webp',
        'ui-examples/teradata/Unit-Consumption-Console---New-Branding.webp',
        'ui-examples/teradata/vantage_editor_desktop_1_edit_connections.png',
        'ui-examples/teradata/vantage_editor_desktop_2_set_connection_properties.png',
        'ui-examples/teradata/vantage_editor_desktop_3_object_browser.png'
      ]
    },
    {
      id: 'bd',
      company: 'BD',
      title: 'Clinical UI Platform + Design System',
      role: 'Senior Lead Product Designer + Front-End Architect',
      timeframe: '2017 - 2024',
      category: 'Healthcare + Regulated UX',
      summary:
        'Owned end-to-end design and implementation of a global healthcare design system and clinical product UI architecture used across regulated care environments.',
      personaFocus:
        'Built around nurse, pharmacist, and clinical operations personas to reduce cognitive load, improve safety-critical flows, and support high-pressure decision-making.',
      highlights: [
        'Architected token-based theming with WCAG alignment and dark/light modes',
        'Standardized component behavior across teams and delivery pipelines',
        'Led UX audits and legacy UI consolidation to reduce duplication and improve adoption'
      ],
      images: [
        'ui-examples/bd/design-system.png',
        'ui-examples/bd/design-system-1.png',
        'ui-examples/bd/design-system-2.png',
        'ui-examples/bd/design-system-3.png',
        'ui-examples/bd/design-system-4.png',
        'ui-examples/bd/design-system-5.png'
      ]
    },
    {
      id: 'bisvine',
      company: 'Bisvine',
      title: 'EHR Workflow Modernization',
      role: 'UX Lead + Front-End Partner',
      timeframe: 'Multi-year Programs',
      category: 'Clinical Workflows',
      summary:
        'Designed EHR and clinical coordination interfaces focused on complex data capture, case progression, and decision support in regulated environments.',
      personaFocus:
        'Structured task flows around clinician and care-team personas to support role-specific context, reduce handoff errors, and make next actions explicit.',
      highlights: [
        'Mapped end-to-end workflow states and exception handling paths',
        'Improved information hierarchy for safety and time-to-action',
        'Aligned design decisions with accessibility and compliance constraints'
      ],
      images: [
        'ui-examples/ehr/ehr1.png',
        'ui-examples/ehr/ehr2.png',
        'ui-examples/ehr/ehr3.png',
        'ui-examples/ehr/ehr4.png',
        'ui-examples/ehr/ehr5.png',
        'ui-examples/ehr/ehr6.png'
      ]
    },
    {
      id: 'myhealthevet',
      company: 'MyHealtheVet',
      title: 'Patient Portal + Service UX',
      role: 'Senior UI/UX Designer',
      timeframe: 'Program Engagement',
      category: 'Public-Sector Healthcare UX',
      summary:
        'Contributed to patient-facing healthcare experiences with a focus on trust, readability, and service completion across complex administrative pathways.',
      personaFocus:
        'Used veteran and caregiver personas to shape IA, wayfinding, and content clarity so users could self-serve critical tasks with fewer support escalations.',
      highlights: [
        'Refined navigation and content hierarchy for task confidence',
        'Improved component consistency across portal touchpoints',
        'Emphasized plain-language UX patterns for broader accessibility'
      ],
      images: [
        'ui-examples/myhealthevet.gov/myhealthevet1.jpg',
        'ui-examples/myhealthevet.gov/myhealthevet2.jpg',
        'ui-examples/myhealthevet.gov/myhealthevet3.jpg'
      ]
    },
    {
      id: 'snh-ncc',
      company: 'SNH/NCC',
      title: 'Automotive CRM MVP',
      role: 'Lead Product Designer + UI Engineer',
      timeframe: '2015 - 2016',
      category: 'Automotive + CRM',
      summary:
        'Delivered UX and front-end architecture for a next-generation automotive CRM MVP built around dealership workflows, lead handling, and conversion operations.',
      personaFocus:
        'Modeled sales manager, finance, and service personas to prioritize dashboards, lead context, and follow-up actions based on role-specific objectives.',
      highlights: [
        'Built responsive UI components in Angular/HTML/SCSS',
        'Rapidly iterated flows from wireframes to production-ready UI',
        'Improved workflow clarity across inventory, deal flow, and team handoffs'
      ],
      images: [
        'ui-examples/NCC-credit/ncc-1.png',
        'ui-examples/NCC-credit/ncc-2.png',
        'ui-examples/NCC-credit/ncc-3.png',
        'ui-examples/NCC-credit/ncc-4.png',
        'ui-examples/NCC-credit/ncc-5.jpeg'
      ]
    },
    {
      id: 'servicenow',
      company: 'ServiceNow',
      title: 'Shared UI Patterns + Task Boards',
      role: 'Sr. UI Designer + Front-End Developer',
      timeframe: '2014 - 2015',
      category: 'Enterprise Platform UX',
      summary:
        'Designed and developed reusable UI patterns and production-ready front-end features across internal and customer-facing ServiceNow experiences.',
      personaFocus:
        'Defined patterns using service agent and admin personas so information density, queue management, and status feedback matched real task pressure.',
      highlights: [
        'Built scalable style-guide patterns for speed and visual consistency',
        'Shipped features tied to task management and workflow operations',
        'Partnered closely with product and engineering for implementation quality'
      ],
      images: [
        'ui-examples/ServiceNow/serviceNow1.png',
        'ui-examples/ServiceNow/serviceNow2.png',
        'ui-examples/ServiceNow/serviceNow3.png',
        'ui-examples/ServiceNow/serviceNow4.jpeg',
        'ui-examples/ServiceNow/serviceNow5.jpg'
      ]
    },
    {
      id: 'dealersocket',
      company: 'DealerSocket',
      title: 'Dealer CRM Redesign',
      role: 'Sr. UI/UX Designer + Front-End Developer',
      timeframe: '2013 - 2014',
      category: 'Dealer Platform UX',
      summary:
        'Led redesign of dealer CRM experiences across desktop and mobile, modernizing architecture and improving usability for daily sales operations.',
      personaFocus:
        'Created role-based flows for sales reps, managers, and dealership operations to streamline lead lifecycle management and reduce friction.',
      highlights: [
        'Built responsive, modular UI with Angular, SCSS, and Kendo UI',
        'Validated flows through user testing and stakeholder feedback',
        'Improved implementation velocity with reusable front-end patterns'
      ],
      images: [
        'ui-examples/dealersocket/dealersocket1.png',
        'ui-examples/dealersocket/dealersocket2.jpeg',
        'ui-examples/dealersocket/dealersocket3.jpeg',
        'ui-examples/dealersocket/dealersocket4.jpeg'
      ]
    },
    {
      id: 'cisco',
      company: 'Cisco',
      title: 'ServiceExchange UX + Front-End',
      role: 'UI/UX Designer + Front-End Developer',
      timeframe: '2011 - 2013',
      category: 'B2B Service Operations',
      summary:
        'Designed workflow-centric screens and coded front-end templates for quoting, contract management, and service operations in the ServiceExchange platform.',
      personaFocus:
        'Grounded interaction design in support-agent and account-management personas to surface contract risk, entitlement context, and next-best actions.',
      highlights: [
        'Created wireframes, hi-fi mockups, and production-ready front-end assets',
        'Improved multi-client template consistency and responsiveness',
        'Delivered UI assets aligned with sales, support, and marketing usage'
      ],
      images: [
        'ui-examples/maintainence-net/484327.avif',
        'ui-examples/maintainence-net/screen-shot-2015-07-07-at-9-40-28-am.webp'
      ]
    },
    {
      id: 'trowe',
      company: 'Trowe Price',
      title: 'Financial Planning UI Concepts',
      role: 'Product Designer',
      timeframe: 'Concept + Prototype Work',
      category: 'Fintech UX',
      summary:
        'Explored planning-focused interfaces for account visibility, wage contribution clarity, and goal-based spending decisions.',
      personaFocus:
        'Applied investor persona segmentation to tune data framing, confidence cues, and progressive disclosure across planning tasks.',
      highlights: [
        'Built concept flows for long-horizon financial decision support',
        'Balanced data density with readability for non-expert users',
        'Focused on trust signals, comprehension, and guided action'
      ],
      images: [
        'ui-examples/TrowePrice/Accounts%20%26%20assets.jpg',
        'ui-examples/TrowePrice/Quick%20Start%20Option%202-B.jpg',
        'ui-examples/TrowePrice/Quick%20Start%20Option%202-B-1.jpg',
        'ui-examples/TrowePrice/Quick%20Start%20Option%202-B-2.jpg',
        'ui-examples/TrowePrice/Quiz%20-%20Single%20-%20Step%2013.jpg',
        'ui-examples/TrowePrice/Quiz%20-%20Single%20-%20Step%2013-2.jpg',
        'ui-examples/TrowePrice/Spending%20goals.jpg',
        'ui-examples/TrowePrice/Wages%20and%20contributions%20-%20%25%20of%20annual.jpg'
      ]
    }
  ];

  private readonly order = ['rimini', 'trowe', 'teradata', 'bd', 'bisvine', 'myhealthevet', 'snh-ncc', 'servicenow', 'dealersocket', 'cisco'];

  private readonly filterToProjectIds: Record<Exclude<WorkFilterKey, 'all'>, string[]> = {
    'design-systems': ['teradata', 'bd', 'rimini'],
    'healthcare-ux': ['bd', 'bisvine', 'myhealthevet', 'servicenow'],
    'ai-workflows': ['rimini', 'teradata'],
    'angular-front-end': ['teradata', 'bd', 'servicenow', 'dealersocket', 'snh-ncc'],
    'automotive-crm': ['snh-ncc', 'dealersocket'],
    'gov-healthcare': ['myhealthevet'],
    fintech: ['trowe'],
    'enterprise-platform': ['servicenow', 'cisco', 'rimini']
  };

  constructor(private route: ActivatedRoute, private router: Router, private aiService: AiChatService) {}

  ngOnInit(): void {
    if (this.embedded) {
      return;
    }

    this.route.queryParamMap.subscribe(params => {
      const prompt = (params.get('q') ?? '').trim();
      const queryFilter = params.get('filter');

      this.queryPrompt = prompt;

      if (prompt) {
        const intent = this.aiService.analyzePrompt(prompt);
        this.agentReply = intent.response;
        this.activeFilter = this.isFilterKey(queryFilter) ? queryFilter : intent.filter;
        return;
      }

      this.activeFilter = this.isFilterKey(queryFilter) ? queryFilter : 'all';
      this.agentReply =
        this.activeFilter === 'all'
          ? 'These are the related projects Robert has worked on. Ask for a focus area like design systems, healthcare UX, AI workflows, Angular, or personal background.'
          : `Showing filtered work for ${this.filterOptions.find(option => option.key === this.activeFilter)?.label}.`;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.embedded) {
      return;
    }

    if (changes['externalFilter'] && this.externalFilter) {
      this.activeFilter = this.externalFilter;
    }

    if (changes['externalPrompt'] && this.externalPrompt.trim()) {
      this.queryPrompt = this.externalPrompt.trim();
    }

    if (changes['externalAgentReply'] && this.externalAgentReply.trim()) {
      this.agentReply = this.externalAgentReply.trim();
    }
  }

  get orderedEntries(): WorkEntry[] {
    const orderMap = new Map(this.order.map((id, index) => [id, index]));
    return [...this.entries].sort((a, b) => (orderMap.get(a.id) ?? 999) - (orderMap.get(b.id) ?? 999));
  }

  get filteredEntries(): WorkEntry[] {
    if (this.activeFilter === 'all') {
      return this.orderedEntries;
    }

    const allowed = new Set(this.filterToProjectIds[this.activeFilter]);
    return this.orderedEntries.filter(entry => allowed.has(entry.id));
  }

  setFilter(filter: WorkFilterKey): void {
    this.activeFilter = filter;
    if (this.embedded) {
      return;
    }

    const q = this.route.snapshot.queryParamMap.get('q');

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        ...(q ? { q } : {}),
        filter
      },
      queryParamsHandling: ''
    });
  }

  getActiveImage(entry: WorkEntry): string {
    const selectedIndex = this.activeImageIndexByEntryId[entry.id] ?? 0;
    return entry.images[selectedIndex] ?? entry.images[0];
  }

  setActiveImage(entry: WorkEntry, imageIndex: number): void {
    this.activeImageIndexByEntryId[entry.id] = imageIndex;
  }

  isActiveImage(entry: WorkEntry, imageIndex: number): boolean {
    return (this.activeImageIndexByEntryId[entry.id] ?? 0) === imageIndex;
  }

  openModal(entry: WorkEntry, imageIndex: number): void {
    this.modalEntryId = entry.id;
    this.modalImageIndex = imageIndex;
  }

  closeModal(): void {
    this.modalEntryId = null;
  }

  previousModalImage(): void {
    const entry = this.getModalEntry();
    if (!entry) return;

    const total = entry.images.length;
    this.modalImageIndex = (this.modalImageIndex - 1 + total) % total;
    this.setActiveImage(entry, this.modalImageIndex);
  }

  nextModalImage(): void {
    const entry = this.getModalEntry();
    if (!entry) return;

    const total = entry.images.length;
    this.modalImageIndex = (this.modalImageIndex + 1) % total;
    this.setActiveImage(entry, this.modalImageIndex);
  }

  getModalImage(): string {
    const entry = this.getModalEntry();
    return entry ? entry.images[this.modalImageIndex] : '';
  }

  getModalCompany(): string {
    return this.getModalEntry()?.company ?? 'Project';
  }

  private getModalEntry(): WorkEntry | undefined {
    return this.modalEntryId ? this.entries.find(entry => entry.id === this.modalEntryId) : undefined;
  }

  private isFilterKey(value: string | null): value is WorkFilterKey {
    if (!value) return false;
    return this.filterOptions.some(option => option.key === value);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.modalEntryId) this.closeModal();
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft(): void {
    if (this.modalEntryId) this.previousModalImage();
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight(): void {
    if (this.modalEntryId) this.nextModalImage();
  }
}
