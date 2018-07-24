import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from '../../../services/server.service';
import { Router } from '@angular/router';
import { ResponseService } from '../../../services/response.service';
import { Subscription } from 'rxjs/Subscription';
declare var alertify: any; // custom alert

@Component({
  selector: 'app-assigned-test',
  templateUrl: './assigned-test.component.html',
  styleUrls: ['./assigned-test.component.css']
})
export class AssignedTestComponent implements OnInit, OnDestroy {

  tests: any = [];
  show: any = [];
  testsSubscription: Subscription;
  showSubscription: Subscription;
  constructor(private serverService: ServerService,
    private router: Router,
    private responseService: ResponseService
  ) {
    this.testsSubscription = this.serverService.testsSub.subscribe((tests) => {
      this.tests = tests;
    });
    this.showSubscription = this.serverService.showSub.subscribe((show) => {
      this.show = show;
    });

  }

  ngOnInit() {

    this.serverService.reemitData();
  }

  onTestClick(test) {
    this.serverService.quesIds = test.questions;
    localStorage.setItem('duration', test.duration);
    localStorage.setItem('testID', test._id);
    localStorage.setItem('practiceTest', test.practice);
    // this.responseService.getTestId(test);
    this.router.navigate(['/test/instruction']);
  }

  // -----------------------------------------
  // Resume test notification
  // -----------------------------------------
  OnResume(test) {

    var isodate = new Date().toISOString();
    var user = JSON.parse(localStorage.getItem('user'));

    const resumedata = {
      candidateId: user.username,
      testId: test._id,
      resumeTime: isodate,
      state: 'resume'
    };
    // console.log(resumedata);
    this.responseService.resumeTest(resumedata).subscribe(
      data => {
        console.log('response from BE', data);
        if (data.success) {
          this.router.navigate(['/test/testportal']);
        } else {
          alertify.alert(data.msg);
        }
      },
      err => {
        console.log(err);
      }
    );
    // this.router.navigate(['/test/testportal']);
  }
  ngOnDestroy() {
    this.showSubscription.unsubscribe();
    this.testsSubscription.unsubscribe();
  }

}
