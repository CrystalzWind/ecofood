import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'product-panel',
  templateUrl: './product-panel.component.jade',
  styleUrls: ['./product-panel.component.sass']
})
export class ProductPanelComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
