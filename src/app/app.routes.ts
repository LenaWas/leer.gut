import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestsComponent } from './requests/requests.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Startseite',
    component: DashboardComponent,
  },
  {
    path: 'register',
    title: 'Registrierung',
    component: RegisterComponent,
  },
  {
    path: 'login',
    title: 'LogIn',
    component: LoginComponent,
  },
  {
    path: 'map',
    title: 'Karte',
    component: MapComponent,
  },
  {
    path: 'mailbox',
    title: 'Postfach',
    component: MailboxComponent,
  },
  {
    path: 'requests',
    title: 'Anfragen',
    component: RequestsComponent,
  },
  {
    path: '**',
    title: 'Ups!',
    component: NotFoundComponent,
  },
];
