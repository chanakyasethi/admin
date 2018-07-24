import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router/src/router';
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
    console.log(activatedRoute.snapshot.params['token']);
    const token = activatedRoute.snapshot.params['token'];
    this.authService.resetUser(token).subscribe(
      data => {
        // console.log(data);
        if (data.user !== null) {
          this.hide = false;
          this.username = data.user.username;
          console.log(data.user.username);
        } else {
          this.hide = true;
          this.data = 'The token has been expired!!';
        }
      },
      err => {
        console.log(err);
        const error = JSON.parse(err._body);
        alertify.alert(error.msg);
      }
    );
  }

  ngOnInit() { }

  onResetPassword(validity) {
    const newdata = {
      password: this.password,
      username: this.username
    };


    if (validity) {
      this.authService.savepassword(newdata).subscribe(
        data => {
          console.log(data);
          alertify.alert(data.message);
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
