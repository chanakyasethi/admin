import {
  ChangeDetectionStrategy,
  OnInit,
  Component,
  Input
} from '@angular/core';
import { UserService } from '../../../services/user.service';
import { PaginationInstance } from '../../../models/pagination.model';
import { TestServerService } from '../../../services/testServer.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { ResultsService } from '../../../services/results.service';
declare var alertify: any;

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CandidatesComponent implements OnInit {
  @Input() Testdetails: any;
  testid: any;

  public filter: String = '';
  public maxSize: Number = 7;
  public directionLinks: Boolean = true;
  public autoHide: Boolean = false;

  //for page entries
  startTestInstance: number;
  endTestInstance: number;

  //for pagination
  public config: PaginationInstance = {
    id: 'candidate',
    itemsPerPage: 10,
    currentPage: 1
  };
  count: number;
  dummyArray: number[];
  pageNo: number = 1;
  totalPages: number;

  constructor(
    private userService: UserService,
    private testService: TestServerService,
    private resultService: ResultsService
  ) { }
  Users: any = [];
  AllUser: any = [];
  usersId: any = [];
  assign: boolean;

  id: number;
  testId: any;
  Toggle = [];
  checkBoxValue: Boolean = false;
  toggleValue: Boolean = false;
  branch = [];
  temp: any = [];
  candidates: any = [];
  testStateFor = [];
  disabletoggle = [];
  public userList: {
    status: string,
    branch: string,
    perPage: string,
    testStatus: string,
    tId: string,
  };
  testStatus: string = "";
  candidateIds = [];
  public onShow:boolean=false;
  userData:any;
  result={
    finishMode:"none",
    score:0,
    timeSpent:0,
    status:''
  }
  test:any;

  ngOnInit() {
    this.test = this.Testdetails;
    this.testid = this.test._id;
    this.userList = {
      status: "Active",
      branch: "",
      perPage: "",
      testStatus: "",
      tId: this.testid
    };
    this.userService.getDistinctValuesForActiveUsers().subscribe(
      data1 => {
        console.log('dddddd', data1);
        this.branch = data1.branches;
      }
    )

    this.getUsersList();
  }

  //----------------------------------//
  //   TO GET USERS LIST              //
  //----------------------------------//
 
  getUsersList() {
    this.AllUser = [];
    this.Toggle = [];
    var user1 = [];
    this.userService.storeUsers(this.userList, this.pageNo).subscribe(
      data => {
        console.log('hhaahhaa', data)
        this.Users = data.users;
        this.totalPages = data.pages;
        this.count = data.count;
        this.dummyArray = new Array(this.totalPages);
        this.config.itemsPerPage = data.perPage;

        this.pageNoManipulation();

        for (let key in this.Users) {
          if (this.Users[key].status) {
            this.AllUser.push({ value: this.Users[key] });
            this.temp.push({ value: this.Users[key] });
          }
        }
        for (let k = 0; k < this.AllUser.length; k++) {
          this.candidateIds.push(this.AllUser[k].value._id);
        }

        if (this.count) {
          this.startTestInstance = ((this.pageNo - 1) * this.config.itemsPerPage) + 1;
        } else {
          this.startTestInstance = 0;
        }
        this.endTestInstance = this.config.itemsPerPage * this.pageNo;
        if (this.endTestInstance > this.count) {
          this.endTestInstance = this.count;
        }
        this.resultService
          .getTestResult(this.testid, this.candidateIds)
          .subscribe(res => {
            console.log('getting result: ', res);
          });
      },

      error => console.log(error),
      () => {
        this.testService.getAssignedcandidates(this.testid, this.testStatus).subscribe(
          data => {
            console.log("response1232", data);
            this.candidates = data;
          },
          err => {
            console.log(err);
            const error = JSON.parse(err._body);
            alertify.alert(error.msg);
          },
          () => {
            // console.log(this.AllUser.length);
            if (this.testStatus == "") {
              for (var i = 0; i < this.AllUser.length; i++) {
                var activeUser = this.AllUser[i].value._id;
                this.Toggle[i] = false;
                for (var j = 0; j < this.candidates.length; j++) {
                  var assignedUser = this.candidates[j];
                  if (assignedUser === activeUser) {
                    this.Toggle[i] = true;
                    this.testStateFor.push(this.AllUser[i].value.username);
                  }
                }
              }
            }
            // if (this.testStatus == "Assigned") {
            //   for (var i = 0; i < this.AllUser.length; i++) {
            //     var activeUser = this.AllUser[i].value._id;
            //     this.Toggle[i] = false;
            //     for (var j = 0; j < this.candidates.length; j++) {
            //       var assignedUser = this.candidates[j];
            //       if (activeUser === assignedUser) {
            //         this.Toggle[i] = true;
            //         user1.push(this.AllUser[i]);
            //       }
            //     }
            //   }
            //   this.AllUser = [];
            //   this.AllUser = user1;
            // console.log('alluser',this.AllUser)
            // console.log('assigned',user1)              
            // } if (this.testStatus == "Unassigned") {
            //   for (var j = 0; j < this.candidates.length; j++) {
            //     var assignedUser = this.candidates[j];
            //     for (var i = 0; i < this.AllUser.length; i++) {
            //       var activeUser = this.AllUser[i].value._id;
            //       this.Toggle[i] = false;
            //       if (activeUser === assignedUser) {
            //         // this.Toggle[i] = true;
            //         this.AllUser.splice(i, 1);
            //       }
            //     }
            //   }
            // this.AllUser = user1;
            // console.log('alluser', this.AllUser)
            // console.log('assigned',user1)              
            // }
            this.testService
              .getStateofTest(this.testStateFor, this.testid)
              .subscribe(
              data => {
                for (let i = 0; i < this.testStateFor.length; i++) {
                  for (let j = 0; j < data.length; j++) {
                    if (
                      this.AllUser[i].value.username ===
                      data[j].candidateId
                    ) {
                      if (
                        data[j].status == 'ongoing' ||
                        data[j].status == 'finished'
                      ) {
                        this.disabletoggle[i] = true;
                      }
                    }
                  }
                }
              },
              err => {
                console.log(err);
                const error = JSON.parse(err._body);
                alertify.alert(error.msg);
              }
              );
          }
        );
      }
    );
    // console.log('candidate ids are', this.candidateIds);
    // Result Service to get Result from backend
    // this.resultService
    //   .getTestResult(this.testid, this.candidateIds)
    //   .subscribe(res => {
    //     console.log(res);
    //   });
  }

  onFilterUsers() {
    this.pageNo = 1;
    this.AllUser = [];
    this.getUsersList();
  }

  //----------------------------I
  // Pagination
  //----------------------------I
  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  //--------------------------------I
  // Filters Logic
  //--------------------------------I
  onSelect(event) {
    var newUser = [];
    this.AllUser = this.temp;
    this.AllUser.forEach(element => {
      if (event.target.value === element.value.branch) {
        newUser.push(element);
        this.AllUser = newUser;
      } else if (event.target.value === 'All') {
        this.AllUser = this.temp;
      } else if (event.target.value != element.value.branch) {
        this.AllUser = newUser;
      }
    });
  }



  onAssigntestclick(user, index) {
    // console.log(this.Toggle[index]);
    this.usersId = [];
    var id = user.value._id;
    var assign: boolean;
    // if (this.Toggle[index] == true) {
    //   this.Toggle[index] = false;
    //   assign = false;
    //   this.usersId.push(id);
    // } else {
    //   this.Toggle[index] = true;
    //   assign = true;
    //   this.usersId.push(id);
    //   // console.log('false: ', this.usersId);
    // }
    this.Toggle[index] = !this.Toggle[index];
    assign = this.Toggle[index];
    // if(this.Toggle[index]){
    this.usersId.push(id);
    // }
    console.log('asasasasa', assign, id, this.usersId);
    this.testService
      .testAssignation(this.usersId, this.testid, assign)
      .subscribe(
      data => {
        alertify.alert(data.msg);
      },
      error => {
        console.log(error);
        const err = JSON.parse(error._body);
        alertify.alert(err.msg);
      }
      );
  }

  selectAll() {
    if (this.checkBoxValue == false) {
      this.checkBoxValue = true;
      this.assign = true;
      for (let i = 0; i < this.AllUser.length; i++) {
        this.Toggle[i] = true;
        this.usersId.push(this.AllUser[i].value._id);
      }
    } else {
      this.checkBoxValue = false;
      this.assign = false;
      for (let i = 0; i < this.AllUser.length; i++) {
        this.Toggle[i] = false;
        this.usersId.push(this.AllUser[i].value._id);
      }
    }
  }

  onAssign() {
    this.testService
      .testAssignation(this.usersId, this.testid, this.assign)
      .subscribe(
      data => {
        alertify.alert(data.msg);
      },
      error => {
        console.log(error);
        const err = JSON.parse(error._body);
        alertify.alert(err.msg);
      }
      );
  }

  onCompute() {
    this.resultService.computeResult(this.testid).subscribe(res => {
      // console.log('datastatus', res);
    });
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
      this.getUsersList();

    }
  }

  onPrev() {
    if (this.pageNo > 1) {
      this.pageNo--;
      this.getUsersList();

    }
  }

  onPageno(i) {
    this.pageNo = i;
    this.getUsersList();
  }

  viewReport(user){
    this.userData=user.value;
    console.log("users....",this.test);
    this.resultService.getTestResult(this.testid,this.userData._id)
    .subscribe(res=>{
      this.result={
        finishMode:res.finishMode,
        score:res.score,
        timeSpent:res.timeSpent,
        status:res.status
      }
      console.log("result ts",this.result);
    });
    this.onShow=!this.onShow;
  }

  closeResult(){
    this.result={
      finishMode:"none",
      score:0,
      timeSpent:0,
      status:''
    }
    this.onShow=!this.onShow;
  }
}
