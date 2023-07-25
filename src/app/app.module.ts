import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailComponent } from './stu_Detail/student-detail/student-detail.component';
import { AddComponent } from './stu_Detail/add/add.component'
import {RouterModule,Routes} from "@angular/router";
import { HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateComponent } from './stu_Detail/update/update.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';
import { DataTablesModule } from "angular-datatables";
import { NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    AddComponent,
    UpdateComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
