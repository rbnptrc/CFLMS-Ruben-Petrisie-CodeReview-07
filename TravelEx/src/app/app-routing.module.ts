import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "blog-page", component: BlogPageComponent
  },
  {
    path: "travel-page", component: TravelPageComponent
  },
  {
    path: "cart", component: CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
