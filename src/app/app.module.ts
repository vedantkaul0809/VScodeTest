import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ForgotIdComponent } from './forgot-id/forgot-id.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
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
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { GetuserdetailsComponent } from './getuserdetails/getuserdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    RegisterComponent,
    HomeComponent,
    ForgotIdComponent,
    ForgotPasswordComponent,
    SetNewPasswordComponent,
    DashboardComponent,
    AccountStatementComponent,
    ChangePasswordComponent,
    AddBeneficiaryComponent,
    ImpsTransactionComponent,
    RtgsTransactionComponent,
    NeftTransactionComponent,
    SessionExpiredComponent,
    UserProfileComponent,
    AccountSummaryComponent,
    AdminLoginComponent,
    UserDetailsComponent,
    GetuserdetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
