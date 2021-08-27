import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  //providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  
  public formLogin:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required])
  }) 

  constructor(private authentication:AuthenticationService) { }

  ngOnInit(): void {
  }

  authenticate(){
    this.authentication.login(
      this.formLogin.get('email').value,
      this.formLogin.get('password').value
    )
    //console.log(this.authentication.isAuthenticated())
  }


}
