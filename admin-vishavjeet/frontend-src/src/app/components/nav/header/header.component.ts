import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
declare var alertify: any; // custom alert

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  viewMore = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  onLogoutClick() {
    this.authService.logout();
    alertify.notify('You are logged out', 'success', 5);
    this.router.navigate(['/']);
    return false;
  }

  moreButton() {
    if (this.viewMore === false) {
      this.viewMore = true;
    } else {
      this.viewMore = false;
    }
  }


}
