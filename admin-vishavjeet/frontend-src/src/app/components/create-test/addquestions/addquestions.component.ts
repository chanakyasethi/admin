import { Component, OnInit } from '@angular/core';
import { TestServerService } from '../../../services/testServer.service';

declare var alertify: any; // custom alert

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css']
})
export class AddquestionsComponent implements OnInit {
  testdetail: any;
  testName: string;
  category: string;
  duration: string;
  level: string;

  message: any;
  constructor(private testServerService: TestServerService) { }

  ngOnInit() {
    this.testServerService.getTestId()
      .subscribe(
      (id) => console.log(id),
      (err) => {
        const error = JSON.parse(err._body);
        alertify.alert(error.msg);
      }
      );
  }

  onSubmitTest()
  {
    
  }
}
