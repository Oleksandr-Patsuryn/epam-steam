import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  public deleteBtnClass = 'delete-btn';
  public addBtnClass = 'add-btn';
  public friendShow = 'friend-list-box'
  public deleteFriend = 'friend-delete'
  public ShowFriend = true

  constructor() {
  }
  @Input() name: string = "";
  @Input() friend: object| undefined;


  ngOnInit(): void {
  }

  removeFriend(){
    this.friendShow = this.deleteFriend
  }

}
