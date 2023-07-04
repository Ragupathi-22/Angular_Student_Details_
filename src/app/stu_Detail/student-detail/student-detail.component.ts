import {Component, OnChanges, OnInit, DoCheck, SimpleChanges} from '@angular/core';
import { Router} from "@angular/router";
import{ ApiService} from "../../Services/api.service";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],

})
export class StudentDetailComponent implements OnInit,OnChanges,DoCheck{
   constructor(private  route:Router,private apiservice:ApiService,private auth:AuthService) {
   }

   allData:any='';
   flag:boolean=true;
   count:any=1;
  total:any;
  p: any;

  public numberArray:any;

  ngOnInit(){

  //getdetail
     this.apiservice.getStudents().subscribe((res)=>{
       this.allData=res;
       this.total=res.length;

       this.numberArray = Array.from({ length: res.length }, (_, index) => index + 1);
       console.log(this.numberArray)
     },error => {
       console.error(error)});

}
ngOnChanges(changes: SimpleChanges) {

  // this.apiservice.getStudents().subscribe((res)=>{
  //   this.allData=res;
  // },error => {
  //   console.error(error)});

}
ngDoCheck(){
  //getdetail
  this.apiservice.getStudents().subscribe((res)=>{
    this.allData=res;
  },error => {
    console.error(error)});

}


   add(){
     this.route.navigateByUrl('add');

     //getdetail
     this.apiservice.getStudents().subscribe((res)=>{
       this.allData=res;
     },error => {
       console.error(error)});
   }

  onEdit(data:any){

    const values={
      id:data.id,
      name:data.name,
      gender:data.gender,
      email:data.email,
      phone: data.phone
    }

  this.route.navigate(['/edit',values]);

  }
  onDelet(d:any){
      //delete details
      this.apiservice.deleteData(d).subscribe(
        (res) => {
          console.log("response",res);
          console.log('Student deleted successfully.');

          this.apiservice.getStudents().subscribe((res)=>{
            this.allData=res;
          },error => {
            console.error(error)});

        },
        (error) => {
          console.error('Error deleting student from angular:', error);
          // Log the complete error response
          // console.log(error.error);
          console.log(error.headers);
        }
      );
    }

  logout(){
  this.auth.logout();
  this.route.navigateByUrl('/login')
  }

}
