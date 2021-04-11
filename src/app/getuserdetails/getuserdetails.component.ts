import { Component, OnInit } from '@angular/core';
import {IUserDetails} from './../models/iUserDetails';
import {ActivatedRoute,Router} from '@angular/router';
//import {IAdminModule} from './../models/iAdminModule';
import {AdminServicesService} from './../services/Admin/admin-services.service';
import {UserDetailsServiceService} from './../services/User/user-details-service.service';
import {FormsModule} from '@angular/forms';
import {ICustomer} from './../models/iCustomer';
import {CustomerServiceService} from '../services/Cust/customer-service.service';
//import { userInfo } from 'os';

@Component({
  selector: 'app-getuserdetails',
  templateUrl: './getuserdetails.component.html',
  styleUrls: ['./getuserdetails.component.css']
})
export class GetuserdetailsComponent implements OnInit {
uniqueRandom = require('unique-random');
 
//random = this.uniqueRandom(1, 10);
user:IUserDetails;
customer:ICustomer={
  //const uniqueRandom=require('unique-random')
  //AccountNumber: this.uniqueRandom(2500000,3500000), 
  AccountNumber: Math.floor((Math.random() * 100000000000) + 1),
  CustomerId:null,
  LoginPassword:this.getRandomString(6),
  TransactionPassword:this.getRandomString(6),
  Balance:5000,
  //ReferenceId:this.uniqueRandom(3500000,4500000),
  ReferenceId: Math.floor((Math.random() * 10000000) + 1),
  Otp:Math.floor((Math.random() * 10000) + 1),
  IsApproved:1,
  Status:0,
  TotalCnt:0
};

  constructor(private userdetailbyidservice:UserDetailsServiceService,private custservice:CustomerServiceService,private router:Router,private route:ActivatedRoute) { }
  getUserDetails(id:number){
    this.userdetailbyidservice.getUserDetails(id).subscribe((data:IUserDetails)=>
    {this.user=data;
    })
  }
  
  postCustomer(){
    console.log(this.customer);
    this.custservice.postCustomer(this.customer).subscribe(()=>
    {
      alert("User Approved");
      this.router.navigate(['/user-details']);
    },
    error=>{alert(error.error.Message);}
    
    );
  }
  ngOnInit() {
    const id=+this.route.snapshot.paramMap.get('id');
    this.getUserDetails(id);
  }
  getRandomString(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789)(_+><*&^%$#@!":{}[]';
        var result = '';
        for ( var i = 0; i <length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

}