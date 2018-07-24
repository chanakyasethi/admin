import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: any;
  userProfile: any;
  constructor(private authService: AuthService) {
    this.id = JSON.parse(localStorage.getItem('user')).id;
  }

  basicInfoActive;
  qualificationActive;
  skillActive;

  ngOnInit() {
    this.authService.getProfile(this.id).subscribe((data) => {
      this.userProfile = data;
      console.log(data);

    });
    this.onBasicInfo();
  }

  onBasicInfo() {
    this.basicInfoActive = true;
    this.qualificationActive = false;
    this.skillActive = false;
  }

  onQualification() {
    this.basicInfoActive = false;
    this.qualificationActive = true;
    this.skillActive = false;
  }

  onSkill() {
    this.basicInfoActive = false;
    this.qualificationActive = false;
    this.skillActive = true;
  }

}
