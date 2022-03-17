import {Component, OnInit} from '@angular/core';
import {User, AddUserService} from "../../service/add-user-service";

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  users: User[] = [];
  searchUser: string = '';
  username: string = '';

  constructor(private userService: AddUserService) {
  }

  ngOnInit(): void {
    this.userService.getData().subscribe((users) => {
      this.users = users;
    })
  }
}
