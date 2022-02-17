import {Pipe, PipeTransform} from "@angular/core";
import {Games} from "../service/games.service";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(games: Games[], searchStr: string) {
    if (games.length === 0 || searchStr === ''){
      return games;
    }

    return games.filter(game => game.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }
}
