import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ITransactions } from '../../models/iTransactions';

@Injectable({
  providedIn: 'root'
})

export class TransactionServiceService {

  url = 'http://localhost/mybankingapp/api/transaction/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http:HttpClient) { }

  getTransactionDetails():Observable<any[]> {
    return this.http.get<any[]>(this.url + "getTransaction");
  }

  showTransaction(AccountNumber:number):Observable<any[]> {
   return this.http.get<any[]>(this.url + "showTransaction/" + AccountNumber);
  }

  getTransactionDetailsByTId(TId:number):Observable<ITransactions> {
    return this.http.get<ITransactions>(this.url + "getTransaction/" + TId);
  }

  postTransactionDetails(transactionDetails: ITransactions): Observable<ITransactions> {
    //console.log(transactionDetails);
    return this.http.post<ITransactions>(this.url + "postTransaction", transactionDetails, this.httpOptions);
  }

  // showLast5Transaction(AccountNumber:number):Observable<ITransactions> {
  //   return this.http.get<ITransactions>(this.url + "showLast5Transaction/" + AccountNumber);
  // }

  getLast5Transaction(AccountNumber:number):Observable<ITransactions>
  {
    return this.http.get<ITransactions>(this.url+"ShowLast5Transaction/" + AccountNumber);
  }

  showTransactionStatementDate(AccNo:number,datestart:Date,dateend:Date):Observable<ITransactions[]>{
    return this.http.get<ITransactions[]>(this.url + "ShowTransactionStatementDate?AccNo="+AccNo+"&datestart="+datestart+"&dateend="+dateend);
  }
  
}
