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
          //
          
          for (let key in response) {
            //console.log(response[key])
            if (user.email === response[key].email && user.password === response[key].password) {
              flag = true;
            }
          }
          if (flag === true) {
            //перехід на сторінку games
            console.log("ITS OK")
            this.CookiesService.setCookie('user_id','1',15);
            //document.cookie = "user=John";
            console.log("ITS OK AGAIN")
          } else {
            alert("Your credentials are incorrect!")
          }
          console.log(this.CookiesService.getCookie('user_id'));
          
            
        })
    }
  };
}
