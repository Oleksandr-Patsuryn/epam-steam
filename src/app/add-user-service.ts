import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { of, pipe } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http: HttpClient) { }

  addUser(email:string, password:string) {
    const data = {
      email: email,
      password: password,
    }
    return this.http.post('http://localhost:3000/users', data)
  }

  getData(){
    return this.http.get('http://localhost:3000/users')
    //.pipe(map((response: Response) => response.json()));
    //return data;

  }
}
