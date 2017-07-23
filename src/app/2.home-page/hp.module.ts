import { NgModule } from '@angular/core';
import {HomePageComponent} from './hp.component';

import { Section1Component } from './section-1__slider/section-1.component';
import { Section2Component } from './section-2__banner/section-2.component';
import { Section3Component } from './section-3__product-list/section-3.component';
import { Section4Component } from './section-4__deal-of-the-day/section-4.component';
import {CommonModule} from "@angular/common";
import {SharedModule} from '../shared/shared.module';
import { Section5Component } from './section-5/section-5.component';
import { Section6Component } from './section-6/section-6.component';



@NgModule({
  declarations: [
    HomePageComponent,
    Section1Component, Section2Component, Section3Component, Section4Component, Section5Component, Section6Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomePageComponent],
  providers: [],
})
export class HomePageModule { }
