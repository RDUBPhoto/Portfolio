import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ChatComponent } from '../../components/chat/chat.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkPageComponent } from '../work/work-page/work-page.component';
import { WorkFilterKey } from '../../services/ai-chat.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ChatComponent, WorkPageComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('workCatalogueSection') workCatalogueSection?: ElementRef<HTMLElement>;
  @ViewChild('designProofSection') designProofSection?: ElementRef<HTMLElement>;
  @ViewChild('caseStudiesSection') caseStudiesSection?: ElementRef<HTMLElement>;
  @ViewChild('contactSection') contactSection?: ElementRef<HTMLElement>;

  readonly currentYear = new Date().getFullYear();
  selectedWorkFilter: WorkFilterKey | null = null;
  selectedPrompt = '';
  selectedAgentReply = '';
  mobileMenuOpen = false;
  chatWidgetOpen = true;
  showChatWidget = false;
  isSubmittingContact = false;
  contactStatus: 'idle' | 'success' | 'error' = 'idle';
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  private readonly formSubmitEndpoint = 'https://formsubmit.co/ajax/RDUBPhoto@gmail.com';

  readonly companyLogos = [
    { src: 'scroll-company-logos/Becton_Dickinson_logo.svg', alt: 'Becton Dickinson logo' },
    { src: 'scroll-company-logos/Cisco_logo.svg', alt: 'Cisco logo' },
    { src: 'scroll-company-logos/ServiceNow_logo.svg', alt: 'ServiceNow logo' },
    { src: 'scroll-company-logos/Teradata_logo.svg', alt: 'Teradata logo' },
    { src: 'scroll-company-logos/VehicleSolutionsDealerSocket.svg', alt: 'Vehicle Solutions DealerSocket logo' },
    { src: 'scroll-company-logos/riministreet.svg', alt: 'Rimini Street logo' }
  ];
  readonly loopingCompanyLogos = [...this.companyLogos, ...this.companyLogos];
  readonly designToCodeStages = [
    {
      title: '1) Token Source in Figma',
      description:
        'Design tokens are authored and governed in Figma (variables/components), creating a single source of truth for spacing, typography, color, and states.',
      image: 'ui-examples/RiminiStreet-vistalumina/design system token examples/rimini-tokens.jpg'
    },
    {
      title: '2) Pipeline to Azure DevOps + GitHub',
      description:
        'Tokens are synced through a CI pipeline to source control so every product team consumes the same canonical values and change history.',
      image: 'ui-examples/RiminiStreet-vistalumina/design system token examples/design-tokens-pipeline-azure.jpg'
    },
    {
      title: '3) Angular Consumption at Scale',
      description:
        'Generated token outputs feed Angular styling/scaffolding so 25 projects stay visually consistent while still supporting product-level extension.',
      image: 'ui-examples/RiminiStreet-vistalumina/design system token examples/variables-vscode.jpg'
    }
  ];
  readonly tokenJsonSnippet = `{
  "color": {
    "brand": { "primary": { "value": "#F28A21" } },
    "text": { "default": { "value": "#5B4D42" } }
  },
  "spacing": {
    "sm": { "value": "8px" },
    "md": { "value": "16px" },
    "lg": { "value": "24px" }
  }
}`;
  readonly angularTokenSnippet = `:root {
  --color-brand-primary: #F28A21;
  --color-text-default: #5B4D42;
  --space-md: 16px;
}

.app-card {
  padding: var(--space-md);
  color: var(--color-text-default);
  border-top: 3px solid var(--color-brand-primary);
}`;
  readonly caseStudies = [
    {
      company: 'Rimini / VistaLumina',
      title: 'AI ERP Workflow Assistant',
      challenge: 'Operations teams were losing time in manual onboarding and request routing.',
      approach:
        'Designed conversational task flows, role-aware dashboards, and AI-assisted document parsing tied to real logistics and approval workflows.',
      outcome:
        'Reduced clicks and decision friction, with clearer next actions for onboarding, inventory, and fulfillment personas.',
      tags: ['AI workflow', 'persona UX', 'enterprise operations']
    },
    {
      company: 'Teradata',
      title: 'Multi-Brand Design System at Scale',
      challenge: 'Product lines needed consistency without blocking brand flexibility.',
      approach:
        'Built tokenized theming, Angular components, and Storybook documentation to connect design and engineering implementation.',
      outcome:
        'Faster design-to-code delivery and stronger accessibility consistency across enterprise surfaces.',
      tags: ['design systems', 'Angular', 'Storybook']
    },
    {
      company: 'BD / CareFusion',
      title: 'Healthcare UX + Clinical Design System',
      challenge: 'Clinical teams needed safer, clearer interfaces in regulated environments.',
      approach:
        'Mapped nurse and operations personas to simplify dense workflows, then standardized components with WCAG-aligned theming.',
      outcome:
        'Improved usability in high-pressure contexts and reduced UI fragmentation across platforms.',
      tags: ['healthcare UX', 'WCAG', 'persona-led design']
    },
    {
      company: 'ServiceNow + Cisco + DealerSocket',
      title: 'Enterprise Workflow Modernization',
      challenge: 'Legacy enterprise workflows were inconsistent and slowed team execution.',
      approach:
        'Redesigned key journey paths, introduced reusable front-end patterns, and validated flows with user/stakeholder feedback.',
      outcome:
        'Higher workflow clarity, faster iteration, and better alignment between UX strategy and production delivery.',
      tags: ['front-end architecture', 'workflow UX', 'enterprise platforms']
    }
  ];

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.syncChatWidgetVisibility();
  }

  onOpenWork(event: { prompt: string; filter: WorkFilterKey; response: string }): void {
    this.chatWidgetOpen = true;
    this.showChatWidget = true;
    this.selectedWorkFilter = event.filter;
    this.selectedPrompt = event.prompt;
    this.selectedAgentReply = event.response;

    requestAnimationFrame(() => {
      this.workCatalogueSection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  toggleChatWidget(): void {
    this.chatWidgetOpen = !this.chatWidgetOpen;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  scrollToSection(sectionId: 'top' | 'contact' | 'work-catalogue' | 'design-proof' | 'case-studies', event?: Event): void {
    event?.preventDefault();
    this.mobileMenuOpen = false;
    const scroller = (document.scrollingElement || document.documentElement) as HTMLElement;

    if (sectionId === 'top') {
      scroller.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sectionMap: Record<'contact' | 'work-catalogue' | 'design-proof' | 'case-studies', HTMLElement | undefined> = {
      'design-proof': this.designProofSection?.nativeElement,
      'case-studies': this.caseStudiesSection?.nativeElement,
      contact: this.contactSection?.nativeElement,
      'work-catalogue': this.workCatalogueSection?.nativeElement
    };

    const target = sectionMap[sectionId as 'contact' | 'work-catalogue' | 'design-proof' | 'case-studies'];
    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + scroller.scrollTop - 20;
    scroller.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  }

  submitContactForm(): void {
    if (this.isSubmittingContact) {
      return;
    }

    const payload = {
      name: this.contactForm.name.trim(),
      email: this.contactForm.email.trim(),
      subject: this.contactForm.subject.trim(),
      message: this.contactForm.message.trim()
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      return;
    }

    this.isSubmittingContact = true;
    this.contactStatus = 'idle';

    const sendViaFormSubmit = (): Observable<unknown> =>
      this.http.post(
        this.formSubmitEndpoint,
        {
          ...payload,
          _subject: `Portfolio contact: ${payload.subject}`,
          _captcha: 'false',
          _template: 'table'
        },
        {
          headers: {
            Accept: 'application/json'
          }
        }
      );

    const request$ = environment.production
      ? sendViaFormSubmit()
      : this.http.post(`${environment.apiUrl}/api/contact`, payload).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 404) {
              return this.http.post(`${environment.apiUrl}/contact`, payload);
            }
            return throwError(() => error);
          }),
          catchError(() => sendViaFormSubmit())
        );

    request$.subscribe({
      next: () => {
        this.isSubmittingContact = false;
        this.contactStatus = 'success';
        this.contactForm = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };

        setTimeout(() => {
          this.contactStatus = 'idle';
        }, 5000);
      },
      error: () => {
        this.isSubmittingContact = false;
        this.contactStatus = 'error';
      }
    });
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onViewportChange(): void {
    this.syncChatWidgetVisibility();
  }

  private syncChatWidgetVisibility(): void {
    const section = this.workCatalogueSection?.nativeElement;
    if (!section) {
      this.showChatWidget = false;
      return;
    }

    const rect = section.getBoundingClientRect();
    const threshold = window.innerHeight * 0.45;
    this.showChatWidget = rect.top <= threshold;
  }
}
