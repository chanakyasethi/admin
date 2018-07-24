import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
declare var alertify: any; // custom alert
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email: string;
  constructor(private authservice: AuthService
  ) { }

  ngOnInit() { }

  onSubmit(validity) {

    if (validity) {
      this.authservice.resetPassword(this.email).subscribe(
        data => {
          console.log(data);
          alert(data.msg);
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
