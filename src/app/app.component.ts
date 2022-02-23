import {Component, OnInit} from '@angular/core';
import {UsersService} from "./service/users.service";
import {GamesService} from "./service/games.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'epam-steam';

  users = [];

  constructor(private usersService: UsersService, private gamesService: GamesService) {
  }

  ngOnInit(): void {

  }

  loadUsers() {
    this.usersService.getUsers().subscribe((users) => {
        console.log(users);
      }
    )
  }

  addGames() {
    this.gamesService.createGame().subscribe((games) => {
      console.log(games);
    })
  }
}
