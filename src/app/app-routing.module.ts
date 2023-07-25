import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentDetailComponent} from "./stu_Detail/student-detail/student-detail.component";
import {AddComponent} from "./stu_Detail/add/add.component";
import {UpdateComponent} from "./stu_Detail/update/update.component";
import {LoginComponent} from "./Login/login/login.component";
import {RegisterComponent} from "./Login/register/register.component";
import {RouterguardService} from "./Services/routerguard.service";
import {CanDeactivate} from "@angular/router";
import {CanDeactivateService} from "./Service/can-deactivate.service";


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'detail',component:StudentDetailComponent},
  {path:'add',component:AddComponent,canActivate:[RouterguardService]},
  {path:'edit',component:UpdateComponent,canActivate:[RouterguardService]},
];
// canActivate:[RouterguardService]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
