import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get('http://localhost:3000/users');
  }

}
