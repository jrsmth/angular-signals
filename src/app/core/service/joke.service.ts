import { Injectable } from "@angular/core";
import { Joke } from "../model/joke";
import jokes from "../../../assets/jokes.json";
import { random } from "lodash";


@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private readonly total: number;

  constructor() {
    this.total = jokes.length;
    console.log(jokes);
  }

  getRandom(): Joke {
    const randomId = random(1, this.total);
    const randomJoke: any = jokes[randomId - 1];

    return new Joke().convert(randomJoke);
  }

}
