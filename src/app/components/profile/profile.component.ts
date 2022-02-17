import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username!: string;
  email!: string;
  age!: number;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.email == undefined || this.username == undefined || this.age == undefined) {
      alert("Please, fill all fields!")
    } else if (this.email == '' || this.username == ''){
      alert("Please, fill all fields!")
    } else if (!this.email.match('@')){
      alert("This email is incorrect!")
    } else {
      const userProfile = {
        email: this.email,
        username: this.username,
        age: this.age,
      }
      console.log(userProfile);
    }
  };
}
