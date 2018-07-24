import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {
  id = JSON.parse(localStorage.getItem('user')).id;
  @Input() user: {
    name: string,
    email: string,
    gender: string,
    dob: string,
    phone: number,
    address: string,
    image: string,
    pincode: number
  };
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSave() {

    this.authService.updateProfile({
      name: "Hello",
      email: "vishavjeet@cfeindia.com",
      gender: "qeqweqweqwe",
      dob: "qeqweqweqwe",
      phone: 12123123123,
      address: "asdasdasd",
      image: "asdasdasd",
      pincode: 121331
    }).subscribe((data: any) => {
      this.user = data;
      console.log("//////////////////", data);
    });

  }



}
