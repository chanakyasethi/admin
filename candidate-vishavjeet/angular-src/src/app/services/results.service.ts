import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResultsService {
  token;
  selectedTest = [];
  testRespose;
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

  completedTests(testid, candidate) {
    // console.log(testid);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .get(
      this.apiUrl + '/response/result/' + testid + '?candidate=' + candidate
      , { headers: headers }
      )
      .map((res: Response) => {
        const id = res.json();
        return id;
      })
      .catch(this._errorHandler);
  }
}
