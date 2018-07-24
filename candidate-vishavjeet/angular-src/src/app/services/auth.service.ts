import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { ServerService } from 'app/services/server.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  authToken: any;
  token: any;
  user: any;
  allowChild = false;
  apiUrl = environment.apiUrl;
  constructor(private http: Http, private serverService: ServerService) {
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

  //============================================
  //        GETTING CANDIDATE PROFILE
  //============================================
  getProfile(id) {
    let headers = new Headers();
    headers.append('Authorization', this.token);
    return this.http.get(this.apiUrl + '/users//get-profile/' + id, { headers: headers })
      .map((res: Response) => {
        return res.json();
      });
  }
  //============================================
  //        UPDATING CANDIDATE PROFILE
  //============================================
  updateProfile(data: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.token);
    return this.http.put(this.apiUrl + '/users/update-profile', data, { headers: headers })
      .map((res: Response) => res.json());

  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.apiUrl + '/users/register', user, {
        headers: headers
      })
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
      .map(res => res.json())
      .catch(this._errorHandler);
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    // console.log("heyyyy tokennnn issss coming", token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    console.log('userdata', this.user)
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('id_token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  activateAccount(token) {
    // console.log(token);
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

  resetPassword(resetdata) {
    // console.log(resetdata);
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
    this.allowChild = false;
    localStorage.clear();
  }
}
