import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/shared/checkout/checkout.component';
import { HomeComponent } from './components/shared/home/home.component';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { CartComponent } from './components/shared/shoppingcart/cart/cart.component';
import { ProductListComponent } from './components/shared/shoppingcart/product-list/product-list.component';
import { ShoppingcartComponent } from './components/shared/shoppingcart/shoppingcart.component';
import { KidShoppingCartComponent } from './KidShoppingCart/kid-shopping-cart/kid-shopping-cart.component';
import { WomencartComponent } from './womenShoppingCart/womencart/womencart.component';

const routes: Routes = [
  { path: 'shoppingcart', component: ShoppingcartComponent },
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   {path:'home',component:HomeComponent},
   {path:'productlist',component:ProductListComponent},
   {path:'register',component:RegisterComponent},
   {path:'login',component:LoginComponent},
   {path:'cart',component:CartComponent},
   {path:'checkout',component:CheckoutComponent},
   {path:'women',component:WomencartComponent},
   {path:'kids',component:KidShoppingCartComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
