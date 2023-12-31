import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterguardService implements CanActivate{

  constructor(private auth:AuthService ,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
     if(this.auth.isAuthendicated()){
       return true;
     }
     else{
       this.router.navigateByUrl('/login');
      return  false
     }

  }
}
