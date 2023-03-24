import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  form1!: FormGroup; 
  pass: boolean = false;
  valid:boolean = true;


  constructor(private fb: FormBuilder, private rout: Router) { 
   
    
  }
  
  ngOnInit(){
    this.form1= this.fb.group({
      fname:['', [Validators.required, Validators.minLength(4) ]],
      lname:['', [Validators.required, Validators.minLength(4) ]],
      mail: ['', [Validators.required , Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]], 
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  



local(){
  if (this.form1.controls['password'].value == this.form1.controls['cpassword'].value) {
   this.rout.navigate(['details']) 
  } else {
    this.pass=true  
  }
}
 
}
