import { Component, OnInit } from '@angular/core';
import { ICustomer } from './../models/ICustomer';
import { CustomerServiceService } from './../services/Cust/customer-service.service';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
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
  TotalCnt: null,
  IsApproved: null
  };

  constructor(private customerService:CustomerServiceService,private route:ActivatedRoute,private router:Router) { }

  postCustomerByIdOtp(){
    //console.log(this.customer.CustomerId,this.customer.Otp);
    this.customerService.postCustomerByIdOtp(this.customer).subscribe(()=>{
      alert("Record with user id and otp matched");

      this.router.navigate(['/setnewpassword/'+ this.customer.CustomerId]);
  }
    );
}

saveCustomer(customer: ICustomer): void{
  
  this.postCustomerByIdOtp();
}
  
  ngOnInit(): void {

  }
}