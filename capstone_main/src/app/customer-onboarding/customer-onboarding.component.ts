import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-customer-onboarding',
  templateUrl: './customer-onboarding.component.html',
  styleUrls: ['./customer-onboarding.component.css'],
})
export class CustomerOnboardingComponent {
  formModal: any;
  @ViewChild('f') userForm: NgForm;

  userDetails: any;
  userAddress: any;

  detailsSubmitted = false;

  users = {
    username: '',
    city: '',
    state: '',
    address: '',
    zip: '',
  };

  constructor(private userService: UserService) {
    // this.getUsersDetails();
  }

  getUsersDetails() {
   this.userService.getUsers().subscribe(
      (resp) => {
        console.log(resp);
        this.userDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.detailsSubmitted = true;
    this.users.username = this.userForm.value.firstname;
    this.users.city = this.userForm.value.city.toLowerCase();
    this.users.state = this.userForm.value.state;
    this.users.address = this.userForm.value.address;
    this.users.zip = this.userForm.value.zip;
    alert('submitted!');
    this.userForm.reset();
  }

  getByAddress() {
    this.userService.getAddressByName(this.users.username.toLowerCase()).subscribe(
      (resp) => {
        console.log(resp + '...from address');
        this.userAddress = resp;
      },
      (err) => {
        console.log(err);
      }
    );
    this.detailsSubmitted = false;
  }
}
