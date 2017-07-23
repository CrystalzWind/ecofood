import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SectionTitleComponent} from "./component/section-title/section-title.component";
import { AddToCartButtonComponent } from './component/add-to-cart-button/add-to-cart-button.component';
import { ButtonHighlightedDirective } from './directives/button-highlighted.directive';
import {ProductPanelComponent} from "./component/product-panel/product-panel.component";

@NgModule({
  declarations: [
    SectionTitleComponent,
    AddToCartButtonComponent,
    ButtonHighlightedDirective,
    ProductPanelComponent
  ],
  exports: [
    CommonModule,
    SectionTitleComponent,
    AddToCartButtonComponent,
    ProductPanelComponent
  ]
})
export class SharedModule { }
