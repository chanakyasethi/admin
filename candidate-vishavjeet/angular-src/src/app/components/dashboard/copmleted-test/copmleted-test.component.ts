import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from '../../../services/server.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-copmleted-test',
  templateUrl: './copmleted-test.component.html',
  styleUrls: ['./copmleted-test.component.css']
})
export class CopmletedTestComponent implements OnInit, OnDestroy {
  completedTests: any = [];
  result: any = [];
  showDialog: boolean = false;
  resultToShow: any = {};
  testName: string;
  testsSubscription: Subscription;
  resultSubscription: Subscription;
  constructor(private serverService: ServerService) {
  }
  ngOnInit() {
    this.testsSubscription = this.serverService.completedTestsSub.subscribe((tests) => {
      this.completedTests = tests;
    });
    this.resultSubscription = this.serverService.completedTestsResultSub.subscribe((result) => {
      this.result = result;
    });
    this.serverService.reemitData();
  }
  onViewResult(index) {
    this.showDialog = true;
    this.resultToShow = this.result[index];
    if (this.completedTests[index]._id == this.result[index].testId)
      this.testName = this.completedTests[index].testName;
  }
  onCloseDialog() {
    this.showDialog = false;
  }
  ngOnDestroy() {
    this.testsSubscription.unsubscribe();
  }




}
