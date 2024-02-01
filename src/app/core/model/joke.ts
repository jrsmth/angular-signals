/**
 * Joke Model Object
 */
export class Joke {
  id: number = 0;
  question: string = "";
  answer: string = "";

  convert(joke: any): Joke {
    this.id = joke.id;
    this.question = joke.question;
    this.answer = joke.answer;

    return this;
  }

}
