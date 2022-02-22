import { Component, OnInit } from '@angular/core';
import { CookiesService } from 'src/app/cookies.service';
import { AddUserService } from 'src/app/add-user-service';
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
  Obj!: Object;

  
  constructor(private CookiesService: CookiesService, private getUserService: AddUserService,private http: HttpClient) { }
  //UserId = this.CookiesService.getCookie('user_id');
  ngOnInit() {
    let UserId = this.CookiesService.getCookie('user_id');
    console.log(UserId);
    this.getUserService
        .getData()
        .subscribe((response) => {
          for (let key in response) {
            if (Number(UserId) === response[key].id) {
              this.Obj = response[key];
              this.email = response[key].email;
              console.log(this.email);
              console.log(this.Obj);
              break;
            }
          }
        });
        console.log(this.Obj);
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
        const userProfile = {
          email: this.email,
          username: this.username,
          age: this.age,
          //password: this.Obj['password']
        }
        console.log("///////////////////////");
        console.log(this.Obj);
       // const userObj = this.Obj;
        //console.log(userObj.id)
        //console.log(this.username);
        this.getUserService.editUser(this.Obj, this.username, this.age)
        //this.Objusername = this.username;
        //this.http.put<any>(`http://localhost:3000/users/3`, this.Obj)
    }
  };
}
