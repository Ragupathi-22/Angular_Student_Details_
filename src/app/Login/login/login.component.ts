import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LogserviceService} from "../logservice.service";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private  logservice:LogserviceService,private router:Router,private auth:AuthService) {
  }

  reactiveform=new FormGroup(
    {
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })

  value=this.reactiveform.controls;
  formvalue:any;
  response:any;
  error:any;

  onlogin(data:any){
      this.formvalue=data.control.value;
      const formdata=new FormData();
      formdata.append('email',this.formvalue.email);
      formdata.append('password',this.formvalue.password);

       this.logservice.login(formdata).subscribe((res)=>{
         console.log(res)
         this.response=res;
         if(this.response.success){
            this.auth.login();
            this.router.navigateByUrl('/detail')
         }
         else{
           this.error=this.response.message;
         }

       })

  }

}
