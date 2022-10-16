import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from  '@angular/forms';
import{HttpClient} from  '@angular/common/http';
import {Router}   from '@angular/router'
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


Signupform!:FormGroup
constructor( private Formbuilder: FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {  this.Signupform=this.Formbuilder.group(

{
name:[""],
email:[""],
password:[""]
})

}
signup( )
{

  this.http.post<any>('http://localhost:3000/user', this.Signupform.value).subscribe(res =>{
    alert(res);
  });
}
}
 