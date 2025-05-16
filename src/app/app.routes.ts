import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Startseite',
    component: LoginComponent,
  },
  {
    path: 'map',
    title: 'Karte',
    component: MapComponent,
  },
  {
    path: '**',
    title: 'Ups!',
    component: NotFoundComponent,
  },
];
