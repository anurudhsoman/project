import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import{HttpClient} from  '@angular/common/http';
import {Router}   from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  signinForm!:FormGroup
  constructor(private formbuilder: FormBuilder, private http:HttpClient, private router:Router) { 



  }

  ngOnInit(): void {this.signinForm=this.formbuilder.group(

      {
      name:[""],
      password:[""]
      })
  }


  signin( )
{

  this.http.get<any>('http://localhost:3000/user').subscribe(res=>{
  const user=res.find((a:any)=>{
    return a.name===this.signinForm.value.name && a.password === this.signinForm.value.password 

  });

if(user) {
    alert("user exist");
    this.signinForm.reset();
}
  });
}
}

