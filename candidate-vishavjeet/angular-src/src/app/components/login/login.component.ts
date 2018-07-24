import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ResponseService } from 'app/services/response.service';
import { Router } from '@angular/router';
import { ServerService } from 'app/services/server.service';
declare var alertify: any; // custom alert

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // begin variable listing
  email: String;
  password: String;
  displaybutton = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private serverService: ServerService,
    private responseService: ResponseService
  ) { }

  /*********************************************
   ** @function used
   ** onLoginSubmit() - to login and authenticate
   ** generateLink() - to generate new reset pwd link
   ************************************************/

  ngOnInit() {
    // if it has user detail clear it

    localStorage.clear();

  }

  onLoginSubmit(validity) {
    // assigning username, password
    const user = {
      email: this.email,
      password: this.password
    };



    /**
     * @desc Authenticating login details with authService
     * @param email, password  $window.alert - message to be displayed
     * @return bool - success or failure
     */

    if (validity) {
      this.authService.authenticateUser(user).subscribe(
        data => {
          if (data.expired) {
            this.displaybutton = true;
            alertify.alert(data.msg);
          } else {
            this.authService.storeUserData(data.token, data.user);
            alertify.notify('You are logged in', 'success', 5);
            localStorage.setItem('status', data.user.status);
            this.router.navigate(['/dashboard']);
          }
        },
        err => {
          const error = JSON.parse(err._body);
          alertify.alert(error.msg);
        })
    }
  }

  generateLink(validity) {
    const user = {
      email: this.email,
      password: this.password
      // source: 'admin'
    };
    console.log(user);
    if (validity) {
      this.authService.generatelink(user).subscribe(
        data => {
          // console.log(data)
          alertify.alert(data.msg);
          // this.displaybutton = false;
        },
        err => {
          console.log(err);
          const error = JSON.parse(err._body);
          alertify.alert(error.msg);
        }
      );
    }
  }
}
