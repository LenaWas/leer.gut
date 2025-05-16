import { Component, OnInit } from '@angular/core';
import { Email, EmailService } from '../services/email.service';

@Component({
  selector: 'app-email-overview',
  templateUrl: './email-overview.component.html',
  styleUrls: ['./email-overview.component.scss']
})
export class EmailOverviewComponent implements OnInit {
  emails: Email[] = [];

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((data) => {
      this.emails = data;
    });
  }
}
