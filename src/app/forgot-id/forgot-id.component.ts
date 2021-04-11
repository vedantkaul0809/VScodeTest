import { Component, OnInit } from '@angular/core';
import { ICustomer } from './../models/ICustomer';
import { CustomerServiceService } from './../services/Cust/customer-service.service';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';

//file changed
//file changed by branch 2
//forgot id change
@Component({
  selector: 'app-forgot-id',
  templateUrl: './forgot-id.component.html',
  styleUrls: ['./forgot-id.component.css']
})

export class ForgotIdComponent implements OnInit {
  customer:ICustomer=
  {
  AccountNumber:null ,
  CustomerId: null,
  LoginPassword: null,
  TransactionPassword: null,
  Balance: null,
  ReferenceId: null,
  Status: null,
  Otp: null,
  IsApproved: null,
  TotalCnt: null
  };

  constructor(private customerService:CustomerServiceService, private router:ActivatedRoute,
    private route: Router) {}

  showCustomerForgotId(AccountNumber:number,Otp:number):void {

   
    this.customerService.showCustomerForgotId(AccountNumber,Otp).subscribe( (data:ICustomer) => {
    this.customer=data;
    if(this.customer.AccountNumber && this.customer.Otp )
     {
        alert("User Id is"+ " " + this.customer.CustomerId);
        this.route.navigate(['/login']);
     } 
     error => {
       alert(error.error.message);
     }});
  }

  ngOnInit(){
    const AccountNumber=+this.router.snapshot.paramMap.get('AccountNumber');
    const Otp=+this.router.snapshot.paramMap.get("Otp");
    this.showCustomerForgotId(AccountNumber,Otp);
  } 

}