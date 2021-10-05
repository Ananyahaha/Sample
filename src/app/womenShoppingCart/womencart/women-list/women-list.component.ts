import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { WomenApiCallService } from 'src/app/services/women-api-call.service';

@Component({
  selector: 'app-women-list',
  templateUrl: './women-list.component.html',
  styleUrls: ['./women-list.component.css']
})
export class WomenListComponent implements OnInit {
  productlist:Product[]=[]
  constructor(private productService:WomenApiCallService) { }

  ngOnInit(): void {
    this.productlist=this.productService.getProducts();
    
  }

}
