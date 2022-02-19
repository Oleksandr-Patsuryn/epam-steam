import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export interface User {
  email: string,
  password: string,
  username: string,
  friends: Array<number>,
  favoriteGames: Array<number>,
  id: number
}

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
  }

  // updateUser(){
  //   return this.http.put(`http://localhost:3000/user/${id}`)
  // }

  getUsers() {
    return this.http.get<User[]>('https://testing-heroku-kekw.herokuapp.com/user');
  }
}
