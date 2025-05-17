import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestsComponent } from './requests/requests.component';
import { ContractsComponent } from './contracts/contracts.component';
import { SearchComponent } from './search/search.component';
import { PropertyComponent } from './search/property/property.component';
import { UserComponent } from './user/user.component';

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
    path: 'search',
    title: 'Suche',
    component: SearchComponent,
  },
  {
    path: 'contracts',
    title: 'Veträge',
    component: ContractsComponent,
  },
  {
    path: 'property',
    title: 'Immobilie xyz',
    component: PropertyComponent,
  },
  {
    path: 'user',
    title: 'Dein Konto',
    component: UserComponent,
  },
  {
    path: '**',
    title: 'Ups!',
    component: NotFoundComponent,
  },
];
