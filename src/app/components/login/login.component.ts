import { Component, OnInit } from '@angular/core';
import { ValidatorService } from 'src/app/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private FormValidator: ValidatorService) {}

  ngOnInit(): void {
  }
  
  onSubmit() {
    const user = {
      email: this.email,
      password: this.password
    }
    console.log(user);
  };
  //User = this.onSubmit()
  //check:boolean = this.FormValidator.checkEmail(this.User.email);
}
