import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GroupService {
//   loggedIn = false;
users:any[]
data:any
groupChanged = new Subject<any[]>();
groups = []
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

//   registerGroup(group) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     return this.http
//       .post(this.apiUrl + '/users/register', group, { headers: headers })
//       .map(res => res.json())
//       .catch(this._errorHandler);
//   }
  getGroups(group){
    // return this.groups.slice()
    console.log("group service");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .get(this.apiUrl + '/group/getGroups/',{params:group})
      .map((res) => {
        const data = res.json();
        console.log('fefefeaqwsderfrt', res.json())
        return data;
      })
      .catch(this._errorHandler);
 }
  getGroup(id){
    console.log("getgroup groupservice");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
        .get(this.apiUrl+'/group/getgroup/'+ id,{headers:headers})
        .map((res)=> {
            this.data = res.json()[0];
            console.log("response",this.data[0])
            return this.data;
        })
 }

 sendData(){
     console.log("send data group service");
     console.log(this.data);
     return this.data;
 }

 removeUser(gid,uid){
    this.groups[gid].users.splice(uid,1);
    this.groupChanged.next(this.groups[gid].users);
 }
//  removeGroup(id){
//     //  console.log("id",id);
//     this.groups.splice(id,1);   
//     this.groupChanged.next(this.groups);      
//  }
 addGroup(grpName:any,grpMember:any){
    //  const users =[];
    //  grpMember.forEach(member => {
    //      const user = member.email;
    //      users.push(user);
    //  });
     const grp ={grpName,grpMember}
     console.log("group",grp);
     console.log(this.apiUrl + '/group/register');

         let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.apiUrl + '/group/add', grp, { headers: headers })
      .map(res => {
          return res.json();
      });
 }
 editGroup(gid:any,grpName:any,grpMember:any){
    //  const users =[];
    //  grpMember.forEach(member => {
    //      const user = member.email;
    //      users.push(user);
    //  });
     const grp ={gid,grpName,grpMember}
     console.log("group",grp);
     console.log(this.apiUrl + '/group/edit');

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(this.apiUrl + '/group/abc/edit', grp, { headers: headers })
      // .map(res => res.json())S
      .catch(this._errorHandler);
 }
 deleteGroup(id){
     console.log(this.apiUrl + '/group/deletegroup');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .delete(this.apiUrl + '/group/deletegroup/'+ id, { headers: headers })
      .catch(this._errorHandler);
 }
//  getUsers(){
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     return this.http
//       .post(this.apiUrl + '/users/register', group, { headers: headers })
//       .map(res => res.json())
//       .catch(this._errorHandler);
//  }

}
