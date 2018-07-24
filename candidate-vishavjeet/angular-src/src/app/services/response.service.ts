import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { setInterval } from 'timers';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResponseService {
  startTime: any;
  finishTime: any;
  finalResp: any;
  timeOut: any;
  finish: boolean;
  token;
  practice: boolean = false;

  serverPause: boolean;
  pausetime: any;
  // count: number   = 0;

  serverErrorCheck = new Subject<boolean>();
  replaceDuration = new Subject<number>();
  serverResponseCount: number = 1;
  // count: number = 0;
  apiUrl = environment.apiUrl;

  constructor(private http: Http) {
    this.token = localStorage.getItem('id_token');
  }

  // Handling error 
  _errorHandler(error: Response) {
    console.error(error);
    if (error.status == 0) {
      console.error(error);
      return Observable.throw({ _body: JSON.stringify({ msg: 'Server Not responding!!' }) });
    } else if (error.status > 400 && error.status < 500) {
      return Observable.throw(error || { _body: JSON.stringify({ msg: 'Something went wrong!!' }) });
    }
    return Observable.throw(error || 'Server Error!!');
  }

  ngOnInit() { }
  //--------------------------------------------------
  // Start Time Logic
  // --------------------------------------------------

  getstart(Starttime) {
    var testID = localStorage.getItem('testID');
    var user = JSON.parse(localStorage.getItem('user'));
    this.startTime = Starttime;
    const start = {
      candidateId: user.email,
      testId: testID,
      startTime: this.startTime,
      state: 'start',
      practice: localStorage.getItem('practiceTest') == 'true' ? true : false
    };
    console.log("//////Start////////", start);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    // console.log(time1);

    return this.http
      .post(this.apiUrl + '/response/response', start, {
        headers: headers
      })
      .map((res: Response) => {
        const data = res.json();
        // console.log('start time is ' + data);
        return data;
      });
  }

  resumeTest(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .post(this.apiUrl + '/response/response', data, {
        headers: headers
      })
      .map((res: Response) => {
        const data = res.json();
        return data;
      });
  }

  response(response, sequence) {
    var clientSequence = new Date().toISOString();
    this.finalResp = response;
    var testID = localStorage.getItem('testID');
    var user = JSON.parse(localStorage.getItem('user'));

    // console.log('clientSequence', clientSequence);
    const periodicObject = {
      response: response,
      candidateId: user.email,
      testId: testID,
      periodicTime: clientSequence,
      state: 'periodic',
      practice: localStorage.getItem('practiceTest') == 'true' ? true : false
    };

    // console.log(res);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);

    return this.http
      .post(this.apiUrl + '/response/response', periodicObject, {
        headers: headers
      })
      .map((res: Response) => {
        const data = res.json();
        return data;
      })
      .subscribe(
        res => {
          console.log('response', res);

          this.serverErrorCheck.next(false);
          if (clientSequence === res.data.sequenceNumber) {
            var time = res.data.remainingDuration;
            // var time = 25;
            this.replaceDuration.next(time);
            this.serverResponseCount = 1;
            // console.log("testTime", this.testTime);
            // this.initialize();
          }
        },
        err => {
          this.serverResponseCount++;
          console.log('count', this.serverResponseCount);
          if (this.serverResponseCount === 5) {
            this.serverErrorCheck.next(true);
            console.log('network fail' + this.serverResponseCount);
          }
        }
      );
  }

  testPause(sequence, pauseduration) {

    var testID = localStorage.getItem('testID');
    var user = JSON.parse(localStorage.getItem('user'));

    const pauseTestObject = {
      candidateId: user.email,
      testId: testID,
      pauseTime: sequence,
      pauseDuration: pauseduration,
      state: 'timePause',
      practice: localStorage.getItem('practiceTest') == 'true' ? true : false
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .post(this.apiUrl + '/response/response', pauseTestObject, {
        headers: headers
      })
      .map((res: Response) => {
        const data = res.json();
        return data;
      });
  }

  //---------------------------------------------------
  // Finish Time
  //----------------------------------------------------

  getFinish(mode) {
    // localStorage.setItem('finishTime', finshTime);

    var testID = localStorage.getItem('testID');
    var user = JSON.parse(localStorage.getItem('user'));
    var time = new Date().toISOString();

    var testFinishObj = {
      candidateId: user.email,
      testId: testID,
      response: this.finalResp,
      finishTime: time,
      state: 'finish',
      finishMode: mode,
      practice: localStorage.getItem('practiceTest') == 'true' ? true : false
    };
    console.log(testFinishObj);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .post(this.apiUrl + '/response/response', testFinishObj, {
        headers: headers
      })
      .map((res: Response) => {
        const data = res.json();
        return data;
      });
  }

  mischeivehandler(attempts) {
    var date = new Date();
    var am_pm = date.getHours() >= 12 ? 'PM' : 'AM';
    var hour = new Date().toLocaleTimeString();
    var time = hour + '' + am_pm;
    var user = JSON.parse(localStorage.getItem('user'));
    let testid = localStorage.getItem('testID');
    const event = {
      candidateId: user.email,
      testId: testid,
      eventTime: time,
      attempt: attempts,
      response: this.finalResp,
      state: 'proctoring'
    };
    // console.log('tab is changed just now', event);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .post(this.apiUrl + '/response/response', event, {
        headers: headers
      })
      .map((res: Response) => {
        const data = res.json();
        return data;
      });
  }
}
