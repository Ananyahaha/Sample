import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:CartItem[]=[
    // {id:1,productId:1,productName:'test1',qty:4,price:400},
    // {id:1,productId:2,productName:'test1',qty:1,price:100},
    // {id:1,productId:1,productName:'test1',qty:3,price:300},
    // {id:1,productId:3,productName:'test1',qty:2,price:100},

  ];
  cartTotal=0;

  constructor(public msg:MessengerService) { }

  ngOnInit(): void {
  this.msg.getMsg().subscribe((product:any) =>{
   this.addProductToCart(product)
  })
    
  }
addProductToCart(product:Product){

  let productExists=false

  for (let i in this.cartItems)
  {
    if(this.cartItems[i].productId===product.id)
    {
    this.cartItems[i].qty++
    productExists=true
    break;
    }
  }
  if(!productExists){
    this.cartItems.push({productId :product.id,productName : product.name,qty:1,price : product.price})
  }
this.cartItems.forEach(item=>{
this.cartTotal += item.qty* item.price
  })
}

}
