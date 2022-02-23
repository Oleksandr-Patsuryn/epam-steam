import {Component, OnInit} from '@angular/core';
import {Games} from "../../service/games.service";
import {GamesService} from "../../service/games.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Games[] = [];
  activeGames: Games[] = [];
  searchGame: string = '';
  value: number = 1500;

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService.getGames().subscribe((games) => {
      this.games = games;
      this.activeGames = games;
    })
  }

  changeValue() {
    this.activeGames = this.games.filter((el) => {
      console.log(this.value)
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
}
