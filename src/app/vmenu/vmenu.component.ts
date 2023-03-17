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
       fa5: ['']
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
}


