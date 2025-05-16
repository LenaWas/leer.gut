import { Component } from '@angular/core';
import { SupabaseAuthService } from '../services/supabase-auth.service'; // Pfad ggf. anpassen

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: SupabaseAuthService) {}

  async onRegister(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.querySelector('[name="email"]') as HTMLInputElement).value;
    const password = (form.querySelector('[name="password"]') as HTMLInputElement).value;
    const passwordRepeat = (form.querySelector('[name="passwordRepeat"]') as HTMLInputElement).value;

    if (password !== passwordRepeat) {
      alert('Die Passwörter stimmen nicht überein!');
      return;
    }

    try {
      const { data, error } = await this.authService.signUp(email, password);

      if (error) {
        alert('Registrierung fehlgeschlagen: ' + error.message);
      } else {
        alert('Registrierung erfolgreich! Bitte bestätige deine E-Mail.');
        form.reset(); // optional
      }
    } catch (err) {
      console.error('Signup-Fehler:', err);
      alert('Ein unerwarteter Fehler ist aufgetreten.');
    }
  }
}
