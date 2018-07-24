import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
declare var alertify: any; // custom alert

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email: string;
  constructor(private authservice: AuthService) { }

  ngOnInit() { }

  onSubmit(validity) {
    if (validity) {
      this.authservice.resetPassword(this.email).subscribe(
        data => {
          alertify.alert(data.msg);
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
