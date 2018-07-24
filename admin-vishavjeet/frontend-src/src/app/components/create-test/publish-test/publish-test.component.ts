import { Component, OnInit } from '@angular/core';
import { TestServerService } from '../../../services/testServer.service';
import { StateService } from '../../../services/state.service';
import { Router } from '@angular/router';
declare var alertify: any; // custom alert

@Component({
  selector: 'app-publish-test',
  templateUrl: './publish-test.component.html',
  styleUrls: ['./publish-test.component.css']
})
export class PublishTestComponent implements OnInit {
  tcode: String;
  tid: String;
  testName: String;
  category: String;
  totalQuestion: number;
  duration: number;
  level: String;

  constructor(
    private testServerService: TestServerService,
    private stateService: StateService,
    private router: Router
  ) { }

  ngOnInit() {
    const test = this.stateService.FetchAllData();
    console.log(test);

    if (test !== null) {
      this.tid = test._id;
      this.testName = test.testName;
      this.category = test.category;
      this.totalQuestion = test.totalQuestion;
      this.duration = test.duration;
      this.level = test.difficultylevel;
    }
  }

  onPublish() {
    const test = {
      testcode: this.tcode,
      testid: this.tid
    };
    localStorage.removeItem('testEdit');

    this.testServerService.publishTest(test).subscribe(
      data => {
        console.log('This' + data);
        this.stateService.testStateSave(data);
        alertify.alert('You test is published successfully');
        this.router.navigate(['load/manage-test']);
      },
      err => {
        const error = JSON.parse(err._body);
        alertify.alert(error.msg);
      }
    );
  }
}
