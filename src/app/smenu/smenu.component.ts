import { Component, OnInit } from '@angular/core';
// import { ShareService } from '../share.service';
import { Input } from '@angular/core';
import { receiveMessageOnPort } from 'worker_threads';

@Component({
  selector: 'app-smenu',
  templateUrl: './smenu.component.html',
  styleUrls: ['./smenu.component.css']
})
export class SMenuComponent implements OnInit {
  lview: boolean = true;
  gview: boolean = false;
  
  h: any= 40000;
  l: any = 30000;

  prices = [
            {im:'vivo2',n:'Vivo V23 5G', price:24999, text:'The Vivo V23 5G runs Funtouch OS 12 is based on Android 12 and packs 128GB, 256GB of inbuilt storage. The Vivo V23 5G is a dual-SIM (GSM and GSM) mobile that accepts Nano-SIM and Nano-SIM cards. The Vivo V23 5G measures 157.20 x 72.42 x 7.39mm (height x width x thickness) and weighs 179.00 grams. '},
            {im:'vivo4',n:'Vivo Y75', price:29999, text:'Vivo Y75 is an amazing smartphone for hardcore gamers and multitaskers out there. It comes with an Ultra Game Mode 2.0 through which users can switch between Power Saving, Performance and Balanced modes in real-time. It also includes 4D Game Vibration and Game Picture-in-Picture feature to send text messages without minimising the gaming apps.'},
            {im:'vivo6',n:'Vivo X80', price:35999, text:'The Vivo X80 runs OriginOS Ocean is based on Android 12 and packs 128GB, 256GB of inbuilt storage. The Vivo X80 is a dual-SIM (GSM and GSM) mobile that accepts Nano-SIM and Nano-SIM cards. The Vivo X80 measures 164.95 x 75.23 x 8.30mm (height x width x thickness) and weighs 203.00 grams. It was launched in Cosmic Black and Urban Blue colours.'},
            {im:'vivo7',n:'Vivo T1 Pro', price:39999, text:'The Vivo T1 Pro 5G is built to deliver consistent performance for a long period of time through its Flagship Level 8 Layer Liquid Cooling Technology. The camera quality of the smartphone is also brilliant which empowers users to capture their moments in a magical way. Further, Ultra Game Mode, Flash Charging and fingerprint sensor are useful features.'},
            {im:'vivo8',n:'Vivo Y01A', price:41999, text:'The newly launched Vivo Y01A runs on Android 11 (Go Edition) with a layer of Funtouch OS 11.1 on top, out of the box. The OS on the smartphone, therefore, is fairly old compared to others in the same segment. Even the processor on the latest Y-series model from Vivo is comparatively old with the device housing a MediaTek Helio P35 SoC under the hood.'}
            ];

  constructor() { }

// getValue() {
//   this.h=this.shareService.Higher;
//   this.l=this.shareService.Lower;
//   console.log(this.h, this.l)
// }


  changeView() {
    this.lview=true;
    this.gview=false;
  }

  changeView1() {
    this.lview=false;
    this.gview=true;
  }
  
  ngOnInit(): void {
    
  }

}
function receive() {
  throw new Error('Function not implemented.');
}

