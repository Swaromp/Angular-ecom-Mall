import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnInit {
  data:any
  constructor() {}

  ngOnInit(): void {
    this.get();
  }
  get() {
    var data=localStorage.getItem('dev_info')
    this.data = JSON.parse(localStorage.getItem('dev_info') || '{}');
  }
}
