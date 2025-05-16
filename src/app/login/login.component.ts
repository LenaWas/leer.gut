import { Component } from '@angular/core';
import { SupabaseAuthService } from '../services/supabase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: SupabaseAuthService) {}

  async onLogin(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.querySelector('[name="email"]') as HTMLInputElement).value;
    const password = (form.querySelector('[name="password"]') as HTMLInputElement).value;

    try {
      const { data, error } = await this.authService.signIn(email, password);

      if (error) {
        alert('Anmeldung fehlgeschlagen: ' + error.message);
      } else {
        alert('Anmeldung erfolgreich!');
        form.reset();
      }
    } catch (err) {
      console.error('Login-Fehler:', err);
      alert('Ein unerwarteter Fehler ist aufgetreten.');
    }
  }
}
