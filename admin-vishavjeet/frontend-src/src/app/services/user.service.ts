import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  apiUrl = environment.apiUrl;
  constructor(private http: Http) { }

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

  storeUsers(usersList: any, page: number) {
    // var datas = {usersList,testStatus}
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .get(this.apiUrl + '/users/getUsers/' + page, { params: usersList })
      .map((res: Response) => {
        const data = res.json();
        console.log('fefefe', data)
        return data;
      })
      .catch(this._errorHandler);
  }
  getUsers(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.apiUrl + '/users/users/')
    .map((res:Response)=>{
      const data = res.json();
      console.log('qqqqqqqqqqqqqq', data)
      return data;
    })
    .catch(this._errorHandler);
  }

  storeUsers1(usersList: any, page: number) {
    // var datas = {usersList,testStatus,testID}
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .get(this.apiUrl + '/users/user/' + page, { params: usersList })
      .map((res: Response) => {
        const data = res.json();
        // console.log("users are here",data);
        return data;
      })
      .catch(this._errorHandler);
  }
  deleteUser(userId) {
    return this.http
      .delete(this.apiUrl + '/users/deleteUser', {
        params: { userid: userId }
      })
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  setActive(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(this.apiUrl + '/users/setstate', user, { headers: headers })
      .map((res: Response) => {
        const data = res.json();
        return data;
      })
      .catch(this._errorHandler);
  }
  //====================================
  //  Getting DIstinct Values
  //=====================================
  getDistinctValues() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var obj = {
      status: "all"
    }
    return this.http
      .get(this.apiUrl + '/users/getDistinct')
      .map((res: Response) => {
        const data1 = res.json();
        return data1;
      })
      .catch(this._errorHandler);
  }
  //============================================
  //  Getting DIstinct Values for active users
  //============================================
  getDistinctValuesForActiveUsers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .get(this.apiUrl + '/users/activeusers/getDistinct')
      .map((res: Response) => {
        const data1 = res.json();
        return data1;
      })
      .catch(this._errorHandler);
  }
}
