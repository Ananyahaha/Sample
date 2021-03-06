import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

  @Input() productItem!:Product 

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart()
{
  this.msg.sendMsg(this.productItem)

}

}
