import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogserviceService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost/studentdetail/userlogin/";

  addData(data:any){
    return this.http.post(this.baseUrl+'addUser.php',data);
  }

  login(data:any){
    return this.http.post(this.baseUrl+'login.php',data);

  }
}
