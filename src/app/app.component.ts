import {Component, OnInit} from '@angular/core';
import {UsersService} from "./components/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'epam-steam';

  users = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {

  }
/*
  loadUsers() {
    this.usersService.getUsers().subscribe((users) => {
        console.log(users);
      }
    )
  }
  */
}
