//change in create component.ts file
//change by branch
//change done in vm
import { Component, OnInit } from '@angular/core';
import { IUserDetails } from './../models/IUserDetails';
import { UserDetailsServiceService } from '../services/User/user-details-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  userDetails: IUserDetails = {
  Id: null,
  Title: null,
  FirstName: null,
  MiddleName: null,
  LastName: null,
  FatherName: null,
  MobileNumber: null,
  Email: null,
  AadharNumber: null,
  DOB: null,
  ResidentialAddressLine1: null,
  ResidentialAddressLine2: null,
  ResidentialLandmark: null,
  ResidentState: null,
  ResidentialCity: null,
  ResidentialPinCode: null,
  PermanentAddressLine1: null,
  PermanentAddressLine2: null,
  PermanentLandmark: null,
  PermanentState: null,
  PermanentCity: null,
  PermanentPinCode: null,
  OccupationalType: null,
  SourceOfIncome: null,
  GrossAnnualIncome: null,
  IsNetBanking: null,
  DebitCard: null
};
  addressSame: boolean = false;
  agreeCheckbox: boolean = false;

    constructor(private userDetailsService:UserDetailsServiceService, private router:Router) { }

    postUserDetails() {
      this.userDetailsService.postUserDetails(this.userDetails).subscribe( () => {
        alert("User Added Successfully");
        this.router.navigate(['/home']);
      });
    }

    saveUserDetails(userDetails: IUserDetails): void {
      this.postUserDetails();
    }

    ngOnInit(): void {
    }

    onCheckboxChange(): void{
      if(this.addressSame)
      {
        this.userDetails.PermanentAddressLine1=this.userDetails.ResidentialAddressLine1;
        this.userDetails. PermanentAddressLine2=this.userDetails.ResidentialAddressLine2;
        this.userDetails.PermanentLandmark= this.userDetails.ResidentialLandmark;
        this.userDetails.PermanentState=this.userDetails.ResidentState;
        this.userDetails.PermanentCity=this.userDetails.ResidentialCity;
        this.userDetails.PermanentPinCode=this.userDetails.ResidentialPinCode;
      }
      else
      {
        this.userDetails.PermanentAddressLine1="";
        this.userDetails. PermanentAddressLine2="";
        this.userDetails.PermanentLandmark= "";
        this.userDetails.PermanentState="";
        this.userDetails.PermanentCity="";
        this.userDetails.PermanentPinCode="";
      }
    }

}
