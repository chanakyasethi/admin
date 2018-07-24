import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { EmailValidator } from 'ng-email-validation';
declare var alertify: any; // custom alert
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  insName: String;
  email: String;
  password: String;
  reCaptcha: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.clear();

  }

  resolved(captchaResponse: string) {
    // console.log(`resolved captcha with response  ${captchaResponse}:`);
    this.reCaptcha = captchaResponse;
  }

  onRegisterSubmit(validity) {
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // const captcha = this.reCaptcha;

    // fetch('http://localhost:4000/users/subscribe', {
    //   method: 'POST',
    //   headers: headers,
    //   body: JSON.stringify({ captcha: captcha })
    // })
    //   .then(res => res.json())

    //   .then(response => {
    //     console.log(response);
    //     // alert(response.msg);

    const user = {
      insName: this.insName,
      email: this.email,
      password: this.password
    };

    if (validity) {
      // Register user
      this.authService.registerUser(user).subscribe(
        data => {
          console.log(data);
          alertify.notify(data.msg);
          this.router.navigate(['/']);
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
