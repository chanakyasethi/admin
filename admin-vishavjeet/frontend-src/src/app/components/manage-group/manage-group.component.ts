import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-manage-group',
  templateUrl: './manage-group.component.html',
  styleUrls: ['./manage-group.component.css']
})
export class ManageGroupComponent implements OnInit {
groups : any;
group:{
  groupName:""
};
  constructor(private groupService : GroupService,private progressService: NgProgress, private router: Router,private route: ActivatedRoute ) { }
  

  ngOnInit() {
    // this.groupService.getGroups().subscribe(
    //   (data)=>{
    //     this.groups=data;
    //     console.log('datadatadata',data);
    //   }
    // )
    this.group={
      groupName:""
    };
    console.log("get group on manage group");
    this.getGroups();
  }

  getGroups(){
    console.log("manage-component");
  this.groupService.getGroups(this.group).subscribe(
    (data)=>{
      this.groups=data;
      console.log('datadatadata',this.groups);
    }
  )
  // console.log(this.groups);
  }
  getGroup(id){
    this.groupService.getGroup(id).subscribe(
      (res)=> {
        console.log("manage group",res);
        this.router.navigate(['/load/group/'+id]);
      }
    )
    // this.router.navigate(['/load/group/'+id]);
  }
  onDelete(id,index){
    console.log("index",index);
    this.groupService.deleteGroup(id).subscribe();
    this.groups.splice(index,1);
    
    // this.getGroups();
    // this.router.navigate(['/load/manage-group'])    
  }
  onCreate(){
    let create = 'create'
    this.router.navigate(['/load/group/create/'+create])        
  }
  onEdit(grpName: string){
    this.groupService.getGroup(grpName).subscribe(
      (res)=> {
        console.log("manage group",res);
        this.router.navigate(['/load/group/'+grpName+'/edit']);
      }
    )                     
  }
// onCClick(){
//   // window.location.href="https://www.google.com";
//   window.open(, '_blank');
// }
  onSearch(){
    this.getGroups();
  }

  onSearchGroupName(){

  }

}
