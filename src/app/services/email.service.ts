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

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emails: Email[] = [
    {
      id: '1',
      sender: 'alice@example.com',
      subject: 'Mietvertrag unterschrieben',
      preview: 'Hallo, anbei der unterschriebene Vertrag...',
      sentAt: new Date(),
      isRead: false
    },
    {
      id: '2',
      sender: 'bob@example.com',
      subject: 'Frage zur Immobilie',
      preview: 'Ist die Wohnung noch verfügbar?',
      sentAt: new Date(Date.now() - 86400000),
      isRead: true
    }
  ];

  getEmails(): Observable<Email[]> {
    return of(this.emails);
  }
}
