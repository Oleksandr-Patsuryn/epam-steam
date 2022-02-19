import { Injectable } from '@angular/core';
import {from} from 'rxjs';
import {HttpClient} from "@angular/common/http";

export interface Friend {
  id: number;
  nickName: string;
  email: string;
  isFriend: boolean
}

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }

  public getFriend() {
   return this.http.get('https://testing-heroku-kekw.herokuapp.com/user')
  }

  // public searchFriendByName(searchedName: string, friends: Friend[]): Friend[] {
  //   const searchedFriends: Friend[] = []
  //
  //   from(friends)
  //     .subscribe(friend => {
  //       if (friend.nickName.toLowerCase().includes(searchedName.toLowerCase())) {
  //         searchedFriends.push(friend)
  //       }
  //     })
  //   return searchedFriends
  // }
}


