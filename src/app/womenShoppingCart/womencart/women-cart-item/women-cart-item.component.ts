import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-women-cart-item',
  templateUrl: './women-cart-item.component.html',
  styleUrls: ['./women-cart-item.component.css']
})
export class WomenCartItemComponent implements OnInit {
  @Input() productItem!:Product 

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart()
{
  this.msg.sendMsg(this.productItem)

}

}
