import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { KidApiService } from 'src/app/services/kid-api.service';

@Component({
  selector: 'app-kids-cart-list',
  templateUrl: './kids-cart-list.component.html',
  styleUrls: ['./kids-cart-list.component.css']
})
export class KidsCartListComponent implements OnInit {
  productlist:Product[]=[]
  constructor(private productService:KidApiService) { }

  ngOnInit(): void {
    this.productlist=this.productService.getProducts();
    
  }

}