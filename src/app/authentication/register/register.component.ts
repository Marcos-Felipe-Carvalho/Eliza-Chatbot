import { FormValidations } from './../../shared/form/form-validations';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
