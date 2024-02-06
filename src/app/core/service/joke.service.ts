import { Injectable } from "@angular/core";
import { Joke } from "../model/joke";
// import jokes from "assets/jokes.json";
import { random } from "lodash";


@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private readonly total: number;

  constructor() {
    this.total = jokes.length;
  }

  getRandom(): Joke {
    const randomId = random(1, this.total);
    const randomJoke: any = jokes[randomId - 1];

    return new Joke().convert(randomJoke);
  }

}

const jokes: any[] = [
{
  "id": 1,
  "question": "Why do programmers always mix up Halloween and Christmas?",
  "answer": "Because Oct 31 == Dec 25"
},
{
  "id": 2,
  "question": "To understand what recursion is, you must first understand recursion.",
  "answer": ""
},
{
  "id": 3,
  "question": "A SQL query goes into a bar, walks up to two tables and asks, “Can I join you?",
  "answer": ""
},
{
  "id": 4,
  "question": "Why are Assembly programmers always soaking wet?",
  "answer": "They work below C-level."
},
{
  "id": 5,
  "question": "Why do Java programmers have to wear glasses?",
  "answer": "Because they don’t C#."
},
{
  "id": 6,
  "question": "An SQL query goes into a bar, walks up to two tables, and asks, “Can I join you?”",
  "answer": ""
},
{
  "id": 7,
  "question": "An SQL query goes into a bar, walks up to two tables, and asks, “Can I join you?”",
  "answer": ""
},
{
  "id": 8,
  "question": "What’s the object-oriented way to become wealthy?",
  "answer": "Inheritance."
},
{
  "id": 9,
  "question": "ASCII stupid question, get a stupid ANSI.",
  "answer": ""
},
{
  "id": 10,
  "question": "There are 2 hard problems in computer science: caching, naming, and off-by-1 errors.",
  "answer": ""
},
{
  "id": 11,
  "question": "What’s the best thing about UDP jokes?",
  "answer": "I don’t care if you get them."
},
{
  "id": 12,
  "question": "What’s the best part about TCP jokes?",
  "answer": "I get to keep telling them until you get them."
}
];
