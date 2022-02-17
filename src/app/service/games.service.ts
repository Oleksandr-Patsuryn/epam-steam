import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export interface Games {
  name: string,
  description: string,
  price: number,
  id: number
}

@Injectable()
export class GamesService {
  constructor(private http: HttpClient) {
  }

  createGame() {
    const data = {
      name: 'The Witcher 3 Wild Hunt',
      description: 'As war rages on throughout the Northern Realms, you take on the greatest contract of ' +
        'your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.',
      price: 540
    }
    return this.http.post('https://testing-heroku-kekw.herokuapp.com/games', data)
  }

  getGames() {
    return this.http.get<Games[]>('https://testing-heroku-kekw.herokuapp.com/games');
  }
}
