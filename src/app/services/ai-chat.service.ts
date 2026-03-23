import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../environments/environment';
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
  constructor(private http: HttpClient) {}
  readonly conversation: ChatMessage[] = [];

  private readonly guardrailReply = PORTFOLIO_AI_CONTEXT.guardrailReply;
  private readonly personalFactsReply = PORTFOLIO_AI_CONTEXT.personalFactsReply;

  getAiResponse(prompt: string): Observable<string> {
    const intent = this.analyzePrompt(prompt);
    const agentPrompt = this.buildAgentPrompt(prompt);

    return this.http.post<{ response?: string; message?: string; output?: string }>(`${environment.apiUrl}/api/chat`, { prompt: agentPrompt }).pipe(
      map(result => {
        const raw = (result.response || result.message || result.output || '').trim();
        if (!raw) {
          return intent.response;
        }

        // If prompt is Robert-specific but backend still returns generic guardrail, use local trusted answer.
        if (!intent.restricted && this.looksLikeGuardrail(raw)) {
          return intent.response;
        }

        return raw;
      }),
      catchError(() => of(intent.response))
    );
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
        relatedProjectIds: ['bd', 'bisvine', 'myhealthevet', 'servicenow'],
        response:
          'These are the strongest healthcare-aligned examples from Robert’s work: BD, Bisvine EHR, MyHealtheVet, and ServiceNow workflows. They focus on regulated UX, clarity under pressure, and persona-led flow design.',
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

    if (this.matchesAny(input, ['servicenow', 'enterprise', 'platform', 'operations'])) {
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

  private matchesAny(input: string, terms: string[]): boolean {
    return terms.some(term => input.includes(term));
  }

  private looksLikeGuardrail(content: string): boolean {
    const normalized = content.toLowerCase();
    return normalized.includes("i'm trained to talk only") || normalized.includes("only answer based on robert");
  }

  private buildAgentPrompt(userPrompt: string): string {
    return `
You are Robert Wojtow's portfolio AI assistant.

Hard guardrails:
- You may only answer based on Robert's known career history and personal profile below.
- If user asks general knowledge unrelated to Robert, reply with this exact message:
  "${this.guardrailReply}"
- Do not fabricate companies, roles, dates, or personal facts.
- Keep answers concise and confident.

Known career profile:
${PORTFOLIO_AI_CONTEXT.careerProfile.map(line => `- ${line}`).join('\n')}

Known personal profile:
${PORTFOLIO_AI_CONTEXT.personalProfile.map(line => `- ${line}`).join('\n')}

User question:
${userPrompt}
`.trim();
  }
}
