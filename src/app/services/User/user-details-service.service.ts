import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IUserDetails } from '../../models/IUserDetails';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsServiceService {
  url = 'http://localhost/mybankingapp/api/userdetails/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };
  
  constructor(private http:HttpClient) { }

  getUserDetailsById(Id:number):Observable<IUserDetails> {
    return this.http.get<IUserDetails>(this.url + "getUserDetails/" + Id);
  }

  postUserDetails(userDetails: IUserDetails): Observable<IUserDetails> {
    return this.http.post<IUserDetails>(this.url + "postUserDetails", userDetails, this.httpOptions);
  }

  putUserDetails(userDetails: IUserDetails): Observable<IUserDetails> {
    return this.http.put<IUserDetails>(this.url + "putUserDetails" + userDetails.Id, userDetails, this.httpOptions);
  }

  deleteUserDetails(Id:number):Observable<IUserDetails> {
    return this.http.delete<IUserDetails>(this.url + "deleteUserDetails/" + Id);
  }

  getUserDetailsAdmin():Observable<IUserDetails> {
    return this.http.get<IUserDetails>(this.url + "getUserDetailsAdmin");
  }

  getUserDetails(Id:number):Observable<IUserDetails> {
    return this.http.get<IUserDetails>(this.url + "getUserDetails/" + Id);
  }
  
}
