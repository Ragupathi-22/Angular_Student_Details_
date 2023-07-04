import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {StudentDetailComponent} from "../stu_Detail/student-detail/student-detail.component";

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements  CanDeactivate<StudentDetailComponent>{

  constructor() { }
canDeactivate(component: StudentDetailComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean{

  return  false;
  }
}
