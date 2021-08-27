import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication.component';
import { MsgErrorComponent } from './../shared/form/msg-error/msg-error.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    MsgErrorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
  ],
  exports:[ 
    AuthenticationComponent,
  ]
})
export class AuthenticationModule { }
