import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { HeaderComponent } from '../components/nav/header/header.component';


@Injectable()
export class TestServerService {
  token;

  apiUrl = environment.apiUrl;
  constructor(private http: Http) {
    this.token = localStorage.getItem('id_token');

  }
  // Handling error 
  _errorHandler(error: Response) {
    if (error.status == 0) {
      console.error(error);
      return Observable.throw({ _body: JSON.stringify({ msg: 'Server Not responding!!' }) });
    } else if (error.status > 400 && error.status < 500) {
      return Observable.throw(error || { _body: JSON.stringify({ msg: 'Something went wrong!!' }) });
    }
    return Observable.throw(error || 'Server Error!!');
  }

  storeQuestions(testid: number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    const testData = { ofTest: testid };
    return this.http.post(this.apiUrl + '/tests/createquestion', testData, {
      headers: headers
    })
      .map((res: Response) => {
        const id = res.json();
        return id;
      })
      .catch(this._errorHandler);
  }

  editTest(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    let options = new RequestOptions({ headers: headers, params: { testid: id } });
    return this.http
      .get(this.apiUrl + '/tests/getTestDetails', options
      )
      .map((res: Response) => {
        const id = res.json();
        return id;
      })
      .catch(this._errorHandler);
  }

  testDetails(testdetails) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .post(this.apiUrl + '/tests/testUpload', testdetails, { headers: headers })
      .map((res: Response) => {
        const data = res.json();
        return data;
      })
      .catch(this._errorHandler);
  }

  publishTest(test) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .put(this.apiUrl + '/tests/publishtest', JSON.stringify(test), { headers: headers })
      .map((res: Response) => {
        const data = res.json();
        return data;
      })
      .catch(this._errorHandler);
  }

  //====================================
  //  GETTING TEST LIST
  //=====================================
  getTestData(testQ: any, page: number) {

    // console.log("new page is here",page);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    // console.log("token is here", this.token);
    let options = new RequestOptions({ headers: headers, params: testQ });
    return this.http
      .get(this.apiUrl + '/tests/getTests/' + page, options)
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
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .get(this.apiUrl + '/tests/getDistinct', { headers: headers })
      .map((res: Response) => {
        const data1 = res.json();
        return data1;
      })
      .catch(this._errorHandler);
  }

  getTestId() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .get(this.apiUrl + '/tests/getTestId', { headers: headers })
      .map((res: Response) => {
        const id = res.json();
        return id;
      })
      .catch(this._errorHandler);
  }

  deleteTest(testId) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    let options = new RequestOptions({ headers: headers, params: { testid: testId } });
    return this.http
      .delete(this.apiUrl + '/tests/deleteTest', options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  TestfromUpload(test, qids) {
    const test_ques = {
      tid: test,
      qIds: qids
    };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .put(this.apiUrl + '/tests/updatetest', JSON.stringify(test_ques), {
        headers: headers
      })
      .map((res: Response) => {
        const data = res.json();
        return data;
      })
      .catch(this._errorHandler);
  }

  testAssignation(users, testId, check) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    return this.http
      .post(
      this.apiUrl + '/tests/assigntest',
      { params: { testid: testId, users: users, assign: check } },
      { headers: headers }
      )
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  getAssignedcandidates(tid, tstatus) {
    let id = tid;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    let options = new RequestOptions({ headers: headers, params: { tStatus: tstatus } });
    return this.http
      .get(this.apiUrl + '/tests/assignedcandidates/' + id, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);

  }

  getStateofTest(candidates, test) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.token);
    let options = new RequestOptions({ headers: headers, params: { candidate: candidates } });
    return this.http
      .get(this.apiUrl + '/tests/state/' + test, options)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
}
