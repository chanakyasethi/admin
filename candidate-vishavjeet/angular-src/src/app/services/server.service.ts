import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
declare var alertify: any; // custom alert
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable()
export class ServerService {
  practiceTests: any = [];
  tests: any = [];
  completed: any = [];
  completedTests: any = [];
  completedTestsResult: any = [];
  show: any = [];

  practiceTestsSub = new Subject<any>();
  testsSub = new Subject<any>();
  completedSub = new Subject<any>();
  completedTestsSub = new Subject<any>();
  completedTestsResultSub = new Subject<any>();
  showSub = new Subject<any>();

  userDetails = JSON.parse(localStorage.getItem('user'));

  testids: any = [];
  practiceTestids: any = [];

  QuestionIds = [];
  quesIds;
  token;
  apiUrl = environment.apiUrl;//candidate backend api
  constructor(private http: Http) {
    this.token = localStorage.getItem('id_token');

  }
  //=================================================
  //  ERROR HANDLING FUNCTION
  //=================================================

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

  //============================================
  //      MAIN FUCTION FOR ASSIGN TEST FETCHING
  //============================================

  fetchAssignedTests() {
    let userid;
    this.backendFetchedTests().subscribe(data => {
      this.practiceTests = [];
      this.tests = [];
      this.practiceTestids = [];
      this.testids = [];
      data.forEach(test => {
        if (test.practice) {
          this.practiceTests.push(test);
          this.practiceTestids.push(test._id);
        }
        else {
          this.tests.push(test);
          this.testids.push(test._id);
        }
      });
      userid = this.userDetails.email;
    },
      err => {
        console.log(err);
        const error = JSON.parse(err._body);
        alertify.alert(error.msg);
      },
      () => {
        this.getStateofTest(this.testids, userid)
          .subscribe(
            (data) => {
              this.completedTestsResult = data;
              this.completedTests = [];
              for (let j = 0; j < data.length; j++) {
                for (let i = 0; i < this.tests.length; i++) {
                  this.completed[i] = false;
                  if (this.tests[i]._id === data[j].testId) {
                    if (data[j].status == 'ongoing') {
                      this.show[i] = true;
                    } else if (data[j].status == 'finished') {
                      this.show[i] = false;
                      this.completed[i] = true;
                      this.completedTests.push(this.tests[i]);
                      this.tests.splice(i, 1)
                    } else {
                      this.show[i] = false;
                    }
                  }
                }
              }
            },
            err => {
              console.log(err);
              const error = JSON.parse(err._body);
              alertify.alert(error.msg);
            },
            () => {
              this.getPracticeTestState(this.practiceTestids, userid)
                .subscribe(
                  (data) => {
                    for (let j = 0; j < data.length; j++) {
                      for (let i = 0; i < this.practiceTests.length; i++) {

                        if (this.practiceTests[i]._id === data[j].testId) {
                          if (data[j].status == 'finished') {
                            this.practiceTests.splice(i, 1)
                          }
                        }
                      }
                    }
                    this.reemitData();
                  },
                  err => {
                    console.log(err);
                    const error = JSON.parse(err._body);
                    alertify.alert(error.msg);
                  }
                );
            });
      }
    );
  }

  //====================================
  //  FETCHING TESTS FROM BACKEND API
  //====================================
  backendFetchedTests() {
    const user = localStorage.getItem('user');
    let id = user;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    headers.append('id', user);
    return this.http.get(this.apiUrl + '/tests/getassignedtests', { headers: headers })
      .map((res: Response) => {
        return res.json();
      })
      .catch(this._errorHandler);
  }

  //=============================================================
  //    GETTING STATES OF TESTS
  //=============================================================
  getStateofTest(testids, userid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .put(this.apiUrl + '/response/state/' + userid, { tids: testids, practice: false },
        { headers: headers },
    )
      .map((response: Response) => {
        return response.json().test;
      })
      .catch(this._errorHandler);
  }

  //=================================================================
  //        GETTING STATE OF PRACTICE TESTS
  //=================================================================
  getPracticeTestState(testids, userid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .put(this.apiUrl + '/response/state/' + userid, { tids: testids, practice: true },
        { headers: headers },
    )
      .map((response: Response) => {
        return response.json().test;
      })
      .catch(this._errorHandler);
  }

  //=================================================================
  //        FETCHING QUESTION LIST
  //=================================================================
  fetchQuestions(questionsId) {
    var ids = [];
    this.quesIds.push(localStorage.getItem('questionsId'));
    ids.push(this.quesIds);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .put(this.apiUrl + '/tests/getQuestions', questionsId, {
        headers: headers
      })
      .map((res: Response) => {
        return res.json();
      })
      .catch(this._errorHandler);
  }

  //==================================================
  //      EMMITING DATA TO CHILDERN COMPONANTS
  //==================================================

  reemitData() {
    this.practiceTestsSub.next(this.practiceTests);
    this.testsSub.next(this.tests);
    this.showSub.next(this.showSub);
    this.completedSub.next(this.completed);
    this.completedTestsSub.next(this.completedTests);
    this.completedTestsResultSub.next(this.completedTestsResult);
  }

}
