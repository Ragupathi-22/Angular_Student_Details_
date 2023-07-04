import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import{AuthService} from "../Services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CanactivateService {

  constructor(private  auth:AuthService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(!this.auth.isAuthendicated()){
      return true;
    }
    else{
      return false;
    }
  }
}
