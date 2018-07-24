import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  constructor(private stateService: StateService,
              private router: Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    const Testdetails = localStorage.getItem('testEdit');
      console.log(Testdetails);    
    if(Testdetails != null){
      this.stateService.TestState(Testdetails);
    }
    // this.router.navigate(['testdetails'], {relativeTo:this.route} );
  }

}
