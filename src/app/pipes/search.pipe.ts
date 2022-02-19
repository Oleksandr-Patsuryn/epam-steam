import {Pipe, PipeTransform} from "@angular/core";
import {User} from "../service/users.service";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(users: User[], searchStr: string) {
    if (users.length === 0 || searchStr === ''){
      return users;
    }

    return users.filter(user => user.username.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }
}
