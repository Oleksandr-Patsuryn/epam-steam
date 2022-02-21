import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { of, pipe } from 'rxjs';

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
    //.pipe(map((response: Response) => response.json()));
    //return data;

  }
}
