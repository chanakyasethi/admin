import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { TestServerService } from '../../services/testServer.service';
import { CandidatesComponent } from './candidates/candidates.component';
import { Router } from '@angular/router';
import { QuesIdsService } from '../../services/ques-ids.service';
import { QuestionsComponent } from './questions/questions.component';
import { Input } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

declare var alertify: any; // custom alert

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
  // directives: [CandidatesComponent]
})
export class TestComponent implements OnInit {
  id: Number;
  // id: EventEmitter<number> = new EventEmitter<number>();
  dynamicTestValue;
  details: any = {};
  @Input() questionList;
  totalQuestions;
  questionIds = [];
  questionActive = true;
  candidateActive = false;
  resultActive = false;

  constructor(
    private testServerService: TestServerService,
    private router: Router,
    private progressService: NgProgress,
    private qidService: QuesIdsService
  ) { }

  ngOnInit() {
    const test = JSON.parse(localStorage.getItem('testdetails'));
    console.log(test);
    this.details = test;
    // localStorage.setItem('testEdit', JSON.stringify(this.details));

    this.details.questions.forEach(ed => {
      this.questionIds.push(ed);
    });
    // console.log(this.questionIds);
    this.qidService.Questionlist(this.questionIds).subscribe(
      data => {
        // console.log('questions here ', data);
        this.questionList = data;
        this.totalQuestions = this.questionList.length;
      },
      error => console.log(error)
      // () => console.log('Finished')
    );
  }

  // onEdit() {
  //   const test_state = this.details.state;
  //   if (test_state !== 'published') {
  //     this.router.navigate(['/load', 'createtest', 'testdetails']);
  //   } else {
  //     alertify.alert('This Test is already been published, cannot be edited!!');
  //   }
  // }
  
  onQuestions() {
    this.questionActive = true;
    this.candidateActive = false;
    this.resultActive = false;
  }

  onCandidate() {
    this.questionActive = false;
    this.candidateActive = true;
    this.resultActive = false;
  }

  onResult() {
    this.questionActive = false;
    this.candidateActive = false;
    this.resultActive = true;
  }


}
