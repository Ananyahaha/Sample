import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {
  private ApiUrl = "http://localhost:55031/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient){}

  getAll(): Observable<CartItem[]> {
    return this.httpClient.get<CartItem[]>(this.ApiUrl + '/carts/')
    
  }
  
  getallbyid(id:number): Observable<CartItem[]> {
    return this.httpClient.get<CartItem[]>(this.ApiUrl + '/carts/getallbyid?id=' + id)
    
  }
  create(product: any): Observable<CartItem> {
    return this.httpClient.post<CartItem>(this.ApiUrl + '/carts/', JSON.stringify(product), this.httpOptions)    
  } 
  getById(id: any): Observable<CartItem> {
    return this.httpClient.get<CartItem>(this.ApiUrl + '/carts/' + id)
   
  }
    update(id:any, product:any): Observable<CartItem> {
    return this.httpClient.put<CartItem>(this.ApiUrl + '/carts/' + id, JSON.stringify(product), this.httpOptions)
    
  }
  delete(id:any){
    return this.httpClient.delete<CartItem>(this.ApiUrl + '/carts/' + id, this.httpOptions)
    
    
  }

}

