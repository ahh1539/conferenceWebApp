import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from './register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  addressForm = this.fb.group({
    company: null,
    username: [null, Validators.required],
    password: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    email: [null, Validators.required],
    date: [null, Validators.required],
    status: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    payment: ['credit/debit', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Graduate Student', abbreviation: 'g'},
    {name: 'Undergraduate Student', abbreviation: 'u'},
    {name: 'Professor', abbreviation: 'p'},
    {name: 'Industry', abbreviation: 'i'},
  ];

  constructor(private fb: FormBuilder, private router: Router, private regService: Register) {}

  onSubmit() {
    this.regService.setUser(this.getUsername(), this.getPassword());
    this.router.navigateByUrl('/');
  }

  getPassword(){
    return this.addressForm.get('password').value;
  }

  getUsername(){
    return this.addressForm.get('username').value;
  }
}

