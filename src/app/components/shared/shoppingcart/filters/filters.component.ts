import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  productlist:Product[]=[];

  constructor(private productService:ProductService) { }
filtered()
{
}
  ngOnInit(): void {
    this.productlist=this.productService.getProducts();
  }

}
