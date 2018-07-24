import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';

@Injectable()
export class QuesIdsService {
  token;
  quesIds: any;
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

  Questionlist(ids) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .put(this.apiUrl + '/tests/getQuestIds', ids, { headers: headers })
      .map((res: Response) => {
        return res.json();
      })
      .catch(this._errorHandler);
  }


}
