import { Component } from '@angular/core';


@Component({
  selector: 'app-vivo1',
  templateUrl: './vivo1.component.html',
  styleUrls: ['./vivo1.component.css']
})
export class Vivo1Component {
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
    'https://www.bajajmall.in/emistore/media/catalog/product/4/_/4_89.jpeg',
    'https://www.bajajmall.in/emistore/media/catalog/product/5/_/5_67.jpeg',
    'https://www.bajajmall.in/emistore/media/catalog/product/6/_/6_51_1.jpeg',
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivoy21gdiamondglow_add1.jpeg',
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivoy21gdiamondglow_add2.jpeg',
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivoy21gdiamondglow_add3.jpeg',
    'https://www.bajajmall.in/emistore/media/catalog/product/v/i/vivoy21gdiamondglow_add4.jpeg'

  ];
  selectedImage: string = this.images[0];
  title: any;

  selectImage(image: string) {
    this.selectedImage = image;
  }
}


