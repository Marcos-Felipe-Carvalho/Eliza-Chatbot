import { AuthenticationService } from './../authentication/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  private isAuthenticated: boolean = true;

  constructor(private authenticationService:AuthenticationService) { }

  canActivate() {
    return this.authenticationService.isAuthenticated();
  }
}
