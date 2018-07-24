import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../../services/group.service';
import { UserService } from '../../../services/user.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  users: any[];
  id: number;
  groupID: any;
  formName: string;
  usersAdded: any[] = [];
  editMode = false;
  groupName;
  groupForm: NgForm;
  constructor(private groupService: GroupService, private userService: UserService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          console.log('idididididid', this.id)
          if (this.id != null && this.id != undefined) {
            this.editMode = true;
          }
          console.log('wwwwwwwwwwwwww', this.editMode)
          this.getUsers();
        }
      );

  }
  private initForm() {
    // let groupName = '';

    if (this.editMode) {
      console.log("edit mode");
      const group = this.groupService.getGroup(this.id).subscribe(
        (data) => {
          console.log('fffffffffff', data)
          this.groupID = data._id
          this.groupName = data.groupName;
          data.users.forEach(user => {
            this.usersAdded.push(user);
          });
          // this.groupNam
          console.log("users length", this.users.length)
          console.log("usersadded length", this.usersAdded.length)
          this.users = _.differenceWith(this.users, this.usersAdded, _.isEqual);
          console.log("difference", this.users.length);
        }
      );
    }
    // this.groupForm.setValue({
    //   groupName:groupName
    // })

  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (res) => {
        this.users = [];
        res.users.forEach(element => {
          this.users.push(element.email);
        });
        // this.users = res.users;
        this.initForm();
        console.log(this.users);

      }
    )
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.usersAdded);
    console.log(this.editMode);
    if (this.editMode) {
      this.groupService.editGroup(this.groupID, form.value, this.usersAdded).subscribe(
        (res) => {
          console.log("4111111111111111111111111111111111111111111111111")
          this.router.navigate(['/load/manage-group']);

        }
      );
    }
    else {
      this.groupService.addGroup(form.value, this.usersAdded).subscribe(
        (res) => {
          console.log("2222222222222222222222222222")
          this.router.navigate(['/load/manage-group']);
        }
      );
    }
    console.log("33333333333333333333333333333333333333333333333");

  }
  onAdd(i: number) {
    this.usersAdded.push(this.users[i]);
    this.users.splice(i, 1);
  }

  onRemove(i: number) {
    this.users.push(this.usersAdded[i]);
    this.usersAdded.splice(i, 1);
  }
  addID(emailID: string) {
    console.log(emailID);
    this.usersAdded.push(emailID);
  }

}
