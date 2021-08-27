import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { style, transition, trigger,state,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService],
  animations: [
    trigger('animation-form-login', [
      state('created', style({
        opacity: 1
      })),
      // 0 void ---- X ----------------------------------X---X--X--------------------X criado 1.5s///
      transition('void => created', [
        style({opacity: 0, transform: 'translate(-50px, 0px'}),
        animate('3s', keyframes([
          style({offset:0.30, opacity:1, transform: 'translateX(0)' }),
          style({offset:0.86, opacity:1, transform: 'translateX(0)' }),
        ]))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  public stateFormLogin:string = 'created';

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
