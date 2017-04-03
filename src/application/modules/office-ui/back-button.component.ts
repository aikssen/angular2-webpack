import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {
  @Input() destination: string;

  constructor(private router: Router) { }

  back() {
    this.router.navigate([this.destination]);
  }
}