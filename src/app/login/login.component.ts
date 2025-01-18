import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit	{

  loginForm : FormGroup = new FormGroup({});
  submitted = false;
  errors:string[] = [];

  constructor(private router:Router, private accountService: AccountService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    });
  }

  login(){
    if(this.loginForm.valid){
      this.accountService.login(this.loginForm.value).subscribe({
        next:(response)=>{
          console.log("login successful"); // create new component for dashboard
        },
        error:(err)=>{
          this.errors = err.error;
          alert("something went wrong, check the credentials");
        }
      })
  }
}
}
