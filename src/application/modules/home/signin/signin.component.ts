import { Component, OnInit } from '@angular/core';
// import { WindowRef } from '../../../shared/services/window-ref.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  // private _window: Window;

  // constructor (windowRef: WindowRef) {
  //   this._window = windowRef.nativeWindow;
  // }

  ngOnInit() {}

  redirect() {
    // this._window.location.href = 'https://www.google.com';
    window.location.href = 'https://www.google.com';
  }
}

// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';

// import { AuthenticationService } from '../../../shared/services/index';

// @Component({
//   templateUrl: 'signin.component.html'
// })

// // export class SigninComponent implements OnInit {
// export class SigninComponent {
//   model: any = {};
//   loading = false;
//   returnUrl: string;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private authenticationService: AuthenticationService) { }

//   ngOnInit() {
//     // reset login status
//     this.authenticationService.logout();

//     // get return url from route parameters or default to '/'
//     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//   }

//   login() {
//     this.loading = true;
//     this.authenticationService.login(this.model.username, this.model.password)
//       .subscribe(
//       data => {
//         this.router.navigate([this.returnUrl]);
//       },
//       error => {
//         console.log(error);
//         this.loading = false;
//       });
//   }
//   // onSubmit(f: NgForm) {
//   //   console.log(f.value);  // { first: '', last: '' }
//   //   console.log(f.valid);  // false
//   // }
// }