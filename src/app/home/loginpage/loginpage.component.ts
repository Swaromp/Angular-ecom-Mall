import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  form1!: FormGroup; 
  otpform!: FormGroup;
  pass: boolean = false;
  valid:boolean = true;
  otpsend: boolean = false;

  private url = 'http://localhost:3000/api/send-otp';

  constructor(private fb: FormBuilder, private rout: Router, private http: HttpClient){

  }
  
  ngOnInit(){
    this.form1= this.fb.group({
      fname:['', [Validators.required, Validators.minLength(4) ]],
      lname:['', [Validators.required, Validators.minLength(4) ]],
      email: ['', [Validators.required , Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]], 
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]],
      
    })
    this.otpform = this.fb.group({
      otp: ['']
    })
  }
  

  sendotp() {
    const email = this.form1.controls['email'].value;
    this.http.post('http://localhost:3000/api/send-otp', { email }).subscribe(
      (response) => {
        console.log(response);
        this.otpsend=true
      },
      (error) => {
        console.log(error);
      }
    );
  }


  
  onOtpChange(event: any) {
    const otp = event;
    this.http.post('http://localhost:3000/api/verify-otp', { otp }).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
   }

local(){
//   if (this.form1.controls['password'].value == this.form1.controls['cpassword'].value) {
//    this.rout.navigate(['details']) 
//   } else {
//     this.pass=true  
//   }
}
 
}
