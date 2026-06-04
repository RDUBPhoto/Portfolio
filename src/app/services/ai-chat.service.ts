import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PORTFOLIO_AI_CONTEXT } from '../data/portfolio-ai-context';

export type PortfolioIntent = {
  filter: WorkFilterKey;
  relatedProjectIds: string[];
  response: string;
  restricted: boolean;
  action?: {
    label: string;
    filter: WorkFilterKey;
    prompt: string;
  };
};

export type WorkFilterKey =
  | 'all'
  | 'design-systems'
  | 'healthcare-ux'
  | 'ai-workflows'
  | 'angular-front-end'
  | 'automotive-crm'
  | 'gov-healthcare'
  | 'fintech'
  | 'enterprise-platform';

export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
  action?: {
    label: string;
    filter: WorkFilterKey;
    prompt: string;
  };
};

@Injectable({ providedIn: 'root' })
export class AiChatService {
  readonly conversation: ChatMessage[] = [];

  private readonly guardrailReply = PORTFOLIO_AI_CONTEXT.guardrailReply;
  private readonly personalFactsReply = PORTFOLIO_AI_CONTEXT.personalFactsReply;

  getAiResponse(prompt: string): Observable<string> {
    const intent = this.analyzePrompt(prompt);
    return of(intent.response);
  }

  addMessage(message: ChatMessage): void {
    this.conversation.push(message);
  }

  clearConversation(): void {
    this.conversation.splice(0, this.conversation.length);
  }

