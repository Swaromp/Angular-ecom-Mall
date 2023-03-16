import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productgrid',
  templateUrl: './productgrid.component.html',
  styleUrls: ['./productgrid.component.css']
})
export class ProductgridComponent implements OnInit {

  constructor() { }
  smartphones = [
    { image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/08-03-23/2/home-page/4-blk/1-smartphone/HP_4blocker_1_MOB_oppoa785g128gbstorageglowingblue8gbram_PDP_B2B.jpg' },
    { image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/08-03-23/2/home-page/4-blk/1-smartphone/HP_4blocker_2_MOB_oppoa785g128gbstorageglowingblack8gbram_PDP_B2B.jpg' },
    { image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/08-03-23/2/home-page/4-blk/1-smartphone/HP_4blocker_5_MOB_samsunggalaxys23ultra1tbstoragephantomblack12gbram_PDP_B2B.jpg' },
    { image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/08-03-23/2/home-page/4-blk/1-smartphone/HP_4blocker_8_MOB_oneplus115g128gbstorageeternalgreen8gbram_PDP_B2B.jpg' },
    { image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/13-03-23/2/hp/-4-blk/1-top-selling-smartphones/HP_4blocker_3_MOB_samsunggalaxya04e32gbstoragecopper3gbramsmartphone_PDP_B2B.jpg' },
    { image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/13-03-23/2/hp/-4-blk/1-top-selling-smartphones/HP_4blocker_4_MOB_samsunggalaxya235g128gbstoragelightblue6gbramsmartphone_PDP_B2B.jpg' },
    { image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/13-03-23/2/hp/-4-blk/1-top-selling-smartphones/HP_4blocker_6_MOB_redminote12proplus5g256gbstorageicebergblue8gbramsmartphone_PDP_B2B.jpg' },
    { image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/13-03-23/2/hp/-4-blk/1-top-selling-smartphones/HP_4blocker_7_MOB_opporeno8128gbstorageshimmergold8gbramsmartphone_PDP_B2B.jpg'}
  
  ]
  ngOnInit(): void {
  }

}
