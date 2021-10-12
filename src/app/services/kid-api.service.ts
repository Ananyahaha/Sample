import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class KidApiService {

  products:Product[]=[
    new Product(1,'Shirt','White',650,'https://i.pinimg.com/474x/f9/1f/28/f91f283bf464321efba93bb7ec3650bf.jpg'),
    new Product(2,'Jumper','Bunny',550,'https://i.pinimg.com/474x/75/b9/e2/75b9e2a2374ca80738173f15e66621a1.jpg'),
    new Product(3,'Frock','White',750,'https://i.pinimg.com/474x/94/66/17/94661797445af4d4017f310a8735f388.jpg'),
    new Product(4,'Tshirt',' black',850,'https://i.pinimg.com/474x/1f/a7/5d/1fa75d1bd813b7f67b7bfea21598f95b.jpg'),
    new Product(5,'School Set','shirt,pant,shoes',2500,'https://i.pinimg.com/474x/7d/0c/d4/7d0cd48218197e7de156b59fc0d271c8.jpg'),
    new Product(6,'Shoes','nike',2600,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwa5NI8Zqodm7sLCQP2xfAisn11nphuIZgww&usqp=CAU'),
  
  ]
    constructor() { }
    getProducts():Product[]{
      //populate from api and return observable
      return this.products
    }
  }
  