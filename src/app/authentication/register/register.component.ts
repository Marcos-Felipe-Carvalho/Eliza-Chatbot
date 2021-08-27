import { FormValidations } from './../../shared/form/form-validations';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl,Validators } from '@angular/forms';
import { style, transition, trigger,state,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('animation-form-register', [
      state('created', style({
        opacity: 1
      })),
      // 0 void ---- X ----------------------------------X---X--X--------------------X criado 1.5s///
      transition('void => created', [
        style({opacity: 0, transform: 'translate(50px, 0px'}),
        animate('3s', keyframes([
          style({offset:0.30, opacity:1, transform: 'translateX(0)' }),
          style({offset:0.86, opacity:1, transform: 'translateX(0)' }),
        ]))
      ])
    ])
  ]
})
export class RegisterComponent implements OnInit {
  public stateFormRegister:string = 'created';

  public formRegister:FormGroup = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required, Validators.minLength(8), /*FormValidations.requiredMin('password',8)*/]),
    confirmPassword: new FormControl('', [FormValidations.equalsTo('password'), Validators.required])
  })

  constructor() { }

  onSubmit(){
    /*console.log(this.formRegister.get('confirmPassword').value)
    console.log(this.formRegister.get('password').value)
    console.log(this.formRegister.get('password'))*/
  }

  ngOnInit(): void {
  }

}
