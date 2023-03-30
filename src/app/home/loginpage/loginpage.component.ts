import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit  {

  form1!: FormGroup; 
  otpform!: FormGroup;
  pass: boolean = false;
  valid:boolean = true;
  otpsend: boolean = false;
  otpvalidate: boolean = false;
  button: boolean = false;
  private url = 'http://localhost:3000/api/send-otp';
  name: any;
  username: any;
  constructor(private fb: FormBuilder, private rout: Router, private http: HttpClient){}
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
    
    this.name=this.form1.controls['fname'].value
    this.username = localStorage.getItem('name')
    this.username=JSON.parse(this.username)
if(!localStorage){
  this.otpvalidate=false
}
  }

  sendotp() {
  
    const email = this.form1.controls['email'].value;
    this.http.post('http://localhost:4321/api/send-otp', { email }).subscribe(
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
    this.http.post('http://localhost:4321/api/verify-otp', { otp }).subscribe(
      (response) => {
        console.log(response);
        this.otpvalidate=true
        this.http.post("http://localhost:3000/userdata" , this.form1.value).subscribe((response1)=>{
      console.log(response1);
      localStorage.setItem('name', JSON.stringify(this.form1.controls['fname'].value))
    })
      },
      (error) => {
        console.log(error);
      }
    );
   }
 clear(){
  localStorage.clear()
  this.otpvalidate=false
 }
}
