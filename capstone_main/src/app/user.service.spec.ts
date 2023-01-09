import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { UserService } from './user.service';
import { USERS } from './user-data';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should retrive all users', () => {
    const testUsers:any = [
      {
        name:'sai',
        email:'sai@gmail.com',
        creditScore:120,
        address:{
            city:'Hyderabad',
            state:'Telangana'
        }

    },
    {
      name:'adapa',
      email:'adapa@gmail.com',
      creditScore:150,
      address:{
          city:'Amaravathi',
          state:'Andhra Pradesh'
      }
  }
    ];
    service.getUsers().subscribe(
      (users) => {
        expect(testUsers).toBe(users, 'should check mocked data');
      }
    );
    const req = httpTestingController.expectOne(service.API+'/users');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toEqual("GET");

    req.flush(testUsers);

    httpTestingController.verify();

  });
  it('should retrive user with name',() => {
    const testUsers:any =
      {
        name:'sai',
        email:'sai@gmail.com',
        creditScore:120,
        address:{
            city:'Hyderabad',
            state:'Telangana'
        }
    };
    service.getUserByName('sai').subscribe(
      (user) =>{
        expect(testUsers).toEqual(user,'should check mocked data');
        expect(testUsers.name).toEqual('sai');
      }
    );
    const req = httpTestingController.expectOne(service.API+'/usersName'+'/sai');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toEqual("GET");

    req.flush(testUsers);

    httpTestingController.verify();
  });
});
