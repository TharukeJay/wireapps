import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/products";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  product: Product | undefined;
  img: string | undefined;
  price: string | undefined;
  currency: string | undefined;
  name: string | undefined;
  brand: string | undefined;
  stock: string | undefined;
  color: string | undefined;
  des: string | undefined;

  constructor() { }

  ngOnInit(): void {
    const retriveData = sessionStorage.getItem('productDetails');
    if(sessionStorage.getItem('productDetails') != null) {
      // @ts-ignore
      this.product = JSON.parse(retriveData);
      console.log(this.product);
      this.img = this.product?.mainImage;
      this.price = this.product?.price.amount;
      this.currency = this.product?.price.currency;
      this.name = this.product?.name;
      this.brand = this.product?.brandName;
      this.stock = this.product?.stockStatus;
      this.color = this.product?.colour;
      this.des = this.product?.description;
    }

  }


}
