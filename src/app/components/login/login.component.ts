import { Component, OnInit } from '@angular/core';
import { AddUserService } from 'src/app/add-user-service'
import { CookiesService } from 'src/app/cookies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private getUserService: AddUserService, private CookiesService: CookiesService) {}

  ngOnInit(): void {
  }
  
  onSubmit() {
    const user = {
      email: this.email,
      password: this.password
    }
    let flag:boolean = false;
    let id:number = 0;
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
          for (let key in response) {
            if (user.email === response[key].email && user.password === response[key].password) {
              flag = true;
              id = response[key].id;
            }
          }
          if (flag === true) {
            //перехід на сторінку games
            this.CookiesService.setCookie('user_id',String(id), 15);
          } else {
            alert("Your credentials are incorrect!")
          }
          console.log(this.CookiesService.getCookie('user_id'));
        })
    }
  };
}
