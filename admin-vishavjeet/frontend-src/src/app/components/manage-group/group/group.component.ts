import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../../services/group.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as _ from 'lodash';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  constructor(private groupService: GroupService, private route: ActivatedRoute,
            private router: Router,private userService: UserService) { }
  id:any
  group:any;
  groupName: any
  users:any[]=[];
  editMode= false;
  createMode= false;
  usersAdded:any[]=[]
  groupID: any
  groupForm: NgForm  
  user:{
    username:""
  }
  ngOnInit() {
    this.users=[];
    this.user= {
      username:""
    };
    this.groupName='';
    this.route.params
      .subscribe(
        (params: Params) => {
          let mode = params['mode'];
          let create = params['create'];
          this.id = params['id'];
          console.log('idididididid',mode)
          this.getUsers();
          if(mode != null && mode != undefined){
          console.log('idididididide',this.id)
            this.editMode = true
            console.log('wwwwwwwwwwwwww',this.editMode)
          }
          if(create != null && create != undefined){
            console.log('create',create);
            this.createMode = true
            console.log('create-mode',this.createMode);
          }
        }
      );
      if(!this.createMode){
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        this.group = this.groupService.sendData();
        this.groupName = this.group.groupName;
        this.users = this.group.users;
        console.log("group component groups",this.users);
      }
    
  }
  onBack(){
    this.router.navigate(['/load/manage-group/']);   
   }
  onRemove(ids){
    this.groupService.removeUser(this.id,ids);
    // this.router.navigate(['/load/manage-group'])
  }
  onEdit(){
    let mode=true
    this.router.navigate(['/load/group/'+this.groupName+'/edit']);          
  }


  private initForm() {
    // let groupName = '';

    if (this.editMode) {
      console.log("edit mode");
      const group = this.groupService.getGroup(this.id).subscribe(
        (data)=>{
          this.users=[]
          console.log('fffffffffff',data)
          this.groupID = data._id
          this.groupName=data.groupName;
          data.users.forEach(user => {
            this.users.push(user);
          });
          // this.groupNam
          console.log("users length",this.users)
          console.log("usersadded length",this.usersAdded)          
          this.usersAdded = _.differenceWith(this.usersAdded, this.users, _.isEqual);
          console.log("difference",this.usersAdded.length);
        }
      );
    }
  // this.groupForm.setValue({
  //   groupName:groupName
  // })
  
  }

  getUsers(){
    console.log("getusers");
    this.userService.getUsers().subscribe(
      (res)=>{
        this.usersAdded = [];
        res.users.forEach(element => {
        this.usersAdded.push(element.email);
        });
        // this.users = res.users;
        this.initForm();        
        console.log("usersAdded",this.usersAdded);
  
      }
    )
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    console.log(this.users);
    console.log(this.editMode);
    console.log(this.id);
    if(this.editMode){
      this.groupService.editGroup(this.id,form.value,this.users).subscribe(
        (res)=> {
          console.log("4111111111111111111111111111111111111111111111111")
          this.router.navigate(['/load/manage-group']);  
          
        }
      );
    }
    else {
      this.groupService.addGroup(form.value,this.users).subscribe(
        (res)=> {
          console.log("2222222222222222222222222222")
          this.router.navigate(['/load/manage-group']);  
        }
      );
    }
    console.log("33333333333333333333333333333333333333333333333");

}
  onAdd(i:number){
    this.usersAdded.push(this.users[i]);
    this.users.splice(i,1);
  }

  onRemoveUser(i:number){
    // this.users.push(this.usersAdded[i]);
    this.users.splice(i,1);
  }
  addID(emailID:string){
    console.log(emailID.length);
    let emails = [],i=0;
    let email = '';
    for(i=0;i<emailID.length;i++){
      if(emailID[i]!= ','){
          email += emailID[i];
      } else {
        if(email!=''){
              this.users.push(email);
          // for(var j=0;j<this.usersAdded.length;i++){
          //   if(this.usersAdded[j]=== email){
          //     this.usersAdded.splice(j,1);
          //   }
          // }
        }
          // emails.push(email);
          email = '';
      }
    }
    if(emailID[emailID.length-1]!== ','){
      this.users.push(email);    
    }
    // emails.push(email);
    // console.log(emails);
  }

  onSearch(){

  }




}
