import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // @ts-ignore
  cartItems: Product[] | undefined;
  totalPrice: number | undefined;

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('cartItems') != null) {
      const items = sessionStorage.getItem('cartItems');
      // @ts-ignore
      this.cartItems = JSON.parse(items);
      console.log(this.cartItems);
    }
    this.totalPriceCalc();
    console.log(this.totalPrice);
  }

  totalPriceCalc() {
    this.cartItems?.forEach(element => {
      console.log(element.price.amount)
      // @ts-ignore
      this.totalPrice = this.totalPrice + parseFloat(element.price.amount);
      console.log(this.totalPrice)
    });
  }

}
