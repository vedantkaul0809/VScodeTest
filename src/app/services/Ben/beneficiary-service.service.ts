import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IBeneficiary } from '../../Models/iBeneficiary';

@Injectable({
  providedIn: 'root'
})

export class BeneficiaryServiceService {

 url= 'http://localhost/mybankingapp/api/beneficiary/';
    httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'Application/json'})
  }
 
  constructor(private http:HttpClient) { }

  addBeneficiary(Beneficiary:IBeneficiary):Observable<IBeneficiary> {
    console.log(Beneficiary);
    return this.http.post<IBeneficiary>(this.url+"PostBeneficiary", Beneficiary, this.httpOptions);
  }

}
