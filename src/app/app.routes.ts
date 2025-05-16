import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Startseite',
        component: LoginComponent
    },
    {
        path: '**',
        title: 'Ups!',
        component: NotFoundComponent
    }
];
