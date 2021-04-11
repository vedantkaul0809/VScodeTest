import { Component, OnInit } from '@angular/core';
import { ICustomer } from './../models/ICustomer';
import { CustomerServiceService } from '../services/Cust/customer-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
 
  // customerDetailsFromDb: ICustomer = {
  //   AccountNumber: null,
  //   CustomerId: null,
  //   LoginPassword: null,
  //   TransactionPassword: null,
  //   Balance: null,
  //   ReferenceId: null,
  //   Status: null,
  //   Otp: null,
  //   IsApproved: null,
  //   TotalCnt: null
  // }

  customerDetails: ICustomer = {
    AccountNumber: null,
    CustomerId: null,
    LoginPassword: null,
    TransactionPassword: null,
    Balance: null,
    ReferenceId: null,
    Status: null,
    Otp: null,
    IsApproved: null,
    TotalCnt: null
  }

  //customerDetails: ICustomer;

  constructor(private customerService: CustomerServiceService, private router:ActivatedRoute, 
    private route: Router) { }

    // getCustomerDetailsByAccNo(AccountNumber: number): void {
    //   this.customerService. getCustomerDetailsByAccNo(AccountNumber).subscribe((customer: ICustomer) => {
    //       this.customerDetails = customer;
    // });
    // }
  
    putCustomerNetBanking() {
      // this.customerDetails.CustomerId=this.customerDetailsFromDb.CustomerId;
      // this.customerDetails.Balance=this.customerDetailsFromDb.Balance;
      // this.customerDetails.ReferenceId=this.customerDetailsFromDb.ReferenceId;
      // this.customerDetails.Status=this.customerDetailsFromDb.Status;
      // this.customerDetails.IsApproved=this.customerDetailsFromDb.IsApproved;
      // this.customerDetails.TotalCnt=this.customerDetailsFromDb.TotalCnt;
      console.log(this.customerDetails);
      this.customerService.putCustomerNetBanking(this.customerDetails).subscribe( () => {
        alert("You are Registered for Net Banking");
        this.route.navigate(['/dashboard']);
      });
    }
  
    saveCustomerDetails(customerDetails: ICustomer): void {
      this.customerDetails = customerDetails;
      this.putCustomerNetBanking();
    }
  
    ngOnInit(): void {
      //const AccountNumber =+ this.router.snapshot.paramMap.get('AccountNumber');
      //const AccountNumber= sessionStorage.getItem('');
      //this. getCustomerDetailsByAccNo(AccountNumber);
    }

}
