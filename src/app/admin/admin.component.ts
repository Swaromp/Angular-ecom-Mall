import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { FetchService } from '../services/fetch.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  f2!: FormGroup;

  constructor(private fb: FormBuilder, private fetch1: FetchService) {
    this.createForm();
  }

  createForm() {
    this.f2 = this.fb.group({
      id1: [''],
      n: [''],
      price: [''],
      dp: [''],
      offer: [''],
      del: [''],
      text: ['']
    });
  }

  editProd() {
    let newProd={
      id1:this.f2.value.id1,
      n:this.f2.value.n,
      fav:false,
      price:this.f2.value.price,
      dp:this.f2.value.dp,
      offer:this.f2.value.offer,
      del:this.f2.value.del,
      text:this.f2.value.text
    }
    
    this.fetch1.subject7.next(JSON.stringify(newProd))
  }

  ngOnInit(): void {
  }

}
