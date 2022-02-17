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
    if(this.email == undefined || this.password == undefined || this.password2 == undefined) {
      alert("Please, fill all fields!")
    } else if (this.email == '' || this.password == '' || this.password2 == ''){
      alert("Please, fill all fields!")
    } else if (!this.email.match('@')){
      alert("This email is incorrect!")
    } else if(this.password !== this.password2) {
      alert('Please, confirm your password!')
    }
      else {
      const user = {
        email: this.email,
        password: this.password
      }
      console.log(user);
    }
  };

}
