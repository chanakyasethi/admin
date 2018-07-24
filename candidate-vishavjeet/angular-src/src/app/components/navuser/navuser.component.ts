import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
declare var alertify: any; // custom alert
@Component({
  selector: 'app-navuser',
  templateUrl: './navuser.component.html',
  styleUrls: ['../navuser/navuser.component.css']
})
export class NavuserComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  userMenuOpen: boolean = false;
  ngOnInit() { }
  onLogoutClick() {
    this.onToggleMenu();
    this.authService.logout();
    localStorage.removeItem('user');
    alertify.notify('You are logged out', 'success', 5);
    this.router.navigate(['/']);
    return false;

  }

  onToggleMenu() {
    this.userMenuOpen = !this.userMenuOpen;
  }

}
