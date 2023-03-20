// import { FilterPipe } from './../filter.pipe';
import { Component, OnInit } from '@angular/core';
import { ComparedataService } from 'src/app/services/comparedata.service';

@Component({
  selector: 'app-comparemobile',
  templateUrl: './comparemobile.component.html',
  styleUrls: ['./comparemobile.component.css']
})
export class ComparemobileComponent implements OnInit {
  devices: any[] = [];
searchPrice: any;
searchName: any;
  // filteredDevices: any;
  searchTerm: any;
 
  selectedName: any;
  filteredDevices: any;

  constructor(private comparedataService: ComparedataService) { }

  
  
  

  ngOnInit() {
    this.devices = this.comparedataService.device_id;
    // this.filterDevices();
  }

  ngOnChanges() {
   
    this.filteredDevices = this.devices.filter(device => device.name === this.selectedName);
    console.log( this.filteredDevices = this.devices.filter(device => device.name === this.selectedName))
  }
 



}

