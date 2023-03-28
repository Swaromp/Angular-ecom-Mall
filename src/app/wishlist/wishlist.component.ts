import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  item1: any
  wishlist: any[] = []
  i: any = 0

  constructor() { }



  ngOnInit(): void {
    this.item1 = localStorage.getItem('array')
    this.item1 = JSON.parse(this.item1)
    console.log('From Wishlist', this.item1)
    console.log('The length of wishlist is', this.wishlist.length)
    while (this.i < this.item1.length) {
      this.wishlist.push(this.item1[this.i])
      this.i++
    }



  }

  clear() {
    localStorage.clear()
    this.wishlist = []
  }

  remove(value: any) {
    this.wishlist.splice(value, 1)
  }

}
