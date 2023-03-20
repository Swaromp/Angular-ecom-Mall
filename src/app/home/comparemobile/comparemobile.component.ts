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

  constructor(private comparedataService: ComparedataService) { }

  ngOnInit() {
    this.devices = this.comparedataService.device_id;
  }
  

}
