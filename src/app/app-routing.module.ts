import { HomePageComponent } from "./2.home-page/hp.component";
import { Routes, RouterModule } from "@angular/router";
import {NgModule} from "@angular/core";


const APP_ROUTES: Routes = [
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: '', component: HomePageComponent}


  // {path: 'products', loadChildren: './3.products-page/products-page.module#ProductsPageModule'}
];
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

