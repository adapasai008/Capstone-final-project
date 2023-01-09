import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  API = 'http://localhost:8080'

  getUsers(){
    return this.http.get(this.API +'/users')
   }


   getAddressByName(name){
    return this.http.get(this.API + '/address/'+name)
   }

   getUserByName(name){
    return this.http.get(this.API + '/usersName/'+name)
   }
   
}
