import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-credit-check',
  templateUrl: './credit-check.component.html',
  styleUrls: ['./credit-check.component.css']
})
export class CreditCheckComponent {
  @ViewChild('f') userForm: NgForm;

  usercredit:any;

  checkSubmitted = false;
  createAccount = false;
 
  userCheck = {
    username:'',
  }
  constructor(private service:UserService){

  }

  getCreditDetails(){
    this.service.getUserByName(this.userCheck.username.toLowerCase()).subscribe(
      (resp) => {
        console.log(resp);
        this.usercredit = resp;
      },
      (err)=> {
        console.log(err);
      }
    );
  }

  onSubmit(f:NgForm){
    this.checkSubmitted = true;
  this.userCheck.username = this.userForm.value.username;
  if(this.checkSubmitted){
    this.getCreditDetails();
  }
  }
  onAccountCreate(){
   this.createAccount = true;
  }
  
}
