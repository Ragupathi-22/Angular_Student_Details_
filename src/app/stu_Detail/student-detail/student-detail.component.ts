import {Component, OnChanges, OnInit, DoCheck, SimpleChanges} from '@angular/core';
import { Router} from "@angular/router";
import{ ApiService} from "../../Services/api.service";
import {AuthService} from "../../Services/auth.service";
import {ExportserviceService} from "../../Service/exportservice.service";


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],

})
export class StudentDetailComponent {
   constructor(private  route:Router,private apiservice:ApiService,private auth:AuthService,private exportservice:ExportserviceService) {
   }

   allData:any='';
   flag:boolean=true;
   count:any=1;
   length:any

  total: number = 0;
  p:any = 1; // Current page number
  itemsPerPage: any = 8;
  searchTerm: string = '';
  sortColumn: string = 'name';
  sortOrder: string = 'asc';

  //Get Data Main Method
  getData(){
     const reqData:any={
      searchTerm:this.searchTerm,sortColumn:this.sortColumn,sortOrder:this.sortOrder
    }
    this.apiservice.getStudents(reqData).subscribe((res)=>{
      this.allData=res;
      this.length=res.length;
      this.total = this.allData.length;
      console.log(this.length)
    },error => {
      console.error(error)});
  }

  ngOnInit(){
   this.getData();
  }


  //Handling Search
  onSearch(){
    this.getData();
  }

  // Method to handle sorting
  onSort(column: string) {
    if (this.sortColumn === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }
    this.getData();

  }

  //Export to Excel
  exportToExcel() {

    const fileName = window.prompt('Enter The File Name :');

    if (fileName != null) {
      this.exportservice.exportToExcel(this.allData, fileName);
    }

  }
add(){
     this.route.navigateByUrl('add');
     //getdetail
    this.getData();
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

          this.getData();
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
