import { Component, OnInit } from '@angular/core';
import { ICustomer } from './../models/ICustomer';
import { CustomerServiceService } from '../services/Cust/customer-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

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
  
  status: number;

  //constructor(private router:Router,private LoginService:CustomerServiceService) { }    
  constructor(private router:Router,private custservice:CustomerServiceService,
    private route:ActivatedRoute) { } 

  showCustomer(CustomerId:number) {
    console.log("In showCustomer()");
    return new Promise(resolve => {
        this.custservice.showCustomer(CustomerId).subscribe((data:ICustomer)=>
        {
        console.log("Fetched customer status");
        //const CustomerId=+this.route.snapshot.paramMap.get('CustomerId');
        this.status=data.Status;
        resolve(true);
        });
    });
  } 

  putCustomerLogin(customerDetails:ICustomer){
    this.custservice.putCustomerLogin(this.customerDetails).subscribe(()=>
    {
        alert("Invalid Login Credentials!");
        //this.router.navigate(['list']);
    });
  }

  postLogin() {
    // this.showCustomer(this.customerDetails.CustomerId).then((data) => {
    //   console.log(this.customerDetails.Status);
    // });
   
    this.showCustomer(this.customerDetails.CustomerId).then((data) => {
      console.log("Status:",this.status);
      if(this.status==0)
      {
          this.custservice.postLogin(this.customerDetails).subscribe((data)=>
          {
            if(data)
            {     
              alert("Logged in as successfully");
              sessionStorage.setItem('userId',this.customerDetails.CustomerId.toString());
              //sessionStorage.setItem('accNum',this.customerDetails.AccountNumber.toString());
              this.router.navigate(['/dashboard']);
            }
          },
          error=>{
            console.log(this.customerDetails);
            // this.putCustomerLogin(this.customerDetails);
            this.custservice.putCustomerLogin(this.customerDetails).subscribe(()=>
              {
                  alert("Invalid Login Credentials!");
                  //this.router.navigate(['list']);
              });
            alert("Invalid Credentials");}
          );
      }
      else
      {
        alert("You have exceeded maximum login attempts.Please reset your password to re-login.");
        this.router.navigate(['/forgotPwd']);
      }
    });
  }

  saveLogin(customerDetails:ICustomer):void{
    this.customerDetails=customerDetails;
    this.postLogin();
  }

  // UserLogin(customerDetails:ICustomer) {
  //   this.LoginService.postLogin(this.customerDetails).subscribe((data)=>{
  //     console.log("this line", data);
  //     if(data=="Logged in as Admin")
  //     {
  //       alert("Logged in successfully");
  //       sessionStorage.setItem('userId',this.customerDetails.CustomerId.toString());
  //       //sessionStorage.setItem('accNum',this.customerDetails.AccountNumber.toString());
  //       this.router.navigate(['/dashboard']);
  //     }
  //   },error=>{
  //       alert(error.error.Message);
  //     });
  // } 

    ngOnInit():void{}

}
