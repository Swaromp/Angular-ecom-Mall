// import { FilterPipe } from './../filter.pipe';
import { Component, OnInit } from '@angular/core';
import { ComparedataService } from 'src/app/services/comparedata.service';

@Component({
  selector: 'app-comparemobile',
  templateUrl: './comparemobile.component.html',
  styleUrls: ['./comparemobile.component.css']
})
export class ComparemobileComponent implements OnInit {
  
searchQuery: any;
searchResults: any;
searchResults2: any;
searchQuery2: any;

constructor(private comparedataService: ComparedataService) {}
ngOnInit(): void {
  
}



searchDevices(query: string): void {
  if (query) {
    this.searchResults = this.comparedataService.device_id.filter(device =>
      device.name.toLowerCase().includes(query.toLowerCase())
    );
  } else {
    this.searchResults = [];
  }
}

searchDevices2(query: string): void {
  if (query) {
    this.searchResults2 = this.comparedataService.device_id.filter(device =>
      device.name.toLowerCase().includes(query.toLowerCase())
    );
  } else {
    this.searchResults2 = [];
  }
}

}