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
  users: User[] = [];


  constructor(private http: HttpClient) {
  }

  // updateUser(){
  //   return this.http.put(`http://localhost:3000/user/${id}`)
  // }

  getUsers() {
    return this.http.get<User[]>(`http://localhost:3000/users/`)
    // return this.http.get<User[]>('https://testing-heroku-kekw.herokuapp.com/user');
  }

  deleteUser() {
    return this.http.delete<User[]>(`http://localhost:3000/users/1`)
  }

  addUser( username : string) {
    const data = {
      name: username,
      email: 'dome@lob.com'
    }
    return this.http.post<User[]>(`http://localhost:3000/users/`, {data})
  }

}
