import { Component, OnInit } from '@angular/core';
import { CookiesService } from 'src/app/service/cookies.service';
import {AddUserService, User} from 'src/app/service/add-user-service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  username!: string;
  email!: string;
  age!: number;
  Obj!: User;

  constructor(private CookiesService: CookiesService, private getUserService: AddUserService,private http: HttpClient) { }
  ngOnInit() {
    let UserId = this.CookiesService.getCookie('user_id');
    console.log(UserId);
    this.getUserService
        .getData()
        .subscribe((response) => {
          for (let key in response) {
            if (Number(UserId) === response[key].id) {
              this.Obj = response[key];
              this.username = response[key].username;
              this.email = response[key].email;
              this.age = response[key].age;
              break;
            }
          }
        });
        return this.Obj;
  }
  onSubmit() {
    if (this.email == undefined || this.username == undefined || this.age == undefined) {
      alert("Please, fill all fields!")
      console.log(this.email)
    } else if (this.email == '' || this.username == ''){
      alert("Please, fill all fields!")
    } else if (!this.email.match('@')){
      alert("This email is incorrect!")
    } else {
        this.getUserService.editUser(this.Obj, this.username, this.age)
    }
  };
}
