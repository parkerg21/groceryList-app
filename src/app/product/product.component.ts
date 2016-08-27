import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';


@Component({
  moduleId: module.id,
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent implements OnInit {
  pageTitle: string = 'Product List';
  productFilter: string = 'cart';
  products:  IProduct[] = [
    {
      "productId": 1,
      "productName": "milk",
      "price": 2.93,
      "starRating": 4
    },
    {
      "productId": 2,
      "productName": "cereal",
      "price": 3.33,
      "starRating": 4
    },
    {
      "productId": 3,
      "productName": "lunchable",
      "price": 1.50,
      "starRating": 4
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
