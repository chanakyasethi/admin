import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  inputs:['quesList']
})
export class QuestionsComponent implements OnInit {
  @Input() questions: any ;
  ques;
  quesList=[];
  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  onEdit(){
    // localStorage.setItem('testEdit',this.details);
    this.router.navigate(['createtest','testdetails']);
  }
}
