import { Component, OnInit } from '@angular/core';
import { IUserDetails } from './../models/IUserDetails';
import { UserDetailsServiceService } from '../services/User/user-details-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  userDetails: IUserDetails | undefined;
  customId: number;
  AccountNum: number;

      constructor(private userDetailsService:UserDetailsServiceService, private router:ActivatedRoute,
        private route: Router) { }

      getUserDetailsById(Id:number){
        this.userDetailsService.getUserDetailsById(Id).subscribe((data:IUserDetails) => {
          this.userDetails = data;
        },
        error => {
          alert(error.error.message);
        });
     }
  
  ngOnInit(): void {
    //const id =+ this.router.snapshot.paramMap.get('id');
    //this.getUserDetailsById(id);
    var custId=Number(sessionStorage.getItem('userId'));
    var AcctNo = Number(sessionStorage.getItem('AccNum'));
    this.customId = custId;
    this.AccountNum = AcctNo;
    
    if(custId)
    {
        this.userDetailsService.getUserDetailsById(custId).subscribe((data:IUserDetails) => {
          this.userDetails = data;
          console.log("dashboard", data);
        },  
        error => {
          alert(error.error.message);
        });    
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
