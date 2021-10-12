import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ShoppingcartComponent } from './components/shared/shoppingcart/shoppingcart.component';
import { CartComponent } from './components/shared/shoppingcart/cart/cart.component';
import { FiltersComponent } from './components/shared/shoppingcart/filters/filters.component';
import { ProductListComponent } from './components/shared/shoppingcart/product-list/product-list.component';
import { ProductItemsComponent } from './components/shared/shoppingcart/product-list/product-items/product-items.component';
import { CartItemComponent } from './components/shared/shoppingcart/cart/cart-item/cart-item.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { LoginComponent } from './components/shared/login/login.component';
import { CheckoutComponent } from './components/shared/checkout/checkout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WomenShoppingCartComponent } from './womenShoppingCart/womencart/women-shopping-cart/women-shopping-cart.component';
import { WomencartComponent } from './womenShoppingCart/womencart/womencart.component';
import { WomenCartItemComponent } from './womenShoppingCart/womencart/women-cart-item/women-cart-item.component';
import { WomenListComponent } from './womenShoppingCart/womencart/women-list/women-list.component';
import { KidShoppingCartComponent } from './KidShoppingCart/kid-shopping-cart/kid-shopping-cart.component';
import { KidsCartItemComponent } from './KidShoppingCart/kids-cart-item/kids-cart-item.component';
import { KidsCartListComponent } from './KidShoppingCart/kids-cart-list/kids-cart-list.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    ShoppingcartComponent,
    CartComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemsComponent,
    CartItemComponent,
    RegisterComponent,
    LoginComponent,
    CheckoutComponent,
    WomenShoppingCartComponent,
    WomencartComponent,
    WomenCartItemComponent,
    WomenListComponent,
    KidShoppingCartComponent,
    KidsCartItemComponent,
    KidsCartListComponent,
    ThanksComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
      ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
