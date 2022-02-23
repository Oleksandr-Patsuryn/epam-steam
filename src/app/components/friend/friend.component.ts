import {Component, OnInit} from '@angular/core';
import {User, UsersService} from "../../service/users.service";

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  users:  User[] = [];
  searchUser: string = '';

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    })
  }

}
