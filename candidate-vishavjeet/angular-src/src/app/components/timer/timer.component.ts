import { Observable, Subject } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { timer } from 'rxjs/observable/timer';
import 'rxjs/Rx';

import { ResponseService } from 'app/services/response.service';
import { environment } from 'environments/environment';
declare var alertify: any; // custom alert
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  inputVariable: number = 40;
  subscription: Subscription;
  subscription1: Subscription;
  testTime: any;
  // testTime = 3;
  waitTime: any;
  waitTimeLeft;
  source = timer(0, 1000);
  source1 = timer(0, 1000);
  countDown: any;
  pauseTime: boolean;
  isConnected: Observable<boolean>;
  valuesChanged = new Subject<boolean>();
  min: any
  hr: any
  sec: any

  //------------------ after failure-------
  recordTime = 0;
  difference: number = 1;

  constructor(
    private responseService: ResponseService,
    private router: Router
  ) {

    this.isConnected = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').map(() => {
        this.subscription1.unsubscribe();
        this.onPause();
        return true;
      }),
      Observable.fromEvent(window, 'offline').map(() => {
        this.onPause();
        return false;
      })
    );
  }


  ngOnInit() {
    this.testTime = localStorage.getItem('duration');
    // this.testTime = 4;
    // this.calculate();
    this.waitTimeLeft = this.waitTime;
    this.min = this.min % 60;
    this.inputVariable = this.testTime;
    this.initialize();

    // pause test when server do not response
    this.responseService.serverErrorCheck.subscribe((res) => {
      if (res) {
        console.log("===========Subscriber===========", res);
        this.pauseTime = true;
        // this.subscription.unsubscribe();
        // this.subscription1.unsubscribe();
        this.start();
      } else {
        this.pauseTime = false;
        // this.subscription1.unsubscribe();
        // this.subscription.unsubscribe();
        this.start();
      }
    });

    // periodic pauseTime request to back-end
    this.responseService.replaceDuration.subscribe((time) => {
      console.log("gh");
      if (time > 0) {
        const timeInSec = Math.floor(time / 1000);
        console.log('backend time: ', timeInSec);
        const diff = this.countDown - timeInSec
        console.log('time difference ', diff);
        this.subscription.unsubscribe();
        if (diff > 120 || diff < -120) {
          this.testTime = Math.floor(timeInSec / 60);
          console.log('timer replaced');
          // this.initialize();
          this.calculate();
        }
      } else {
        this.subscription.unsubscribe();
      }
    });
  }

  initialize() {
    this.waitTime = 600;
    this.countDown = this.testTime * 60;
    this.pauseTime = false;
    this.min = (this.countDown / 60);
    this.hr = Math.floor(this.min / 60);
    this.min = this.min % 60;
    this.sec = 0;
    if (this.subscription)
      this.subscription.unsubscribe();
    this.start();
  }

  calculate() {
    this.countDown = this.testTime * 60;
    this.min = (this.countDown / 60);
    this.hr = Math.floor(this.min / 60);
    this.sec = 0;
    // if (this.subscription)
    this.subscription.unsubscribe();
    // this.start();
  }

  start() {
    if (this.pauseTime) {
      this.subscription1 = this.source1.subscribe(count => {
        this.waitTimeLeft--;
        console.log('wait Time', this.waitTimeLeft);
        if (this.waitTimeLeft === this.waitTime - 120) {
          alert('Network Error Occured You cannot proceed Test');
          this.subscription.unsubscribe();
        } else if (this.waitTimeLeft < this.waitTime - 120) {
          console.log('record Time', this.recordTime);
          if (this.recordTime === 30 * this.difference) {
            this.difference++;
            this.timePauseRequest();
            this.recordTime++;
          } else {
            this.recordTime++;
          }
        } else if (this.waitTimeLeft === 0) {
          this.recordTime = 0;
          alert('Resume your test');
          this.subscription1.unsubscribe();
        }
      });
    } else if (!this.pauseTime) {
      this.recordTime = 0;
      this.difference = 1;
      this.waitTimeLeft = this.waitTime;
      this.subscription = this.source.subscribe(countDown => {
        if (this.sec == 0) {
          if (this.min === 0 && this.hr > 0) {
            this.min = 60;
            this.hr--;
            if (this.hr <= 0) {
              this.hr = 0;
            }
          }
          if (this.sec == 0 && this.min > 0) {
            this.sec = 59;
            this.min--;
            if (this.min <= 0) {
              this.min = 0;
            }
          }
        } else {
          this.sec--;
        }
        this.countDown--;
        console.log('countDown', this.countDown);
        if (this.countDown < 0 || this.countDown === 0) {
          alertify.alert('test completed');
          var mode = 'timeOut'
          this.subscription.unsubscribe();
          this.subscription1.unsubscribe();
          this.responseService.getFinish(mode).subscribe(
            data => {
              // if (data.success) {
              console.log('test completed', data);

              this.router.navigate(['/test/finishtest']);
              // }
            },
            err => {
              console.log(err);
              const error = JSON.parse(err._body);
              alertify.alert(error.msg);
            }
          );
        }
      });
    }
  }

  timePauseRequest() {
    var pauseTime = new Date().toISOString();
    this.responseService.testPause(pauseTime, this.recordTime)
      .subscribe(
      res => {
        if (pauseTime === res.data.sequenceNumber) {
          this.testTime = res.data.remainingDuration;
          console.log("testTime", this.testTime);
          this.initialize();
        }
      },
      err => {
        console.log('Error', err);
        const error = JSON.parse(err._body);
        alertify.alert(error.msg);
      }
      );
  }

  onPause() {
    this.pauseTime = !this.pauseTime;
    // this.subscription.unsubscribe();
    this.start();
  }

  // onIncrease() {
  //   setInterval(() => {
  //     this.inputVariable = this.inputVariable + 5;
  //     // console.log("onincrease", this.inputVariable);
  //     this.initialize();
  //   }, 10 * 1000);
  // }
}
