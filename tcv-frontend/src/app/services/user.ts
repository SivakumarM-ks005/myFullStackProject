import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class User {
  private url = environment.apiUrl;
  constructor( private httpClient : HttpClient){}

  signup(data:any){
    this.httpClient.post(this.url+"/user/signup",data, {
     headers: new HttpHeaders().set('content-type',"application/json")
    });
  }
}
