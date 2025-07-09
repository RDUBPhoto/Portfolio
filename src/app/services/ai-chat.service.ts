import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AiChatService {
  constructor(private http: HttpClient) {}

  getAiResponse(prompt: string): Observable<string> {
    return this.http
      .post<{ response: string }>('http://localhost:3000/api/chat', { prompt })
      .pipe(map(res => res.response));
  }
}

