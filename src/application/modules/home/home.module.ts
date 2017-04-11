import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  imports: [
    RouterModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    SigninComponent
  ],
  exports: [
    HomeComponent,
    SigninComponent
  ]
})
export class HomeModule { }
