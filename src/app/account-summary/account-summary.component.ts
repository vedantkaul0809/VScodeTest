import { Component, OnInit } from '@angular/core';
import {ITransactions} from './../models/iTransactions';
import {TransactionServiceService} from '../services/Trans/transaction-service.service';
import {ActivatedRoute,Router} from '@angular/router';
import { CustomerServiceService } from '../services/Cust/customer-service.service';
import { ICustomer } from '../models/ICustomer';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})

export class AccountSummaryComponent implements OnInit {
  transaction:ITransactions;
  customerDetails: ICustomer;
  customId: number;
  AccountNum: number;
  AcctNo:number;
  Bal: number;

  constructor(private transervice:TransactionServiceService,private router:ActivatedRoute,
    private route: Router, private customerDetailsService: CustomerServiceService ) {}

  getLast5Transaction(AccountNumber:number)  {
    this.transervice.getLast5Transaction(AccountNumber).subscribe((data:ITransactions)=>{
      this.transaction=data;
      console.log("acc summary", this.transaction);
    },
    error=>{
      alert(error.error.message);
    });
  }

  ngOnInit(): void {
    // const FromAccountNumber =+ this.router.snapshot.paramMap.get('FromAccountNumber');
    // this.getLast5Transaction(FromAccountNumber); 
    // this.AcctNo=FromAccountNumber;

    var custId=Number(sessionStorage.getItem('userId'));
    // var AcctNo = Number(sessionStorage.getItem('AccNum'));
    // this.customId = custId;
    // this.AccountNum = AcctNo;
    
    if(custId)
    {
        this.customerDetailsService.showCustomerDetailsById(custId).subscribe((accData:ICustomer) => {
          sessionStorage.setItem('AccNum', accData.AccountNumber.toString());
          sessionStorage.setItem('Balance', accData.Balance.toString());
          console.log("dashboard account", accData);
        },
        error => {
          alert(error.error.message);
        });
        
        this.Bal = Number(sessionStorage.getItem('Balance'));
        console.log("balance", this.Bal);
        this.AcctNo = Number(sessionStorage.getItem('AccNum'));
        //this.AcctNo = this.AccountNum;
        if(this.AcctNo)
        {
          this.getLast5Transaction(this.AcctNo); 
        }
    }
    else
    {
      this.route.navigate(['/dashboard']);
    }
  }

  onLogoutButton(): void {
    localStorage.clear();
    alert("Logged out Successfully");
    this.route.navigate(['/home']);
  }

}
