import {
  ChangeDetectionStrategy,
  OnInit,
  Component,
  Input
} from '@angular/core';
import { PaginationInstance } from '../../models/pagination.model';
import { TestServerService } from '../../services/testServer.service';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { error } from 'util';
import { NgProgress } from 'ngx-progressbar';

declare var alertify: any; // custom alert

@Component({
  selector: 'app-manage-test',
  templateUrl: './manage-test.component.html',
  styleUrls: ['./manage-test.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ManageTestComponent implements OnInit {

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;


  //==========PAGINATION , FILTERING & SORTING QUERY DATA==================

  public testQ: {
    state: string,
    category: string,
    difficultylevel: string,
    perPage: string,
    // sort: string
  };
  dummyArray: number[]
  pageNo: number = 1;
  totalPages: number;
  count: number;
  perPage: number;
  startTestInstance: number;
  endTestInstance: number;

  //=======================================================================



  tests = [];
  id: any;
  testArray = [];
  testItems = [];
  temp = [];
  checkbox: boolean = false;
  checked: boolean = false;
  isChecked: boolean = false;
  disabled: boolean = false;

  distinctCat = [];
  distinctLevel = [];
  distinctState = [];

  constructor(
    private testServerService: TestServerService,
    private stateService: StateService,
    private progressService: NgProgress,
    private router: Router
  ) { }

  ngOnInit() {
    //=======SETTING INITIAL VALUES TO QUERY DATA========
    this.testQ = {
      state: "",
      category: "",
      difficultylevel: "",
      perPage: "",
      // sort: ""
    };
    this.getdistinctValues();

    localStorage.removeItem('testdetails');
    localStorage.removeItem('testEdit');

    //========GETTING TESTS LIST===
    this.getTestList();
  }

  getdistinctValues() {
    this.testServerService.getDistinctValues().subscribe(
      data1 => {
        // console.log('distinctdata', data1);
        this.distinctCat = data1.type;
        this.distinctLevel = data1.levels;
        this.distinctState = data1.testStates;
      }
    )
  }
  //==================================
  //    TEST LIST FETCHING FUNCTION
  //==================================
  getTestList() {
    this.testArray = [];
    this.temp = [];
    this.testServerService.getTestData(this.testQ, this.pageNo).subscribe(
      data => {
        // console.log(data);
        this.tests = data.tests;
        this.totalPages = data.pages;
        this.count = data.count;
        this.perPage = data.perPage;

        for (let key in this.tests) {
          this.testArray.push({ value: this.tests[key] });
          this.temp.push({ value: this.tests[key] });
        }
        if (this.count) {
          this.startTestInstance = ((this.pageNo - 1) * this.perPage) + 1;
        } else {
          this.startTestInstance = 0;
        }
        this.endTestInstance = this.perPage * this.pageNo;
        if (this.endTestInstance > this.count) {
          this.endTestInstance = this.count;
        }
        this.pageNoManipulation();
      },
      error => {
        console.log(error);
        const err = JSON.parse(error._body);
        alertify.alert(err.msg);
      }
    );
  }



  onFilter() {
    this.pageNo = 1;
    this.getTestList();
  }

  onEdit(test) {
    const testdetails = test.value;
    localStorage.setItem('testEdit', JSON.stringify(testdetails));
    console.log("test edit",test)
    if (testdetails.state !== 'published') {
      this.router.navigate(['/load', 'createtest', 'testdetails']);
    } else {
      alertify.alert('This Test is already been published, cannot be edited!!');
    }
  }


  pageNoManipulation() {
    // this.currentPage = this.pageNo;
    var pageArray = [];
    var pageShow = 5;
    var x = 0, y, z = 0;

    var startPage = this.pageNo - Math.floor(pageShow / 2);
    var endPage: number = Math.floor(pageShow / 2) + this.pageNo;
    y = startPage;
    if (this.totalPages < pageShow) {
      for (y = 1; y <= this.totalPages; y++) {
        pageArray.push(y);
      }
      this.dummyArray = pageArray;
    }
    else {
      if (startPage <= 0) {
        x = 1 - startPage;
      }
      if (endPage > this.totalPages) {
        z = endPage - this.totalPages;
        startPage = startPage - z;
      }
      // console.log(this.pageNo, startPage);
      for (y = startPage + x; y < startPage + 5 + x; y++) {
        pageArray.push(y);
      }
      this.dummyArray = pageArray;
      // console.log(pageArray);
    }

  }
  onNext() {
    if (this.pageNo < this.totalPages) {
      this.pageNo++;
      this.getTestList();
      // this.router.navigate(['/admin/test-instances/'+this.pageNo]);     
    }
  }

  onPrev() {
    if (this.pageNo > 1) {
      this.pageNo--;
      this.getTestList();
      // this.router.navigate(['/admin/test-instances/'+this.pageNo]);   
    }
  }

  onPageno(i) {
    this.pageNo = i;
    this.getTestList();
    // this.router.navigate(['/admin/test-instances/'+this.pageNo]);   

  }
  onTestClick(test) {
    const testdetails = JSON.stringify(test.value);
    localStorage.setItem('testdetails', testdetails);
    this.router.navigate(['/load', 'test']);
  }
  onAddTest() {
    const value = null;
    this.stateService.testStateSave(value);
    this.router.navigate(['load', 'createtest', 'testdetails']);
  }

  onAssign(test) {
    const t = this.testArray.indexOf(test);
    var val = this.testArray[t].value._id;
  }


  //----------------------------I
  // checkboxes Enable logic
  //----------------------------I
  onclick() {
    if (this.isChecked === false) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

  //----------------------------------------I
  // Archive Test Logic
  //----------------------------------------I
  onDelete(test) {
    const id = test.value._id;
const promise=new Promise((resolve,reject)=>{
  alertify.confirm('Want to delete test?', 
   function(){ alertify.success('Ok') ;
               resolve();
             }
 , function(){ alertify.error('Cancel');
               reject();
              });
})




promise.then(()=>{
      this.testServerService.deleteTest(id).subscribe(()=>{
        console.log(error);
        alertify.alert(error)

      }
        );
      const i = this.testArray.indexOf(test);
      console.log(i);
      this.testArray.splice(i, 1);
},()=>{
  alertify.alert('test is not deleted!!');
})
}

  //----------------On new test click--------------//
 
}

