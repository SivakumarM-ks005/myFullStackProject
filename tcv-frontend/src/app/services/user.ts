import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User {
  private url = environment.apiUrl;
  constructor( private http : HttpClient){}

  signup(data:any):Observable<any>{
    return this.http.post(`${this.url}/user/signup`, data, {
      headers: new HttpHeaders().set('content-type', "application/json")
    });
  }
}
