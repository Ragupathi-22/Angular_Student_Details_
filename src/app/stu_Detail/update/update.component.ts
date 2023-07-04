import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../Services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Editdata} from "../../Services/editdata";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],

})
export class UpdateComponent {
  constructor(private apiservice:ApiService, private router:Router,private activerouter:ActivatedRoute ) {
  }
  id:any;
  name:any;
  gender:any;
  email:any;
  phone:any;

ngOnInit(){

    this.activerouter.paramMap.subscribe((para)=>{
      this.id=para.get('id')
      this.name=para.get('name')
      this.gender=para.get('gender')
      this.email=para.get('email')
      this.phone=para.get('phone')

      this.reactive.controls['name'].setValue(this.name);
      this.reactive.controls['gender'].setValue(this.gender);
      this.reactive.controls['email'].setValue(this.email);
      this.reactive.controls['phone'].setValue(this.phone);

    })

}

  reactive=new FormGroup({
    name:new FormControl(null,Validators.required),
    gender:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.required,Validators.email]),
    phone:new FormControl(null,Validators.required)
  })
  value=this.reactive.controls;

  formvalues:any;

  onEdit(data:any) {

    this.formvalues=data.control.value;
    const dataa = {

      id: this.id,
      name: this.formvalues.name,
      gender: this.formvalues.gender,
      mail: this.formvalues.email,
      phone: this.formvalues.phone
    }

    this.apiservice.updataData(dataa).subscribe((res) => {
      console.log(res);
      console.log("updated successfully...")
    },error => {
      console.log("error in updating")})


    this.router.navigateByUrl('detail');

  }

  close(){
    this.router.navigateByUrl('detail');
  }
}


