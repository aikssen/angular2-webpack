import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';

// routes declarations, the / is ommited
export const HomeRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' } // 404 redirect
];
