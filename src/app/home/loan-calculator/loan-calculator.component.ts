import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClacService } from 'src/app/services/clac.service';


@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent implements OnInit {
  eligibility!: FormGroup;
  subRate: any;
  subTenure: any;
  subSalary: any;
  constructor( private formBuilder: FormBuilder, private calc1: ClacService) { }

  ngOnInit(): void {
  
    this.eligibility = this.formBuilder.group({
      company: [''],
      salary: [''],
      EMIs:['0'],
      Tenure:[''],
      NRIs: [''],
      intrest: [ ],
    })


  
  }
  pcalc(event:any){
   

  this.calc1.rateSub.next(this.eligibility.controls['Tenure'].value);
  this.calc1.rateSub.next(this.eligibility.controls['salary'].value);
  this.calc1.rateSub.next(this.eligibility.controls['EMIs'].value);
  this.calc1.rateSub.next(this.eligibility.controls['intrest'].value);

  console.log(event)

    }
}
