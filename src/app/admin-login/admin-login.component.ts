import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {IAdminModule} from './../models/iAdminModule';
import {AdminServicesService} from './../services/Admin/admin-services.service';
import {UserDetailsServiceService} from './../services/User/user-details-service.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin:IAdminModule={
    AdminId:null,
    AdminPassword:null
  };

  constructor(private adminservice:AdminServicesService,private router:Router,private route:ActivatedRoute) { }

  postAdminLogin(){
    this.adminservice.postAdminLogin(this.admin).subscribe(()=>
    {
      alert("Logged in as Admin");
      this.router.navigate(['/user-details']);
    },
    error=>{alert("Invalid Credentials");}
    );
  }
  saveAdminLogin(admin:IAdminModule):void{
    this.admin=admin;
    this.postAdminLogin();
  }
  ngOnInit(): void {
  }

}