import { Component, OnInit } from '@angular/core';
import { ICustomer } from './../models/ICustomer';
import { CustomerServiceService } from '../services/Cust/customer-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent implements OnInit {

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

  ConfirmLoginPassword: string;
  ConfirmTransactionPassword: string;
  AcctNo:number;
  customId: number;
  AccountNum: number;
  //customerDetails: ICustomer;
  
  constructor(private customerService: CustomerServiceService, private router:ActivatedRoute, 
    private route: Router) {}

  getCustomerDetailsByAccNo(AccountNumber: number): void {}

  putCustomerDetails() {
    this.customerDetails.AccountNumber = this.AcctNo;
    console.log("here in change pwd", this.customerDetails);
    this.customerService.putCustomerDetails(this.customerDetails).subscribe( () => {
      alert("Password Changed Successfully");
      this.route.navigate(['/dashboard']);
      localStorage.removeItem('AccNum');
    });
  }

  saveCustomerDetails(customerDetails: ICustomer): void {
    console.log(this.customerDetails);
    this.putCustomerDetails();
  }

  ngOnInit(): void {
    // const AccountNumber =+ this.router.snapshot.paramMap.get('AccountNumber');
    // this.customerDetails.AccountNumber=AccountNumber;
    // this. getCustomerDetailsByAccNo(AccountNumber);

    var custId=Number(sessionStorage.getItem('userId'));
    var AcctNo = Number(sessionStorage.getItem('AccNum'));
    this.customId = custId;
    this.AccountNum = AcctNo;

    if(custId)
    {
        this.customerService.showCustomerDetailsById(custId).subscribe((accData:ICustomer) => {
          sessionStorage.setItem('AccNum', accData.AccountNumber.toString());
          console.log("dashboard account", accData);
        },
        error => {
          alert(error.error.message);
        });
        
        this.AcctNo = Number(sessionStorage.getItem('AccNum'));
        // if(this.AcctNo)
        // {
        //   this.getCustomerDetailsByAccNo(this.AcctNo); 
        // }
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
