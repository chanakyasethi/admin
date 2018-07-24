import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
declare var alertify: any; // custom alert

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  status: Boolean;
  displaybutton: boolean = false;
  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.removeItem('id_token');
  }

  onLoginSubmit(validity) {

    console.log('validity', validity);
    const user = {
      email: this.email,
      password: this.password
    };


    if (validity) {
      this.authService.authenticateUser(user).subscribe(data => {
        console.log(data);
        if (data.expired) {
          this.displaybutton = true;
          alertify.alert(data.msg);
        } else {
          this.authService.storeUserData(data.token, data.user);
          this.status = true;
          alertify.notify(data.msg, 'success', 5);
          this.authService.login();
          this.router.navigate(['load', 'dashboard']);
        }
      },
        err => {
          console.log(JSON.parse(err._body));
          const error = JSON.parse(err._body);
          alertify.alert(error.msg);
          this.status = false;
        }
      );
    }
  }

  generateLink(validity) {
    const user = {
      email: this.email,
      password: this.password
    };

    if (validity) {
      this.authService.generatelink(user)
        .subscribe(data => {
          console.log(data)
          alertify.alert(data.msg);
          this.displaybutton = false;
        },
        err => {
          console.log(err)
          const error = JSON.parse(err._body);
          alertify.alert(error.msg);
        });
    }
  }
}