  analyzePrompt(prompt: string): PortfolioIntent {
    const input = prompt.toLowerCase().trim();

    if (!input) {
      return {
        filter: 'all',
        relatedProjectIds: [],
        response: this.guardrailReply,
        restricted: true
      };
    }

    const faqMatch = PORTFOLIO_AI_CONTEXT.faqAnswers.find(item => this.matchesAny(input, item.keywords));
    if (faqMatch) {
      return {
        filter: faqMatch.filter,
        relatedProjectIds: [...faqMatch.relatedProjectIds],
        response: faqMatch.response,
        restricted: false
      };
    }

    if (this.matchesAny(input, [...PORTFOLIO_AI_CONTEXT.personalKeywords])) {
      return {
        filter: 'all',
        relatedProjectIds: [],
        response: `${this.personalFactsReply} If you want to see how he applies that mindset to shipped product work, click below and I will show you relevant examples.`,
        restricted: false,
        action: {
          label: 'Click here to view matching work',
          filter: 'enterprise-platform',
          prompt: 'Show how Robert applies this mindset to cross-functional product delivery'
        }
      };
    }

    if (this.matchesAny(input, ['rimini', 'vistalumina', 'w-9', 'erp'])) {
      return {
        filter: 'ai-workflows',
        relatedProjectIds: ['rimini'],
        response:
          'At VistaLumina / RiminiStreet, Robert led senior product design and UX engineering for an AI-powered ERP in Angular 19+. The work included conversational UX, ServiceNow/SAP-connected workflows, AI onboarding, document intelligence for scanned and handwritten W-9s, and token-based design system foundations.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['teradata'])) {
      return {
        filter: 'design-systems',
        relatedProjectIds: ['teradata'],
        response:
          'At Teradata, Robert worked as a Design Systems Architect and Front-End Developer, leading multi-brand design system architecture across Figma and Angular. He implemented CSS variable token architecture for brand switching, dark mode, accessibility alignment, and scalable Storybook/Napsack handoff.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['bd', 'carefusion', 'care fusion'])) {
      return {
        filter: 'healthcare-ux',
        relatedProjectIds: ['bd'],
        response:
          'At BD/CareFusion, Robert served as a Senior Lead Product Designer and Front-End Architect across global healthcare platforms. He led multi-brand design systems, built atomic Angular component libraries, standardized accessibility and theming, and supported HIPAA-aligned internal product experiences.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['servicenow', 'service now'])) {
      return {
        filter: 'enterprise-platform',
        relatedProjectIds: ['servicenow'],
        response:
          'At ServiceNow, Robert worked as a senior UI designer and front-end developer, creating scalable style-guide systems and reusable SCSS components for workflow products including Visual Task Boards.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['dealersocket', 'dealer socket'])) {
      return {
        filter: 'automotive-crm',
        relatedProjectIds: ['dealersocket'],
        response:
          'At DealerSocket, Robert led CRM redesign work across UX and front-end implementation, modernizing legacy flows with responsive Angular, SCSS, and Kendo/Telerik patterns for automotive sales teams.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['maintenance net', 'maintenancenet', 'cisco', 'serviceexchange', 'service exchange'])) {
      return {
        filter: 'enterprise-platform',
        relatedProjectIds: ['cisco'],
        response:
          'At MaintenanceNet/Cisco, Robert designed and developed ServiceExchange quoting and contract workflow interfaces, with emphasis on cross-browser UX, prototyping, and high-performance enterprise workflows.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['bisvine', 'emr', 'ehr'])) {
      return {
        filter: 'healthcare-ux',
        relatedProjectIds: ['bisvine'],
        response:
          'BisVine is Robert’s healthcare EMR/EHR example for allied health practices, including acupuncture, chiropractic, and massage. The work focused on accessible workflows, clear clinical information structure, and modern healthcare UX.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['myhealthevet', 'my health e vet', 'veteran'])) {
      return {
        filter: 'gov-healthcare',
        relatedProjectIds: ['myhealthevet'],
        response:
          'MyHealtheVet is Robert’s government healthcare UX example, focused on accessible service clarity, veteran-facing information architecture, and persona-aware flows for public-sector healthcare experiences.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['trowe', 't rowe', 't. rowe', 't rowe price'])) {
      return {
        filter: 'fintech',
        relatedProjectIds: ['trowe'],
        response:
          'Trowe is Robert’s fintech-focused product UI example, highlighting planning UX, confidence-building data presentation, and persona segmentation for investment and portfolio planning experiences.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['design system', 'design systems', 'token', 'storybook', 'component library'])) {
      return {
        filter: 'design-systems',
        relatedProjectIds: ['teradata', 'bd', 'rimini'],
        response:
          'These are the related projects Robert has worked on for design systems: Teradata, BD, and Rimini. They show tokenized theming, scalable component architecture, and design-to-code execution.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['healthcare', 'clinical', 'ehr', 'patient', 'wcag', 'accessibility'])) {
      return {
        filter: 'healthcare-ux',
        relatedProjectIds: ['bd', 'bisvine', 'myhealthevet'],
        response:
          'These are the strongest healthcare-aligned examples from Robert’s work: BD, Bisvine EHR, and MyHealtheVet. They focus on regulated UX, clarity under pressure, and persona-led flow design.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['ai', 'assistant', 'workflow automation', 'document intelligence', 'agent'])) {
      return {
        filter: 'ai-workflows',
        relatedProjectIds: ['rimini', 'teradata'],
        response:
          'For AI-enabled work, Robert’s best matches are Rimini and Teradata. These projects highlight conversational workflows, role-aware UX, and intelligent task routing.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['angular', 'front-end', 'frontend', 'typescript', 'implementation', 'figma to code'])) {
      return {
        filter: 'angular-front-end',
        relatedProjectIds: ['teradata', 'bd', 'servicenow', 'dealersocket', 'snh-ncc'],
        response:
          'For front-end and Angular execution, these projects are most relevant: Teradata, BD, ServiceNow, DealerSocket, and SNH/NCC. They show end-to-end UX to production implementation.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['automotive', 'dealer', 'crm', 'sales workflow'])) {
      return {
        filter: 'automotive-crm',
        relatedProjectIds: ['snh-ncc', 'dealersocket'],
        response:
          'For automotive and CRM work, Robert’s key examples are SNH/NCC and DealerSocket, focused on role-based workflows for sales, finance, and operations.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['government', 'veteran', 'public sector', 'myhealthevet'])) {
      return {
        filter: 'gov-healthcare',
        relatedProjectIds: ['myhealthevet'],
        response:
          'For government healthcare UX, MyHealtheVet is the primary match. It shows service clarity, accessibility, and persona-aware information architecture.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['finance', 'fintech', 'investment', 'portfolio planning', 'trowe'])) {
      return {
        filter: 'fintech',
        relatedProjectIds: ['trowe'],
        response:
          'For fintech-focused product UI, Trowe is the best match. It demonstrates planning UX, confidence-building data presentation, and persona segmentation.',
        restricted: false
      };
    }

    if (this.matchesAny(input, ['enterprise', 'platform', 'operations'])) {
      return {
        filter: 'enterprise-platform',
        relatedProjectIds: ['servicenow', 'cisco', 'rimini'],
        response:
          'For enterprise platform patterns, Robert’s strongest examples are ServiceNow, Cisco, and Rimini, with emphasis on operational UX and scalable interaction systems.',
        restricted: false
      };
    }

    if (
      this.matchesAny(input, [
        'ux',
        'ui',
        'career',
        'resume',
        'experience',
        'projects',
        'work',
        'persona',
        'research',
        'challenge',
        'case study'
      ])
    ) {
      return {
        filter: 'all',
        relatedProjectIds: ['rimini', 'trowe', 'teradata', 'bd', 'bisvine', 'myhealthevet', 'snh-ncc', 'servicenow', 'dealersocket', 'cisco'],
        response:
          'Here is a curated view of Robert’s relevant work. I can narrow this to design systems, healthcare UX, AI workflows, Angular implementation, fintech, or automotive CRM if you want a focused view.',
        restricted: false
      };
    }

    return {
      filter: 'all',
      relatedProjectIds: [],
      response: this.guardrailReply,
      restricted: true
    };
  }

  private matchesAny(input: string, terms: readonly string[]): boolean {
    return terms.some(term => input.includes(term));
  }

}
