import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CustomerOnboardingComponent } from './customer-onboarding/customer-onboarding.component';
import { CreditCheckComponent } from './credit-check/credit-check.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'onbording', component:CustomerOnboardingComponent},
  {path:'creditCheck', component:CreditCheckComponent},
  {path:'help', component:CreateAccountComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerOnboardingComponent,
    CreditCheckComponent,
    CreateAccountComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
