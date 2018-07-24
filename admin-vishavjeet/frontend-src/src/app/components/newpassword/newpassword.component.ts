import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var alertify: any; // custom alert

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  password: String;
  confirmpassword: String;
  hide = true;
  data: any;
  username: any;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // console.log(activatedRoute.snapshot.params['token']);
    const token = activatedRoute.snapshot.params['token'];
    this.authService.resetUser(token).subscribe(
      data => {
        if (data.user !== null) {
          this.hide = false;
          this.username = data.user.username;
          console.log(data.user.username);
        } else {
          this.hide = true;
          this.data = 'The token has been expired!!';
        }
      },
      error => {
        this.hide = true;
        this.data = error;
        console.log(error);
        const err = JSON.parse(error._body);
        alertify.alert(err.msg);
      }
    );
  }

  ngOnInit() { }

  onResetPassword(validity) {
    const newdata = {
      password: this.password,
      username: this.username
    };
    console.log(validity);
    if (validity) {
      this.authService.savepassword(newdata).subscribe(
        data => {
          alertify.alert(data.message);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          const err = JSON.parse(error._body);
          alertify.alert(err.msg);
        }
      );
    }
  }
}
