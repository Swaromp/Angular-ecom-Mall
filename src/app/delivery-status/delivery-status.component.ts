import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-status',
  templateUrl: './delivery-status.component.html',
  styleUrls: ['./delivery-status.component.css']
})
export class DeliveryStatusComponent implements OnInit {
  data:any;
  deliverySteps = ['Order Placed', 'Shipped', 'Out for Delivery', 'Delivered'];
  activeStep = 0;
  thankYouMessage = 'Thank you for shopping!';


  constructor() { }


  ngOnInit(): void {
    this.get();
  }
  get() {
    var data=localStorage.getItem('dev_info')


    this.data = JSON.parse(localStorage.getItem('dev_info') || '{}');
  }


  setActiveStep(index: number) {
    this.activeStep = index;
  }

  goToNextStep() {
    if (this.activeStep < this.deliverySteps.length - 1) {
      this.activeStep++;
    }
  }

}



