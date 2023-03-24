import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { FetchService } from '../services/fetch.service';
// import { ShareService } from '../share.service';



@Component({
  selector: 'app-vmenu',
  templateUrl: './vmenu.component.html',
  styleUrls: ['./vmenu.component.css']
})

export class VmenuComponent implements OnInit {

  f1!: FormGroup;
  minValue: any;
  maxValue: any;
  minValue1: any;
  maxValue1: any;
  sliderValue: any;


  constructor(private fb: FormBuilder, private fetch1: FetchService) {
    this.createForm();
  }

   createForm() {
    this.f1 = this.fb.group({
       fa1: ['1000'],
       fa2: ['200000'],
       fa3: [''],
       fa4: [''],
       fa5: [''],
       fa6: [''],
       fa7: [''],
       fa8: [''],
       fa9: [''],
       fa10: ['']
    });
  }



  clear() {
    this.f1.reset()
  }

  ngOnInit(): void {
   
  }

  updateMinMaxValues(minValue: number, maxValue: number): [number, number] {
    if (minValue > maxValue) {
      return [maxValue, minValue];
    } else {
      return [minValue, maxValue];
    }
  }
  onMinValueChange() {
    
    [this.minValue, this.maxValue] = this.updateMinMaxValues(this.minValue, this.maxValue);
    this.fetch1.subject.next(this.f1.controls['fa1'].value);
  }

  onMaxValueChange() {
    [this.minValue, this.maxValue] = this.updateMinMaxValues(this.minValue, this.maxValue);
    this.fetch1.subject1.next(this.f1.controls['fa2'].value);
  }

  onOfferchange() {
    this.fetch1.subject2.next(this.f1.controls['fa6'].value)
  }

  onDpchange() {
    this.fetch1.subject3.next(this.f1.controls['fa7'].value)
  }

  onMinEmiChange() {
    this.fetch1.subject4.next(this.f1.controls['fa8'].value)
  }

  onMaxEmiChange() {
    this.fetch1.subject5.next(this.f1.controls['fa9'].value)
  }

  onDelchange() {
    this.fetch1.subject6.next(this.f1.controls['fa10'].value)
  }

}


