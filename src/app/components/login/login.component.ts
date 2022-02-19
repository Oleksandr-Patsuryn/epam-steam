import { Component, OnInit } from '@angular/core';
import { AddUserService } from 'src/app/add-user-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private getUserService: AddUserService) {}

  ngOnInit(): void {
  }
  
  onSubmit() {
    if(this.email == undefined || this.password == undefined) {
      alert("Please, fill all fields!")
    } else if (this.email == '' || this.password == ''){
      alert("Please, fill all fields!")
    } else if (!this.email.match('@')){
      alert("This email is incorrect!")
    }
      else {
        this.getUserService
        .getData()
        .subscribe((response) => {
          //console.log(response)
          
          for (let key in response) {
            console.log(response);
          }
        })
        const user = {
          email: this.email,
          password: this.password
        }
    }
  };
}
