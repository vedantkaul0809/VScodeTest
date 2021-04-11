import { Component, OnInit } from '@angular/core';
import {IUserDetails} from './../models/iUserDetails';
import {ActivatedRoute,Router} from '@angular/router';
import {IAdminModule} from './../models/iAdminModule';
import {AdminServicesService} from './../services/Admin/admin-services.service';
import {UserDetailsServiceService} from './../services/User/user-details-service.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
userdetails:IUserDetails;

  constructor(private userdetailservice:UserDetailsServiceService,private router:Router,private route:ActivatedRoute) { 
    this.userdetailservice.getUserDetailsAdmin().subscribe((data)=>{
      this.userdetails=data;
    })
  }
  ngOnInit(): void {
    //const id=+this.route.snapshot.paramMap.get('Id');
  }
  onSubmit(userdetails:IUserDetails){
    this.userdetails=userdetails;
    this.deleteUserDetails();
  }
  deleteUserDetails(){
    this.userdetailservice.deleteUserDetails(this.userdetails.Id).subscribe(()=>
    {
      alert("Record Deleted successfully");
      //this.router.navigate([/get])
    }
    );
  }
  

}