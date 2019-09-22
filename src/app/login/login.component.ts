import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../register-form/register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private regService: Register) { }
  username: string;
  password: string;
  tempusername;
  temmppass;

  ngOnInit() {
    var values = this.regService.getUser();
    if (values != undefined){
      if (values[0] != undefined){
        this.tempusername = values[0];
        this.temmppass = values[1];
      }
    }
  }

  
  login(): void {
    if (this.username == this.tempusername && this.password == this.temmppass) {
      this.router.navigate(["user"]);
    } else {
      alert("Invalid credentials");
    }
  }

  register() {
    this.router.navigate(["register"])
  }
}
