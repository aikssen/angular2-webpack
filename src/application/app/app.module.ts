import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import appRoutes from '../routes/routes';

import { AppComponent } from './app.component';
import { OfficeUiModule } from '../components/office-ui/office-ui.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    OfficeUiModule
  ],
  declarations: [ 
    AppComponent 
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
