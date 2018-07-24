import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-taken',
  templateUrl: './test-taken.component.html',
  styleUrls: ['./test-taken.component.css']
})
export class TestTakenComponent implements OnInit {
  @Input() testArr;
  constructor() { }

  ngOnInit() {
  }

}
