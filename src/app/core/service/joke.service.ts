import { Injectable } from "@angular/core";
import { Joke } from "../model/joke";
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

// Note :: jokes.json has been defined inline to prevent '/assets'-access issues during github pages deploy
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
    "question": "A SQL query goes into a bar, walks up to two tables and asks,",
    "answer": "\"Can I join you?\""
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
    "question": "Software can be fast, reliable and cheap.",
    "answer": "Choose any two."
  },
  {
    "id": 7,
    "question": "How many programmers does it take to change a light bulb?",
    "answer": "None, that’s a hardware problem."
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
    "question": "There are 2 hard problems in computer science:",
    "answer": "Caching, naming, and off-by-1 errors."
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
  },
  {
    "id": 13,
    "question": "When I wrote this code, only me and God knew how it works.",
    "answer": "Now only God knows..."
  },
  {
    "id": 14,
    "question": "Give a man a program, frustrate him for a day.",
    "answer": "Teach a man to program, frustrate him for a lifetime."
  },
  {
    "id": 15,
    "question": "//be nice to the CPU",
    "answer": "Thread_sleep(1);"
  },
  {
    "id": 16,
    "question": "!false",
    "answer": "It’s funny because it’s true."
  },
  {
    "id": 17,
    "question": "99 little bugs in the code, 99 bugs in the code, 1 bug fixed, compile again...",
    "answer": "153 bugs in the code"
  },
  {
    "id": 18,
    "question": "\"Knock, knock\", \"Who’s there?\"",
    "answer": "[very long pause] \"Java.\""
  },
  {
    "id": 19,
    "question": "If you listen to a UNIX shell, can you hear the C?",
    "answer": ""
  },
  {
    "id": 20,
    "question": "Eight bytes walk into a bar. The bartender asks, \"Can I get you anything?\"",
    "answer": "\"Yeah,\" reply the bytes. \"Make us a double.\""
  },
  {
    "id": 21,
    "question": "Hardware (noun): the part of a computer that you can kick.",
    "answer": ""
  },
  {
    "id": 22,
    "question": "Chuck Norris’ first program was kill -9.",
    "answer": ""
  },
  {
    "id": 23,
    "question": "All browsers support hex definitions #chuck #norris for colors black and blue.",
    "answer": ""
  },
  {
    "id": 24,
    "question": "A good programmer looks both ways before crossing a one-way street.",
    "answer": ""
  },
];
