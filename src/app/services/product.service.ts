import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProduct(id: number) {
    throw new Error('Method not implemented.');
  }
products:Product[]=[
  new Product(1,'Shirt','red',250,'https://i.pinimg.com/474x/e4/bc/e4/e4bce401f99437f2d27eed2c9ee2e549.jpg'),
  new Product(2,'Shirt','stripes',550,'https://i.pinimg.com/474x/a7/ca/93/a7ca933e8a318d0cf07ed85a57d4dc86.jpg'),
  new Product(3,'Shirt','grey',750,'https://m.media-amazon.com/images/I/81YSIX3gYaL._AC_UL480_FMwebp_QL65_.jpg'),
  new Product(4,'Jacket','varsity jacket',850,'https://m.media-amazon.com/images/I/718MW5HgZUL._UY879_.jpg'),
  new Product(5,'Shoes','nike jordans',230,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwa5NI8Zqodm7sLCQP2xfAisn11nphuIZgww&usqp=CAU'),
  new Product(6,'Shoes','white',260,'https://i.pinimg.com/474x/4e/07/f1/4e07f108bb86a4252206611df8ac9dab.jpg'),

]
  constructor() { }
  getProducts():Product[]{
    //populate from api and return observable
    return this.products
  }
}
