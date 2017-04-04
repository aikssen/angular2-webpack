import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from '../modules/home/home.routes';
import { OtherRoutes } from '../modules/other/other.routes';

const appRoutes: Routes = [
  ...OtherRoutes,
  ...HomeRoutes // must be the last one
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
