import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FriendsService} from "../../service/friends.service";
import {Friend} from "../../service/friends.service";


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  friends:  any = [];
  addedFriends: any = [];
  searchFriend: string = '';


  constructor(
    private friendService: FriendsService,
  ) { }

  ngOnInit(): void {

  }


  addFriend() {
    this.friendService
      .getFriend()
      .subscribe((friend) => {
        this.friends = friend
        this.addedFriends = friend
      })
  }

}
