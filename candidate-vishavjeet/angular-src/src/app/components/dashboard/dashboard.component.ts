import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { ResponseService } from 'app/services/response.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ServerService } from 'app/services/server.service';
import { ResultsService } from 'app/services/results.service';
declare var alertify: any; // custom alert

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userActive: boolean;
  containTest: boolean;
  show = [];
  tests: any = [];
  practiceTests: any = [];
  userDetails = JSON.parse(localStorage.getItem('user'));
  editInfo = false;
  testGiven;
  completed = [];
  completedTests = [];
  constructor(
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private serverService: ServerService,
    private responseService: ResponseService,
    private resultsService: ResultsService
  ) { }

  ngOnInit() {
    localStorage.removeItem('testid');
    /**
     * @desc calling server sevice to fetch assigned test
     * @return array of tests
     **/
    if (this.userDetails.status === 'Active') {
      this.userActive = true;
      this.serverService.fetchAssignedTests();
    } else {
      this.userActive = false;
      this.containTest = false;
    }
  }
  show_Accordingly() {
    if (this.userActive && this.containTest)
      return true;
    else
      return false;
  }
  actionClicked() {
    if (this.editInfo === false) {
      this.editInfo = true;
    } else {
      this.editInfo = false;
    }
  }

  OnResults(selectedTest) {
    console.log('selected', selectedTest._id);
    var candidate = this.userDetails.username;
    this.resultsService.completedTests(selectedTest._id, candidate).subscribe(
      result => {
        console.log('result of this candidate:', result);
        this.resultsService.selectedTest = selectedTest;
        this.resultsService.testRespose = result;
      },
      err => {
        console.log(err);
        const error = JSON.parse(err._body);
        alertify.alert(error.msg);
      },
      () => {
        this.router.navigate(['/test-details']);
      }
    );
  }
}
