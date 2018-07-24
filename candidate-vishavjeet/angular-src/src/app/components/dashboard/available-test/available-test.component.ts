import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-available-test',
  templateUrl: './available-test.component.html',
  styleUrls: ['./available-test.component.css']
})
export class AvailableTestComponent implements OnInit {
  @Input() testArr;
  constructor() { }

  ngOnInit() {
    console.log(this.testArr);
  }

}
