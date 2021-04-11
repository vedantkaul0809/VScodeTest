import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ICustomer } from '../../models/ICustomer';

@Injectable({
  providedIn: 'root'
})

export class CustomerServiceService {

  url = 'http://localhost/mybankingapp/api/Customer/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json', 
      'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS'})
  };

  constructor(private http:HttpClient) { }

  // postLogin(customerDetails:ICustomer): Observable<string> {
  //   return this.http.post<string>(this.url + "PostLogin", customerDetails, this.httpOptions);
  // }
  
  getCustomerDetails():Observable<any[]> {
    return this.http.get<any[]>(this.url + "getCustomer");
  }

  getCustomerDetailsByAccNo(AccountNumber:number):Observable<ICustomer> {
    return this.http.get<ICustomer>(this.url + "getCustomer/" + AccountNumber);
  }

  showCustomerDetailsById(CustomerId: number):Observable<ICustomer> {
    return this.http.get<ICustomer>(this.url + "showCustomerById/" + CustomerId);
  }

  postCustomerDetails(customerDetails: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.url + "postCustomer", customerDetails, this.httpOptions);
  }

  putCustomerDetails(customerDetails: ICustomer): Observable<ICustomer> {
    return this.http.put<ICustomer>(this.url + "PutCustomer/" + customerDetails.AccountNumber, 
    customerDetails, this.httpOptions);
  }

  putCustomerNetBanking(customerDetails: ICustomer): Observable<ICustomer> {
    return this.http.put<ICustomer>(this.url + "PutCustomerNetBanking", customerDetails, this.httpOptions);
  }

  deleteCustomerDetails(AccountNumber:number):Observable<ICustomer> {
    return this.http.delete<ICustomer>(this.url + "deleteCustomer/" + AccountNumber);
  }

  showCustomerForgotId(AccountNumber:number,Otp:number):Observable<ICustomer>{
    return this.http.get<ICustomer>(this.url + "ShowCustomerForgotId/"+AccountNumber+"/"+Otp);
  }

  postCustomerByIdOtp(customer:ICustomer):Observable<ICustomer>{
    //console.log(customer.CustomerId,customer.Otp);
  return this.http.post<ICustomer>(this.url + "PostCustomerByIdOtp",customer,this.httpOptions);
  }

  putCustomerDetailsByCustomerId(customer:ICustomer):Observable<ICustomer>{
    return this.http.put<ICustomer>(this.url + "PutCustomerById/" + customer.CustomerId, customer, this.httpOptions);
  }

  postCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.url + "postCustomer", customer, this.httpOptions);
  }

  postLogin(customerDetails:ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.url + "postLogin", customerDetails, this.httpOptions);
  }

  showCustomer(CustomerId:number):Observable<ICustomer>{
    return this.http.get<ICustomer>(this.url + "ShowCustomerById/" + CustomerId,this.httpOptions); 
  }

  putCustomerLogin(customerDetails:ICustomer):Observable<ICustomer>{
    console.log(customerDetails.CustomerId);
    return this.http.put<ICustomer>(this.url+'PutCustomerLogin/'+customerDetails.CustomerId,customerDetails,this.httpOptions);
  }

  putLoginChangePwd(customerDetails:ICustomer):Observable<ICustomer>{
    return this.http.put<ICustomer>(this.url+'PutCustomerChangePassword/'+customerDetails.CustomerId,customerDetails,this.httpOptions);
  }
  
}
