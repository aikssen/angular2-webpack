import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// bootstrap with Office.js for in Office
Office.initialize = () => {
  console.log("Office init: bootstrapping Angular2");
  platformBrowserDynamic().bootstrapModule(AppModule);
}
