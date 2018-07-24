import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  testId: any;
  teststate: any;
  constructor(private router: Router, private stateService: StateService) {}

  ngOnInit() {
    this.testId = localStorage.getItem('testEdit');
    console.log(this.testId);
    this.teststate = this.stateService.FetchAllData();
    console.log(this.teststate);
  }

  details() {
    this.router.navigate(['/load', 'createtest', 'testdetails']);
  }

  upload() {
    if (this.testId !== null || this.teststate !== null) {
      this.router.navigate(['/load', 'createtest', 'upload']);
    } else {
      this.router.navigate(['/load', 'createtest', 'testdetails']);
    }
  }

  publish() {
    if (this.testId !== null || this.teststate !== null) {
      this.router.navigate(['/load', 'createtest', 'publish']);
    } else {
      this.router.navigate(['/load', 'createtest', 'testdetails']);
    }
  }
}
