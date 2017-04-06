import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OtherComponent } from './other.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    OtherComponent
  ],
  exports: [
    OtherComponent
  ]
})
export class OtherModule { }
