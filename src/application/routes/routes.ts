import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const appRoutes = RouterModule.forRoot(routes);