import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface User {
  email: string,
  password: string,
  username: string,
  friends: Array<number>,
  favoriteGames: Array<number>,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http: HttpClient) { }

  addUser(email:string, password:string, username:string) {
    const data = {
      email: email,
      password: password,
      username: username,
    }
    return this.http.post('http://localhost:3000/users', data)
  }

  getData(){
    return this.http.get<User[]>('http://localhost:3000/users')
  }
  
  editUser(user:any, username: string, age: number) {
    user.username = username;
    user.age = age;
    console.log(user);
    return this.http.put<any>(`http://localhost:3000/users/${user.id}`, user).subscribe(data=>console.log(data));

  }
}
