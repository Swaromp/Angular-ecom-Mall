import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-status',
  templateUrl: './delivery-status.component.html',
  styleUrls: ['./delivery-status.component.css']
})
export class DeliveryStatusComponent implements OnInit {
  data:any;


  constructor() { }

  ngOnInit(): void {
    this.get();
  }
  get() {
    var data=localStorage.getItem('dev_info')
    this.data = JSON.parse(localStorage.getItem('dev_info') || '{}');
  }


}
