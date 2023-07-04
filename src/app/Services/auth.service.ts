import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loggedIn=false;
  login(){
    this.loggedIn=true;
  }
  logout(){
    this.loggedIn=false;
  }
  isAuthendicated(){
    return this.loggedIn;
  }

}
