import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import data from '../../home/loginpage/jsondb/db.json';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  form2!: FormGroup;
  form1!: FormGroup;
  otpform!: FormGroup;
  pass: boolean = false;
  valid: boolean = true;
  otpsend: boolean = false;
  otpvalidate: boolean = false;
  button: boolean = true;
  private url = 'http://localhost:3000/api/send-otp';
  name: any;
  username: any;
  hide: boolean = false;
  OldUser: boolean = false;
  InvalidPassword: boolean = false;
  InvalidUser: boolean = false;
  constructor(private fb: FormBuilder, private rout: Router, private http: HttpClient) { }
  ngOnInit() {
    this.form1 = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(4)]],
      lname: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]],
    })
    this.form2 = this.fb.group({
      email1: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password1: ['', [Validators.required, Validators.minLength(6)]],
    })
  
    this.name = this.form1.controls['fname'].value
    this.username = localStorage.getItem('name')
    if (!this.username) {
      this.hide = false;
    }
    else {
      this.hide = true;
      this.button = false;
    }
  }
  sendotp() {
    let l = data.userdata.length;
    console.log(l); 
    this.OldUser = false;
    for (let i = 0; i < l; i++) {
      if (this.form1.value.email == data.userdata[i].email) {
        this.OldUser = true;
        break;
      }
    } 
    if (!this.OldUser) {
      const email = this.form1.controls['email'].value;
      this.http.post('http://localhost:4321/api/send-otp', { email }).subscribe(
        (response) => {
          console.log(response);
          this.otpsend = true
        },
        (error) => {
          console.log(error);
        }
      );
    } 
  }

  onOtpChange(event: any) {
    const otp = event;
    this.http.post('http://localhost:4321/api/verify-otp', { otp }).subscribe(
      (response) => {
        console.log(response);
        this.otpvalidate = true
        this.http.post("http://localhost:3000/userdata", this.form1.value.toLowerCase()).subscribe((response1) => {
          console.log(response1);
          localStorage.setItem('name', this.form1.controls['fname'].value)
          this.hide = true;
          this.button = false;
          this.username = localStorage.getItem('name')
       
        })
      },
      (error) => {
        console.log(error);
      }
    );
  }
checkuser(){
  let l1 = data.userdata.length;
  for (let i = 0; i < l1; i++) {
  if(this.form2.value.email1.toLowerCase() == data.userdata[i].email.toLowerCase()){
  if(this.form2.value.password1 == data.userdata[i].password){
    console.log('Log-In success');
    localStorage.setItem('name', data.userdata[i].fname)
    this.InvalidPassword=false;
    this.InvalidUser=false;
    this.hide = true;
    this.button = false;
    this.username = localStorage.getItem('name');
 
    break
  }
  else{
    this.InvalidPassword=true
    this.InvalidUser=false
  }
 break
  }
  if(this.form2.value.email1.toLowerCase() != data.userdata[i].email){
this.InvalidUser=true
  }
}}
  clear(){
    localStorage.clear()
    this.otpvalidate = false;
    // this.ngOnInit();
    this.button = true;
    this.hide = false;
  }
  getuserdata(){
    let l = data.userdata.length;
    for(let i=0;i<l; i++){
      if(this.form1.value.email == data.userdata[i].email){
        this.OldUser=true;
      }
    }
  }
}

