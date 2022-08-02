import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../models/products";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products: Product[] | undefined;
  cartItemList: string[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {

    // tslint:disable-next-line:max-line-length
    this.http.get<any>('https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json', {
      observe: 'response',
    }).subscribe(response => {
      // @ts-ignore
      this.products = response.body.data;
      console.log('product list ===', this.products);

    });
  }

  openDetailPage(object: any) {
    sessionStorage.setItem('productDetails', JSON.stringify(object));
    this.router.navigate(['/detailPage']);
  }

  addToCard(id: any) {
    if(sessionStorage.getItem('cartItems') != null) {
      let items = sessionStorage.getItem('cartItems');
      // @ts-ignore
      this.cartItemList = JSON.parse(sessionStorage.getItem('cartItems'));
      this.cartItemList.push(id);
      sessionStorage.setItem('cartItems', JSON.stringify(this.cartItemList));
    } else {
      this.cartItemList.push(id);
      sessionStorage.setItem('cartItems', JSON.stringify(this.cartItemList));
    }

  }

}
