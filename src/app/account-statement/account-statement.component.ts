import { Component, OnInit } from '@angular/core';
import { ITransactions } from './../models/iTransactions';
import { TransactionServiceService } from './../services/Trans/transaction-service.service';
import { ICustomer } from './../models/ICustomer';
import { CustomerServiceService } from './../services/Cust/customer-service.service';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
//lets do some changes
//this is a first change here
@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {
  
  transactions : ITransactions[];
  // customerDetails: ICustomer
  // customId: number;
  // AccountNum: number;

//doing changes here
//change done
  customId: number;
  AccountNum: number;
  userAccountNumber: number;
  fromDate: Date;
  toDate: Date;


  constructor(private transactionService:TransactionServiceService, private router:ActivatedRoute,
              private route: Router, private customerDetailsService: CustomerServiceService ){ }

  showTransactionStatementDate(){
    this.transactionService.showTransactionStatementDate(this.userAccountNumber,this.fromDate,this.toDate).subscribe((data:ITransactions[])=>
    {
      this.transactions=data;
      console.log("transactions", this.transactions);
    }, error=>{
      alert(error.error.message);
    });
    

  }

 
//   showTransaction(AccountNumber:number){
//     this.transactionService.showTransaction(AccountNumber).subscribe((data:ITransactions)=>
//     {
// this.transactions=data;
//     }
//     )
//   }

  // saveAccountStatementDetails(transactions:ITransactions):void{
  //  this.showTransactionStatementDate(this.transactions.FromAccountNumber,this.transactions.TransactionDate,this.transactions.TransactionDate);
  // }
   
  ngOnInit():void{
    this.userAccountNumber=Number(sessionStorage.getItem('AccNum'));

    var custId=Number(sessionStorage.getItem('userId'));
    var AcctNo = Number(sessionStorage.getItem('AccNum'));
    this.customId = custId;
    this.AccountNum = AcctNo;
  
  }

  onLogoutButton(): void {
    localStorage.clear();
    alert("Logged out Successfully");
    this.route.navigate(['/home']);
  }

}