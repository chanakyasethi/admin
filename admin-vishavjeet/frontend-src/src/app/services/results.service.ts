import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';

@Injectable()
export class ResultsService {
  apiUrl = environment.apiUrl;
  token;
  // constructor(private http: Http) {
  //   this.token = localStorage.getItem('id_token');
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

  giveTest:{
    status:string,
    timeSpent:number,
    score:number,
    finishMode:string
  }

  data:any;

  computeResult(testId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .post(this.apiUrl + '/result/computeResult', { headers: headers }, {
        params: { testId: testId }
      })
      .map(res => res.json())
      .catch(this._errorHandler);
  }

  // getTestResult(testId, candidateIds) {
  //   // console.log('id is', candidateIds);
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('Authorization', 'JWT ' + this.token);
  //   return this.http
  //     .get(this.apiUrl + '/result/result', {
  //       params: { candidateIds: candidateIds, testId: testId }
  //     })
  //     .map(res => res.json())
  //     .catch(this._errorHandler);
  // }

  getTestResult(testId, candidateIds) {
    console.log('id is', candidateIds.length);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .get(this.apiUrl + '/result/result', {
        params: { candidateIds: candidateIds, testId: testId }
      })
      .map((res) => {
        console.log("//////////////////////////////////hehehehe");
        console.log(res.json());
        console.log("//////////////////////////////////");
        this.data= res.json();
        console.log(this.data[0]);
        this.giveTest ={
            status:this.data[0].status ,
            timeSpent:this.data[0].timeSpent,
            score:this.data[0].score,
            finishMode:this.data[0].finishMode
        }    
        return (this.giveTest);  

        
      })
      .catch(this._errorHandler);
  }

}
