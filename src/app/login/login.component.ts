import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  dummypass = 'Sid4@aaa';
  dummymail = 'sid@gmail.com';
  passent = '';
  emailent = '';

  constructor(private fb: FormBuilder, private route:Router) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })


  onLogin() {
    if(this.passent === this.dummypass  &&  this.emailent === this.dummymail){
        this.route.navigate(['HomePage']);
    }
    else{alert("Wrong credentials");
    this.passent = '';
    this.emailent = '';
  }

  }

  loginButtonDisabled()
  {
    return (this.loginForm.valid);
  }

}
