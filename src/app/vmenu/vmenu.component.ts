import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
// import { ShareService } from '../share.service';



@Component({
  selector: 'app-vmenu',
  templateUrl: './vmenu.component.html',
  styleUrls: ['./vmenu.component.css']
})

export class VmenuComponent implements OnInit {

  f1!: FormGroup;
  sliderValue: any;
  sliderValue1: any;


  constructor(private fb: FormBuilder) {
    this.createForm();
  }

   createForm() {
    this.f1 = this.fb.group({
       fa1: [''],
       fa2: [''],
       fa3: ['']
    });
  }

  // setValue() {
  //   this.shareService.Higher = this.f1.value.fa1;
  //   this.shareService.Lower = this.f1.value.fa2;
  //   console.log(this.shareService.Higher)
  //   console.log(this.shareService.Lower)
  // }


  clear() {
    this.f1.reset()
  }

  ngOnInit(): void {
  }

  


}
