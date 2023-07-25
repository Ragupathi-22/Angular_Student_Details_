import { Component } from '@angular/core';
import { Router} from "@angular/router";
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {ApiService} from "../../Services/api.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  response:any;
  constructor(private router:Router,private  apiservice:ApiService) {
  }


reactiveform=new FormGroup({
name:new FormControl(null,Validators.required),
gender:new FormControl(null,Validators.required),
  email:new FormControl(null,[Validators.required,Validators.email]),
  phone:new FormControl(null,Validators.required)
})
  value=this.reactiveform.controls;


  formvalue:any;

  onSubmit(data:any){
    this.formvalue=data.control.value;
    const Formdata=new FormData();
    Formdata.append('name',this.formvalue.name)
    Formdata.append('gender',this.formvalue.gender);
    Formdata.append('email',this.formvalue.email);
    Formdata.append('phone',this.formvalue.phone);


    this.apiservice.  addData(Formdata).subscribe((res)=>{
      console.log(res);
      this.response=res;
      console.log(this.response.success);
    });


    this.router.navigateByUrl('detail');

  }

  close(){
    this.router.navigateByUrl('detail');

  }

}
