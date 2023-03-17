import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scrollmenu',
  templateUrl: './scrollmenu.component.html',
  styleUrls: ['./scrollmenu.component.css']
})
export class ScrollmenuComponent implements OnInit {

  constructor(private router: Router) { }

  sections = [{
    id: 1,
    title: "Budget Phones", 
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg", 
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg", 
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg", 
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    id: 2,
    title: "Premium Phones",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    id: 3,
    title: "Gaming Phones",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    id: 4,
    title: "Handpicked Laptops",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    id:5,
    title: "Handpicked Laptops",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    id: 6,
    title: "Handpicked Laptops",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    id: 7,
    title: "Handpicked Laptops",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  },
  {
    id: 8,
    title: "Handpicked Laptops",
    images: [
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg",
      "https://www.bajajmall.in/content/dam/emistoremarketplace/index/28-02-23/1/2by2/1/HP_Carousel_1a_MOB_Smartphones_PLP_B2B.jpg"
    ]
  }
  ];

  goToSmenu(id: number) {
    this.router.navigate(['/smenu', id]);
  }
  
  ngOnInit(): void {
  }

}
