import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { ResponseService } from 'app/services/response.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ServerService } from 'app/services/server.service';

declare var alertify: any; // custom alert

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
  title = 'app';
  newValue = false;
  checkBoxValue = false;

  constructor(
    private authService: AuthService,
    private responseService: ResponseService,
    private route: ActivatedRoute,
    private router: Router,
    private serverService: ServerService
  ) { }

  ngOnInit() { }

  //-----------------------------------------
  // Start Time Logic
  //-----------------------------------------
  onStartTest() {
    var isodate = new Date().toISOString();
    this.responseService.getstart(isodate).subscribe(
      data => {
        console.log('fffffff', data);
        if (data.success) {
          this.router.navigate(['/test/testportal']);
        }
      },
      err => {
        console.log(err);
        const error = JSON.parse(err._body);
        alertify.alert(error.msg);
      }
    );

    // this.router.navigate(['/test/testportal']);
  }
}
