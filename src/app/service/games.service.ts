import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export interface Games {
  name: string,
  tag: string,
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
      name: "Dota 2",
      tag: "Action",
      description: "Dota 2 is a multiplayer online battle arena (MOBA) video game in which two teams " +
        "of five players compete to collectively destroy a large structure defended by the opposing team" +
        " known as the \"Ancient\", whilst defending their own.",
      price: 0
    }
    return this.http.post('https://testing-heroku-kekw.herokuapp.com/games', data)
  }

  getGames() {
    return this.http.get<Games[]>('https://testing-heroku-kekw.herokuapp.com/games');
  }
}
