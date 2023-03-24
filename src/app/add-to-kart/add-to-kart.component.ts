import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-add-to-kart',
  templateUrl: './add-to-kart.component.html',
  styleUrls: ['./add-to-kart.component.css']
})
export class AddToKartComponent implements OnInit {
data:any
addcart:any[]=[]
  constructor() {}

  ngOnInit(): void {
    var data=localStorage.getItem('dev_info')
    this.data = JSON.parse(localStorage.getItem('dev_info') || '{}');
    // this.addcart.push(this.data)
  }
  // get() {
  //   var data=localStorage.getItem('dev_info')
  //   this.data = JSON.parse(localStorage.getItem('dev_info') || '{}');
  // }


}
