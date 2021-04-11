import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IUserDetails } from './../../models/iUserDetails';
import {IAdminModule} from './../../models/iAdminModule';

@Injectable({
  providedIn: 'root'
})

export class AdminServicesService {

  url = 'http://localhost/mybankingapp/api/AdminModule/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS'
  })
  };

  constructor(private http:HttpClient) { }

  postAdminLogin(admin:IAdminModule): Observable<IAdminModule> {
    return this.http.post<IAdminModule>(this.url + "postAdminLogin", admin, this.httpOptions);
  }
  
}