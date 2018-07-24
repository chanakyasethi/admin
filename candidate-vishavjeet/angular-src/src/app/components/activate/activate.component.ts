import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

declare var alertify: any; // custom alert

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  activateMessage: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const token = this.activatedRoute.snapshot.params['token'];
    this.authService.activateAccount(token).subscribe(
      data => {
        this.activateMessage = data.message + ' ...Redirecting';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);
      },
      err => {
        console.log(err);
        const error = JSON.parse(err._body);
        alertify.alert(error.msg);
      }
    );
  }
}
