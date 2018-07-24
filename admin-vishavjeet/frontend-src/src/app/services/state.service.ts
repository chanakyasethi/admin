import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  EditTestState: any;

  constructor() { }

  TestState(data) {
    // console.log(data);
    this.EditTestState = JSON.parse(data);
    return this.EditTestState;
  }

  FetchAllData() {
    const data = this.EditTestState;
    if (data) {
      return this.EditTestState;
    } else {
      return null;
    }
  }

  testStateSave(test) {
    // console.log(test);
    this.EditTestState = test;
  }
}
