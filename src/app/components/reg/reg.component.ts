import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  email!: string;
  password!: string;
  password2!: string;

  constructor() {}

  ngOnInit(): void {
  }
  
  onSubmit() {
    if(this.password === this.password2) {
      const user = {
        email: this.email,
        password: this.password
      }
      console.log(user);
    }
    else {
      alert("Please, enter correct password!")
    }
  };

}
