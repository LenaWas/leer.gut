import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe, DatePipe } from '@angular/common';
import { EmailService, Email } from '../services/email.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mailbox',
  standalone: true,
  imports: [CommonModule, AsyncPipe, DatePipe],
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  emails$!: Observable<Email[]>;
  selectedEmail: Email | null = null;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emails$ = this.emailService.getEmails();
  }

  selectEmail(email: Email) {
    this.selectedEmail = email;
    email.isRead = true;
  }
}
