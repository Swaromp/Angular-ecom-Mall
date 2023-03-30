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
      "../assets/vivo2.jpeg", 
      "../assets/vivo4.jpeg", 
      "../assets/vivo6.jpeg", 
      "../assets/vivo8.jpeg", 

     ]
  },
  {
    id: 2,
    title: "Premium Phones",
    images: [
      "../assets/iphone13.jpeg", 
      "../assets/iphone14.jpeg", 
      "../assets/iphone13promax.jpeg", 
      "../assets/iphone14promax.jpeg", 
    ]
  },
  {
    id: 3,
    title: "Gaming Phones",
    images: [
      "https://cdn1.smartprix.com/rx-iGAtPxbP3-w420-h420/asus-rog-phone-6-pro.webp",
      "https://cdn1.smartprix.com/rx-iiGvPi1j8-w420-h420/nubia-red-magic-8-pr.webp",
      "https://www.91-img.com/pictures/148089-v6-iqoo-neo-7-mobile-phone-large-1.jpg?tr=q-80",
      "https://cdn1.smartprix.com/rx-iGAtPxbP3-w420-h420/asus-rog-phone-6-pro.webp"
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
