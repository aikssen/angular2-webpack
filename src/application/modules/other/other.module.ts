import { NgModule } from '@angular/core';
import { OtherComponent } from './other.component';

@NgModule({
  declarations: [
    OtherComponent
  ],
  exports: [
    OtherComponent
  ]
})
export class OtherModule { }
