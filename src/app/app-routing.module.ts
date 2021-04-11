import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgotIdComponent } from './forgot-id/forgot-id.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { ImpsTransactionComponent } from './imps-transaction/imps-transaction.component';
import { RtgsTransactionComponent } from './rtgs-transaction/rtgs-transaction.component';
import { NeftTransactionComponent } from './neft-transaction/neft-transaction.component';
import { SessionExpiredComponent } from './session-expired/session-expired.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { GetuserdetailsComponent } from './getuserdetails/getuserdetails.component';

const routes: Routes = [
  { path:'create', component: CreateComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'home', component: HomeComponent },
  { path:'forgotId', component: ForgotIdComponent },
  { path:'forgotPwd', component: ForgotPasswordComponent },
  { path:'setnewpassword/:CustomerId', component:SetNewPasswordComponent },
  { path:'dashboard', component: DashboardComponent },
  { path: 'accountStatement/:AccountNumber', component: AccountStatementComponent },
  { path: 'change-password/:AccountNumber', component: ChangePasswordComponent },
  { path: 'addBeneficiary', component: AddBeneficiaryComponent },
  { path: 'imps', component: ImpsTransactionComponent },
  { path: 'rtgs', component: RtgsTransactionComponent },
  { path: 'neft', component: NeftTransactionComponent },
  { path:'sessionExpired', component: SessionExpiredComponent },
  { path: 'userProfile/:id', component: UserProfileComponent },
  { path: 'account-summary/:FromAccountNumber', component: AccountSummaryComponent },
  { path:'user-details', component:UserDetailsComponent },
  { path:'admin-login', component:AdminLoginComponent },
  { path:'getuserdetails/:id', component:GetuserdetailsComponent },
  { path:'postcustomer', component:GetuserdetailsComponent },
  { path:'deleteUserDetails/:id', component:UserDetailsComponent },
  { path:'', redirectTo:'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
