import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {students} from "./Students";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost/studentdetail/";


  //get details
  getStudents(data:any){
    return this.http.post<students[]>(this.baseUrl+'getDetail.php',data).pipe((res)=>{
      return res;
    });
  }

  //adding the data
  addData(data:any){
    return this.http.post(this.baseUrl+'addDetail.php',data);
  }


  //update
  updataData(data:any){
    return this.http.post<any>(this.baseUrl+'update.php',data);
  }

  //delete data
  deleteData(id: any): Observable<any> {
    const url = `${this.baseUrl}delete.php`;
    const params = new HttpParams().set('id', id);
    return this.http.delete(url, { params });
  }
}
