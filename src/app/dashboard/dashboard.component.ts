import { Component, OnInit } from '@angular/core';
import { IUserDetails } from './../models/IUserDetails';
import { UserDetailsServiceService } from '../services/User/user-details-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerServiceService } from '../services/Cust/customer-service.service';
import { ICustomer } from '../models/ICustomer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  userDetails: IUserDetails;
  customerDetails: ICustomer;
  customId: number;
  AccountNum: number;

  constructor(private userDetailsService:UserDetailsServiceService, private router:Router,
    private customerDetailsService: CustomerServiceService ) { }

  ngOnInit(): void {
    var custId=Number(sessionStorage.getItem('userId'));
    var AcctNo = Number(sessionStorage.getItem('AccNum'));
    this.customId = custId;
    this.AccountNum = AcctNo;
    // var AccId=Number(sessionStorage.getItem('AccNum'));
    // this.AcctNo = AccId;

    if(custId)
    {
        this.userDetailsService.getUserDetailsById(custId).subscribe((data:IUserDetails) => {
          this.userDetails = data;
          console.log("dashboard", data);
        },  
        error => {
          alert(error.error.message);
        });

        this.customerDetailsService.showCustomerDetailsById(custId).subscribe((accData:ICustomer) => {
          this.customerDetails = accData;
          console.log("dashboard account", accData);
        },
        error => {
          alert(error.error.message);
        });
    }
    else
    {
      this.router.navigate(['/login']);
    }
  }

  onLogoutButton(): void {
    localStorage.clear();
    alert("Logged out Successfully");
    this.router.navigate(['/home']);
  }
}
