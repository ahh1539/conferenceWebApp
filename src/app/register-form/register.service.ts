import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Register {
  constructor() {}
  username;
  password;

  setUser(username, password){
      this.username = username;
      this.password = password;
  }

  clearUser(){
    this.username = undefined;
    this.password = undefined;
  }

  getUser(){
      var temp = [this.username, this.password];
      this.clearUser;
      return temp;
  }
}