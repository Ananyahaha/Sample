import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-kids-cart-item',
  templateUrl: './kids-cart-item.component.html',
  styleUrls: ['./kids-cart-item.component.css']
})
export class KidsCartItemComponent implements OnInit {
  @Input() productItem!:Product 

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart()
{
  this.msg.sendMsg(this.productItem)

}

}
