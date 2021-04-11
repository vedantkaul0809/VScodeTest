import { Component, OnInit } from '@angular/core';
import {IBeneficiary} from './../models/iBeneficiary';
import {BeneficiaryServiceService} from '../services/Ben/beneficiary-service.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})

export class AddBeneficiaryComponent implements OnInit {
  
  Beneficiary: IBeneficiary = {
    //BId:null,
    HolderAccountNumber:null,
    BeneficiaryId:null, 
    BeneficiaryAccountNumber: null, 
    Nickname: null
  };

  customId: number;
  AccountNum: number;

  constructor(private beneficiaryservice: BeneficiaryServiceService, private router: Router) {}
    
  addBeneficiary() {
    this.beneficiaryservice.addBeneficiary(this.Beneficiary).subscribe(() => {
        alert("Beneficiary added");
        this.router.navigate(['/dashboard']);
      });
    }

    saveBeneficiary(Beneficiary:IBeneficiary): void {
      this.Beneficiary=Beneficiary;
      this.addBeneficiary();
    }

    ngOnInit(): void {
      var custId=Number(sessionStorage.getItem('userId'));
      var AcctNo = Number(sessionStorage.getItem('AccNum'));
      this.customId = custId;
      this.AccountNum = AcctNo;
  } 
 
  onLogoutButton(): void {
    localStorage.clear();
    alert("Logged out Successfully");
    this.router.navigate(['/home']);
  }

}
