import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class WomenApiCallService {
  products:Product[]=[
    new Product(1,'Top','White Crop Top (XS)',450,'https://img.ltwebstatic.com/images2_pi/2019/04/03/15542791773443411879_thumbnail_900x1199.webp'),
    new Product(2,'Pants','Blue Ankle Length(M)',550,'https://assets.ajio.com/medias/sys_master/root/20210408/cAf0/606e034cf997dd7b64a6dce8/-1117Wx1400H-441118863-ltblue-MODEL.jpg'),
    new Product(3,' Dress','Olive Green (L) ',750,'https://i.pinimg.com/564x/2d/8b/80/2d8b8025f11b8f092954f68d89fcfd34.jpg'),
    new Product(4,'Kurti','FabIndia',850,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAobTCi6U2qYQgtKUrP8ETd5oEGSbgyCnUQz8LvupncP3CJNri-Tm2DN9CsyoEwav4bWDtS_Q&usqp=CAc'),
    new Product(5,'Heels','catwalk',600,'https://m.media-amazon.com/images/I/71MHp6xYzrS._UL1500_.jpg'),
    new Product(6,'Shoes','nike',2500,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwa5NI8Zqodm7sLCQP2xfAisn11nphuIZgww&usqp=CAU'),
  
  ]
    constructor() { }
    getProducts():Product[]{
      //populate from api and return observable
      return this.products
    }
  }
  