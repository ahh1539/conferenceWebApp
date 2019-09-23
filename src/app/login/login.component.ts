import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../register-form/register.service';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(private router: Router, private regService: Register, private fb: FormBuilder) { }

  username;
  password;

  // tempusername;
  // temmppass;

  ngOnInit() {
    var values = this.regService.getUser();
    if (values != undefined){
      if (values[0] != undefined){
        this.username = values[0];
        this.password = values[1];
      }
    }
  }

  
  login(): void {
    if(this.username != undefined && this.password != undefined){
      if (this.username == this.getUsername() && this.password == this.getPassword()) {
        this.router.navigate(["user"]);
      }
    }
     else {
      alert("Invalid credentials");
    }
  }

  register() {
    this.router.navigate(["register"])
  }

  getPassword(){
    return this.loginForm.get('password').value;
  }

  getUsername(){
    return this.loginForm.get('username').value;
  }

}
