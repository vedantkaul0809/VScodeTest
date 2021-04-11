import { Component, OnInit } from '@angular/core';
import { ITransactions } from './../models/iTransactions';
import { TransactionServiceService } from '../services/Trans/transaction-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-imps-transaction',
  templateUrl: './imps-transaction.component.html',
  styleUrls: ['./imps-transaction.component.css']
})

export class ImpsTransactionComponent implements OnInit {

  transactions: ITransactions = {
    //TId: null,
    FromAccountNumber: null,
    ToAccountNumber: null,
    TransactionType: null,
    Amount: null,
    MaturityInstruction: null,
    Remark: null,
    TransactionDate: null,
  }
  customId: number;
  AccountNum: number;

  constructor(private transactionService:TransactionServiceService, private router:Router) { }

  postTransactionDetails() {
    var currentdate = new Date();
    var datetime = currentdate.getFullYear() + "-"
                + ("0" + currentdate.getMonth()+1).slice(-2) + "-" 
                + ("0" + currentdate.getDate()).slice(-2) + "T"  
                + ("0" + currentdate.getHours()).slice(-2) + ":"  
                + ("0" + currentdate.getMinutes()).slice(-2) + ":" 
                + ("0" + currentdate.getSeconds()).slice(-2);

    this.transactions.TransactionDate=new Date(datetime);
    this.transactions.TransactionType = "IMPS";
    console.log("hello imps", this.transactions);
    this.transactionService.postTransactionDetails(this.transactions).subscribe( () => {
      alert("Transaction Successful");
      this.router.navigate(['/dashboard']);
    });
  }

  saveTransactionDetails(transactionDetails: ITransactions): void {
    this.postTransactionDetails();
  }

  ngOnInit(): void {
    var custId=Number(sessionStorage.getItem('userId'));
    var AcctNo = Number(sessionStorage.getItem('AccNum'));
    this.customId = custId;
    this.AccountNum = AcctNo;
  }

  onLogoutButton(): void {
    localStorage.clear();
    alert("Logged out Successfully");
    this.router.navigate(['/home']);
  }
  
}
