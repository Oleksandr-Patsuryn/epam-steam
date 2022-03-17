import {Component} from '@angular/core';
import {GamesService} from "./service/games.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'epam-steam';

  constructor(private gamesService: GamesService) {}

  loadGame(){
    console.log(this.gamesService.createGame().subscribe());
  }
}
