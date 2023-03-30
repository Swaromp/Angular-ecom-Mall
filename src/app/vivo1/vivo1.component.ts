import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vivo1',
  templateUrl: './vivo1.component.html',
  styleUrls: ['./vivo1.component.css']
})
export class Vivo1Component implements OnInit {
  timeLeft: number = 300;
  key1:any
  device:any
  photos:any[]=[]
  timeLeftString: string | undefined;
  constructor(private route:ActivatedRoute){ }

  name = 'Angular';
  showMore = false;
  text = `vivo Y21G is one of the most popular vivo's Y series smartphones. It features a powerful processor and extended RAM that lets users easily play heavy games and run multiple apps. With this device, you can expect a top-notch clarity display and exceptional camera functions. Besides this, the phone flaunts attractive colours and stylish designs while being slim and sleek. The vivo Y21G price is another reason it is the perfect choice for those looking for a budget-friendly smartphone without compromising build quality and functions. Whether you love watching videos, browsing social media, or playing games, this smartphone can be your best companion.
  vivo Y21G Price & Specifications
  You can get a vivo Y21G 64 GB Diamond Glow (4 GB RAM) for Rs. 13,4999. Read below to learn about the mobile phone performance, features, and specifications before buying it.
  1. Performance -
  With power-packed specifications, the vivo mobile is known for its top-notch performance. The smartphone is powered by an octa-core MediaTek Helio G70 processor coupled with Arm Mali-G52 MC2 GPU. The Funtouch OS 12 presents simple touch controls and an eye-friendly layout, improving the user experience. Y21G boasts 4GB of LPDDR4x RAM and 64 GB of eMMC 5.1 storage, ensuring smooth and hassle-free performance. In addition, the phone also supports Extended RAM 2.0, so you can download various apps and multi-tasking more quickly and effectively. That's not it! There's an Ultra Game Mode for a fuller sensory gaming experience like no other.
  2. Design -
  With a 2.5D flat frame and an 8.0mm thin body (without the camera module), vivo Y21G is a slim and lightweight phone. The device offers a premium feel with an aesthetically pleasing design and sleek body. It sports a plastic frame and back. The curtain coating AG technique creates a subtle shiny surface on the back of the phone. At about 182 grams, the phone is comfortable to use and hold. The volume rockers and the power buttons are on the right side of the smartphone. It is available in two colours - Midnight Blue and Diamond Glow.
  3. Battery -
  The device packs a 5,000 mAh battery with 18W fast charging. Thus, the smartphone gives a one-day battery backup easily. You can watch YouTube movies, enjoy gaming, or browse the internet without worrying about draining the battery. The 18 W fast charge helps you to charge your phone in no time.
  4. Connectivity -
  vivo Y21G supports 2 Nano SIM cards and 1 MicroSD card. It comes with active 4G support on both SIM cards. Connectivity options on the smartphone include Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-fi direct, hotspot, and Bluetooth v5.00. It also supports A-GPS, GLONASS, GALILEO, and BDS. You can find a USB Type-C 2.0 and USB On-The-Go. Regarding the sensors, vivo Y21G includes an accelerometer, proximity sensor, fingerprint sensor, ambient light sensor, and e-compass.
  5. Storage -
  vivo Y21G comes with 4 GB RAM, which is sufficient to run various apps without lowering the speed of the phone. The 64 GB internal storage helps you easily store your data, files, photos, and videos. You can expand the storage via a microSD with a dedicated slot. Besides this, the device allows you to extend RAM support by up to 1 GB.
  6. Camera -
  The smartphone has a brilliant dual-camera setup with a 13 MP (wide) + 2 MP (macro). As far as the selfie camera is concerned, there's an 8 MP (wide) front camera. You can record videos at 1080p@30fps. In addition, it has various modes such as Photo, Portrait, Video, Pano, Live Photo, and Time-Lapse Pro.
  7. Display -
  With the vivo Y21G smartphone, you can experience an ultimate visual treat. The device features a 6.51-inches HD+ Halo display with in-cell technology for immersive visuals. It comes with a 1600 x 720 pixels screen resolution, 60Hz refresh rate, and 120 Hz Touch Sampling Rate. In addition, there's an 89% screen-to-body ratio and 20:9 aspect ratio. Whether watching movies, playing games, or working on documents, you can enjoy crystal-clear details and rich, vibrant colours. The additional Eye Protection Mode filters make sure to offer a comfortable viewing experience even after hours of using the phone.`;


