import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollmenu',
  templateUrl: './scrollmenu.component.html',
  styleUrls: ['./scrollmenu.component.css']
})
export class ScrollmenuComponent implements OnInit {

  constructor() { }
  sections = [{
    title: "Handpicked Mobiles", 
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg", 
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg", 
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg", 
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    title: "Handpicked Laptops",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    title: "Handpicked Laptops",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    title: "Handpicked Laptops",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    title: "Handpicked Laptops",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    title: "Handpicked Laptops",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    title: "Handpicked Laptops",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    title: "Handpicked Laptops",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  }
  ];
  ngOnInit(): void {
  }

}
