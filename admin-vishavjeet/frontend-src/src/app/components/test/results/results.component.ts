import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../../services/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  givenTests;
  dummyArray=[];
  pageNo;
  totalPages;
  startTestInstance="";
  endTestInstance="";
  count="";
  constructor(private resultService: ResultsService) {}

  ngOnInit() {
    this.givenTests = this.resultService.giveTest;
    // console.log("print kro", this.givenTests);
  }
  onPrev()
  {
    
  }
  onNext()
  {

  }
}
