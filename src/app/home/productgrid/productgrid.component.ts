import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productgrid',
  templateUrl: './productgrid.component.html',
  styleUrls: ['./productgrid.component.css']
})
export class ProductgridComponent implements OnInit {
  wisharray : any[]=[];
  constructor() { }
  smartphones1 = [
    {  id: '1', image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/08-03-23/2/home-page/4-blk/1-smartphone/HP_4blocker_1_MOB_oppoa785g128gbstorageglowingblue8gbram_PDP_B2B.jpg' },
    {  id: '2', image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/08-03-23/2/home-page/4-blk/1-smartphone/HP_4blocker_2_MOB_oppoa785g128gbstorageglowingblack8gbram_PDP_B2B.jpg' },
    {  id: '3', image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/08-03-23/2/home-page/4-blk/1-smartphone/HP_4blocker_5_MOB_samsunggalaxys23ultra1tbstoragephantomblack12gbram_PDP_B2B.jpg' },
    {  id: '4', image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/08-03-23/2/home-page/4-blk/1-smartphone/HP_4blocker_8_MOB_oneplus115g128gbstorageeternalgreen8gbram_PDP_B2B.jpg' },
    {  id: '5', image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/13-03-23/2/hp/-4-blk/1-top-selling-smartphones/HP_4blocker_3_MOB_samsunggalaxya04e32gbstoragecopper3gbramsmartphone_PDP_B2B.jpg' },
    {  id: '6', image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/13-03-23/2/hp/-4-blk/1-top-selling-smartphones/HP_4blocker_4_MOB_samsunggalaxya235g128gbstoragelightblue6gbramsmartphone_PDP_B2B.jpg' },
    {  id: '7', image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/13-03-23/2/hp/-4-blk/1-top-selling-smartphones/HP_4blocker_6_MOB_redminote12proplus5g256gbstorageicebergblue8gbramsmartphone_PDP_B2B.jpg' },
    {  id: '8', image: 'https://www.bajajmall.in/content/dam/emistoremarketplace/index/13-03-23/2/hp/-4-blk/1-top-selling-smartphones/HP_4blocker_7_MOB_opporeno8128gbstorageshimmergold8gbramsmartphone_PDP_B2B.jpg'}
  ]
  smartphones  =  [
    {id1: 1,im:'vivo2',n:'Vivo V23 5G', fav:false, price:24999, text:'The Vivo V23 5G runs Funtouch OS 12 is based on Android 12 and packs 128GB, 256GB of inbuilt storage. The Vivo V23 5G is a dual-SIM (GSM and GSM) mobile that accepts Nano-SIM and Nano-SIM cards. The Vivo V23 5G measures 157.20 x 72.42 x 7.39mm (height x width x thickness) and weighs 179.00 grams. '},
    {id1: 2,im:'vivo4',n:'Vivo Y75', fav:false, price:29999, text:'Vivo Y75 is an amazing smartphone for hardcore gamers and multitaskers out there. It comes with an Ultra Game Mode 2.0 through which users can switch between Power Saving, Performance and Balanced modes in real-time. It also includes 4D Game Vibration and Game Picture-in-Picture feature to send text messages without minimising the gaming apps.'},
    {id1: 3,im:'vivo6',n:'Vivo X80', fav:false, price:35999, text:'The Vivo X80 runs OriginOS Ocean is based on Android 12 and packs 128GB, 256GB of inbuilt storage. The Vivo X80 is a dual-SIM (GSM and GSM) mobile that accepts Nano-SIM and Nano-SIM cards. The Vivo X80 measures 164.95 x 75.23 x 8.30mm (height x width x thickness) and weighs 203.00 grams. It was launched in Cosmic Black and Urban Blue colours.'},
    {id1: 4,im:'vivo7',n:'Vivo T1 Pro', fav:false, price:39999, text:'The Vivo T1 Pro 5G is built to deliver consistent performance for a long period of time through its Flagship Level 8 Layer Liquid Cooling Technology. The camera quality of the smartphone is also brilliant which empowers users to capture their moments in a magical way. Further, Ultra Game Mode, Flash Charging and fingerprint sensor are useful features.'},
    // {id1: 5,im:'vivo8',n:'Vivo Y01A', fav:false, price:41999, text:'The newly launched Vivo Y01A runs on Android 11 (Go Edition) with a layer of Funtouch OS 11.1 on top, out of the box. The OS on the smartphone, therefore, is fairly old compared to others in the same segment. Even the processor on the latest Y-series model from Vivo is comparatively old with the device housing a MediaTek Helio P35 SoC under the hood.'},
    {id1: 6,im:'iphone13',n:'Apple Iphone 13', fav:false, price:62790, text:'Boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.'},
    {id1: 7,im:'iphone14',n:'Apple Iphone 14', fav:false, price:72990, text:'Experience the majestic powerful smartphone when you purchase the Apple iPhone 14.  The name says it all. Embraced with a beautifully aerospace-grade aluminum design and ceramic shield front, which is tougher than any other smartphone glass, giving you the holding feeling ever. Flaunt its Vibrant super retina XDR display which is majestically big with a 6.1-inch display.'},
    {id1: 8,im:'iphone12promax',n:'Apple Iphone 12 Pro Max',  fav:false, price:113990, text:'The iPhone 12 Pro Max is Apples most ambitious iPhone yet, and naturally commands a steep premium too. In my iPhone 12 Pro review, I mentioned that even though the smaller Pro model is a superb offering, its probably not the smartest choice. If you are thinking of going all-out on your iPhone purchase this year, then you should probably look at spending a bit more and getting the iPhone 12 Pro Max instead. After using it for a week, I think I was right in making that assumption. '},
    {id1: 9,im:'iphone13promax',n:'Apple Iphone 13 Pro Max', fav:false, price:136590, text:'Apple iPhone 13 Pro Max is worth all hype with its robust spec sheet. The brand is offering triple cameras on the backside, equipped with multifaceted features and a 12MP selfie lens. This IP68 water-resistant smartphone gets a standard battery with Fast Charging and Wireless Charging support. However, it does not have a fingerprint sensor and FM radio. '},
    // {id1: 10,im:'iphone14promax',n:'Apple Iphone 14 Pro Max', fav:false, price:149990, text:'The Apple iPhone 14 Pro Max is the most expensive iPhone from the company. The phone is ideal for those who want to experience the best of Apple features. The latest iPhone is equipped with a large 6.7-inch display that makes it a great device to watch videos and play graphics-intensive games. The model is powered by the ultra-fast Apple A16 Bionic CPU, which is one of the best chipsets in the industry. '},
  ]

  
  ngOnInit(): void {
  }
  wishlist(value: any) {
    this.wisharray.push(value)   
    console.log('From SMenu',this.wisharray)
    localStorage.setItem('array',JSON.stringify(this.wisharray))
    value.fav=true
  }

  unwishlist(value: any) {
  value.fav=false  
  }
}
