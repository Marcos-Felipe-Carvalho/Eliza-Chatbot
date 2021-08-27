import { AuthGuardService } from './guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './dashboard/courses/courses.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'authentication', component: AuthenticationComponent, children: [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
  ]},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuardService], children:[
    {path: '', component: CoursesComponent},
    {path: 'courses', component: CoursesComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
