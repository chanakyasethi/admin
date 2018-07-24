import {
  ChangeDetectionStrategy,
  OnInit,
  Component,
  Input
} from '@angular/core';
import { PaginationInstance } from '../../models/pagination.model';
import { TestServerService } from '../../services/testServer.service';
import { UserService } from '../../services/user.service';
import { Response } from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';
import { NgProgress } from 'ngx-progressbar';
import { element } from 'protractor';
declare var alertify: any; // custom alert

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ManageUserComponent implements OnInit {
  public filter: string = '';
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public Hide: boolean = false;
  public config: PaginationInstance = {
    id: 'hello',
    itemsPerPage: 10,
    currentPage: 1
  };


  public userList: {
    status: string,
    branch: string,
    perPage: string,
    state: string

  };
  //pagination
  pageNo: number = 1;
  totalPages: number;
  dummyArray: number[]
  count: number;

  //page entries
  startTestInstance: number;
  endTestInstance: number;

  Users: any = [];
  AllUser: any = [];
  defaultbranch: string = 'All';
  temp = [];
  toggle = [];
  id: number;
  checkBoxValue: boolean = false;
  checked: boolean = false;
  Toggle = [];

  //filters
  branch: any = [];
  state: any = [];
  status: any = [];

  constructor(
    private userService: UserService,
    private progressService: NgProgress,
    private testServerService: TestServerService
  ) { }

  ngOnInit() {
    //getting distinct values for filter process    
    this.userService.getDistinctValues().subscribe(
      data1 => {
        this.branch = data1.branches;
        this.state = data1.states;
        this.status = data1.status;
      }
    )

    this.userList = {
      status: "",
      branch: "",
      perPage: "5",
      state: ""

    };
    this.getUsersList();
  }

  // ---------------------------I
  //  getting the users list
  // ---------------------------I
  getUsersList() {
    this.AllUser = [];
    this.temp = [];
    this.userService.storeUsers(this.userList, this.pageNo).subscribe(
      data => {
        // console.log('fufufufu',data);
        this.Users = data.users;
        this.totalPages = data.pages;
        this.count = data.count;
        this.userList.perPage = data.perPage;

        for (let key in this.Users) {
          this.AllUser.push({ value: this.Users[key] });
          this.temp.push({ value: this.Users[key] });

        }


        for (let i in this.AllUser) {
          this.toggle.push({ value: this.AllUser[i].value.status });
        }

        for (let k in this.toggle) {
          if (this.toggle[k].value === 'Active') {
            this.Toggle[k] = true;
            // this.state = 'Active';
          } else if (this.toggle[k].value === 'Inactive') {
            this.Toggle[k] = false;
            // this.state = 'Inactive';
          }
        }
        if (this.count) {
          this.startTestInstance = ((this.pageNo - 1) * parseInt(this.userList.perPage)) + 1;
        } else {
          this.startTestInstance = 0;
        }
        this.endTestInstance = parseInt(this.userList.perPage) * this.pageNo;
        if (this.endTestInstance > this.count) {
          this.endTestInstance = this.count;
        }
        this.pageNoManipulation();
      },

      error => {
        // console.log(error);
        alertify.alert(error);
        const err = JSON.parse(error._body);
        alertify.alert(err.msg);
      }
    );
  }

  onFilterUsers() {
    this.pageNo = 1;
    this.getUsersList();
  }



  // ---------------------------I
  //  Toggle Active
  // ---------------------------I
  onclick() {
    if (this.checkBoxValue === false) {
      this.checkBoxValue = true;
    } else {
      this.checkBoxValue = false;
    }
  }

  //----------------------I
  // Archive User List
  //----------------------I

  deleteAll() {
    console.log('all candidates are deleted');
  }

  onDelete(user) {
    const id = user.value._id;
    console.log(id);
    const promise = new Promise((resolve, reject) => {
      alertify.confirm('Confirm',
        'Are you sure you want to archive the user from your UserList?',
        function () {
          alertify.success('Ok');
          resolve();
        }
        , function () {
          alertify.error('Cancel');
          reject();
        });
    })

    promise.then(() => {
      this.userService.deleteUser(id).subscribe(
        data => {
          console.log('test id ' + id + ' is deleted');
          this.getUsersList();
        },
        error => {
          console.log(error);
        }
      );
      const i = this.AllUser.indexOf(user);
      console.log(i);
      this.AllUser.splice(i, 1);
    }, () => {
      alertify.alert('User not deleted!!');
    })

  }

  // -----------------------I
  // Toggle Active Button
  // -----------------------I
  onToggleClick(index, user) {
    var usedet = {};
    var status;
    if (this.Toggle[index]) {
      this.Toggle[index] = false;
      usedet = {
        userid: user.value._id,
        status: 'Inactive'
      };
    } else {
      this.Toggle[index] = true;
      usedet = {
        userid: user.value._id,
        status: 'Active'
      };
    }

    this.userService.setActive(usedet).subscribe(
      data => {
        this.AllUser[index].value.status = data;
        alertify.notify(data.msg);
      },
      err => {
        console.log(err);
        const error = JSON.parse(err._body);
        alertify.alert(error.msg);
      }
    );
  }

  // -----------------------------I
  // Page number manipulation
  // -----------------------------I

  pageNoManipulation() {
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
      for (y = startPage + x; y < startPage + 5 + x; y++) {
        pageArray.push(y);
      }
      this.dummyArray = pageArray;
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


}
