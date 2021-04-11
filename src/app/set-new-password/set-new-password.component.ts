import { Component, OnInit } from '@angular/core';
import { ICustomer } from './../models/ICustomer';
import { CustomerServiceService } from './../services/Cust/customer-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent implements OnInit {
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
  confirmLoginPassword: string;
  constructor(private customerService: CustomerServiceService, private router:ActivatedRoute, private route: Router) { }

  showCustomerById(CustomerId: number): void {
  }

  putLoginChangePwd(customerDetails:ICustomer){
    this.customerService.putLoginChangePwd(this.customerDetails).subscribe(()=>
    {
        //alert("Invalid Login Credentials!");
        //this.router.navigate(['list']);
    });
  }

  putCustomerDetailsByCustomerId() {
    this.customerService.putCustomerDetailsByCustomerId(this.customerDetails).subscribe( () => {
      
      this.customerService. putLoginChangePwd(this.customerDetails).subscribe(()=>
      {
          //alert("Invalid Login Credentials!");
          //this.router.navigate(['list']);
      });
      alert("Password Changed Successfully");
      this.route.navigate(['/login']);
    });
  }

  saveCustomerDetails(customerDetails: ICustomer): void {
    console.log(this.customerDetails);
    this.customerDetails=customerDetails;
    this.putCustomerDetailsByCustomerId();
  }

  ngOnInit(): void {
    
    const CustomerId =+ this.router.snapshot.paramMap.get('CustomerId');
    console.log(this.customerDetails.CustomerId);
    this.customerDetails.CustomerId=CustomerId;
    this.showCustomerById(CustomerId);
  }

}