import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  private userIsAuthenticated: boolean = false;

  constructor(private router: Router) { }

  public login(email: string, password: string) {
    //this.userIsAuthenticated=true;

    if (email == "aluno@email.com" && password == "aluno2021") {
      this.userIsAuthenticated = true;
      this.router.navigate(['../dashboard']);
    }
  }

  public isAuthenticated(): boolean {
    if(!this.userIsAuthenticated){
      this.router.navigate(['./authentication/login']);
      return this.userIsAuthenticated;
    }
    return this.userIsAuthenticated

  }
}