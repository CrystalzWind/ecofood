import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/models/product.model";

@Component({
  selector: 'section-3',
  templateUrl: './section-3.component.jade',
  styleUrls: ['./section-3.component.sass']
})
export class Section3Component implements OnInit {
  products: Product[] = [
    new Product('../assets/images/section-3__product-list/1.jpg', 'Egg free mayo', '10.00'),
    new Product('../assets/images/section-3__product-list/2.jpg', 'Organic broccoli', '2.29 /bunch'),
    new Product('../assets/images/section-3__product-list/3.jpg', 'Strawberries', '5.99 /ea'),
    new Product('../assets/images/section-3__product-list/4.jpg', 'Lemon 250ml glass', '20.00'),
    new Product('../assets/images/section-3__product-list/5.jpg', 'Fresh cherry',  '12.48 /bag'),
    new Product('../assets/images/section-3__product-list/6.jpg', 'Juice carrot & apple', '10.00'),
    new Product('../assets/images/section-3__product-list/7.jpg', 'Organic banana', '2.76 /bunch'),
    new Product('../assets/images/section-3__product-list/8.jpg', 'Fresh celery root', '2.49 /bunch')
  ];

  constructor() { }

  ngOnInit() {
  }

}