  images = [
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivov235gsunshinegold_base.jpeg',
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivov235gsunshinegold_add1.jpeg',
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivov235gsunshinegold_add2.jpeg',
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivov235gsunshinegold_add3.jpeg',

  ];
  images1 =[
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivoy75moonlightshadow_base.jpg',
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivoy75moonlightshadow_additional1.jpg',
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivoy75moonlightshadow_additional5.jpg'
  ];
  images2 =[
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivov255gsurfingblue_base.jpeg',
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivov255gsurfingblue_additional6.jpeg'

  ];
  images3 =[
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivot1pro5g6128gturbocyan_base.jpeg'

  ];
  images4 =[
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivoy01spphireblue_base.jpeg',
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivoy01spphireblue_additional1.jpeg',

    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivoy01spphireblue_additional3.jpeg'

  ];
  images5=[
    'https://www.reliancedigital.in/medias/Apple-iPhone-13-Smartphones-491997702-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNTA3NDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDI5L2hlNC85ODc4MDk0MDIwNjM4LmpwZ3xmMWNlYWNkMjU0OTEzMjEzOTc5MTExMjFjMmQ0MjBiODVhMjI4NzIwMzkwOWFiYjA4MjA0MDU2ZWQ4MTMyNzNi',
    'https://www.reliancedigital.in/medias/Apple-iPhone-13-Smartphones-491997702-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDkzMTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGI5L2gxMS85ODc4MTAyNjA1ODU0LmpwZ3w5NGFjNjk3MDQ1ZmU2Y2Q1YmY0ZTljZWM4N2JkMjdhNzE0ZmVlZDQxYzJhNjExNDdkZjY1MmQwYjQ2YTc0NWJm',

  ];
  images6=[
    'https://www.91-img.com/gallery_images_uploads/9/f/9fd14c14db787b8c35b8e9b1cf52639f3d4ed133.jpg?tr=h-550,w-0,c-at_max',
    'https://www.91-img.com/gallery_images_uploads/4/1/41364101e71d4fe380d2e83eb6fd7151f3053344.jpg?tr=h-550,w-0,c-at_max',
    'https://www.91-img.com/gallery_images_uploads/e/3/e3265ab7fb3f9b3bb2d8ff5f68d506075cd2bc33.jpg?tr=h-550,w-0,c-at_max',
    'https://www.91-img.com/gallery_images_uploads/0/7/0700e4a75a428248847bf93c8dd50c2da4e13673.jpg?tr=h-550,w-0,c-at_max'

  ];
  images7=[
    'https://i.gadgets360cdn.com/products/large/iphone-13-1-396x800-1631648728.jpg?downsize=*:420&output-quality=80',
    'https://www.phonebunch.com/phone-pictures/apple_iphone_12_pro_max-3843%20(1).jpg',
    'https://www.phonebunch.com/phone-pictures/apple_iphone_12_pro_max-3843%20(2).jpg'

  ];
  images8=[
    'https://www.91-img.com/gallery_images_uploads/f/a/fa2ec7e1dc36b202031a0240b2ddb8583dab4ff9.jpg?tr=h-550,w-0,c-at_max',
    'https://www.91-img.com/gallery_images_uploads/c/3/c3828acb46e4c776dc70e0e13b9d48bace15ee68.jpg?tr=h-550,w-0,c-at_max',
    'https://www.91-img.com/gallery_images_uploads/1/7/1702ab7260d64369108dc5b4ace522b282853ca8.jpg?tr=h-550,w-0,c-at_max',

  ];
  images9=[
    'https://static.toiimg.com/thumb/resizemode-4,msid-80635321,imgsize-200,width-600,imgv-2/80635321.jpg',
    'https://static.toiimg.com/thumb/resizemode-4,msid-94062364,imgsize-200,width-600,imgv-2/94062364.jpg',
    'https://static.toiimg.com/thumb/resizemode-4,msid-94062365,imgsize-200,width-600,imgv-2/94062365.jpg'

  ];
  images10=[
    'https://cdn1.smartprix.com/rx-iy7cT7S94-w420-h420/asus-rog-phone-6.webp',
    'https://www.smartprix.com/ui/img/specs/pd1y1l8de59?v=1rejt0p',
    'https://cdn1.smartprix.com/rx-ieUXUthmn-w420-h420/asus-rog-phone-6.webp'

  ];



  selectedImage: any = this.photos[0];
  title: any;

  selectImage(photo: string) {
    this.selectedImage = photo;
  }

  select(value:any){
    value = JSON.stringify(value)
    localStorage.setItem('dev_info',value)
  }



