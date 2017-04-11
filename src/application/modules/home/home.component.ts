import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  openDialog() {
    // Office.context.ui.displayDialogAsync('https://localhost:8080/#/signin', { 
    Office.context.ui.displayDialogAsync('https://www.google.com', { 
      height: 60, 
      width: 50, 
      displayInIframe: true
    }); 
  }
}
