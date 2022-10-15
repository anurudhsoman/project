import { NgModule, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { RouterModule,Routes } from '@angular/router';




const appRoute:Routes=[

  { path:'signin',component:SigninComponent},
  {path:'',component:SigninComponent},
  {path:'register',component:RegisterComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
