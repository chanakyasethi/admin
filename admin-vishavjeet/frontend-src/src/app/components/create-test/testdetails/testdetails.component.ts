import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { TestServerService } from '../../../services/testServer.service';
import { StateService } from '../../../services/state.service';
import { FormGroup, FormControl, FormArray, NgForm, Validators, FormBuilder } from '@angular/forms';

declare var alertify: any; // custom alert
@Component({
  selector: 'app-testdetails',
  templateUrl: './testdetails.component.html',
  styleUrls: ['./testdetails.component.css']
})
export class TestdetailsComponent implements OnInit {
  @Input() test: any;
  defaultTestLevel: string = 'Medium';
  defaultTestCategory: string = 'Technical';


  test_id: any;
  testName: String;
  category: String = this.defaultTestCategory;
  totalQuestion: number;
  duration: number;
  difficultylevel: String = this.defaultTestLevel;
  isPracticeTest: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private testServerService: TestServerService,
    private stateService: StateService
  ) { }

  ngOnInit() {
    const test = this.stateService.FetchAllData();
    console.log('test ' + JSON.stringify(test));
    //     const testedit = JSON.parse(localStorage.getItem('testdetails'));
    //     console.log("testedit",testedit)

    if (test !== null) {

      this.test_id = test._id;
      this.testName = test.testName;
      this.category = test.category;
      this.duration = test.duration;
      this.difficultylevel = test.difficultylevel;
    }
  }

  onSubmitTest(validity) {

    const testdetails = {
      id: this.test_id || null,
      testName: this.testName,
      category: this.category,
      totalQuestion: this.totalQuestion || null,
      duration: this.duration,
      difficultylevel: this.difficultylevel,
      practice: this.isPracticeTest
    };



    if (validity) {

      this.testServerService.testDetails(testdetails).subscribe(
        data => {
          console.log(data);
          if (data.success == false) {
            this.stateService.testStateSave(data.savedTest);
            localStorage.removeItem('testEdit');
            this.router.navigate(['load', 'createtest', 'upload']);
          }
          else {
            console.log("rrrrrr");
            alertify.alert(
              data.msg
            );
            this.router.navigate(['load', 'createtest', 'testdetails']);

          }
        },
        error => {
          console.log(error);
          const err = JSON.parse(error._body);
          alertify.alert(err.msg);
          this.router.navigate(['load', 'createtest', 'testdetails']);
        }
      );
    }
  }

  onPracticeTrue() {
    this.isPracticeTest = !this.isPracticeTest;
    console.log(this.isPracticeTest);
  }
}
