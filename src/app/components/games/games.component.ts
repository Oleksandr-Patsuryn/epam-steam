import {Component, OnInit} from '@angular/core';
import {Games} from "../../service/games.service";
import {GamesService} from "../../service/games.service";
import {CookiesService} from "../../service/cookies.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Games[] = [];
  activeGames: Games[] = [];
  gameTag: Array<string> = ['indie', 'action', 'adventure'];
  activeTags: Array<string> = ['indie', 'action', 'adventure'];
  searchGame: string = '';
  value: number = 1500;

  constructor(private gamesService: GamesService, private cookies: CookiesService) {}

  ngOnInit(): void {
    this.gamesService.getGames().subscribe((games) => {
      this.games = games;
      this.activeGames = games;
    })
  }

  changeValue() {
    this.activeGames = this.games.filter((el) => {
      return el.price <= this.value;
    })
  }

  searchFilter(searchStr: string): void {
    console.log(searchStr);
    if (this.games.length === 0 || searchStr === '') {
      return;
    } else {
      this.activeGames = this.games.filter(game => game.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
    }
  }

  checkboxFilter(event: any){
    if (event.target.checked){
      this.activeTags.push(event.target.value);
    } else {
      this.activeTags.splice(this.activeTags.indexOf(event.target.value), 1);
    }
    return this.activeGames = this.games.filter((el) => {
      if (this.activeTags.includes(el.tag.toLowerCase())) {
        console.log(el);
        return el;
      } else {
        return false;
      }
    })
  }

  buyGame(){
    console.log(this.cookies.getCookie('user_id'));
  }
}
