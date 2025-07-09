import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiChatService } from '../../services/ai-chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  userInput = '';
  messages: { role: string; content: string }[] = [
    { role: 'assistant', content: 'Hi there! Ask me anything about my work or UX process.' }
  ];

  suggestedPrompts = [
    'Show me a project with a full design system.',
    'What’s your front-end development process?',
    'Do you have healthcare UX experience?',
    'Show me your UI design work.'
  ];

  constructor(private aiService: AiChatService) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    const prompt = this.userInput;
    this.messages.push({ role: 'user', content: prompt });
    this.userInput = '';

    this.aiService.getAiResponse(prompt).subscribe((response: string) => {
      this.messages.push({ role: 'assistant', content: response });
    });
  }

  usePrompt(prompt: string) {
    this.userInput = prompt;
    this.sendMessage();
  }
}
