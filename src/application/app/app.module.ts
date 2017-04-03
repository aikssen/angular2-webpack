import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule }  from '@angular/http';

import { routing } from './app.routing'; 

import { AppComponent } from './app.component';

import { HomeModule } from '../modules/home/home.module';
import { OtherModule } from '../modules/other/other.module';
import { OfficeUiModule } from '../modules/office-ui/office-ui.module';

@NgModule({
  imports: [ // angular and custom module imports
    BrowserModule,
    FormsModule,
    HttpModule,
    routing, // app routes
    OfficeUiModule,
    HomeModule,
    OtherModule
  ],
  declarations: [ // custom components imports
    AppComponent
  ],
  bootstrap: [ // app init/bootstraping
    AppComponent
  ]
})
export class AppModule { }
