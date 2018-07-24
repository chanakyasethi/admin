import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})
export class QualificationsComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit() {
  }

}
