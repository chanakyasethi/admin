import { environment } from './../../../../environments/environment';
import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TestServerService } from '../../../services/testServer.service';
import { FileUploader } from 'ng2-file-upload';
import { StateService } from '../../../services/state.service';
const URL = environment.apiUrl + '/tests/addquestions';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public uploader: FileUploader;
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  @ViewChild('fileImportInput')
  fileImportInput: any;
  editfile: boolean = true;
  ques: any = [];
  totalQues: number;
  tid: any;
  token;
  authToken;

  constructor(
    private router: Router,
    private testServerService: TestServerService,
    private stateService: StateService
  ) {
    this.token = localStorage.getItem('id_token');
    this.uploader = new FileUploader({
      url: URL,
      authToken: 'JWT ' + this.token
    });
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  ngOnInit() {

    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      console.log('ImageUpload:uploaded:', response);
      this.ques = JSON.parse(response);
      this.totalQues = this.ques.length;
    };
    const teststate = this.stateService.FetchAllData();
    // console.log(teststate);

    if (teststate != null) {
      if (teststate.questions.length > 0) {
        this.editfile = false;
        this.totalQues = teststate.totalQuestion;
      }
    } else {
      this.editfile = true;
      this.totalQues = 0;
    }
  }

  onSubmitQuestion() {
    console.log("test uploaded....")
    var quesIds = [];
    this.ques.forEach(element => {
      quesIds.push(element._id);
    });

    console.log("question ids are", quesIds);
    const test = this.stateService.FetchAllData();
    console.log("test is here", test);
    if (test != null) {
      this.tid = test._id;
      this.testServerService.TestfromUpload(this.tid, quesIds).subscribe(
        data => {
          console.log("no error")
          this.stateService.testStateSave(data);
          this.router.navigate(['load', 'createtest', 'publish']);
        },
        err => {
          console.log(err);
          this.router.navigate(['load', 'createtest', 'upload']);
        }
      );
    }
  }

  replace() {
    this.editfile = true;
    console.log(this.editfile);
  }
  previous() {
    this.editfile = true;
    console.log("previous");
  }

  next() {
    this.editfile = false;
    this.router.navigate(['load', 'createtest', 'publish']);
  }

  priyanka() {
    this.router.navigate(['load', 'createtest', 'publish']);

  }
}
