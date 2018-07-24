import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { FormGroup, FormControl, FormArray, NgForm, Validators, FormBuilder } from '@angular/forms';
declare var alertify: any; // custom alert

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  apiUrl = environment.apiUrl;
  userForm: FormGroup;
  reCaptcha: any;
  submitted = false;
  public token: string = null;

  constructor(

    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {



    this.userForm = new FormGroup({

      // 'name': new FormControl(null, [Validators.required,
      // Validators.pattern(/^[^-\s][a-zA-Z_\s]*[^-\s]$/)
      // ]),

      'insName': new FormControl(null, [Validators.required,
      Validators.pattern(/^[^-\s][a-zA-Z_\s]*[^-\s]$/)
      ]),

      'email': new FormControl(null, [Validators.required,
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ]),

      // 'username': new FormControl(null, [Validators.required,
      // Validators.minLength(6),
      // Validators.maxLength(15),
      // Validators.pattern(/^\w+$/)
      // ]),

      'password': new FormControl(null, [Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/),
      Validators.minLength(8),
      Validators.maxLength(16)])


    });
  }

  // get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
  get insName() { return this.userForm.get('insName'); }
  // get username() { return this.userForm.get('username'); }
  get password() { return this.userForm.get('password'); }


  // getToken(event: Event) {
  //   console.log('Event', event);
  // }

  // resolved(captchaResponse: string) {
  //   // console.log(`resolved captcha with response  ${captchaResponse}:`);
  //   this.reCaptcha = captchaResponse;
  // }

  onRegisterSubmit(ngfrom) {
    this.submitted = true;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const captcha = this.reCaptcha;

    fetch(this.apiUrl + '/users/subscribe', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ captcha: captcha })
    })
      .then(res => res.json())

    // .then(response => {

    if (ngfrom.valid) {
      // Register user
      console.log(ngfrom.value)
      this.authService.registerUser(ngfrom.value).subscribe(
        data => {
          // console.log(data);
          alertify.alert(data.msg);
          this.router.navigate(['/']);
        },
        err => {
          console.log(err);
          const error = JSON.parse(err._body);
          alertify.alert(error.msg);
        });
    }


  }

}

