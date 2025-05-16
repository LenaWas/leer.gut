import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Email {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  sentAt: Date;
  isRead: boolean;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  private emails: Email[] = [
    {
      id: '1',
      sender: 'max@example.com',
      subject: 'Willkommen!',
      preview: 'Hallo, willkommen bei unserem Service.',
      sentAt: new Date(),
      isRead: false
    },
    {
      id: '2',
      sender: 'sophie@example.com',
      subject: 'Mietvertrag eingegangen',
      preview: 'Anbei finden Sie den unterschriebenen Vertrag...',
      sentAt: new Date(Date.now() - 86400000),
      isRead: true
    }
  ];

  getEmails(): Observable<Email[]> {
    return of(this.emails);
  }
}
