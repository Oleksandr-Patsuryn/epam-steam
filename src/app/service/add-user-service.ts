import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface User {
  email: string,
  password: string,
  username: string,
  friends: Array<number>,
  favoriteGames: Array<number>,
  age: number,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http: HttpClient) {
  }

  addUser(email: string, password: string, username: string) {
    const data = {
      email: email,
      password: password,
      username: username,
    }
    return this.http.post('https://testing-heroku-kekw.herokuapp.com/user', data)
  }

  getData() {
    return this.http.get<User[]>('https://testing-heroku-kekw.herokuapp.com/user')
  }

  editUser(user: User, username: string, age: number) {
    user.username = username;
    user.age = age;
    console.log(user);
    return this.http.put<User>(`https://testing-heroku-kekw.herokuapp.com/user/${user.id}`, user)
      .subscribe(data => console.log(data));
  }
}
