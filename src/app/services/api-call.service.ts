import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  private ApiUrl = "http://localhost:55031/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient)
   {

   }
   getAll(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.ApiUrl + '/Users/')
    
  }
  create(product: any){
    return this.httpClient.post(this.ApiUrl + '/Users/',product).subscribe(res => {
    },
        err => console.log(err));     
  } 
  getById(id: any): Observable<Users> {
    return this.httpClient.get<Users>(this.ApiUrl + '/Users/' + id);
   
  }

  getlastuserid(): Observable<number> {
    return this.httpClient.get<number>(this.ApiUrl + '/Users/getlastuserid')
  }

  update(id:any, product:any): Observable<Users> {
     return this.httpClient.put<Users>(this.ApiUrl + '/Users/' + id, JSON.stringify(product), this.httpOptions)
    
   }


  verifyuser(email :string, pwd:string): Observable<Users>{
    return this.httpClient.get<Users>(this.ApiUrl + '/Users/verifyuser?email=' + email + '&&pwd=' + pwd)
  }

  updateuser(id:any,user:Users) {
    this.httpClient.put<Users>(this.ApiUrl + '/Users/' + id,user).subscribe(res => {
    },
        err => console.log(err)); 
  }
  delete(id:any){
    return this.httpClient.delete<Users>(this.ApiUrl + '/Users/' + id, this.httpOptions)
    
    
  }

}