  ngOnInit(): void {

    setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        this.timeLeftString = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      }
    },1000)


    // setTimeout(() => {
    //   alert('Welcome Bajaj Mall!');
    // }, 20000);

    // setInterval(() => {
    //   if(this.timeLeft > 0) {
    //     this.timeLeft--;
    //   }
    // },1000)

    this.key1=this.route.snapshot.paramMap.get("id1")
    console.log('this is aryan',this.key1)
    if(this.key1==1){
      this.device=this.device_id[0]
      this.photos=this.images
    }
    else if(this.key1==2){
      this.device=this.device_id[1]
      this.photos=this.images1
    }
    else if(this.key1==3){
      this.device=this.device_id[2]
      this.photos=this.images2
    }
    else if(this.key1==4){
      this.device=this.device_id[3]
      this.photos=this.images3
    }
    else if(this.key1==5){
      this.device=this.device_id[4]
      this.photos=this.images4
    }
    else if(this.key1==6){
      this.device=this.device_id[5]
      this.photos=this.images5
    }
    else if(this.key1==7){
      this.device=this.device_id[6]
      this.photos=this.images6
    }
    else if(this.key1==8){
      this.device=this.device_id[7]
      this.photos=this.images7
    }
    else if(this.key1==9){
      this.device=this.device_id[8]
      this.photos=this.images8
    }
    else if(this.key1==10){
      this.device=this.device_id[9]
      this.photos=this.images9
    }
    else if(this.key1==11){
      this.device=this.device_id[10]
      this.photos=this.images10
    }
    this.selectedImage = this.photos[0];
  }


  device_id=[{im:'vivo2',name:'Vvivo V23 5G 128 GB Storage Sunshine Gold (8 GB RAM)',price:29990,storage1:'128',storage2:'256',processor:'Mediatek Dimensity 920',camera1:'64 MP + 8 MP + 2 MP', camera2:'50 MP + 8 MP', Display:'6.43 inch',battery:'4500 mAh'},
             {im:'vivo4',name:'vivo Y75 (4G) 128 GB Storage Moonlight Shadow (8 GB RAM)',price:19999,storage1:'128',storage2:'256',processor:'MediaTek Helio G96 Octa Core',camera1:'50 MP + 8 MP + 2 MP', camera2:'44 MP', Display:'6.43 inch',battery:'4500 mAh'},
             {im:'vivo6',name:'vivo X80 128 GB Storage Cosmic Black (8 GB RAM)',price:54999,storage1:'128',storage2:'256',processor:'MediaTek Dimensity 9000',camera1:'50 MP + 12 MP + 12 MP', camera2:'32 MP', Display:'6.78 inch',battery:'4500 mAh'},
             {im:'vivo7',name:'vivo T1 Pro 5G 128 GB Storage Turbo Cyan (8 GB RAM)',price:24999,storage1:'128',storage2:'256',processor:'Snapdragon 695',camera1:'50 MP + 2 MP + 2 MP', camera2:'16 MP', Display:'6.43 inch',battery:'4700 mAh'},
             {im:'vivo8',name:'vivo Y01 32 GB Storage Sapphire Blue (2 GB RAM)',price:12999,storage1:'128',storage2:'256',processor:'Mediatek Helio P35',camera1:'8 MP', camera2:'5 MP', Display:'6.43 inch',battery:'4500 mAh'},
             {im:'iphone13',name:'i phone 13',price:62790,storage1:'128',storage2:'256',processor:'Apple A15 Bionic (5 nm)',camera1:'12 MP f/1.6 26mm (wide)', camera2:'12 MP', Display:'6.1 inches',battery:'3240 mAh'},
             {im:'iphone14',name:'i phone 14',price:72999,storage1:'128',storage2:'256',processor:'Apple A15 Bionic',camera1:'12 MP f/1.6 26mm (wide)', camera2:'12 MP', Display:'6.1 inches',battery:'3279 mAh'},
             {im:'iphone12promax',name:'i phone 12 pro max',price:113990,storage1:'128',storage2:'256',processor:'Apple A14 Bionic (5 nm)',camera1:'64 MP + 2 MP + 2 MP', camera2:'12 MP', Display:'6.43 inch',battery:'4500 mAh'},
             {im:'iphone13promax',name:'i phone 13 pro max',price:113990,storage1:'128',storage2:'256',processor:'Apple A15 Bionic (5 nm)',camera1:'64 MP + 2 MP + 2 MP', camera2:'12 MP', Display:'6.43 inch',battery:'4500 mAh'},
             {im:'iphone14promax',name:'i phone 14 pro max',price:136590,storage1:'128',storage2:'256',processor:'Apple A16 Bionic (5 nm)',camera1:'64 MP + 2 MP + 2 MP', camera2:'12 MP', Display:'6.43 inch',battery:'4500 mAh'},
             {im:'rog1',name:'ASUS rog phone 6 pro 5G',price:89990,storage1:'128',storage2:'256',processor:'snapdragon 8gen1',camera1:'64 MP + 2 MP + 2 MP', camera2:'34 MP', Display:'6.43 inch',battery:'4500 mAh'},
            ]



}




