import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {LogserviceService} from "../logservice.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private  logservice:LogserviceService,private router:Router) {
  }
  reactiveform = new FormGroup(
    {
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null, [Validators.required, Validators.minLength(8)]),
      conpass:new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  value=this.reactiveform.controls

  formvalue: any;
  passmissmatch=false;
  response:any;
  registered=false
  eboolean=false;
  error:any;
  onSubmit(data: any) {
    this.formvalue = data.control.value;
    if(this.formvalue.password!=this.formvalue.conpass){
       this.passmissmatch=true;
    }
    else{
      this.passmissmatch=false;
      const Formdata = new FormData();
      Formdata.append('name', this.formvalue.name)
      Formdata.append('email', this.formvalue.email);
      Formdata.append('password', this.formvalue.password);
      Formdata.append('conpass', this.formvalue.conpass);

      this.logservice.addData(Formdata).subscribe((res)=>{
        console.log(res)
        this.response=res;
        if(this.response.success){
          this.eboolean=false;
          this.registered=true;
          // this.router.navigateByUrl('/login');

        }else {
          this.registered=false;
          this.eboolean=true;
          this.error=this.response.message;
          console.log(this.response.message);
        }

      })

    }
  }
  cancel(){
    this.router.navigateByUrl('/login');
  }
}
