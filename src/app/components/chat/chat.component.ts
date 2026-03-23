import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiChatService, ChatMessage, WorkFilterKey } from '../../services/ai-chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewChecked {
  @Input() mode: 'hero' | 'dock' | 'widget' = 'hero';
  @Input() initialPrompt = '';
  @Input() initialAssistantMessage = '';
  @Output() openWork = new EventEmitter<{ prompt: string; filter: WorkFilterKey; response: string }>();

  userInput = '';
  loading = false;

  messages: ChatMessage[] = [];
  private seededContextKey = '';
  private lastRenderedStateKey = '';
  @ViewChildren('chatBody') chatBodies?: QueryList<ElementRef<HTMLElement>>;

  suggestedPrompts = [
    'Show design systems work',
    'Healthcare UX projects',
    'AI workflow examples',
    'What does Robert do outside work?'
  ];

  constructor(private aiService: AiChatService) {
    this.messages = this.aiService.conversation;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialPrompt'] && this.initialPrompt?.trim() && !this.userInput.trim()) {
      this.userInput = this.initialPrompt.trim();
    }

    if (this.mode !== 'hero') {
      const seedKey = `${this.initialPrompt}|${this.initialAssistantMessage}`;
      if (seedKey !== this.seededContextKey && (this.initialPrompt.trim() || this.initialAssistantMessage.trim())) {
        if (this.messages.length === 0) {
          if (this.initialPrompt.trim()) {
            this.aiService.addMessage({ role: 'user', content: this.initialPrompt.trim() });
          }
          if (this.initialAssistantMessage.trim()) {
            this.aiService.addMessage({ role: 'assistant', content: this.initialAssistantMessage.trim() });
          }
        }
        this.seededContextKey = seedKey;
      }
    }
  }

  ngAfterViewChecked(): void {
    const stateKey = `${this.mode}|${this.messages.length}|${this.loading}`;
    if (stateKey !== this.lastRenderedStateKey) {
      this.lastRenderedStateKey = stateKey;
      this.scrollChatToBottom();
    }
  }

  sendMessage() {
    if (!this.userInput.trim() || this.loading) return;

    const prompt = this.userInput.trim();
    const intent = this.aiService.analyzePrompt(prompt);
    this.aiService.addMessage({ role: 'user', content: prompt });
    this.userInput = '';
    this.loading = true;
    this.scrollChatToBottom();

    this.aiService.getAiResponse(prompt).subscribe({
      next: (response: string) => {
        const shouldMapWork = !intent.restricted && intent.relatedProjectIds.length > 0;
        const shouldAnnounceMap = this.mode === 'hero' && shouldMapWork;
        const assistantReply = shouldAnnounceMap ? `${response} I'll pull up the most relevant work examples now.` : response;

        this.aiService.addMessage({ role: 'assistant', content: assistantReply, action: intent.action });
        this.loading = false;
        this.scrollChatToBottom();

        if (shouldMapWork) {
          setTimeout(() => {
            this.openWork.emit({
              prompt,
              filter: intent.filter,
              response
            });
          }, 850);
        }
      },
      error: () => {
        this.aiService.addMessage({ role: 'assistant', content: 'Oops! Something went wrong.' });
        this.loading = false;
        this.scrollChatToBottom();
      }
    });
  }

  usePrompt(prompt: string) {
    this.userInput = prompt;
    this.sendMessage();
  }

  runMessageAction(message: ChatMessage): void {
    if (!message.action) {
      return;
    }

    this.openWork.emit({
      prompt: message.action.prompt,
      filter: message.action.filter,
      response: message.content
    });
  }

  private scrollChatToBottom(): void {
    requestAnimationFrame(() => {
      const element = this.chatBodies?.first?.nativeElement;
      if (element) {
        element.scrollTop = element.scrollHeight;
      }
    });
  }
}
