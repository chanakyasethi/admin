import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  loggedIn = false;
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

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.apiUrl + '/users/register', user, { headers: headers })
      .map(res => res.json())
      .catch(this._errorHandler);
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.apiUrl + '/users/authenticate', user, {
        headers: headers
      })
      .map(res => {
        const data = res.json();
        return data;
      })
      .catch(this._errorHandler);
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    // console.log("heyyyy tokennnn issss coming", token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('id_token');
    if (token != null) {
      return true;
    } else {
      return false;
    }
  }

  activateAccount(token) {
    // console.log('token', token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(this.apiUrl + '/users/activate/' + token, {
        headers: headers
      })
      .map(res => res.json())
      .catch(this._errorHandler);
  }

  generatelink(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(this.apiUrl + '/users/newlink/', user, {
        headers: headers
      })
      .map(res => res.json())
      .catch(this._errorHandler);
  }

  login() {
    this.loggedIn = true;
  }

  resetPassword(resetdata) {
    console.log(resetdata);
    return this.http
      .put(this.apiUrl + '/users/resetpassword', { email: resetdata })
      .map(res => res.json())
      .catch(this._errorHandler);
  }

  resetUser(token) {
    // console.log('token: ' + token);
    return this.http
      .get(this.apiUrl + '/users/resetpassword/' + token)
      .map(res => res.json())
      .catch(this._errorHandler);
  }

  savepassword(regdata) {
    console.log(regdata);
    return this.http
      .put(this.apiUrl + '/users/savepassword', regdata)
      .map(res => res.json())
      .catch(this._errorHandler);
  }

  logout() {
    this.authToken = null;
    this.user = null;
    this.loggedIn = false;
    localStorage.clear();
  }
}
